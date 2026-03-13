---
title: "Newsletter #20 • March 2026"
date: 2026-03-07 11:46:00
category: newsletter
permalink: /newsletter/march-2026/
description: "March 2026: AI coding agents reshape development workflows, Claude Opus 4.6, Stripe's $1B Metronome acquisition reveals architecture limits, TypeScript 6.0 beta arrives, and OpenClaw security vulnerabilities expose risks in AI assistants. Plus: Postgres as the universal database, token optimization with RTK, and lessons from legacy modernization."
lang: en
tags:
---

## AI / AI & Développement

- [The AI Vampire](https://steve-yegge.medium.com/the-ai-vampire-eda6e4f07163) → Steve Yegge warns that AI's 10x productivity boost creates an "energy vampire" effect: developers work themselves to exhaustion while companies extract maximum value. He argues for a 3-4 hour effective workday, pushing back against unrealistic AI-driven work standards set by early adopters and startups.
- [Tests Are The New Moat](https://saewitz.com/tests-are-the-new-moat) → As AI becomes better at cloning people's open source work, what ends up becoming most valuable are software contracts, tests, and API surface area. This clashes the incentives of clearly defining your commercialized open source software with protecting it.
- [Claude Code Guide](https://cc.bruniaux.com/guide/) → Everything you need to master Claude Code, from zero to power user.
- [Project Genie: Experimenting with infinite, interactive worlds](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/project-genie/) → Create interactive 3D worlds from text prompts and images using Google's Genie 3 world model with real-time physics simulation
- [Introducing Claude Opus 4.6](https://www.anthropic.com/news/claude-opus-4-6) → Claude Opus 4.6 brings 1M token context window, outperforms GPT-5.2 by 144 Elo points, and excels at agentic coding tasks
- [Introducing Markdown for Agents](https://blog.cloudflare.com/markdown-for-agents/) → Cloudflare converts HTML to markdown automatically for AI agents, reducing token usage by 80% using content negotiation headers
- [Building a datacenter](https://blog.comma.ai/datacenter/) → How comma.ai built their own datacenter for AI training
- [Code Mode: give agents an entire API in 1,000 tokens](https://blog.cloudflare.com/code-mode-mcp/) → Cloudflare introduces Code Mode for Workers AI, a technical approach to fit entire API schemas into 1,000 tokens, enabling LLM agents to execute precise tool calls with minimal latency.
- [How We Cut Our Daily ML Monitoring from 40 Minutes to 10](https://blog.malt.engineering/how-we-cut-our-daily-ml-monitoring-from-40-minutes-to-10-4cafc4a49c41) → How Malt configured its monitoring dashboard to make it easier to read.
- [The Agentic Platform for Product Engineers](https://www.kasava.dev/blog/ai-as-exoskeleton) → Companies that treat AI as an autonomous agent are disappointed. Those that treat it as an exoskeleton (an amplifier of human capability) are seeing transformative results. Here's the framework.
- [L'IA introduit-elle une rupture dans les modèles d'affaires des ESN ?](https://blog.octo.com/l'ia-introduit-elle-une-rupture-dans-les-modeles-d'affaires-des-esn) → En tant qu'ESN, ne pourrait-on pas voir apparaître de nouveaux acteurs aux business modèles disruptifs dont des modèles low cost ? Quels profils recruter alors et/ou comment les former ? Assiste-t-on à une innovation de rupture qui bouleverse les modèles d'affaires de tout un secteur, ou bien est-ce une transformation accélérée de nos modèles ?
- [AI Agent Browsers: Should you use one? ChatGPT Atlas vs Perplexity Comet vs Arc Dia](https://www.news.aakashg.com/p/naman-pandey-podcast) → Compare AI agent browsers: ChatGPT Atlas dominates deep research, Perplexity Comet wins on speed, Arc Dia automates workflows

## Building with AI

- [Building a C compiler with a team of parallel Claudes](https://www.anthropic.com/engineering/building-c-compiler) → Anthropic POC to build a C Compiler using AI. I find the result impressive. Yes, it is not optimized and actuals tools are better. But it demonstrates the power of AI.
- [How Coding Agents Actually Work: Inside OpenCode](https://cefboud.com/posts/coding-agents-internals-opencode-deepdive/) → Hands-on exploration of OpenCode, an open-source coding agent built with a client/server architecture. Learn how AI tools, LLMs, and real-world constraints come together to create a powerful developer experience.
- [If you don't engineer backpressure, you'll get slopped](https://jw.hn/engineering-backpressure) → The mindset shift required to build with AI without drowning in slop.
- [What I learned building an opinionated and minimal coding agent](https://mariozechner.at/posts/2025-11-30-pi-coding-agent/) → Lessons learned while building a coding agent from scratch.

## Architecture

- [Why Stripe paid $1B for Metronome instead of fixing Billing](https://getlago.com/blog/why-stripe-paid-1b-for-metronome-instead-of-fixing-billing) → Stripe paid $1B for Metronome, a competitor to their own billing product. The reason reveals an architectural gap: Stripe Billing maxes out at 1,000 events/sec while modern AI companies need 100,000+. That's not a feature gap: it's a fundamental architecture problem.
- [Design docs considered harmful](https://www.lucasfcosta.com/blog/design-docs) → Hot takes and cold truths on software, startups, and the lies we tell ourselves.
- [The Pattern I Notice in Every High-Quality Codebase](https://bhavyansh001.medium.com/the-pattern-i-notice-in-every-high-quality-codebase-01312de5cb03) → The subtle pattern found in every high-quality codebase - and why most teams miss it completely.

## WebCraft, Architecture & Human Skills

- [It's 2026, Just Use Postgres](https://www.tigerdata.com/blog/its-2026-just-use-postgres) → Stop database sprawl: Postgres extensions now match specialized databases for search, vectors, time-series, and queues, all under one roof. Another "Postgres for everything" post. I like those. Use Postgres.
- [Database Transactions Explained](https://planetscale.com/blog/database-transactions) → Understanding database transactions and isolation levels
- [The challenges of soft delete](https://atlas9.dev/blog/soft-delete.html) → Exploring alternatives to the archived_at column pattern: triggers, application events, and WAL-based change data capture.
- [Announcing TypeScript 6.0 Beta](https://devblogs.microsoft.com/typescript/announcing-typescript-6-0-beta/) → TypeScript 6.0 beta release with new features and improvements
- [Fixing TypeScript Performance Problems: A Case Study](https://www.viget.com/articles/fixing-typescript-performance-problems) → The story of a recent experience we had troubleshooting some serious performance problems in a large TypeScript monorepo.
- [We Built a Video Rendering Engine by Lying to the Browser About What Time It Is](https://blog.replit.com/browsers-dont-want-to-be-cameras) → Replit solved browser-to-video conversion by hijacking time itself: they intercept JavaScript's clock APIs to make the browser think each frame takes exactly 16ms, regardless of actual screenshot duration. This forces animations to render at a consistent pace, eliminating stuttering caused by the mismatch between real-time rendering and slow capture.
- [A Broken Heart - Or, getting a 100x speedup with one dumb line of code.](https://allenpike.com/2026/a-broken-heart/) → Discover how a single heart emoji caused Safari to take 1600ms to layout a page: a 100x performance hit traced to Noto Color Emoji
- [How Did Hendrix Turn His Guitar Into a Wave Synthesizer?](https://spectrum.ieee.org/jimi-hendrix-systems-engineer) → Jimi Hendrix's collaboration with engineers like Roger Mayer led to groundbreaking sound manipulation, redefining the electric guitar's role in music.

## Tooling & Ecosystem

- [RTK](https://www.rtk-ai.app/) → Token-optimized commands for development workflows. Helps you reduce your token usage by replacing commands such as ls, grep, git... and optimize their outpout.
- [One Tip a Week: Clipboard Time Machine](https://one-tip-a-week.beehiiv.com/p/one-tip-a-week-clipboard-time-machine) → Use Raycast's built-in clipboard history to never lose copied text again: search, filter, and restore any previous copy with one hotkey
- [How to Choose Colors for Your CLI Applications](https://blog.xoria.org/terminal-colors/) → Learn how to choose the right color palette for CLI applications with practical guidelines for accessibility and readability
- [mactop](https://github.com/metaspartan/mactop) → Monitor your Mac's performance with this simple terminal-based activity viewer showing CPU, memory, disk, and network usage

## AI & People & Process

- [The hidden danger of shipping fast](https://newsletter.posthog.com/p/the-hidden-danger-of-shipping-fast) → What to do when product velocity breaks the speed of adoption
- [De l'intuition à la certitude : mieux décider en conception produit ](https://blog.octo.com/de-l'intuition-a-la-certitude--mieux-decider-en-conception-produit) → Concevoir un produit numérique implique de prendre des décisions dans un environnement incertain : contraintes techniques, évolutions des usages, etc. sans compter nos jugements vulnérables aux biais cognitifs. Comment dans ces conditions, prendre des décisions éclairées ?
- [Outsourcing thinking](https://erikjohannes.no/posts/20260130-outsourcing-thinking/index.html) → Challenges the "lump of cognition fallacy" argues that what we think about matters just as much as how much we think. Using LLMs for personal communication, writing, and routine tasks doesn't just redistribute cognitive work: it erodes tacit knowledge, personal voice, and the ownership needed for complex decision-making.

## Learning From the Field

- [Moderniser un legacy conséquent sans y perdre ses plumes - Partie I](https://blog.octo.com/apprivoiser-un-legacy-consequent-sans-y-perdre-les-plumes) and [Partie II](https://blog.octo.com/apprivoiser-un-legacy-consequent-sans-y-perdre-ses-plumes-partie-ii) → La modernisation technique doit être progressive, sécurisée et alignée avec la capacité réelle des équipes. Elle débute par une phase de découverte dont l'objectif est de clarifier ce que l'application ou le service métier est réellement censé faire.
- [AI eats software vendor for breakfast : l'IA cannibalise t-elle le modèle de l'édition logicielle ?](https://blog.octo.com/ai-eats-software-vendor-for-breakfast--l'ia-cannibalise-t-elle-le-modele-de-l'edition-logicielle) → Pour les éditeurs, qui développent des logiciels même très complexes, le risque de disruption par de nouveaux entrants s'appuyant sur l'IA générative est bien réel. Mais cette analyse est-elle toujours valable pour les éditeurs de logiciels évoluant dans des environnements réglementés ?
- ["Made in EU" - it was harder than I thought.](https://www.coinerella.com/made-in-eu-it-was-harder-than-i-thought/) → How to build a startup entirely on European infrastructure. The stack, what was harder than expected, and what you still can't avoid.

## OpenClaw

> OpenClaw (formerlly Clawdbot/Moltbot) is a Personal AI Assistant. But it is not really secure to use.

- [How the Clawdbot/Moltbot AI Assistant Becomes a Backdoor for System Takeover](https://www.straiker.ai/blog/how-the-clawdbot-moltbot-ai-assistant-becomes-a-backdoor-for-system-takeover) → Security research exposes 4,500+ Clawdbot/Moltbot instances leaking API keys and WhatsApp credentials through command injection vulnerabilities
- [Hacking Moltbook: The AI Social Network Any Human Can Control](https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys) → Learn how a misconfigured Supabase database at Moltbook exposed 1.5M API keys, private messages, and user emails, enabling full AI agent takeover.
- [OpenClaw is what Apple Intelligence should have been](https://www.jakequist.com/thoughts/openclaw-is-what-apple-intelligence-should-have-been) → Comparison of OpenClaw capabilities versus Apple Intelligence
- [OpenClaw GitHub Repository](https://github.com/openclaw/openclaw) → Open source AI assistant framework
- [Moltbook is the most interesting place on the internet right now](https://simonwillison.net/2026/Jan/30/moltbook/) → Moltbook is a social network where AI agents talk to each other, installed via markdown skills, bootstrapped through heartbeat tasks
- [Cloudflare Moltworker](https://github.com/cloudflare/moltworker) → Cloudflare Workers integration for Moltbook AI agents

## Security - Notepad++

> Notepad++ supply chain attack reports

- [Notepad++ Hijacked Incident Info Update](https://notepad-plus-plus.org/news/hijacked-incident-info-update/) → Security incident affecting Notepad++ distribution
- [Notepad++ Security Incident Clarification](https://notepad-plus-plus.org/news/clarification-security-incident/) → Official clarification on the Notepad++ security incident
- [Notepad++ Supply Chain Attack Analysis](https://securelist.com/notepad-supply-chain-attack/118708/) → Detailed analysis of the Notepad++ supply chain attack by Kaspersky
