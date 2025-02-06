---
title: "The Case of the Vanishing Pages: Debugging an Elusive React Bug"
date: 2025-02-05 20:13:00
permalink: /the-case-of-vanishing-pages/
category: Post mortem
description: ""
lang: en
---

A good friend of mine had a weird problem that he was not able to resolve when deploying its App.
He asked me to be its [rubber duck](https://www.wikiwand.com/en/articles/Rubber_duck_debugging) but the problem was not easy to fix. Breaking in production, even though it worked perfectly everywhere else. This is the story of how a seemingly random bug became a debugging adventure.

## The bug

When updating a React Single Page Application (SPA) in production, some pages mysteriously stopped working.  The problem resurfaced sporadically on different pages after an update even though these pages hadn't even been modified in the latest update.
On screen, the page layout was good, but the page content was not displayed.
This bug affected different pages randomly.

Before calling for help, my friend made a lot of debugging and tests and was able to give some context:
- **Environment inconsistencies**: The same app build failed in production but worked flawlessly in other environments (testing, staging).
- **Domain-specific behavior**: Hosting the production build on a different domain resolved the issue.
- **Random page errors**: Affected pages displayed proper layouts, but their content failed to load. The affected page would change from one deployment to another.

>[!CLUE_UNLOCKED]
>There is something specific to the production environment that causes the issue.

## Investigating the Problem

The app is an SPA React app, meaning it’s essentially a static `index.html` file that loads JavaScript (JS) and CSS resources.
On the malfunctioning page, the following error appeared on the console:

`Unexpected SyntaxError: expected expression, got '<'`  for the `PlayerRecordPage.ded3f4ef.chunk.js` file.

This error generally means that the browser was not able to decode this specific javascript file.

First thing here, what is a chunk? Why do we have javascript file for a page?

The app is using [Create React App](https://create-react-app.dev/), which support [code splitting](https://create-react-app.dev/docs/code-splitting/).

>[!QUOTE]
> Instead of downloading the entire app before users can use it, code splitting allows you to split your code into small chunks which you can then load on demand.

The app is configured so that each route have its own javascript file on the build. When the user goes to a page, the app will load the corresponding javascript file.
This explains why the website is running ok but that, on this specific page, we can see the layout but not the page content. The app is unable to run the page code due to the error.

![App layout](/images/the-case-of-vanishing-pages/post-mortem-layout.excalidraw.png)

Create React App is using [Webpack](https://webpack.js.org/) under the hood to build the React application.

*Small side note: Create React app was for a long time the way to go to create a new react app. It is now [deprecated](https://github.com/facebook/create-react-app) in favour of [React frameworks](https://react.dev/learn/start-a-new-react-project).*

```javascript
import loadable from '@loadable/component'

const routes = [
  {
    name: 'PLAYER_RECORD',
    path: '/players/:identifier/record',
    handler: loadable(() =>
      import(/*  webpackChunkName: "PlayerRecordPage" */ '../pages/playerRecord')
    )
  }
]
```

This means that the build will create one file per lazy-imported file.
The filename of the file follow the format format `[number].[hash].js`.

The `number` is by default an incremented index.
We can use Webpack [Magic Comments](https://webpack.js.org/api/module-methods/#magic-comments) to give configure the lazy import.
`webpackChunkName`  allow us to give a name for our chunk. Instead of having a random number, we will have `PlayerRecoderPage`. In our build, the generated name was `PlayerRecordPage.ded3f4ef.chunk.js`.
It allow us to see directly that the console error is for the file that handled the code of the page that was not working. It would have been more difficult to understand that if the file was named `4.ded3f4ef.chunk.js`.

This `hash` in the file name enables long term caching techniques.
It is a unique hash generated based on the contents of the file.  If the contents of the file changes in a subsequent build, the hash will be different. If the file didn't changed the hash remains the same. That way the browser do not need to re-downloading it.

>[!CLUE_UNLOCKED]
>Only some specific pages have the bug. It may be linked to a chunk change (the source code file changed since the last build).

But the code for this page has not changed since the latest deployment. Which means that the chunk should be the same.
There is a catch here: the code splitting technique will create a specific javascript file for the page code. It will integrates all the required code for this page to run. Even if the react code for the page itself didn't changed, the code on a file imported on this page could have changed. For example a generic Button component `app/components/Button` that would have been changed.
Indeed, we saw that a generic component code had changed.

>[!CLUE_UNLOCKED]
>The build file `hash` had changed since the latest deployment.

We know more about how the build is made and the routes are displayed.
Let's go back to our console error and take a further look.  Why the browser was not able to decode the javascript file ?
On the Network Dev Tool, we can see that the javascript file is considered as being a document file. This is weird. It should be considered as a script.

![Network content](/images/the-case-of-vanishing-pages/network-content.png)

Looking at the content of the file loaded by the browser we see that the problematic javascript file content is HTML and not javascript code.

![Console preview "You need to enable JavaScript to run this app"](/images/the-case-of-vanishing-pages/console-preview.png)

![Console source - content is HTML](/images/the-case-of-vanishing-pages/console-source.png)

This is not any random HTML, but the html of our `index.html` file of our App.
This means that the server is providing the content of the `index.html` file when we request this specific javascript file.

>[!QUESTION]
>Why would our server serve the HTML file content?

Let's take a look at it.
The App is served through an Apache server with the following configuration

```
# Simplified example
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteRule ^ index.html [L]
</IfModule>
```

This configuration redirects any request for a non-existent file to `index.html`, which is a common practice for SPAs.  Since SPAs use their own client-side router to handle navigation, all URLs that don’t correspond to existing files are routed to `index.html` to allow the App to manage the requested path.

If we are served with the `index.html` file content, this means that Apache didn't find the file we requested and fallback to `index.html`.

>[!CLUE_UNLOCKED]
>The file does not exist on the server when requested

/ TODO: ls console example

We can see that the file exists.

The server think that the file does not exist but it exists. Which is really weird.
Is it an Apache bug? Not likely. A file system bug? Come on!

Remember when we said the same build of the App had no errors if on another domain? Or in testing?

>[!QUESTION]
>What are the difference between the production environment and the others? 

*Cloudflare.*

**Cloudflare** is a content delivery network (CDN) and security platform designed to optimize website performance, enhance security, and improve scalability.
It works by caching server responses, distributing them across its global network, and serving content to users from the nearest server to reduce latency.


![Architecture diagram](/images/the-case-of-vanishing-pages/post-mortem-archi.excalidraw.png)

As Phil Karlton [said](https://martinfowler.com/bliki/TwoHardThings.html), _there are only two hard things in Computer Science: cache invalidation and naming things_.

We have a weird error and cache is involved. It must come from the cache.

>[!CLUE_UNLOCKED]
>The cache may be involved

Cloudflare is caching the response. If the Apache server mistakenly served `index.html` file, Cloudflare cached it as such, treating the `.js` file as HTML. Subsequent requests for that `.js` file would load the cached `index.html` content instead of the correct JavaScript file.

If we request the file from the server itself without going through Cloudflare ?

```bash
> curl http://localhost:4000/static/js/PlayerRecordPage.296bf010.chunk.js
(this["webpackJsonp-website"] = this["webpackJsonp-website"] || []).push([[29], {
    1003: function(e, a, t) {
...
```

Bingo! We have javascript code, not HTML.

So here Cloudflare has the index.html file in cache, while the file exists on the server.

We have a cache problem.

What happens if we clear this Cloudflare cache? The page works again! The javascript file contains javascript not HTML.

#### Confirming the Issue
- When bypassing Cloudflare and requesting the javascript file directly from the server, it returned the correct content.
- Clearing Cloudflare's cache resolved the issue.

Cloudflare cache what we give to it. This means that at some point, the Apache server gave an html file content instead of the javascript file. And Cloudflare cached it.

So Cloudflare is not the culprit. In this case, Cloudflare's caching capabilities inadvertently amplified the issue. Apache server served incorrect content, Cloudflare cached it and delivered the incorrect response to subsequent users.

>[!CLUE_UNLOCKED]
>The requested file does not exist when requested the first time but existed after

Let's resume our current knowledge

![Resuming the bug](/images/the-case-of-vanishing-pages/post-mortem-bug-resume.excalidraw.png)

>[!QUESTION]
> How can we request the javascript file while it does not exist?

Let's see how the javascript file is requested.

In order request the correct javascript file, the App have a javascript code in the `index.html` that maps the lazy-loaded route with its corresponding file name on the server. This way, we can match the route name with the file that contains its code.

```javascript
// this is a simplified example
// list the corresponding webpackChunkName for the file number
{
    46: "LoginPage",
    47: "PlayerRecordPage",
}

// list the hash for the file number
{
    46: "44903d7a",
    47: "296bf010",
}
```

Using this map, the App can build the file name url `/static/js/PlayerRecordPage.296bf010.chunk.js`

We know that this map is valid because we saw that the file exists on the server. And there is little chances that create-react-app has a bug.

This means that at some point, the `index.html` file gave us a correct filename, but the file didn't exists on the server.

Weird right?

How the `index.html` file can refer a file that does not exist according to Apache?

It would mean that it refers to the file while it does not exist *yet*.
It makes sense.  Cloudflare is enabled only for the production environment. We are not able to reproduce the bug on other environment where there is no cache. Which means that at some point the file exists.

>[!CLUE_UNLOCKED]
>This may be related to how the production deployment is made

My first guess was that the production deployment was made using the create-react-app build command.
When we build, it creates a new empty directory build and will create the files on it. The build could generate the `index.html` file before the javascript file.
To confirm this, we would need to dig deep on how create-react-app makes the build.
Before coming to that, let's learn more on how the production deployment is made.

*How does your production deployment works we asked ?*
"We build on the testing server with tests settings to verify that everything works.
Once it is done we build on the staging server with production settings to verify it would not break on production.
Then we move the build directory from the staging server to the production server".

*And how are you moving it?*
"We have a script that rsync the build directory into a directory named `next-deployment-build` on the production server".

*And then what do you do?*
"We go on the production server. We do a backup of our current production directory. Then we rsync the content from the `next-deployment-build` directory into our `production` directory".

Do you see what happens here? *rsync*.

**Rsync** is a file copying tool that synchronizes files and directories between two locations. It transfers only the differences between source and destination, ensuring efficient updates while preserving file permissions, timestamps, and links.

Here an example of a production deployment script using rsync.
```sh
#!/bin/bash

# backup the production directory
rsync -avz \
--progress \
--delete-after \
/var/www/production /var/www/production-backup

# move files to production directory
rsync -avz \
--progress \
--delete-after \
/var/www/next-deployment-build/ /var/www/production
```

So, rsync is copying the files one by one to the production directory.
This means that there is a time window were the new `index.html` file has been copied, but the javascript file has not.
If someone is loading the website in that window, it will serve the new `index.html` file, which will required the javascript file, that has not been copied yet.
The Apache server does not see the file, fallbacks to the `index.html`. Cloudflare cache it as it is, an HTML content.

The next user will have the same `index.html`. The javascript file is now on the production directory because the rsync is finished.
But Cloudflare still serve what it has in its cache, the HTML file. Without Cloudflare cache, a simple refresh of the page would have fixed it. Which would made debugging the issue much more complicated. As we saw, we were not able to reproduce on other environments.

Even if we were able to reproduce the bug by loading the website at the exact time window, the next refresh of the App would have fixed the problem.

On a test server with few users, it was nearly impossible to have the right conditions to reproduce the bug.
While in production, we a lot of users and the cache, the bug was much more prone to occur.


![What is happening](/images/the-case-of-vanishing-pages/post-mortem-explaination-flow.excalidraw.png)

## Why Debugging Was Challenging

1. **Environment Differences**: Cloudflare caching wasn’t enabled in staging or testing environments.
2. **Intermittent Nature**: The issue only occurred when:
   - A new SHA-1 hash was generated for a JavaScript file of the page.
   - A user accessed this specific page during the deployment window.
3. **Caching Amplified the Issue**: Cloudflare’s cache retained the incorrect HTML response, even after the javascript file was available on the server. But it helped us find the root cause of the issue.

So, how do we fix this?

## The Solution: Atomic Deployment

**Atomic deployment** is a deployment strategy designed to minimize downtime and risk by ensuring that changes are applied in a single, seamless operation.
This prevents users from accessing partial deployments and ensures that the site is fully operational with zero downtime.

### 1. Prepare 
The process begins in a staging environment, which is an exact replica of the production environment. 
This ensures that the new build is tested under conditions that closely mimic real-world usage. For example the staging environment should have the same Cloudflare configuration as the production environment.
Testing in a staging environment reduces the risk of unexpected issues when the new version goes live.

### 2. Isolation: we keep the old and new versions seperated

The new version of the application is completely isolated from the live version during the deployment process. 
This isolation ensures that the live application remains unaffected by any changes or potential errors in the new version.
Isolation acts as a safety net, allowing you to test and deploy without disrupting users.

### 3. Switch-over

When you are ready to deploy the new version, you switch over to the new version in a single, quick, atomic operation.

- Rerouting traffic: Directing traffic to a new set of servers hosting the new version.
- Symbolic links: Switching file system links to point to the new version of the application.

A quick switch-over minimizes downtime.

## Implementing Atomic Deployment

Instead of copying files incrementally, the new deployment strategy works as follows:

1. Add the staging build in `/var/www/next-deployment-build`
2. Prepare the new deployment directory in `/var/www/deployments/`
3. Add the build to the new deployment directory
4. Create a symbolic link to the production folder.


```sh
#!/bin/bash

# Generate a timestamp
timestamp=$(date +"%Y%m%d%H%M%S")
# 1. copy build from staging server to next-deployment-build
# ...

# 2. Prepare the new directory name with the timestamp
new_dir="/var/www/deployments/$timestamp"

# 3. Add the build to the new directory. 
mkdir $deployment_dir
cp -r /var/www/next-deployment-build/* "$deployment_dir/"

# 4. Create symlink from our deployment directory to our production directory. Voilà!
ln -sfn "$deployment_dir" /var/www/production
```


## Case solved

The bug was a combination of factors that made it difficult to reproduce and debug at first. We were fortunate to have Cloudflare cache that made the issue more visible.


We had a fun time looking for which part of the system was causing the issue. 


I tried as much as possible to explain the process of debugging we went by and the different steps we took to find the root cause of the issue.  This is a good example on how some problems appears only with a certain amount of users and how Atomic deployment can help preventing those issues.


I hope you enjoyed this post-mortem. If you have any questions or comments, feel free to reach out to me on [Blue Sky](https://bsky.app/profile/loiclefloch.dev).
