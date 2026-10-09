---
title: "Newsletter #27 • October 2026"
date: 2026-10-09 09:33:00
category: newsletter
permalink: /newsletter/october-2026/
description: "October 2026: AI code review bottlenecks, software factories and harness engineering, GPT-6 Astra and Jev, AI safety resignations, PlanetScale's sharded Postgres, React 19.3, Shopify going back to native, and Tailwind joining Shopify."
lang: en
tags:
---

## Building with AI

- [How we made claude.ai 3x faster in two weeks](https://claude.dev/blog/how-we-made-claude-ai-faster/) → How Anthropic made claude.ai 3x faster in two weeks: Claude-built benchmarks, one Slack thread per loop, and guardrails for 3,000 changes
- [AI coding has made CI a bottleneck, so we reworked ours to keep up](https://linear.app/now/ci-bottleneck-reworked) → How Linear halved runner time per test and cut PR wait while test suites quadrupled, by rethinking infra, scheduling and parallelization
- [Meet Stripe's Knowledge AI Platform](https://stripe.dev/blog/meet-stripes-knowledge-ai-platform) → How Stripe built Kai, an agent platform for non-engineers wired to 1,000+ internal tools, now used weekly by 83% of employees
- [The software factory stack](https://x.com/zachlloydtweets/status/2097739116720910619) → Warp's blueprint for an open, composable software factory stack defined in code, from factory.yaml to agents, runners and automations
- [The State Of AI Harness Engineering 2026](https://marmelab.com/blog/2026/09/24/the-state-of-ai-harness-engineering-2026.html) → Marmelab audited 246 repos and 57 publications: what works in harness engineering, from evaluating your harness to replacing rules with scripts
- [Claude Code from Source](https://claude-code-from-source.com/) → An unofficial 18-chapter book on Claude Code internals reconstructed from npm source maps: agent loop, tool pipeline, memory, skills and hooks

## Code Review & AI

- [Stop being the code review bottleneck](https://posthog.com/newsletter/code-review-tips?ck_subscriber_id=3055173058) → Four workflows PostHog engineers use, prompts included, to delegate code review to agents and stop being the bottleneck
- [Maybe We Shouldn't Be Reviewing All This Code](https://martinfowler.com/rachels-ramblings/code-review.html) → Why AI didn't break code review: we were already using it for knowledge sharing and quality problems better solved elsewhere
- [Fixing the PR bottleneck](https://www.youtube.com/watch?v=g0vqT_wZtXA&t=26240s) → Matt Pocock at AI Engineer Paris: agents make PRs easy to open, not to review, so improve the environment around the PR
- [GPT-5.6 Luna vs GPT-6 Astra: Is a $1.20 Model Good Enough for Code Review?](https://entelligence.ai/blogs/gpt-5.6-luna-vs-gpt-6-astra-is-a-1.20-model-good-enough-for-code-review) → A $1.20 model found 69 seeded bugs versus 92 for GPT-6 Astra at 28x lower cost, but caught only 9 of 24 security bugs
- [Codex Resets](https://codex-resets.com/) → Watch @thsottiaux for Codex reset announcements.

## AI Ecosystem & Skills

- [ECC](https://github.com/affaan-m/ECC) → The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.
- [i-have-adhd](https://github.com/ayghri/i-have-adhd) → A skill that forces coding agents to lead with the next action, cap lists and drop preamble: ADHD-friendly output for everyone
- [The /resolving-merge-conflicts Skill](https://www.aihero.dev/skills-resolving-merge-conflicts) → An archived skill that resolves merge conflicts hunk by hunk, tracing each side to its PR, then running tests before committing
- [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) → Cloudflare's six-phase security audit skill with isolated sub-agents, adversarial verification, and schema-checked findings.json output
- [romainsimon/paperasse](https://github.com/romainsimon/paperasse) → Skills pour agents IA spécialisés dans la bureaucratie française : Comptable, Notaire, ...

## Models & Research

- [GPT-6 Astra, Looped Transformers, and Hidden Reasoning](https://magazine.sebastianraschka.com/p/gpt-6-astra-looped-transformers-and) → Sebastian Raschka on GPT-6 Astra's results, a survey of looped transformers, and whether they make reasoning harder to monitor
- [Introducing System One Models & Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev) → TypeSafe's Jev returns typed, probabilistic decisions in one parallel pass instead of text, claiming 70–500 ms latency and near-free pricing
- [Jev’s Architecture Unmasked](https://archerhume.com/posts/jevs-architecture-unmasked) → Reverse-engineering Jev with 10,000 API calls: likely a causal transformer with a prediction head, isolated question branches, and position bias
- [We Tested Jev on 100 Real Agent Calls. How Easy Is It To Beat a Constant?](https://archestra.ai/blog/we-tested-jev-on-100-real-agent-calls) → Jev vs Sonnet 5 on 400 labeling decisions from real Claude Code tool calls: a 300 ms router that catches more dangerous calls

## AI & People & Process

- [A eulogy for the software engineer](https://davekiss.com/blog/eulogy-for-the-software-engineer/) → A moving talk on grieving the old software engineering job, and on the skills and judgment still in your hands
- [Becoming an AI Team](https://medium.com/pinterest-engineering/becoming-an-ai-team-866d6b567803) → Pinterest's playbook for turning engineering teams into AI teams: new ownership and planning models, and the manager's role through the transition
- [Good Culture is the Biggest Productivity Hack, Not AI](https://newsletter.eng-leadership.com/p/good-culture-is-the-biggest-productivity) → Why AI productivity gains only show up on top of a good engineering culture, with a checklist and advice on messaging AI adoption
- [Scaling AI Adoption in Engineering](https://pages.antithesis.com/oreilly-scaling-ai-ebook-pragmatic) → Peter Bell's O'Reilly early-release ebook: a practical framework for engineering leaders adopting AI across team structure, hiring and risk
- [One month without AI](https://blog.bustikiller.com/2026/09/25/one-month-without-ai.html) → A developer quits AI coding tools for a month and reports how dependence was making them lazier and a worse developer
- ["12 à 13 heures par jour à appuyer sur Entrée" : le cri d'alarme d'un développeur face à l'IA Claude Code](https://www.lesnumeriques.com/intelligence-artificielle/12-a-13-heures-par-jour-a-appuyer-sur-entree-le-cri-d-alarme-d-un-developpeur-face-a-l-ia-claude-code-n262240.html) → Un développeur décrit des journées de 12 heures à valider du code Claude Code sans le lire, et les études METR et Anthropic qui inquiètent

## Trends

- [We are all Product Engineers now](https://seldo.com/posts/we-are-all-product-engineers-now/) → Agents are eating the SDLC from the bottom up; what remains is figuring out what people want, and that's product engineering
- [Every Customer Gets the Same Software. That's Ending.](https://julien.danjou.info/blog/every-customer-gets-the-same-software/) → Why AI makes per-customer software divergence affordable and ends SaaS's one-product-for-everyone model, with SAP precedent and Mergify examples
- [I Never Want to Use Third-Party Software Again](https://lg.substack.com/p/i-never-want-to-use-third-party-software) → Julie Zhuo on hyperpersonalized software: why building your own tools in 30 minutes beats complaining about the ones you're given
- [Build vs Buy When Building Just Got Cheap](https://kevingoldsmith.substack.com/p/build-vs-buy-when-building-just-got) → AI made building cheap but owning software didn't get cheaper: four questions to ask before rebuilding what you could buy
- [Making Startups Powerful](https://paulgraham.com/powerful.html) → Paul Graham's office-hours heuristic: ask what would make the company more powerful, through customer ownership, money flow, platforms and network effects

## AI Safety

- [An Alien Mind](https://openai.com/index/an-alien-mind/) → OpenAI's Chief Scientist on the path to recursive self-improvement, and why alignment needs stronger safeguards and international coordination
- [Post by @hilbertspaess on X](https://x.com/hilbertspaess/status/2097476196791709843) → A pretraining researcher's resignation thread: why neither OpenAI nor Anthropic is acting responsibly in the race to superintelligence
- [Experts weigh in as researcher says AI has more than 10% chance of ‘killing all humans’](https://www.cnbc.com/2026/09/09/anthropic-researcher-quits-ai-safety.html) → Fallout from an Anthropic researcher's resignation, as the company's alignment lead puts AI's extinction risk above 10% within a decade
- [An alignment assessment of recent cybersecurity incidents](https://www.anthropic.com/research/alignment-assessment-cybersecurity-incidents) → Anthropic dissects four incidents where Claude models broke into real third-party systems during cyber evals, including a malicious PyPI upload

## Learning From the Field

- [Full-text search at Contentful got faster: How we did it](https://www.contentful.com/blog/contentful-faster-full-text-search/) → How Contentful cut median Postgres full-text search latency by 35% with tsvector, input normalization and table normalization
- [How Notion handles concurrent editing with CRDTs](https://www.notion.com/blog/how-notion-handles-concurrent-editing-with-crdts) → How Notion replaced last-write-wins with a CRDT-based rich-text system that merges concurrent edits across blocks without losing work
- [Reducing Zod's memory footprint by an order of magnitude with method memoization](https://zod.dev/blog/reducing-memory-footprint) → How a method memoization pattern shrank a bare z.string() from 7.5kb to 784 bytes of retained heap in Zod 4.5
- [PDF Forgeries Are Surprisingly Rare](https://gwern.net/blog/2022/pdf-forgery) → Why existing PDFs are almost never forged: there's no Photoshop for PDFs, so forgers stick to easier formats

## Watch & Listen

- [AI Skills with Matt Pocock](https://newsletter.pragmaticengineer.com/p/ai-skills-with-matt-pocock?publication_id=458709&post_id=215854309&isFreemail=true&r=3sqidf&triedRedirect=true) → Matt Pocock on his grill-me skill, strategic programming, day/night shift agent workflows, and why fundamentals matter more with agents
- [Building Codex with Tibo Sottiaux](https://newsletter.pragmaticengineer.com/p/building-codex-with-tibo-sottiaux?publication_id=458709&post_id=214748970&isFreemail=true&r=3sqidf&triedRedirect=true) → Tibo Sottiaux on building Codex: why Rust and open source, how the harness evolves, and how OpenAI uses it across the SDLC
- [The Story of VS Code | Official Documentary](https://www.youtube.com/watch?v=kHL3XzjpT5w) → A feature-length documentary on how a small Zurich team built VS Code, with Erich Gamma, Dirk Bäumer and Scott Hanselman

## Postgres

- [The lifecycle of a sharded Postgres query](https://planetscale.com/blog/the-lifecycle-of-a-sharded-postgres-query) → A SQL query's journey through the router, shard-aware planner and four Postgres shards, and what it takes to look like one server
- [Introducing Neki](https://planetscale.com/blog/introducing-neki) → PlanetScale's sharded Postgres in preview: wire-compatible routers, a distributed planner, standard Postgres shards, and online resharding
- [What I Wish Someone Told Me About Postgres](https://challahscript.com/what_i_wish_someone_told_me_about_postgres) → Practical Postgres lessons buried in 3,200 pages of docs: normalization, NULL quirks, psql tricks, and why your index might do nothing

## React / React Native

- [React 19.3](https://react.dev/blog/2026/09/09/react-19-3) → Stable <ViewTransition> with Suspense integration, Fragment Refs, use(browser()) to skip SSR, and transitions that no longer block each other
- [An early look at Expo Modules 2.0](https://expo.dev/blog/an-early-look-at-expo-modules-2-0) → Expo Modules 2.0 swaps the definition() DSL for annotated Swift/Kotlin classes, with sync calls up to 5.6x faster than 1.0
- [Native is now the future of mobile at Shopify](https://shopify.engineering/back-to-native) → Shopify leaves React Native for Swift and Kotlin because coding agents made two native codebases cheap, and winds down FlashList and Restyle

## Tooling & Ecosystem

- [React Doctor](https://www.react.doctor/) → A static analysis CLI that flags complex components, repeated JSX and production risks in React code, and blocks regressions in CI
- [@shadcn/lint](https://github.com/shadcn-ui/lint) → An agent-first linter for Tailwind design systems: per-component class contracts with error messages that tell the agent how to fix it
- [The complete guide to Cloudflare Quick Tunnels](https://flaviocopes.com/cloudflare-quick-tunnels/) → Put localhost on the internet with one cloudflared command: how quick tunnels work, webhooks, dev servers, local LLMs, and limits
- [Introducing Forge: the open source pipeline for generating SDKs, CLIs, docs, and more](https://blog.cloudflare.com/forge-open-source-generation-pipeline/) → Cloudflare open-sources Forge, the pipeline that generates its SDKs, cf CLI, docs and MCP servers from 3,500+ API operations
- [knap.md](https://knap.md/) → Obsidian's open-source template language for turning JSON into Markdown, the engine behind the Web Clipper, now as a CLI and npm package

## News

- [Tailwind Labs is joining Shopify](https://tailwindcss.com/blog/tailwind-is-joining-shopify) → Tailwind Labs joins Shopify: the 110M-weekly-installs framework stays MIT, while Tailwind Plus and ui.sh close to new customers
- [Building a certificate authority for the whole Internet](https://blog.cloudflare.com/cloudflare-certificate-authority/) → Cloudflare applies to become a public certificate authority, acquires a GlobalSign root, and plans to issue post-quantum certificates
- [Japanese used bookstores see 5x sales surge](https://www.tomshardware.com/tech-industry/artificial-intelligence/japanese-used-bookstores-see-5x-sales-surge-as-books-are-being-bought-by-the-ton-one-50-ton-order-sent-to-the-us-for-ai-scanning-and-destruction-multitude-of-suspicious-bulk-buys-thought-to-end-up-in-foreign-ai-scan-and-shred-facilities) → Bulk orders are emptying Japanese used bookstores, with a 50-ton shipment reportedly sent to the US for destructive AI book scanning

