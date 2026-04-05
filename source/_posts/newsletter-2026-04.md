---
title: "Newsletter #21 • April 2026"
date: 2026-04-05 12:34:00
category: newsletter
permalink: /newsletter/april-2026/
description: "April 2026: Harness Engineering emerges as AI forces code quality best practices, agentic coding workflows reshape development, security vulnerabilities in AI platforms, and architectural fundamentals matter more than ever. Plus: AI's impact on SaaS products, code review transformation, and the future of software craftsmanship."
lang: en
tags:
---

## Building with AI - Harness Engineering

AI amplifies your codebase's worst tendencies. The optional best practices that humans always cut under pressure become mandatory for AI.

Harness Engineering is the art of building self-improving constraint systems for AI agents. It's not about making agents smarter, it's about making the environment so well-designed that even a "dumb" agent can't produce bad code. The harness becomes the codebase's immune system, automatically detecting and correcting drift while agents generate at superhuman speed.

The New Non-Negotiables:

1. **100% Code Coverage**: Not for bug prevention, but to guarantee agents double-check every line they wrote. At 100%, the coverage report becomes a simple todo list with zero ambiguity.
2. **Thoughtful File Naming & Structure**: Agents navigate via filesystem. ./billing/invoices/compute.ts communicates infinitely more than ./utils/helpers.ts.
3. **Fast, Ephemeral, Concurrent Dev Environments**: Agents need short feedback loops (tests run in ~1 minute, not 30) and isolated environments (git worktrees, per-branch databases).
4. **End-to-End Types**: TypeScript everywhere, OpenAPI-generated clients, Postgres types mapped to TypeScript. Types shrink the search space and eliminate illegal states.
5. **Small, Well-Scoped Files**: Agents summarize/truncate large files. Small files load fully into context.

> "Often, when teams struggle with agentic coding, it's AI reflecting and amplifying their codebase's worst tendencies."

Harness = Context Engineering + Architectural Constraints + Garbage Collection

Planning (human-approved)
→ Test Generation (agent, TDD)
→ Implementation (agent, minimal code)
→ Adversarial Review (fresh context, zero tolerance)
→ Formal Verification (pure core)
→ Feedback Loop (update docs/linters/tests)

To learn more about Harness Engineering:

- [The Emerging "Harness Engineering" Playbook](https://www.ignorance.ai/p/the-emerging-harness-engineering) → Explore how AI code generation shifts engineering toward harness building, verification systems, and orchestrating autonomous agents
- [Harness Engineering](https://martinfowler.com/articles/exploring-gen-ai/harness-engineering.html) → Learn a framework for harness engineering: building the infrastructure that makes AI-generated code production-ready and maintainable
- [Harness engineering: leveraging Codex in an agent-first world](https://openai.com/index/harness-engineering/) → Understand how harness engineering enables AI agents to write production code by designing verification systems and guardrails
- [AI Is Forcing Us To Write Good Code](https://bits.logic.inc/p/ai-is-forcing-us-to-write-good-code) → Discover how AI code generation makes clean architecture and readable code essential since AI learns from your patterns
- [Verified Spec-Driven Development](https://gist.github.com/dollspace-gay/d8d3bc3ecf4188df049d7a4726bb2a00) → Explore a development methodology where AI agents generate formally verified code from specifications to guarantee correctness
- [Les LLMs savent coder. Mais savent-ils maintenir ?](https://blog.lepine.pro/les-llms-savent-coder-mais-savent-ils-maintenir) → Découvrez pourquoi les LLMs excellent en code jetable mais peinent encore sur la maintenance long terme de projets complexes

## Building with AI - Agents & Automation

- [The 8 Levels of Agentic Engineering](https://www.bassimeledath.com/blog/levels-of-agentic-engineering) → Discover the progression from manual coding to fully autonomous AI agents across eight levels of engineering complexity
- [Building Claude Code with Boris Cherny](https://newsletter.pragmaticengineer.com/p/building-claude-code-with-boris-cherny) → See how Anthropic built Claude Code's multi-agent system, achieving 90% success rates on complex engineering tasks
- [Personal Software](https://leerob.com/personal-software) → Discover how personal AI agents will create custom software tailored to your unique needs and workflows

## AI & People & Process

- [How AI Will Reshape Public Opinion](https://www.conspicuouscognition.com/p/how-ai-will-reshape-public-opinion) → Understand how AI-powered persuasion and personalized content will fundamentally alter how public opinion forms and spreads
- [The looming AI clownpocalypse](https://honnibal.dev/blog/clownpocalypse) → Examine the risks of AI-generated code flooding the internet with low-quality content and eroding software reliability
- [Will Features Even Exist? How AI Is Forcing SaaS To Rethink The Product Itself](https://news.crunchbase.com/enterprise/ai-forcing-saas-to-rethink-product-sagie/) → Explore how AI transforms SaaS from feature factories to personalized experiences that adapt to each user's unique needs
- [Software Craftsmanship in the AI Era](https://www.codurance.com/publications/software-craftsmanship-in-the-ai-era) → Examine how software craftsmanship principles remain essential as AI shifts our role from code writers to architects and reviewers
- [Coding After Coders: The End of Computer Programming as We Know It](https://www.nytimes.com/2026/03/12/magazine/ai-coding-programming-jobs-claude-chatgpt.html) → Explore how AI coding assistants are transforming software development from writing code to directing intelligent agents
- [How to Kill the Code Review](https://www.latent.space/p/reviews-dead) → Examine how AI assistants are transforming code review from manual inspection to automated quality gates and verification systems
- [My AI Adoption Journey](https://mitchellh.com/writing/my-ai-adoption-journey#step-5-engineer-the-harness) → Learn Mitchell Hashimoto's five-stage journey from AI skeptic to builder, including practical steps for effective AI adoption

## Security

- [How We Hacked McKinsey's AI Platform](https://codewall.ai/blog/how-we-hacked-mckinseys-ai-platform) → Learn how researchers exploited prompt injection vulnerabilities in McKinsey's Lilli AI platform to extract sensitive documents
- [We are building data breach machines and nobody cares](https://idealloc.me/posts/we-are-building-data-breach-machines-and-nobody-cares/) → Examine how modern software systems are designed with security vulnerabilities by default, making breaches inevitable
- [Anthropic won't kill cyber, but it may kill some companies](https://ventureinsecurity.net/p/anthropic-wont-kill-cyber-but-it) → Examine how AI-powered security tools from Anthropic will disrupt cybersecurity vendors but not eliminate the need for security
- [How to steal npm publish tokens by opening GitHub issues](https://neciudan.dev/cline-ci-got-compromised-here-is-how) → Learn how attackers exploited GitHub Actions workflows to steal npm publish tokens through malicious issue creation
- [TruffleHog](https://github.com/trufflesecurity/trufflehog) → Find and verify leaked credentials across Git repos, Docker images, filesystems with 800+ detectors and API validation

## WebCraft, Architecture & Human Skills

- [The Illusion of Building](https://uphack.io/blog/post/the-illusion-of-building/) → Understand why chasing trends and tools creates an illusion of progress while mastering fundamentals builds real lasting value
- [The two kinds of error](https://evanhahn.com/the-two-kinds-of-error/) → Understand the critical difference between recoverable errors that users can fix and unrecoverable bugs that developers must address
- [Stop Using Pull Requests](https://a4al6a.substack.com/p/stop-using-pull-requests) → Explore alternative development workflows that replace pull requests with trunk-based development and continuous integration
- [The purpose of Continuous Integration is to fail](https://blog.nix-ci.com/post/2026-02-05_the-purpose-of-ci-is-to-fail) → Understand why CI systems should fail fast and often, catching integration issues before they reach production
- [The Middle Loop](https://annievella.com/posts/the-middle-loop/) → Learn about the middle loop between writing and deploying code: testing, debugging, and iteration often forgotten in developer tools

- ["All Lawful Use": Much More Than You Wanted To Know](https://www.astralcodexten.com/p/all-lawful-use-much-more-than-you) → Examine the legal and ethical implications of AI training data and the "all lawful use" licensing framework

## Tooling & Ecosystem

- [Orbital data centers, part 1 There's no way this is economically viable, right?](https://arstechnica.com/space/2026/03/orbital-data-centers-part-1-theres-no-way-this-is-economically-viable-right) → Explore the economics and technical challenges of building data centers in orbit for energy and cooling advantages
- [backnotprop/plannotator: Annotate and review coding agent plans and code diffs visually, share with your team, send feedback to agents with one click.](https://github.com/backnotprop/plannotator) → Review and annotate AI agent plans visually, share with your team, and send feedback with one click
- [Temporal: The 9-Year Journey to Fix Time in JavaScript](https://bloomberg.github.io/js-blog/post/temporal/) → Discover why JavaScript's Date API is fundamentally broken and how Temporal's 9-year journey will finally fix time handling
- [The Pulse: Cloudflare rewrites Next.js as AI rewrites commercial open source](https://newsletter.pragmaticengineer.com/p/the-pulse-cloudflare-rewrites-nextjs) → Learn why Cloudflare rewrote Next.js in Rust and how AI is disrupting commercial open source sustainability models

## Architecture

- [Les tests d'architecture logicielle : 4 exemples pour les adopter](https://blog.octo.com/les-tests-d'architecture--4-exemples-pour-les-adopter.) → Découvrez 4 exemples pratiques de tests d'architecture pour garantir la conformité de votre code aux règles de conception
- [Algebraic Effects: From Callbacks and Promises to Effect Handlers](https://helabenkhalfallah.com/2026/03/10/algebraic-effects-from-callbacks-and-promises-to-effect-handlers/) → Explore algebraic effects as the next evolution in async programming beyond callbacks, promises, and async/await
