---
title: Newsletter • March 2025
date: 2025-03-01 13:03:00
category: newsletter
permalink: /newsletter/march-2025/
description: "This month, dive into a thrilling debugging adventure, explore the latest State of React & React Native, and discover insights on scaling software to handle billions of requests. We also cover developer productivity, software architecture, and a deep dive into how images and databases work"
lang: en
tags: 
---

We begin this March issue with my latest blog post: [the Case of the Vanishing Pages: Debugging an Elusive React Bug](https://www.loiclefloch.fr/the-case-of-vanishing-pages/?utm_source=newsletter&utm_campaign=march-25), a story of how a seemingly random bug became a debugging adventure.
I also added a small post on [how to make gmail readable](/make-gmail-readable).

This month we have a [dedicated section on React and React native](#React-and-react-native), starting with the [State of React 2024 results](https://2024.stateofreact.com/) and [State of React Native 2024 results](https://results.stateofreactnative.com/en-US/).
We also have a section on [Software architecture and good practices](#Software-architecture-and-good-practices), with three posts focusing on how to handle billions (requests, interactions and certificates) and the [Good Resources to Learn Software Architecture in 2025](https://blog.bytebytego.com/p/ep151-24-good-resources-to-learn).

The latest [Honeypot](https://www.youtube.com/@Honeypotio) documentary is out with [Angular: The Documentary - An origin story](https://www.youtube.com/watch?v=cRC9DlH45lA).

Interested on developer productivity? Look at the [Developer productivity with Nicole Forsgren (the creator of DORA)](https://www.youtube.com/watch?v=WufjP_WRnPM) on [The Pragmatic Engineer Podcast](https://www.youtube.com/@pragmaticengineer) and this [refactoring.fm](https://refactoring.fm/) article on [what's Next in Measuring Dev Productivity?](https://refactoring.fm/p/whats-next-in-measuring-dev-productivity). You can learn further by looking at the [DORA metrics](https://dora.dev/guides/dora-metrics-four-keys/).

Behind all the AI hype, an insightful article that try to analyse [beyond the AI MVP: What it really takes](https://blog.lawrencejones.dev/ai-mvp/).

Take a look at the [Programming Language Rankings](https://plrank.com/), where Python goes second behind JavaScript, followed by TypeScript and Java.

Discover [7 things a developer should know about databases](https://blog.octo.com/7-things-a-developer-should-know-about-databases) focusing on PostgreSQL with tips and a nice TL;DR.

Vitest is the default go to for a lot of node projects these days. Make sure that it is up to date, there is [critical flaw vulnerability reported](https://github.com/vitest-dev/vitest/security/advisories/GHSA-9crc-q9x8-hgqq).

Obsidian is my number one tool, that I use as a second brain. It is [now free for work](https://obsidian.md/blog/free-for-work/) and the latest update, the [1.8.8 is out](https://obsidian.md/changelog/2025-02-25-desktop-v1.8.8/) .

## Articles

### A calculator app? Anyone could make that.

Do you think that creating calculator app is simple? Think again. This is a deep dive into how Android’s calculator solves math.

- [A calculator app? Anyone could make that.](https://chadnauseam.com/coding/random/calculator-app)

### How are images really stored?

Ever wondered how images are stored and displayed on your devices? This deep dive into image formats explores GIF, PNG, and JPEG. How does image compression and rendering works? How these different formats balance quality and efficiency?

- [How Are Images REALLY Stored?](https://cefboud.com/posts/image-formats/)

### When Postgres index meets Bcrypt

Discover how a simple feature led to significant performance issues and the role Bcrypt played in it.
This in-depth analysis offers valuable lessons on optimizing database operations and understanding the nuances of hashing algorithms.

- [When Postgres index meets Bcrypt](https://n0rdy.foo/posts/20250131/when-postgres-index-meets-bcrypt/)


## Software architecture and good practices

Let's start with APIs and a gentle reminder on [How to (and how not to) design REST APIs](https://github.com/stickfigure/blog/wiki/How-to-%28and-how-not-to%29-design-REST-APIs) .

I found this little Linkedin post insightful on [how to handle transactions in a clean architecture](https://www.linkedin.com/posts/antoinechalifour_comment-g%C3%A9rer-les-transactions-en-clean-archi-ugcPost-7295698509045874688-EXB3) with a real example.

Then we have three blog posts about billions:

On [serving a billion web requests with boring code](https://notes.billmill.org/blog/2024/06/Serving_a_billion_web_requests_with_boring_code.html), discover how a dedicated team rebuilt a system handling 5 million daily requests at sub-10ms latency. This is an in-depth post on how choosing reliable technologies like PostgreSQL, Go, and React with a focus on simplicity and strict backward compatibility led to a robust and efficient platform.

Explore [How Netflix Built a Distributed Counter for Billions of User Interactions](https://blog.bytebytego.com/p/how-netflix-built-a-distributed-counter).
Netflix engineered a Distributed Counter Abstraction to handle billions of user interactions with low latency and high accuracy. The post explains the architecture and strategies behind Netflix's scalable counting system.

Learn how letsencrypt is [Scaling Rate Limits to Prepare for a Billion Active Certificates](https://letsencrypt.org/2025/01/30/scaling-rate-limits/). How Let's Encrypt updated its rate limiting system to handle the issuance of over 340,000 certificates per hour, ensuring scalability for a future with a billion active certificates. This analysis reveals the transition from a MariaDB-based system to a more efficient solution utilising Redis and the Generic Cell Rate Algorithm (GCRA), significantly reducing database load and improving responsiveness.

And if you want to learn more about software architecture, do not miss the [good resources to Learn Software Architecture in 2025](https://blog.bytebytego.com/p/ep151-24-good-resources-to-learn).

## React and React Native

Those two have their own category this month, with a lot of news and nice articles.

In January we had the [State of Javascript 2024 survey results](/newsletter/january-2025/#State-of-JS-2024-results). It is now the time for the [State of React 2024 results](https://2024.stateofreact.com/) and the [State of React Native 2024 results](https://results.stateofreactnative.com/en-US/).

Since React is [sunsetting Create React App](https://react.dev/blog/2025/02/14/sunsetting-create-react-app), the go to for a new React project is to use a framework. React Native already highly recommend to [use a framework to build React Native apps](https://reactnative.dev/blog/2024/06/25/use-a-framework-to-build-react-native-apps).
You can learn more on the [how to start a React Project 2025](https://www.robinwieruch.de/react-starter) article, which exposes different possibilities, and more focus article on [next.js: an honest review](https://beeps.dev/blog/nextjs-an-honest-review).

You can also use [cross-platform mobile development with Expo](https://newsletter.pragmaticengineer.com/p/expo) which is more and more used for the web as well, especially with the [new expo workflows](https://expo.dev/eas/workflows), a React Native CI/CD for Android, iOS, and Web.

On React Native side you can take a look at the [Expo's Your 2025 React Native Tech Stack stream video](https://www.youtube.com/watch?v=kqdrn-jEaXY).

Expo also made another stream on [what is Legend List? A demo of the drop-in replacement for FlatList](https://www.youtube.com/watch?v=XpZMveUCke8).

Note that an unexpected new version of [React Native 0.78](https://reactnative.dev/blog/2025/02/19/react-native-0.78) that supports React 19 has been released. React Native team wants to make [smaller and faster releases](https://reactnative.dev/blog/2025/02/19/react-native-0.78#towards-smaller-and-faster-releases).

Let's deep a little bit with [how React Router works under the hood](https://tigerabrodi.blog/how-react-router-works-under-the-hood) , [Master Redux Action Best Practices & Make Debugging Easy](https://janhesters.com/blog/master-redux-action-best-practices-and-make-debugging-easy) and how to create a  [React "as" Prop Using TypeScript](https://newsletter.eng-leadership.com/p/15-lessons-from-15-years-in-tech).

## En vrac

- [Differences between ESLint and TypeScript](https://eslint.org/blog/2025/01/differences-between-eslint-and-typescript/)
- [Introducing Learning journeys: New step-by-step guides to get started with Grafana](https://grafana.com/blog/2025/02/14/introducing-learning-journeys-new-step-by-step-guides-to-get-started-with-grafana/)

## By Octo

- [7 things a developer should know about databases](https://blog.octo.com/7-things-a-developer-should-know-about-databases)
- [Ref Card Domain Driven Design](https://www.linkedin.com/feed/update/urn:li:activity:7295024324837593089/)
- [Podcast Techrocks - Plongée dans les tendances technologiques 2025](https://open.spotify.com/episode/5NNiSHPis0j8NgMnZPWVGM)
- [Software deliveries stories podcast - Customer feedback](https://linktr.ee/softwaredeliverystories)
- [Ajouter un peu de GenAI dans mon app mobile](https://blog.octo.com/ajouter-un-peu-de-genai-dans-mon-app-mobile)
- [Intégrer votre application à Apple Intelligence et Siri : Guide pour les développeurs iOS](https://blog.octo.com/integrer-votre-application-a-apple-intelligence-et-siri--guide-pour-les-developpeurs-ios)
- [Episode 1 : Start With Why - La clé des Produits Numériques Stratégiques](https://blog.octo.com/episode-1--start-with-why-la-cle-des-produits-numeriques-strategiques)

## Tools

- [outline](https://github.com/outline/outline) - The fastest knowledge base for growing teams. Beautiful, realtime collaborative, feature packed, and markdown compatible.
- [Linkding](https://github.com/sissbruecker/linkding) - Self-hosted bookmark manager that is designed be to be minimal, fast, and easy to set up using Docker.

## TIL

`git branch -l` lists the branches alphabetically by default. It can be hard to find the recent ones when we have a lot of local branches. You can configure git to sort branches by committer date with:

`git config --global branch.sort -committerdate`

[source](https://bsky.app/profile/bholmes.dev/post/3linbxksutc2q)

## Fun

- [Pokemon terminal](https://github.com/LazoCoder/Pokemon-Terminal)