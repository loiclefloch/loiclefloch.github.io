---
title: Newsletter • January 2026
date: 2026-01-02 19:01:00
category: newsletter
permalink: /newsletter/january-2026/
description: "AI-assisted software development, React2Shell, RAM shortages, cloud and web performance, and professional growth."
lang: en
tags: 
---

## Trends

- [How Google Maps quietly allocates survival across London’s restaurants](https://laurenleek.substack.com/p/how-google-maps-quietly-allocates) → how ranking and visibility translate into real-world survival odds for businesses.
- [oh my opencode](https://github.com/code-yeongyu/oh-my-opencode) → OpenCode Plugin with sub-agents
- [10 ans de Clean Architecture chez OpenClassrooms : le rêve, la réalité, les leçons](https://www.youtube.com/watch?v=LbzQDnWHqbU) (FR) → debriefs a decade of Clean Architecture in a real product, with concrete lessons and trade-offs.

## RAM Shortage

The global RAM shortage is being driven by skyrocketing demand for high-bandwidth memory (HBM) used in AI data centers run by companies like Nvidia and Google. To keep up, major chipmakers are focusing their production on HBM, which means there’s less DDR4 and DDR5 available for regular computers, workstations, and smaller servers.

Memory prices have exploded as a result - Corsair’s 2×32 GB DDR5 kit jumped from around 240 € to over 1,100 € in just a few months. There are even reports that Samsung’s memory division refused to supply DDR5 to Samsung’s own device teams so they could meet external contracts.

Cloud VM prices are rising, hardware upgrades are slowing down, and there’s growing pressure to write more memory-efficient code. What used to be a cheap, abundant resource has suddenly become a strategic constraint.

- [The RAM Shortage Comes for Us All](https://www.jeffgeerling.com/blog/2025/ram-shortage-comes-us-all) → how AI data center demand and limited fab capacity are driving up RAM prices.
- [RAM is so expensive, Samsung won't even sell it to Samsung](https://www.pcworld.com/article/2998935/ram-is-so-expensive-samsung-wont-even-sell-it-to-samsung.html) → how even big manufacturers are prioritizing external high-margin buyers over internal device divisions.
- [Memory shortages could push PS6 release beyond 2027](https://mashable.com/article/playstation-6-delayed-report-memory-shortages)

## Building with AI

- [Optimizing Claude Code: Skills, Plugins, and the Art of Teaching Your AI to Code Like You](https://mays.co/optimizing-claude-code) → how to combine settings, CLAUDE.md, Skills, Hooks, Commands, Agent Docs, and plugins so Claude Code behaves like a senior engineer steeped in your conventions.
- [A Guide to Claude Code 2.0 and getting better at using coding agents](https://sankalp.bearblog.dev/my-experience-with-claude-code-20-and-how-to-get-better-at-using-coding-agents/) → using Claude Code as an agentic environment: structuring specs, orchestrating plugins, and handling multi-file changes.
- [Migrating 6000 React tests using AI Agents and ASTs](https://eliocapella.com/blog/ai-library-migration-guide/) → a concrete case study where AI agents plus codemods and AST tooling handle a massive test migration between React Testing Library versions.
- [Turn off your AI Assistant for Code Katas](https://coding-is-like-cooking.info/2025/07/turn-off-your-ai-assistant-for-code-katas/) → practice sessions should deliberately exclude AI so you exercise your own problem-solving and design muscles.
- [AI‑Assisted Software Development - 6 Pitfalls to Avoid](https://jeromevdl.medium.com/ai-assisted-software-development-6-pitfalls-to-avoid-91233cf21d14) → walks through recurring traps like design atrophy, unreviewed boilerplate, and misplaced trust in generated code.
- [My Thoughts on Claude Opus 4.5](https://www.mckaywrigley.com/posts/opus-4.5) → a practitioner’s view on where a frontier model actually fits into dev work, research, and everyday tooling.
- [TanStack's Open. AI. SDK.](https://oscargabriel.dev/blog/tanstacks-open-ai-sdk) → explores an SDK that wraps AI providers with a focus on type safety, retries, and ergonomics for JS/TS developers.


## AI Ecosystem & MCP

- How IAs user memory system works for [ChatGPT's](https://manthanguptaa.in/posts/chatgpt_memory/) and [Claude](https://manthanguptaa.in/posts/claude_memory/)
- [Donating the Model Context Protocol and establishing the Agentic AI Foundation](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation) → why MCP is being handed to a neutral foundation and what that means for tools that want to speak a common language.
- [MCP joins the Linux Foundation: What this means for developers building the next era of AI tools and agents](https://github.blog/open-source/maintainers/mcp-joins-the-linux-foundation-what-this-means-for-developers-building-the-next-era-of-ai-tools-and-agents/) → connects MCP’s standardization to the wider open-source ecosystem.
- [Building MCP servers in the real world](https://newsletter.pragmaticengineer.com/p/mcp-deepdive) → concrete examples of teams wrapping existing systems behind MCP servers instead of writing one-off integrations.
- [Bun has been acquired by Anthropic](https://bun.com/blog/bun-joins-anthropic) → Bun turns into a strategic runtime for Claude Code and future AI coding products while staying open source and focused on speed and DX.

## Web

- [How we accidentally made route matching more performant by aiming for correctness](https://tanstack.com/blog/tanstack-router-route-matching-tree-rewrite) → how TanStack Router’s route-matching tree rewrite delivered performance gains by primarily focusing on correctness and invariants.
- [Making complex web apps faster](https://blogs.windows.com/msedgedev/2025/12/09/making-complex-web-apps-faster/) → how the Edge team approached performance tuning for heavy SPAs.
- [is-tree-shakable](https://github.com/software-mansion-labs/is-tree-shakable) → tool to analyze whether libraries are actually designed for tree-shaking, not just claiming to be.
- [Free spy tool can track 3 billion WhatsApp users, drain batteries and data limits](https://cybernews.com/security/whatsapp-signal-real-time-tracking-battery-drain-flaw/).

## React2Shell

React2Shell is a critical RCE vulnerability in React Server Components. It can lead to unauthenticated remote code execution (RCE) on vulnerable React Server Components servers, allowing attackers to run arbitrary commands, harvest credentials/secrets, establish reverse shells, achieve persistence via new users or backdoors, perform lateral movement to cloud metadata/internal networks, deploy malware and evade detection with Cloudflare tunnels or bind mounts.
Cloudflare deployed new WAF rules network-wide to detect and block React2Shell exploit patterns in headers, POST bodies, and unsafe deserialization attempts for all proxied traffic.

- [Critical Security Vulnerability in React Server Components](https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components) → a severe RSC vulnerability (React2Shell) and required version upgrades.
- [Denial of Service and Source Code Exposure in React Server Components](https://react.dev/blog/2025/12/11/denial-of-service-and-source-code-exposure-in-react-server-components) → two additional RSC issues beyond the initial RCE.
- [Cloudflare WAF proactively protects against React vulnerability](https://blog.cloudflare.com/waf-rules-react-vulnerability/) and the deeper [React2Shell RSC vulnerabilities exploitation threat brief](https://blog.cloudflare.com/react2shell-rsc-vulnerabilities-exploitation-threat-brief/) explain Cloudflare’s mitigations and observed exploitation patterns.
- [react2shell-rsc-vulnerability notes](https://gist.github.com/sriram-palanisamy-hat/d207174ada2fa052ad44439f22a65c7e) → walks through exploit details and payload structure from a researcher’s perspective.

## Craft, Architecture & Human Skills

- [The Software Architecture Chronicles](https://herbertograca.com/2017/07/03/the-software-architecture-chronicles/) → long-running series on architecture patterns, bounded contexts, and layering.
- [How Can Domain-Driven Design and Hexagonal Architecture Improve Data Product Development in Practice?](https://blog.octo.com/how-can-domain-driven-design-and-hexagonal-architecture-improve-data-product-development-in-practice-1) → how these patterns map to data-heavy systems.
- [7 choses qu'un développeur doit connaître sur les bases de données](https://blog.octo.com/7-choses-qu'un-developpeur-doit-connaitre-sur-les-bases-de-donnees) (FR) → a crisp overview of practical DB fundamentals for application developers.
- [“You should never build a CMS”](https://www.sanity.io/blog/you-should-never-build-a-cms) → argues for treating content platforms as products you adopt, not infrastructure you reinvent, with good decision heuristics.
- [L'IA est un outil, pas un pilote](https://romainlanz.com/articles/l-ia-est-un-outil-pas-un-pilote) (FR) → frames AI as augmentation rather than automation, and the risks when teams reverse that hierarchy.
- [IA : risque d’asservissement et d’érosion des compétences - comment préserver la maîtrise du geste ?](https://blog.octo.com/ia--risque-d'asservissement-et-d'erosion-des-competences-comment-preserver-la-maitrise-du-geste) (FR) → how to keep expertise alive when AI can “do the gesture” for you.
- [Faire confiance : Réinventer l'expérience utilisateur à l'ère l’IA](https://blog.octo.com/faire-confiance--reinventer-l%27experience-utilisateur-a-l%27ere-l%27ia) (FR) → designing interfaces that keep humans informed and in control when AI is in the loop.
- [Gemini veut-il la peau du blog OCTO ?](https://blog.octo.com/gemini-veut-il-la-peau-du-blog-octo) (FR) → reflection on whether AI summarization/search will cannibalize blog traffic or amplify it.

## Learning From the Field

- [Filmmaking Process - Zootopia 2](https://disneyanimation.com/process/) → walks through Disney Animation’s pipeline, from story to lighting to final render.
- [Goodbye Microservices: From 100s of problem children to 1 superstar](https://www.twilio.com/en-us/blog/developers/best-practices/goodbye-microservices) → how Twilio collapsed a complex microservices landscape into a single service.
- [Cup of Dev s02 episode 2 : de développeuse à PO](https://open.spotify.com/episode/6sm1gk4JXAwAVwdZmP94VM) (FR) → a podcast on transitioning from developer to product owner.

## Tooling & Ecosystem

- [Clopus-Watcher: An autonomous monitoring agent](https://denislavgavrilov.com/p/clopus-watcher-an-autonomous-monitoring) → experiments with an agent watching logs/metrics and suggesting mitigations.
- [vscode sleep when pasting](https://github.com/microsoft/vscode/commit/d92c1a8aa7c097181ab04d3fc0365bc2923d12ec) → vscode was doing a sleep when pasting
- [Making macOS Bearable](https://seg6.space/posts/making-macos-bearable/) → an opinionated take on tuning macOS for power users and Linux refugees.
- [Am I doing this in prod?](https://chromewebstore.google.com/detail/am-i-doing-this-in-prod/aoglejgecidnodkkogbgieidhmhjjnch) → adds a persistent visual reminder when you’re pointed at production.

## People, Juniors & Process

- [AWS CEO Explains 3 Reasons AI Can’t Replace Junior Devs](https://www.finalroundai.com/blog/aws-ceo-ai-cannot-replace-junior-developers) → arguing for junior hiring in an AI-heavy org.
- [The Junior Hiring Crisis](https://people-work.io/blog/junior-hiring-crisis/) → how fewer junior roles today will turn into a senior and leadership shortage later.
- [The Bet On Juniors Just Got Better](https://tidyfirst.substack.com/p/the-bet-on-juniors-just-got-better) → AI makes coaching more leveraged, not less.
- [Tell us what you really, really… do not want to spend time working on](https://stackoverflow.blog/2025/12/10/tell-us-what-you-really-really-do-not-want-to-spend-time-working-on/) → surveys the tasks developers most want automated away.
- [Calendar rules I learned from an EA](https://www.rubick.com/calendar-rules/) → a set of battle-tested scheduling rules that can dramatically reduce context switching.
- [The Thinking Game](https://www.youtube.com/watch?v=d95J8yzvjbQ) → a short talk/exercise on slowing down to think more clearly before acting.
