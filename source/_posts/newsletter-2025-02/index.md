---
title: Newsletter • February 2025
date: 2025-01-30 09:23:00
category: newsletter
permalink: /newsletter/february-2025/
description: "This month: Git, mobile, accessibility"
lang: en
tags: 
---


## News

- [Tailwind v4](https://tailwindcss.com/blog/tailwindcss-v4)
- [Bun v1.2](https://bun.sh/blog/bun-v1.2)
- [CVE for End-of-Life Node.js Versions](https://nodejs.org/en/blog/vulnerability/upcoming-cve-for-eol-versions) but [dubbed the "Worst CVE of the Year" by Security Experts](https://socket.dev/blog/node-js-eol-versions-cve-dubbed-the-worst-cve-of-the-year)
- [Expo announces eas hosting service](https://expo.dev/blog/expo-announces-eas-hosting-service), with [an example on how to host Next.js](https://x.com/JI/status/1879740964492980598)
- [ObservabilityCON 2024: Major news announcements, product updates, and a new startup program](https://grafana.com/blog/2024/09/24/observabilitycon-2024-announcements/)
- [Shadcn blocks](https://ui.shadcn.com/docs/blocks)
- [Reanimated 4](https://blog.swmansion.com/reanimated-4-is-new-but-also-very-familiar-b926dd59aa40)

## By Me

### Compte Rendu du Paris JUG de Janvier 2025

>Paris JUG is the meetup for the Java ecosystem in Paris.
>This is my report of the Paris JUG which was held at OCTO.

https://blog.octo.com/cr-du-paris-jug-de-janvier-2025


## By Octo

- [Cup of dev episode 4 - Numérique responsable](linktr.ee/CupOfDev)
- [RefCard Éco-conception des Apps mobiles](https://publication.octo.com/fr/telechargement-refcard-%C3%A9co-conception-des-apps-mobile)
- [Le futur du développeur avec l'IA ?](https://blog.octo.com/le-futur-du-developpeur-avec-l'ia)
- [Les challenges pour le mobile en 2025](https://blog.octo.com/les-nouveautes-mobile-2025)
- [Chrome DevTools from Zero to Hero](https://www.youtube.com/@developersgroupdijon3650)
- [Diviser par 3 le Lead Time d'une équipe de delivery grâce au Kaizen](https://blog.octo.com/diviser-par-3-le-lead-time-d'une-equipe-de-delivery-grace-au-kaizen)

## Articles

### Simplifying task queues with PostgreSQL

>Gentrace's task queue system processes thousands of evaluation tasks daily. Learn how we simplified our task queue architecture by using PostgreSQL.

https://gentrace.ai/blog/task-queue-simplification

*Why read it ? -* I am a big fan of PostgreSQL and trying to use it for everything : [Postgres as a search engine](https://www.loiclefloch.fr/newsletter/august-2024/#Postgres-as-a-search-engine) and [Just use Postgres for everything](https://www.loiclefloch.fr/newsletter/july-2024/#Just-use-postgres-for-everything). This one describe how you can use PostgreSQL for task queues. I have not tested this method yet but really want to test it on a side project.

### Automated Accessibility Testing at Slack

>While automated tools can’t replace human judgment, they reduce reliance on manual testing, flagging errors aligned with WCAG criteria. The goal was to embed checks into existing test frameworks, making the process seamless for developers.

https://slack.engineering/automated-accessibility-testing-at-slack/

You can also read [this OCTO blog post](https://blog.octo.com/integrer-l'accessibilite-dans-les-tests-automatises-de-votre-front-1) on the same subject.

*Why read it ? -* By combining automation with manual testing, Slack demonstrates a practical and scalable approach to meeting Web Content Accessibility Guidelines (WCAG) standards. How can we embed accessibility checks seamlessly into development workflows ?
This article is especially relevant in light of France's new accessibility laws.

### Cross-platform mobile development

>A deep dive into the most popular frameworks: React Native, Flutter, native-first, and web-based technologies, and how to pick the right approach

https://newsletter.pragmaticengineer.com/p/cross-platform-mobile-development

*Why read it ? -* A comprehensive, data-driven analysis of cross-platform mobile development with a good framework comparison, real-world case studies, guidance for decision-making, trends and future potential.
I chose react-native myself to stick with the React ecosystem with Expo framework and I would recommend it anytime, especially since [Expo announces eas hosting service](https://expo.dev/blog/expo-announces-eas-hosting-service))
You can take a look at the [2025 mobile challenges](https://blog.octo.com/les-nouveautes-mobile-2025) and [five years of React Native at Shopify](https://shopify.engineering/five-years-of-react-native-at-shopify).

### Why is Git Autocorrect too fast for Formula One drivers?

>Why does Git's autocorrect wait 0.1s before executing a mistyped command? Let's dig in.

https://blog.gitbutler.com/why-is-git-autocorrect-too-fast-for-formula-one-drivers/

*Why read it ? -* The name of this blog post is not enough? It explain that Git autocorrect is using a 0.1 second delay which gives users almost no time to react and cancel the action. This delay is so short that even a Formula One driver couldn’t act in time. Learn how even small design decisions - like choosing deciseconds as a unit of time - can lead to confusing behavior.

### Git - Beyond the Basics

>[!QUOTE]
>"How well do you know Git? Many of us use it daily and pick up the basics as we go. After a few years, you might start to think that you know Git pretty well. But there are more things in the Git man pages than are dreamt of in your philosophy..."

https://4zm.org/2024/12/18/git-beyond-the-basics.html

*Why read it ? -* This post delves into advanced Git features that go beyond everyday usage. Whether you're already proficient with Git or want to explore underused capabilities, it provides a curated selection of tips to boost your workflow.

### The state of vim

>Moolenaar had led Vim for over 30 years until he passed away in 2023, which raised concerns about the project's continuity, as he was the sole owner of the Vim GitHub organization.
>Brabandt, who has contributed to Vim since 2006, shared his journey and the challenges faced after Moolenaar's death.
>Maintaining Vim involves more than just the source code; it also includes managing the website, security disclosures, and community interactions on platforms like Reddit and Stack Exchange. That is why Vim is currently in "maintenance mode" but development has not stopped.

https://lwn.net/Articles/1002342/


## Videos

### Hades: Developing Hell

>[!QUOTE]
>How did the mega-hit dungeon crawler Hades come to be?
>This one-of-a-kind video documentary takes you inside developer Supergiant Games for every step of the game’s journey

https://www.youtube.com/playlist?list=PL-THgg8QnvU4JEVov1tMlFThNYS92F8uC

You can now find it as [Blue-ray](https://www.fangamer.com/products/hades-documentary-blu-ray).

*Why look at it? -* This video series offers a comprehensive look at the development of the critically acclaimed game Hades. 
It provides insights into the game's design, development process, and the team's creative decisions. 
The series is a must-watch for game developers, fans of Hades, and anyone interested in the game development process.


### Generative AI is a Parasitic Cancer

https://www.youtube.com/watch?v=-opBifFfsMY

*Why look at it? -* Google is becoming unusable. Generative AI is writing bad quality texts that are taking over internet. 
This video begins by showing the overwhelming presence of AI-generated content, particularly in tutorials and articles which prioritize marketing over useful information.
If found this first part to be a bit too long but the [second part](https://www.youtube.com/watch?v=-opBifFfsMY&t=2081s) reflect on the loss of authentic human narratives and creativity in art and knowledge due to the dehumanizing nature of AI.
Freya is expressing concern about its broader societal implications and the potential dangers it poses in disseminating misinformation and diluting the value of genuine human expression. 
She advocates for a cultural pushback against the rise of generative AI, urging for the preservation of authenticity and the importance of true creative engagement.


## Vrac

- [Refactoring with Codemods to Automate API Changes](https://martinfowler.com/articles/codemods-api-refactoring.html#CodemodsInOtherLanguages)
- [Are LLMs making StackOverflow irrelevant?](https://blog.pragmaticengineer.com/are-llms-making-stackoverflow-irrelevant/)
- [Don't make these feature flag mistakes](https://newsletter.posthog.com/p/dont-make-these-classic-feature-flag)
- [Highlights from Git 2.48](https://github.blog/open-source/git/highlights-from-git-2-48/)
- [Collection of insane and fun facts about SQLite](https://avi.im/blag/2024/sqlite-facts/)
- [What Years of Testing Have Taught Me](https://newsletter.fractionalarchitect.io/p/44-from-my-diary-what-years-of-testing)
- [The Front End Developer/Engineer Handbook 2024](https://frontendmasters.com/guides/front-end-handbook/2024/)
- [Introduction aux Server-Sent Events pour du temps réel](https://romainlanz.com/articles/introduction-aux-server-sent-events-pour-du-temps-reel)
- [Scaffolding your internationalization in React with automation](https://lingual.dev/blog/automating-your-react-internationalization/)
- [A 2-ply minimax chess engine in 84,688 regular expressions](https://nicholas.carlini.com/writing/2025/regex-chess.html)
- [Font with Built-In Syntax Highlighting](https://blog.glyphdrawing.club/font-with-built-in-syntax-highlighting/)
- [Design docs at Google](https://www.industrialempathy.com/posts/design-docs-at-google/)
- [Five years of React Native at Shopify](https://shopify.engineering/five-years-of-react-native-at-shopify)
- [Voici la première cyberarme de l’histoire](https://www.youtube.com/watch?v=gXtp6C-3JKo)
- [Architect With Confidence: Key Learning Resources of 2024](https://newsletter.fractionalarchitect.io/p/42-architect-with-confidence-key)
- [Books to read in 2025 as Software Architect](https://blog.vvsevolodovich.dev/books-i-want-to-read-in-2024/)
- [How CERN uses Grafana and Mimir to monitor the world's largest computer grid](https://grafana.com/blog/2025/01/02/how-cern-uses-grafana-and-mimir-to-monitor-the-worlds-largest-computer-grid/)
- [Metrics, logs, and literature: Inside The National Library of the Netherlands’ observability stack](https://grafana.com/blog/2025/01/06/metrics-logs-and-literature-inside-the-national-library-of-the-netherlands-observability-stack/)
- [How Bluesky Works](https://newsletter.systemdesign.one/p/how-does-bluesky-work)
- [Make FormData and input names type-safe in React](https://www.typeonce.dev/article/make-form-data-and-input-names-type-safe-in-react)
- [Become expert in React Query](https://tigerabrodi.blog/become-expert-in-react-query)
- [Everything You Need to Know About Node.js Type Stripping](https://satanacchio.hashnode.dev/everything-you-need-to-know-about-nodejs-type-stripping)
- [Justified Text: Better Than Expected?](https://cloudfour.com/thinks/justified-text-better-than-expected/)
- [Accessibility essentials every front-end developer should know](https://martijnhols.nl/blog/accessibility-essentials-every-front-end-developer-should-know)

## Tools

- [Bruno](https://github.com/usebruno/bruno) - Opensource IDE for exploring and testing APIs. Replace Postman.
- [chezmoi.io](https://www.chezmoi.io/) - Manage your dotfiles across multiple diverse machines, securely
- [AFFINE](https://github.com/toeverything/AFFiNE) - next-gen knowledge base that brings planning, sorting and creating all together. Replace Notion and Miro
- [HeadingsMap chrome extension](https://chromewebstore.google.com/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi) - To show, browse and audit the headings structure for accessibility and SEO.

## TIL

### Upgrade brew frequently with a cron job

Manually remembering to run brew update is easy to forget.
But if you skip updates for a long time, running brew update might take significantly longer due to the accumulation of changes.

A cron job ensures small, frequent updates. It automates the process, ensuring your package database stays updated without manual intervention.

For example, to run it daily at 8 AM:

`0 8 * * * brew update && brew upgrade`

But be careful with this. It upgraded my node version and I had to downgrade it.

## Fun

- [Squid test](https://poomang.com/en/t/squid_test)
