---
title: Newsletter • May 2025
date: 2025-05-04 18:38:00
category: newsletter
permalink: /newsletter/may-2025/
description: "This month is about Legacy code, MCP, LLM, React, CSS-in-JS, Git 20th birthday, and more"
lang: en
tags: 
---

This month we still have a lot to see about React and AI, espacially on MCP. Do not skip the posts about the 20 years of Git, nor the legacy code posts !

Wants to find high quality blog posts ? Look at [the highest-ranking personal blogs of Hacker News](https://refactoringenglish.com/tools/hn-popularity/).

[Why React Query ?](https://ui.dev/why-react-query) - A really nice deep dive on why it is so difficult to make an API call the right way in React. And how using React Query really helps. You can also look at the latest React Query blog post about [concurrent optimistic updates](https://tkdodo.eu/blog/concurrent-optimistic-updates-in-react-query).

[Better error handling](https://meowbark.dev/Better-error-handling) - What if better error handling could prevent crashes, save lives, and still be elegant in TypeScript? Dive into the real tradeoffs between try/catch and how modern alternatives like Go-style tuples and Rust-inspired Result types can help you write safer, smarter TypeScript.

[Tech bet vs Tech debt](https://blog.alexewerlof.com/p/tech-bet) - A critique of common pitfalls in software engineering leadership, especially around the overuse of speculative investment in tech without validating the real business need.

In may, we will host the [French Stack #002 meetup](https://lu.ma/qnrfib96) at Octo's, about legacy systems. Here some blog posts around that topic:
- [Legacy Code Modernisation - Conserving Behaviour with Approval Tests](https://codeartify.substack.com/p/approval-testing)
- [Legacy Code Modernisation: Speeding Up Approval Test Writing with CombinationsApproval](https://codeartify.substack.com/p/combinations-approval)


[The Best Programmers I Know](https://endler.dev/2025/best-programmers/) - What does it takes to be the best programmer the author knows? What do they have in common?

[Celebrate 50 years of Microsoft with the company’s original source code](https://www.gatesnotes.com/microsoft-original-source-code)
	- [Bill Gates memoir](https://www.gatesnotes.com/home/home-page-topic/reader/my-first-memoir-source-code). I read it this month and liked it.

[Awesome cursor rules](https://github.com/PatrickJS/awesome-cursorrules) - A curated list of awesome .cursorrules files. Those instructions are used to define project-specific instructions for your AI. You can also use them for your [copilot instructions](https://copilot-instructions.md/) .

After the [state of React and React native](https://www.loiclefloch.fr/newsletter/march-2025/#React-and-React-Native), a new survey, more general this time, is out: [state of dev 2025](https://survey.devographics.com/fr-FR/survey/state-of-devs/2025).

[Is CSS-in-JS still a thing?](https://fullystacked.net/css-in-js-still-a-thing/)  Looks like not. [Styled Components - thank you](https://opencollective.com/styled-components/updates/thank-you): the popular old-gen CSS-in-JS library is now in maintenance mode and not recommended for new projects.
But if you are using it, take a look at [the styled-components Happy Path](https://www.joshwcomeau.com/css/styled-components/).

[Generating 1 Million PDFs in 10 Minutes](https://www.ersteiger.com/posts/rendering-one-million-pdfs/). I am not rendering a lot of PDF, but I switched a project that were using [puppeteer](https://pptr.dev/) to generate them to [react-pdf](https://react-pdf.org/). Puppeteer basically spawn a headless chromium to generate a pdf from a rendered HTML. This takes a lot of resources. react-pdf is just a [React renderer](https://legacy.reactjs.org/docs/codebase-overview.html#renderers) that generates a PDF from React code code. Super fast, takes low resources. This blog post is using a different approach, using its own rust library, [Papermake](https://github.com/rkstgr/papermake), hosted on aws lambda.

## IA

### MCP
- [Comprendre le Model Context Protocol (MCP) : connecter les LLMs à vos données et outils](https://blog.octo.com/comprendre-le-model-context-protocol-(mcp)--connecter-les-llms-a-vos-donnees-et-outils) - A really good blog post from Octo on what are MCP. It really helped me understand what it is and what is going on with it.
- [MCP, Easy as 1-2-3?](https://www.honeycomb.io/blog/mcp-easy-as-1-2-3) - Another introduction to MCP
- [The MCP official documentation](https://modelcontextprotocol.io/introduction)

### LLM
- [LLMs struggle to write performant code](https://www.codeflash.ai/post/llms-struggle-to-write-performant-code)
- [Claude Code: Best practices for agentic coding](https://www.anthropic.com/engineering/claude-code-best-practices)

## Tools

- [Codemod Library](https://www.hypermod.io/explore)  - a list of useful codemods
- [Tweak cn](https://tweakcn.com/) - A website to configure your shadcn theme.
- [node-modules.dev](https://node-modules.dev/) - Visualize your node_modules, inspect dependencies, and more.

## Node

- [Make your NestJS controllers more readable by using this simple trick.](https://medium.com/@tomislav.likakur/make-your-nestjs-controllers-more-readable-by-using-this-simple-trick-7f3dffe30629) - create your own annotation to abstract openapi and nest routes annotations
- [You should know this before choosing Next.js](https://eduardoboucas.com/posts/2025-03-25-you-should-know-this-before-choosing-nextjs/)
- [Keeping Costs in Check When Hosting Next.js on Vercel](https://www.thisdot.co/blog/keeping-costs-in-check-when-hosting-next-js-on-vercel)

## React

Dan Abramov is back with a lot of good articles:
- [Impossible Components](https://overreacted.io/impossible-components/) - What if building UIs felt as seamless as your users see them - just boxes on a screen?
- [What Does "use client" Do?](https://overreacted.io/what-does-use-client-do/)
- [React for Two Computers](https://overreacted.io/react-for-two-computers/) - on React Server Components
- [JSX Over The Wire](https://overreacted.io/jsx-over-the-wire/) - Curious how React Server Components blur the line between frontend and backend?

- [Advanced React in the Wild](https://largeapps.dev/case-studies/advanced/)
	- This post is about some React real-world case studies and what we can learn from them. The last part about the different solutions is full of insights on how we should build our react applications. It is a little bit too focused on Next for me who prefers Remix/react-router but still present good lessons. Some of them on optimization are the same that I presented on my [blog post about core web vitals](https://blog.octo.com/la-duck-conf-2025-cr-seo--des-millisecondes-contre-des-millions).
- [Unhead](https://unhead.unjs.io/) - react-helmet is unmaintained and only React 19 allows to handle head data. Take a look at *unhead*, the "The full stack *head* package for any framework."
- [Faster Lazy Loading in React Router v7.5+](https://remix.run/blog/faster-lazy-loading)
- [Simplify TanStack React Query State Handling with Pattern Matching](https://gabrielpichot.fr/blog/simplify-tanstack-react-query-state-handling-with-pattern-matching/)
- [i18n-check: End to end React i18n testing](https://lingual.dev/blog/i18n-check-end-to-end-react-i18n-testing/)
- [React Labs: View Transitions, Activity, and more](https://react.dev/blog/2025/04/23/react-labs-view-transitions-activity-and-more), learn about those new research and development features of React
- [React Architecture Tradeoffs: SPA, SSR, or RSC](https://reacttraining.com/blog/react-architecture-spa-ssr-rsc)

## React native

- [Best Practices for reducing lag in Expo apps](https://expo.dev/blog/best-practices-for-reducing-lag-in-expo-apps)

## Git turned 20 years !

As always, this newsletter comes from some posts about git, which turned 20. The occasion to reflect on the tool, and learn more about how it was made.

- [Git turns 20: A Q&A with Linus Torvalds](https://github.blog/open-source/git/git-turns-20-a-qa-with-linus-torvalds/)
- [20 years of Git. Still weird, still wonderful](https://blog.gitbutler.com/20-years-of-git/)

## By Octo

- [Duck conf replay](https://www.youtube.com/playlist?list=PLXlbmbYadKH5d5aKO2mNaH787kBDwXRU4) et [autres blog posts](https://blog.octo.com/search?s=Duck+conf) 
	- The blog post I made about the talk [SEO: milliseconds versus millions](https://blog.octo.com/la-duck-conf-2025-cr-seo--des-millisecondes-contre-des-millions).
- [La qualité 360 : des principes, des indicateurs… mais en vrai ça ressemble à quoi ?](https://blog.octo.com/la-qualite-360--des-principes-des-indicateurs...-mais-en-vrai-ca-ressemble-a-quoi)
- [Connais-tu la différence entre un Reverse Proxy et une API Gateway ?](https://blog.octo.com/connais-tu-la-difference-entre-un-reverse-proxy-et-une-api-gateway)
- [Le Model-Driven Design - Chimère ou réalité](https://blog.octo.com/le-model-driven-design-chimere-ou-realite)
- Octo made an open source version of the DSFR (French design system) for flutter. It is availaible on the [Github repository](https://github.com/Octo-Open-Source) and can be [previewed](https://octo-open-source.github.io/flutter-dsfr/).
-  New cup of dev podcast: [La relation Dev / Design](https://linktr.ee/CupOfDev)


## Books

- [Fluent React](https://www.oreilly.com/library/view/fluent-react/9781098138707/) - a book to help you understand how React works under the hood
- [Atomic Habits](https://jamesclear.com/atomic-habits) - The bestseller on how to build better habits and get rid of the bad ones. A must read.

## Vrac 

- [The 13 software engineering laws](https://newsletter.manager.dev/p/the-13-software-engineering-laws)
- [How a 20 year old bug in GTA San Andreas surfaced in Windows 11 24H2](https://cookieplmonster.github.io/2025/04/23/gta-san-andreas-win11-24h2-bug/)
- [This is why you're not shipping](https://newsletter.posthog.com/p/this-is-why-youre-not-shipping)
- [Chrome Browser Exploitation, Part 1: Introduction to V8 and JavaScript Internals](https://jhalon.github.io/chrome-browser-exploitation-1/)
- [Default styles for h1 elements are changing](https://developer.mozilla.org/en-US/blog/h1-element-styles/)
- [Does using Rust really make your software safer](https://tweedegolf.nl/en/blog/152/does-using-rust-really-make-your-software-safer)

## Fun

- [A Tamagotchi on VsCode](https://github.com/blairjordan/codachi) - "Watch them hatch from eggs, run around while you code, and evolve as they gain experience from your coding activity."
