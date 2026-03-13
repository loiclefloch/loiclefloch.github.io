---
title: "Newsletter #3 • Septembre 2024"
date: 2024-10-01 08:50:00
permalink: /newsletter/september-2024/
category: newsletter
description: "Ce mois-ci : Cup Of Dev, Fully Typed Web Apps, Rate Limiting, Git, vim"
tags:
---


## By Octo

### Cup of dev - Podcast

> Déjà deux épisodes pour ce chouette podcast
> - Episode 1 - Les rituels agiles
> - Episode 2 - La posture du développeur
> - Épisode 3 - Sortie le 7 octobre, à vos calendrier !

https://linktr.ee/CupOfDev

### RefCard Stratégie de tests sur tous les fronts

>Vous reprenez une application front legacy ou vous bootez un projet from scratch et vous vous sentez flotter dans la galaxie des tests front-end ? Sortez les scaphandres et enfilez votre combinaison spatiale, cette RefCard vous accompagnera dans la définition de votre plan de navigation pour établir la stratégie qui correspond à vos besoins. Assurer vos arrières grâce aux tests de scénarios, sécuriser pas-à-pas votre trajectoire avec des tests de composants, ou encore compléter votre attirail selon les spécificités de votre contexte, vous serez parés pour un décollage… imminent ! 🚀

https://publication.octo.com/fr/telechargement-refcard-strat%C3%A9gie-de-tests-sur-tous-les-fronts


### Devfest Lille 2024 - Banalisation du DDD ou pas ?

https://www.youtube.com/watch?v=CoQWIIg5LA0

*Pourquoi la voir ? -* Une introduction aux concepts essentiels du Domain-Driven Design (DDD) avec une approche stratégique et tactique pour aligner le développement logiciel sur les besoins métiers. Il détaille des techniques pratiques comme l'Event Storming, le Deep Modelling, et le Supple Design, tout en expliquant leur impact direct sur la qualité du code et la compréhension collective du métier au sein d'une équipe.


## Les articles

### The web's clipboard, and how it stores data of different types

> Alex Harri, delves into the history, functionality, and various use cases of clipboards, with detailed explanations of clipboard management techniques.
> It describes how clipboards facilitate the copying and transferring of text, images, and files between applications.

https://alexharri.com/blog/clipboard

*Pourquoi le lire ? -* Vous comprendrez enfin pourquoi Google Doc vous demande d'installer une extension pour pouvoir copier/coller mais uniquement sur Mac OS.

### Fully Typed Web Apps

> End-to-end type safety is crucial for building robust web applications. This article explains how to manage type safety across boundaries (e.g., local storage, databases, APIs) using TypeScript, type guards, and tools like Prisma and Zod.

https://www.epicweb.dev/fully-typed-web-apps

*Pourquoi le lire ? -* Cet article aide à comprendre comment implémenter un type safety sur l'ensemble de votre stack. Il décrit des techniques, outils et des bonnes pratiques pour garantir que vos données restent cohérentes et correctement typées, même dans des systèmes complexes. Et puis les exemples sont avec Remix.

### Rate Limiting, Cells, and GCRA

>Rate limiting is a mechanism that many developers (especially those running services) may find themselves looking into at some point in their careers. It’s useful for a variety of purposes, some of which might be:
>1. Sharing access to limited resources.
>2. Security.
>3. Revenue.

https://brandur.org/rate-limiting

*Pourquoi le lire ? -* Aide à comprendre différentes techniques de rate limiting

*Follow up -* Je suis tombé sur cet article à travers ces deux autres articles, qui y apportent un regard critique
- [GCRA: leaky buckets without the buckets](https://dotat.at/@/2024-08-30-gcra.html)
- [exponential rate limiting](https://dotat.at/@/2024-09-02-ewma.html)

*Le sujet vous intéresse ? -* Le volume 1 du livre "System Design Interview – An insider's guide" par Alex Xu à un chapitre "Design A Rate Limiter".


### Creating a Git commit: The Hard Way

> Shows how to create a Git commit using low-level commands. It explains fundamental Git concepts like blob, tree, and commit objects, showing how they interact to form a commit. The post walks through a step-by-step guide on creating a commit using commands like `hash-object`, `update-index`, `write-tree`, and `commit-tree` to teach Git's object-based architecture.

https://avestura.dev/blog/creating-a-git-commit-the-hard-way


### Why Github Actually won

>How GitHub _actually_ became the dominant force it is today, from one of it's cofounders.

https://blog.gitbutler.com/why-github-actually-won/

*Pourquoi le lire ? -* Dans la [première newsletter de Juillet](/newsletter/july-2024), on découvrais l'article "A Git story: Not so fun this time". Dans la même lignée, découvrons comment GitHub en est arrivé là selon l'un de ses cofondateurs.

*Voir aussi -* Cet article réagit au contenu suivant
- [Why GitHub Won - YouTube](https://www.youtube.com/watch?v=4FNNlMtPS-0)
- [How GitHub replaced SourceForge as the dominant code hosting platform](https://graphite.dev/blog/github-monopoly-on-code-hosting)

### Vim for React Developers

> - How to quickly navigate through code with Vim
> - Examples for how to refactor React patterns
> - Searching, finding, and replacing text
> - Time-saving vim motions to memorize
> - Recommended patterns and neovim configuration

https://vimforreactdevs.com

*Pourquoi le lire ? -* Permet de découvrir les bindings vim, ou de les ré-apprendre de façon ludique avec des examples autour du développement avec React.

## Les vidéos

### Behind The Scenes: The Making of VS Code

> Ever wondered what it takes to build an editor? How does VS Code even work? This is a raw conversation with 2 principal engineers who bring you the raw and uncut look at what it's like behind the scenes with the VS Code engineering team.

https://www.youtube.com/watch?v=BDU63r4bS9Q

## TIL

### Git - trouver le premier commit qui a introduit un bout de code

`git log --reverse -S <code>`

*Source -* https://x.com/felixge/status/1833165652107862337

### Microsoft Teams coller sans formatage

Coller un texte dans Teams m'as (presque) rendu fou.
En fait sur Mac, on utilise pas `Ctrl+shift+V` comme sur windows, mais `Opt+Cmd+Shift+V`

### Delta - A syntax-highlighting pager for git, diff, and grep output

https://github.com/dandavison/delta

*A voir aussi -* [bat  - A cat clone with syntax highlighting and Git integration.](https://github.com/sharkdp/bat)

### How to have multiple profiles in Git

Si comme moi vous avez plusieurs dossiers pour différents projets de différentes entreprises, sachez que vous pouvez configurer différents profiles git pour chacun de ces projets


Un example sur Mac OS:

~/.gitconfig
```gitconfig
[includeIf "gitdir:/Users/loic.lefloch/dev/octo/"]
  path = /Users/loic.lefloch/dev/octo/.gitconfig
[includeIf "gitdir:/Users/loic.lefloch/dev/company/"]
  path = /Users/loic.lefloch/dev/company/.gitconfig
```

~/dev/octo/.gitconfig
```gitconfig
[user]
  email = loic.lefloch@octo.com
  name = loic lefloch
```

~/dev/octo/company/.gitconfig
```gitconfig
[user]
  email = loic.lefloch@company.com
  name = loic lefloch
```

Pour vérifier que votre configuration est correcte, dans un dossier ou git est initialisé (ex: ~/dev/octo/project-1)
Pour vérifier votre user: `git config user.email`

*Un tuto -* https://gist.github.com/Icaruk/f024a18093dc28ec1588cfb90efc32f7

### git-recent

> `git recent` to see your latest local git branches

https://github.com/paulirish/git-recent

*Source -* https://x.com/joshwcomeau/status/1833918245759590710

## En vrac

### Vitest Cheat sheet

https://github.com/sapegin/vitest-cheat-sheet

### Announcing TypeScript 5.6

https://devblogs.microsoft.com/typescript/announcing-typescript-5-6

### How Discord Reduced Websocket Traffic by 40%

https://discord.com/blog/how-discord-reduced-websocket-traffic-by-40-percent
