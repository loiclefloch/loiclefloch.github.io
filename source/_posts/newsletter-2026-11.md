---
title: "Newsletter #28 • November 2026"
date: 2026-11-08 11:39:00
category: newsletter
permalink: /newsletter/november-2026/
description: "November 2026: AI agents shift code review to verification, harness costs, Anthropic's Scion version control, TanStack Start 1.0, TypeScript ported to Rust, and 20x faster CI."
lang: en
tags:
---

## Building with AI

- [Agentic Verification](https://addyo.substack.com/p/agentic-verification) → Why agent quality comes from verification loops (e2e tests, property-based testing, benchmarks) rather than humans reviewing every line
- [Are Harnesses Worth the Cost?](https://martinfowler.com/articles/are-harnesses-worth-the-cost.html) → A 10-run experiment where a behavioral harness cost 7x more and used 10x the tokens without improving GPT-6 Sol's results
- [Harnais agentiques (1/2) : pourquoi les bonnes pratiques d'hier coûtent cher aujourd'hui](https://blog.octo.com/harnais-agentiques-(12)--pourquoi-les-bonnes-pratiques-d'hier-coutent-cher-aujourd'hui) → Pourquoi les harnais conçus pour des modèles fragiles deviennent inutiles, puis contre-productifs, face aux modèles actuels et à la nouvelle économie des tokens
- [How Kent Ships Features Without Reading the Code](https://mega.dev/ship-without-reading-the-code) → Kent C. Dodds' fifteen principles for shipping agent-written code he hasn't read, from intent to gates to feature flags, with the session recording
- [Plan mode is dead](https://www.aymannadeem.com/artificial/intelligence,/developer/tools/2026/09/24/plan-mode-is-dead.html) → Why plan modes no longer help agents but understanding what you build matters more than ever, from the founder whose planning-first app failed
- [Self-improving software is inevitable](https://boristane.com/blog/self-improving-software-is-inevitable/) → Why the next step is closing the loop: feeding production signals back to agents automatically so software fixes itself
- [Five months treating bugs like patients and coding agents like a medical team](https://www.cockroachlabs.com/blog/experiment-running-hospital-code/) → How Cockroach Labs' AI "teaching hospital" shipped IBM Db2 migration support in under two days: 164x faster and 38x cheaper than the earlier Oracle migration work

## Code Review & AI

- [How the Claude Code team does code review](https://claude.dev/blog/solving-code-review-at-anthropic/) → How the Claude Code team doubled merged PRs while cutting reverts by 40%, moving most code reading to machines and making mistakes easy to undo
- [We stopped reviewing code and started verifying intent](https://tessl.io/blog/we-stopped-reviewing-code-and-started-verifying-intent) → Why Tessl dropped line-by-line code review for a verification layer built around intent after PR volume quadrupled
- [How to read code](https://www.seangoedecke.com/how-to-read-code/) → Why reading code isn't like reading prose, and how to read diffs and unfamiliar programs effectively

## AI Ecosystem & Skills

- [OpenCode 2.0](https://anoma.ly/notes/opencode-2-0/) → A shared background server for TUI, web and desktop, Code Mode for running MCP servers as scripts, and background subagents
- [mattpocock/skills releases](https://github.com/mattpocock/skills/releases) → Matt Pocock's agent skills for real engineers, now with a code-review skill that enforces your repo's standards and a dated LLM-wiki memory
- [break-ui skill by Emil Kowalski](https://github.com/emilkowalski/skills/blob/main/skills/break-ui/SKILL.md) → An agent skill that stress-tests UI with worst-case data (long names, emoji, empty states, huge counts) and reports every break with a fix

## Models & Research

- [Introducing Muse Wonder and Muse Wonder Full: Frontier Models for Agents](https://about.fb.com/news/2026/10/introducing-muse-wonder-models/) → Meta's new agent-focused models, with Active Memory across conversations and Active Focus to persist through hard tasks and recover from errors
- [Introducing Clairic, a new System One class of extraction models](https://blog.cloudflare.com/clairic-extraction-model/) → Cloudflare's extraction model returns typed values with confidence intervals in one forward pass, halving cost and time versus an all-LLM pipeline
- [TokenEconomizer: Experience-Driven Black-Box Cost Control for Coding Agents](https://github.com/microsoft/TokenEconomizer) → Microsoft Research and UC Berkeley's black-box method to control coding agents' token costs using experience from past runs
- [Problems in 22 scientific fields had solutions hiding in plain sight. An AI has found them](https://www.science.org/content/article/problems-22-scientific-fields-had-solutions-hiding-plain-sight-ai-has-found-them) → How the BootLoops AI harness borrowed methods across disciplines to produce 36 papers in weeks, from linguistics to health policy
- [The Mathocalypse](https://scottaaronson.blog/?p=10169) → Scott Aaronson on AI agents cracking open math, including Claude Code proving BusyBeaver(10) exceeds Graham's number

## AI & People & Process

- [The Manager's Path in the Age of AI](https://skamille.medium.com/the-managers-path-in-the-age-of-ai-279cb6611d66) → Camille Fournier's LDX3 talk on what AI really changes for engineering managers, against CEOs declaring management dead
- [How PM Work Is Changing in the AI Era](https://www.caseyaccidental.com/p/how-pm-work-is-changing-in-the-ai) → Interviews with PMs from startups to public companies on how AI became the context layer for their daily work
- [What Do You Still Need to Know When Agents Do the Work?](https://blog.adrq.dev/here-be-monsters-what-do-you-still-need-to-know-when-agents-do-the-work) → What engineers still need when agents write the code: fundamentals, breadth, and the willingness to jump in when it breaks
- [When code is cheap, judgement becomes the job](https://swizec.com/blog/when-code-is-cheap-judgement-becomes-the-job) → How a 21-person team ships hundreds of PRs a week with agents, auto-merging 16% of them

## Trends

- [Code Is a Commodity Now](https://efp.asia/blog/2026/10/15/code-is-a-commodity-now/) → Job-market and productivity data on why producing software is deflating, and six predictions from team compression to specs replacing codebases
- [The state of devs 2026](https://2026.stateofdevs.com/en-US/) → 5,463 developers on burnout, AI, layoffs and discrimination: 62% report burnout, and nearly half say AI hasn't helped their mental health
- [The people holding up the internet](https://sheets.works/data-viz/holding-up-the-internet) → A data-driven look at the handful of volunteers maintaining the software under billions of phones, like the time zone database

## Learning From the Field

- [Cutting our inference bill by 68% by being obsessive about optimization](https://blog.cloudflare.com/obsessive-inference-optimization) → How Cloudflare cut its AI code reviewer's cost per run by 68% with prompt caching and model routing, while making reviews 2.7x faster
- [Node.js at scale, rebalanced: how we cut cost by 38%](https://medium.com/booking-com-development/node-js-at-scale-rebalanced-how-we-cut-cost-by-38-62ce247a3002) → How Booking.com cut its biggest Node.js service's compute costs by 38% with platform and config changes alone: 30% fewer pods, 20% less memory
- [How I made our CI 20x faster (steal this)](https://x.com/owengretzinger/status/2116291924219060319) → How Boardy cut CI wait from 40 minutes to 2 with faster runners, Oxlint, TypeScript 7 and more, so agents stop waiting
- [CI Playbooks: prompts and skills for fast CI](https://starsling.dev/ci-playbooks) → Agent-ready GitHub Actions playbooks distilled from how Anthropic, Stripe, Shopify, Uber and others speed up CI
- [Redesigning source control at Anthropic](https://www.anthropic.com/engineering/redesigning-source-control) → Why Anthropic built Scion, an in-house version control system, after merges grew from 2,500 to 30,000 per day, and migrated in five months
- [Hopper: we built an internal coding agent, now 80% of Alan uses it](https://medium.com/alan/hopper-we-built-an-internal-coding-agent-now-80-of-alan-uses-it-9c11e5b62ca5) → How Alan grew a codebase Q&A bot into one shared agent for the whole company, behind a single MCP gateway, now opening 25% of merged pull requests

## Security

- [How I Found a $90,000 Remote Code Execution Vulnerability in Google](https://simonkoeck.com/writeups/google-devsite-flask-session-pickle-rce) → A forgeable Flask session cookie plus pickle.loads gave unauthenticated RCE on developers.google.com and four other Google sites
- [Coordinated disclosure of critical vulnerabilities](https://openai.com/index/coordinated-disclosure-of-critical-vulnerabilities/) → How OpenAI led a coalition to patch critical PHP vulnerabilities found with GPT-5.6 Sol before attackers could exploit them
- [The Secure Software Factory: A Reference Architecture](https://agentbaseline.org/reference-architecture) → A reference architecture for agent software factories: the agent proposes, policy authorizes, infrastructure enforces, across sandbox, network, supply chain and identity

## Architecture

- [The 'generic' service circular dependency problem](https://www.jayfreestone.com/writing/the-generic-circular-dependency-problem/) → How to stop generic notification, analytics or comment services from accumulating every caller's types and creating circular dependencies
- [PostgreSQL uuidv7 vs UUIDv4 vs bigint keys, measured](https://importstatic.com/databases/postgres-uuidv7-vs-uuidv4-bigint) → 10 million rows on PostgreSQL 18: uuidv7 keeps pace with bigint, while UUIDv4 doubles load time and triples WAL
- [Introducing @nestjs/resilience](https://trilon.io/blog/introducing-nestjs-resilience) → Retries, timeouts, circuit breakers, bulkheads and fallbacks as NestJS decorators, with idempotency-aware retry defaults out of the box

## React / React Native

- [TanStack Start 1.0 is Stable](https://tanstack.com/blog/tanstack-start-1-0) → TanStack Start goes stable with typed server functions, selective SSR, full-stack middleware, and a formal API stability commitment
- [Optimizing the sh*t out of TanStack Start](https://sarthakmishra.com/blog/optimizing-tanstack-start) → How cutting downloads and fixing fonts and images took a TanStack Start home page from 73 to 100 on mobile Lighthouse

## Tooling & Ecosystem

- [Introducing tsrs: a Port of TypeScript to Rust](https://blog.cloudflare.com/typescript-rust-port/) → Cloudflare and VoidZero port the TypeScript compiler to Rust inside Oxc: up to 8x faster and 70% less memory than TypeScript 7.0
- [Ghostty 1.4.0](https://ghostty.org/docs/install/release-notes/1-4-0) → Full Kitty graphics support, 70-90% less scrollback memory, a new Linux OpenGL renderer and a `ghostty +ssh` wrapper that installs terminfo remotely
- [Hex](https://github.com/anomalyco/hex) → Local voice dictation for Mac, Windows and Linux: hold a key, speak, and it pastes, with nothing leaving your machine
- [Learn Arduino](https://learn-arduino-red.vercel.app/) → Interactive 3D Arduino lessons for beginners, with a pinout explorer, component library and built-in simulator in the browser

## News

- [Nvidia débarque au capital de Doctolib](https://www.maddyness.com/2026/10/13/nvidia-debarque-au-capital-de-doctolib/) → Nvidia prend une participation minoritaire dans Doctolib, valorisée 3,6 Md€ avec 422 M€ d'ARR, et investit aussi dans Pigment

## Funny

- [Serverless Horrors](https://serverlesshorrors.com/) → A collection of real serverless billing nightmares, from a $10K Durable Object loop on Cloudflare to a $100K Firebase bill
- [Hacking Cheap Smart Photo Frames into a Family Dashboard](https://wesbos.com/hacking-smart-photo-frames) → How Wes Bos rooted a $50 Android photo frame into a family dashboard, fed by an agent that turns school emails into events
