---
title: Newsletter • April 2025
date: 2025-03-31 09:01:00
category: newsletter
permalink: /newsletter/april-2025/
description: "Explore the latest TypeScript updates, AI in dev, and top conference takeaways. Stay ahead with key insights and must-read resources!"
lang: en
tags: 
---

Welcome to the April 2025 edition of my newsletter! 

My post [The Case of the Vanishing Pages: Debugging an Elusive React Bug](https://www.loiclefloch.fr/the-case-of-vanishing-pages/) has been translated in French on [the Octo blog](https://blog.octo.com/l'affaire-des-pages-disparues).

This month was a conferences month for me:
- [Duck Conf 2025](https://www.laduckconf.com/), a conference organised by Octo. I made blog post about the talk [SEO: milliseconds versus millions](https://blog.octo.com/la-duck-conf-2025-cr-seo--des-millisecondes-contre-des-millions). You can find other reports of the conference on the [Octo blog](https://blog.octo.com/category/software-engineering).
- [Paris Typescript Conference](https://la-conf.typescript.paris/). You can find my blog post about it on the [Octo blog](https://blog.octo.com/paris-typescript-conference-report-morning). 
- [React Paris](https://react.paris/). You can find the replay on [YouTube](https://www.youtube.com/@BeJScommunity/playlists).
- The [Epic Web Conf 2025](https://www.epicweb.dev/conf/2025). You can find the [replay on YouTube](https://www.youtube.com/live/SDuvi5eUqp0). Kent C. Dodds also released the [Epic web dev principles](https://www.epicweb.dev/principles) and [Epic Programming style guide](https://github.com/epicweb-dev/config/blob/main/docs/style-guide.md).

- [Architecture weekly newsletter is now free](https://www.architecture-weekly.com/p/whole-architecture-weekly-content)

Some companies are seing a raise of fake candidates using AI. Look at this [AI fakers exposed in tech dev recruitment: postmortem](https://newsletter.pragmaticengineer.com/p/ai-fakers) and this [Deep fake prevention paper - 17 Practical Strategies to Detect Fake IT Workers](https://www.vidocsecurity.com/ebook/ebook-detecting-fake-candidates-vsl.pdf).
Speaking of AI we have [how to use AI to increase Software Development productivity](https://newsletter.eng-leadership.com/p/how-to-use-ai-to-increase-software) blog post and a set of [cursor rules](https://dotcursorrules.com/).

AI has limitations. Discover the challenges of achieving general AI capable of reasoning and planning at a human level with [why Anthropic’s Claude still hasn’t beaten Pokémon](https://arstechnica.com/ai/2025/03/why-anthropics-claude-still-hasnt-beaten-pokemon/). Claude has weak visual processing, memory limitations, lack of meta-strategies, inconsistent planning and adaptation...


In [Async, Sync, in Between](https://antfu.me/posts/async-sync-in-between), we learn that Javascript librairies must handle sync and async. This article exposes this problem and how they are doing it, mostly by having different APIs for sync and async behaviours.
The author expose a new solution, that allows to have only one code for both.

If you are using Next.js, a CVE has been disclosed about [Authorization Bypass in Next.js Middleware](https://github.com/advisories/GHSA-f82v-jwr5-mffw). Learn more on [this blog post](https://zhero-web-sec.github.io/research-and-things/nextjs-and-the-corrupt-middleware)  made by the security researcher. If you are using Datadog, they also made a [follow up with their findings](https://securitylabs.datadoghq.com/articles/nextjs-middleware-auth-bypass/).

On the API side, learn how [Eve Online APIs evolved](https://www.eveonline.com/news/view/eve-evolved-the-future-of-eves-api) from XML API to Kubernetes and Quasar, how they enhanced observability and what they plan for the future.

## Typescript

A really interesting video on [How the TypeScript Compiler Compiles - understanding the compiler internal](https://www.youtube.com/watch?v=X8k_4tZ16qU)

We had big announcements this month with [TypeScript 5.8](https://devblogs.microsoft.com/typescript/announcing-typescript-5-8/) and [Typescript Go](https://devblogs.microsoft.com/typescript/typescript-native-port/), a port of the Typescript compiler in Go. Learn more on [what's Really Behind That 10x Performance Claim?](https://www.architecture-weekly.com/p/typescript-migrates-to-go-whats-really)

On a fun way, you can now [run DOOM using Typescript](https://www.youtube.com/watch?v=0mCsluv5FXA).

I am a big fan of using zod for data validation in Typescript. Here a nice [zod overview](https://didoesdigital.com/blog/zod-overview).

"[Emmett](https://event-driven-io.github.io/emmett/getting-started.html) is an opinionated yet flexible framework that implements Event Sourcing for Node.js applications".

## React

- [Using useRef for Lazy Initialization With React Compiler](https://newsletter.daishikato.com/p/using-useref-for-lazy-initialization-with-react-compiler).
- A list of resources on [demystifying accessibility in React apps](https://krambertech.notion.site/Demystifying-accessibility-in-React-apps-15efe3ecdbc84cf59a22baaace09c629).
- React Query will support [streaming](https://bsky.app/profile/tkdodo.eu/post/3lkiuj7362k2a).
- React as a `ComponentProps` type that allows to [extend a Component Props easily](https://www.linkedin.com/feed/update/urn:li:activity:7302335659183099905/)

## Git
- Learn about [unspoken git secrets that save you mountains of time as an engineer](https://read.highgrowthengineer.com/p/unspoken-git-secrets)  and [How Core Git Developers Configure Git](https://blog.gitbutler.com/how-git-core-devs-configure-git/).
- A french blog post on [essential of Git & Gitlab for beginners](https://frenchtechlead.com/posts/tech/20201023-git-pour-debutant/)
- A new article about [Git story: Not so fun this time](https://blog.brachiosoft.com/en/posts/git/).
- Take a look at this new tool, [Git butler](https://gitbutler.com/) a Git client for simultaneous branches on top of your existing workflow.
- On the security side, we have a post on a [malvertising campaign leads to info stealers hosted on GitHub](https://www.microsoft.com/en-us/security/blog/2025/03/06/malvertising-campaign-leads-to-info-stealers-hosted-on-github/).
- [GitHub Actions will finally support Yaml Anchors/aliases?](https://bsky.app/profile/sebastienlorber.com/post/3lkl2vrsd2522)

## Vrac

- [How Linux is built with Greg Kroah-Hartman](https://newsletter.pragmaticengineer.com/p/how-linux-is-built-with-greg-kroah)
- [Test-driven development in Nextjs with Nik Sumeiko—Our Tech Journey](https://www.youtube.com/watch?v=Wp_RXX4lNK0)
- [Bloom Filter: A Deep Dive](https://www.kirupa.com/data_structures_algorithms/bloom_filter.htm)
- [How Amazon S3 Stores 350 Trillion Objects with 11 Nines of Durability](https://blog.bytebytego.com/p/how-amazon-s3-stores-350-trillion)
- [Design Accelerator: Kafka Is Not an Event Store](https://www.youtube.com/watch?v=uQkKtz0NEpY)
- [Performance Improvements in JDK 24](https://inside.java/2025/03/19/performance-improvements-in-jdk24/)
- [The Tech Away | Issue #7](https://thetechaway.substack.com/p/the-tech-away-issue-7)
- [En vrac de fin février](https://www.standblog.org/blog/post/2025/02/27/En-vrac-de-fin-fevrier)
- [Kept forgetting my callouts and checkboxes, so I made a reminder which shows when hovering the help icon. No plugins, just CSS.](https://www.reddit.com/r/ObsidianMD/comments/1fxiirm/kept_forgetting_my_callouts_and_checkboxes_so_i/)
- [Command and Conquer Red Alert is open source](https://github.com/electronicarts/CnC_Red_Alert)
- [Quel framework JS backend choisir ?](https://www.youtube.com/watch?v=Q_oVDDevPw8)

## By Octo

- The new [RefCard Équipe Agile](https://publication.octo.com/fr/telechargement-refcard-agile)
- [Le produit c’est l’équipe](https://blog.octo.com/le-produit-c'est-l'equipe)
- [Gestion du multi-compte git sur une même machine](https://blog.octo.com/gestion-du-multi-compte-git-sur-une-meme-machine)
    - It also refer one of my [september 2024 newsletter](https://www.loiclefloch.fr/newsletter/september-2024/#How-to-have-multiple-profiles-in-Git), thanks for that!
- [5 questions à se poser pour bien comprendre les micro frontends](https://blog.octo.com/les-questions-a-se-poser-pour-comprendre-les-micro-frontends)
- [En quoi l'accessibilité mobile est nécessaire et utile pour tous ?](https://blog.octo.com/en-quoi-l'accessibilite-mobile-est-necessaire-et-utile-pour-tous)
- [Le web en temps réel](https://blog.octo.com/le-web-en-temps-reel)
- [Web hors-ligne : l'alliance entre l'optimisation utilisateur et les pratiques éco-responsables](https://blog.octo.com/octo-web-hors-ligne--optimiser-l'experience-utilisateur-sans-connexion)


## Tools
- [The Developers homepage](https://hackertab.dev/) - "Hackertab makes it easy for you to stay up-to-date with the latest developer news, tools and conferences."
- [slidev - Presentation Slides for Developers](https://sli.dev/)

## Fun
- If you watched Severance, there is an abstract of a famous book [The You You Are](https://books.apple.com/us/audiobook/the-you-you-are/id1780413757) available in audio book or epub
- [Leet Heat — A Game Show For Web Developers](https://www.youtube.com/playlist?list=PLz8Iz-Fnk_eQwPfZx8lixhpBg22KCCZzo)
- [The closer to the train station, the worse the kebab - A "Study"](https://www.jmspae.se/write-ups/kebabs-train-stations/)
