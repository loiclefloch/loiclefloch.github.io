---
title: Newsletter • December 2025
date: 2025-12-01 11:35:00
category: newsletter
permalink: /newsletter/december-2025/
description: "AI trends, cloud optimization, and software dev insights. Gain unique takeaways on AI wrappers, bare metal ROI, and security risks for professional growth"
lang: en
tags: 
---

## Tech Landscape & Trends

What's shifting in technology right now?

- [I Reverse-Engineered 200 AI Startups. 146 Are Selling You Repackaged ChatGPT and Claude with New UI](https://pub.towardsai.net/i-reverse-engineered-200-ai-startups-73-are-lying-a8610acab0d3) → 73% are are just wrappers, merely selling ChatGPT and Claude with a fresh UI. This disconnect between marketing and substance sketches an ecosystem where innovation remains scarce while valuations inflate. Essential reading to understand the actual AI startup landscape
-  [Software Craft and AI](https://www.youtube.com/watch?v=eePuXt7-2bs) → Cyrille Martraire at Paris JUG: deep reflections on craft in the face of AI
-  [How AI will change software engineering](https://newsletter.pragmaticengineer.com/p/martin-fowler) → With Martin Fowler, exploring this inevitable transformation
- [Thoughtworks Technology Radar](https://www.thoughtworks.com/radar) offering a biannual compass on the tech landscape (agents, AI infrastructure, emerging patterns) → "An opinionated guide to today's technology landscape"
- [Blame as a Service](https://www.humaninvariant.com/blog/blame) → How institutions avoid accountability through productized scapegoating
- [Identifying Life-Changing Books with LLMs](https://blog.joellehman.com/identifying-life-changing-books-with-llms.html) → AI beyond code: algorithms identifying transformative insights

### Strategic Infrastructure Moves

- [Anthropic × NVIDIA × Microsoft](https://www.linkedin.com/feed/update/urn:li:activity:7396564879652052992/) → A sweeping strategic alliance: Anthropic commits $30 billion to Microsoft Azure, while NVIDIA and Microsoft respectively invest $10 and $5 billion. Claude becomes the sole frontier model across the three largest cloud services
- [Dassault Systèmes et Mistral AI renforcent leur partenariat](https://www.3ds.com/fr/newsroom/press-releases/new-era-sovereign-ai-dassault-systemes-and-mistral-ai-deepen-their-partnership) → Building a trusted, sovereign AI offering on French infrastructure, combining industrial simulations with cutting-edge models

## Building with AI: From Spec to Code

_Practical frameworks for AI-augmented development_

- [The only guide you'll need for GitHub Spec Kit](https://www.youtube.com/watch?v=a9eR1xsfvHg) → Spec-driven development: Constitution, Specification, Plan, Tasks formalize the journey from requirements to production code
- [Using GitHub Spec Kit with your existing projects](https://www.youtube.com/watch?v=SGHIQTsPzuY) → Retrofit specs into mature codebases, Den Delimarsky's decade-old blog proves specs are reusable across rewrites
- [Augmented Coding Patterns](https://lexler.github.io/augmented-coding-patterns/) →  Collection of emerging patterns, anti-patterns, and obstacles for AI-augmented development. How to collaborate effectively with AI coding assistants
- [MCP Apps: Extending servers with interactive user interfaces](https://blog.modelcontextprotocol.io/posts/2025-11-21-mcp-apps/) → A proposal to standardize how MCP servers deliver user interfaces
- Anthropic is [introducing advanced tool use on the Claude Developer Platform](https://www.anthropic.com/engineering/advanced-tool-use)  → Tool Search, Programmatic Calling, and Tool Use Examples reduce token usage by 85% and improve accuracy to 88%
- [Windsurf Codemaps: Understand Code, Before You Vibe It](https://cognition.ai/blog/codemaps) →  Revolutionary feature for navigating and understanding complex codebases through visual, interactive hierarchical maps
- [Is AI Creating a New Code Review Bottleneck for Senior Engineers?](https://thenewstack.io/is-ai-creating-a-new-code-review-bottleneck-for-senior-engineers/) → Reflection on how AI-generated code reshapes review dynamics
- [Token-Oriented Object Notation (TOON)](https://github.com/toon-format/toon) → Serialization format for LLMs with drastic token consumption reduction
- [We ran over 600 image generations to compare AI models](https://latenitesoft.com/blog/evaluating-frontier-ai-image-generation-models/) → Experimental evaluation of frontier AI image models

## Web & JavaScript Mastery
_Frontend and ecosystem deep dives_

- [Your URL Is Your State](https://alfy.blog/2025/10/31/your-url-is-your-state.html) → How to leverage the elegant simplicity of URLs as state containers: shareability, bookmarkability, browser history. Modern patterns and anti-patterns to avoid
- [The Inner Workings of JavaScript Source Maps](https://www.polarsignals.com/blog/posts/2025/11/04/javascript-source-maps-internals) → A deep dive into the internal mechanics of source maps, essential for understanding modern debugging
- [Facebook.com has 140 layers of context providers](https://www.reddit.com/r/reactjs/comments/1onblrs/facebookcom_has_140_layers_of_context_providers/) → An anthropologically fascinating look at how the world's largest React application manages fragmented state, and why
- [Using Atomic State to Improve React Performance in Deeply Nested Component Trees](https://runharbor.com/blog/2025-10-26-improving-deeply-nested-react-render-performance-with-jotai-atomic-state) → Jotai patterns to unlock performance in complex component hierarchies
- [Using Model Context Protocol (MCP) with Expo](https://docs.expo.dev/eas/ai/mcp/) →  Elevate mobile workflow productivity with MCP server orchestration capabilities
- [Next.js 16](https://nextjs.org/blog/next-16) → New capabilities for the popular React framework. Discover what's changed and how it accelerates your workflow. [Everything new in Next.js 16](https://appwrite.io/blog/post/everything-new-in-nextjs16)

## Infrastructure & Economics
_Decisions that impact your bottom line_

### The Great Cloud Reckoning
These narratives draw a heavy trend: cloud is often no longer the answer. Teams are measuring precisely. Bare metal, when load is stable and predictable, delivers reductions of order 10x with restored reliability.

- [Send this article to your friend who still thinks the cloud is a good idea](https://rameerez.com/send-this-article-to-your-friend-who-still-thinks-the-cloud-is-a-good-idea/) → A blunt dive into why AWS, despite its promises, remains oversized for most needs. Numbers-driven, no sugar-coating
- [AWS to Bare Metal Two Years Later: Answering Your Toughest Questions About Leaving AWS](https://oneuptime.com/blog/post/2025-10-29-aws-to-bare-metal-two-years-later/view)  → ROI confirmed, networks built, 76% savings realized, availability measured at 99.993%, and honest questions: when cloud still makes sense, when it doesn't
- [How We Saved $500,000 Per Year by Rolling Our Own “S3”](https://engineering.nanit.com/how-we-saved-500-000-per-year-by-rolling-our-own-s3-6caec1ee1143) → In-house storage engineering: drastic reduction without sacrificing resilience
- [Migrating to Hetzner](https://digitalsociety.coop/posts/migrating-to-hetzner-cloud/) → Leaving AWS and DigitalOcean for Hetzner: 76% bill reduction for triple the capacity
- [2x Performance, $300k Savings: A Case Study in Rewriting a Critical Service in Rust](https://wxiaoyun.com/blog/rust-rewrite-case-study/) → When low-level languages become the secret weapon of optimization

### The Human Factor

- [This Is How Much Anthropic and Cursor Spend On Amazon Web Services](https://www.wheresyoured.at/costs/) → Raw numbers on infrastructure costs for AI giants
- [Claude Opus 4.5](https://www.anthropic.com/news/claude-opus-4-5) → Anthropic's most capable model combines advanced reasoning with practical performance. Proven excellence in autonomous coding and complex project management
- [Introducing Uniwind - the fastest Tailwind bindings for React Native](https://www.reactnativecrossroads.com/posts/introducing-uniwind-the-fastest-tailwind-bindings-for-react-native) → A fast solution to use Tailwind with React Native

## Craft & Quality: Do It Right
_Principles that make sustainable software_

### Code Architecture

- [Structuring Use Cases in Clean Architecture as Conversations with the User](https://medium.com/unil-ci-software-engineering/structuring-use-cases-in-clean-architecture-as-conversations-with-the-user-a91a7c517ac2) → A human and practical approach to clean architecture
- [Architectural debt is not just technical debt](https://frederickvanbrabant.com/blog/2025-10-31-architectural-debt-is-not-just-technical-debt/) → Why architectural debt deserves particular strategic attention
- [Experiment: making TypeScript immutable-by-default](https://evanhahn.com/typescript-immutability-experiment/) → an experiment in improving code quality. When immutability becomes the norm, we can see dramatic improvement in code quality, reduction in subtle bugs. I have think for a long time that immutability by default would help having better codebase. Happy to see this post taking try at it
- [Clarifying the Rule of Three in Refactoring](https://blog.thecodewhisperer.com/permalink/clarifying-the-rule-of-three-in-refactoring) → Debunking a frequently misunderstood but powerful heuristic

### Process & Collaboration
- [The (lazy) Git UI You Didn't Know You Need](https://www.bwplotka.dev/2025/lazygit/) → Discover why this TUI tool transforms your daily relationship with Git. Highly recommended, i am a Big fan of this tool
- [Mistakes I see engineers making in their code reviews](https://www.seangoedecke.com/good-code-reviews) → Lessons from an experienced reviewer on what makes reviews good versus friction-inducing
- [smartcommit](https://github.com/arpxspace/smartcommit) → Enforce self-documenting code through structured commit messages
- [gitlogue](https://github.com/unhappychoice/gitlogue) → Cinematic replay of Git history: transform your history into an animated narrative

### Performance & Accessibility

- [The History of Core Web Vitals](https://addyosmani.com/blog/core-web-vitals/) → Understand the evolution of web performance metrics that shape the modern web
- [Tactics to End Dark Patterns in App and Web Development](https://thenewstack.io/tactics-to-end-dark-patterns-in-app-and-web-development/) → How to build ethical, user-respectful interfaces
- [How to create accessible PDFs from the start](https://typst.app/blog/2025/accessible-pdf/) → Accessibility principles applied to PDFs: a practical resource
- [Pikaday](https://pikaday.dbushell.com/) → Explore and understand modern date selection components

## Learning From the Field: Case Studies
_Real incidents and lessons_

### From the Trenches

- [Cloudflare outage post mortem](https://blog.cloudflare.com/18-november-2025-outage/) → Analysis of the major incident that impacted a significant portion of the web
- [How we built the v0 iOS app](https://vercel.com/blog/how-we-built-the-v0-ios-app) → Anatomy of a high-level product application
- [Not so "mini"-dumps: How we found missing crashes on SteamOS](https://blog.sentry.io/not-so-mini-dumps-how-we-found-missing-crashes-on-steamos/) → How Sentry tracked down missing crashes on SteamOS, a technically rich investigation
- [Netflix’s Engineering Culture](https://newsletter.pragmaticengineer.com/p/netflix) → Deep dive into the engineering culture that shaped Netflix

### Ecosystem Decisions
- [Why we migrated from Python to Node.js](https://blog.yakkomajuri.com/blog/python-to-node) → Experience report on tradeoffs between two major ecosystems
- [How often does Python allocate?](https://zackoverflow.dev/writing/how-often-does-python-allocate/) → Deep dive into Python's internal memory management
- [The bug that taught me more about PyTorch than years of using it](https://elanapearl.github.io/blog/2025/the-bug-that-taught-me-pytorch/) → A debugging saga that goes down to GPU kernels, a true masterclass

## Security & Alignment: Trust Issues
_When to be cautious_

### AI System Failures
- [Disrupting the first reported AI-orchestrated cyber espionage campaign](https://www.anthropic.com/news/disrupting-AI-espionage) → Anthropic's analysis of a coordinated attack
- [I caught Google Gemini using my data - and then covering it up](https://unbuffered.stream/gemini-personal-context/) →  Gemini hides Personal Context feature and lies about privacy violations, exposing systemic misalignment
- [Google Antigravity Exfiltrates Data](https://www.promptarmor.com/resources/google-antigravity-exfiltrates-data) → Indirect prompt injection in implementation blog manipulates Antigravity to steal credentials and sensitive code from users' IDEs
- [How We Hijacked a Claude Skill with an Invisible Sentence](https://securetrajectories.substack.com/p/claude-skill-hijack-invisible-sentence) → Sophisticated prompt injection

### Application Security & Supply Chain
- [supercookie](https://supercookie.me/workwise) → Persistent tracking technique redefining what's possible
- [Shai-Hulud 2.0 Supply Chain Attack: 25K+ Repos Exposing Secrets](https://www.wiz.io/blog/shai-hulud-2-0-ongoing-supply-chain-attack) → 25k+ repos compromised exposing secrets. A self-replicating worm on npm: hard lesson on the fragility of modern supply chains
- [Startup Security: Ratios and a 24-Month Hiring Plan](https://theporkskewer.medium.com/startup-security-ratios-and-a-24-month-hiring-plan-83792b7491af) → Practical plan to build a security team without burnout
- [How 73 of Your E-commerce Visitors Could Be Fake](https://joindatacops.com/resources/how-73-of-your-e-commerce-visitors-could-be-fake) → The pitfalls of fraudulent traffic: botnets, poisoned data, and much more

## Tooling & Ecosystem
_Accelerators for your workflow_

### Development Foundations

- [uv is the best thing to happen to the Python ecosystem in a decade](https://emily.space/posts/251023-uv) → Why uv revolutionizes the Python developer experience
- [django-keel](https://github.com/CuriousLearner/django-keel) → Production-ready Django template for SaaS, APIs, web apps, or internal tools. A decade of best practices condensed
- [WordPress Deep Dive](https://wiktorjarosz.com/wordpress/introduction/) → Comprehensive resource for exploring WordPress in depth
- [safe-npm](https://github.com/kevinslin/safe-npm) → Safely install NPM packages
- [postgresus](https://github.com/RostislavDugin/postgresus/) → PostgreSQL backup tool
- [Obsidian import from Notion](https://help.obsidian.md/import/notion) → Transparent migration

### Quality & Visibility

- [A heatmap diff viewer for code reviews](https://0github.com/) → Visualize changes
- [lighthouseapp](https://lighthouseapp.io/)  → Performance monitoring
- [forgithub](https://forgithub.com/) → GitHub utilities
- [What If We Had GPS Inside?](https://blog.octo.com/et-si-on-avait-un-gps...-a-l'interieur) → Exploration of internal spatial orientation and its applications

### Tools & Editors
- [Zed is our office](https://zed.dev/blog/zed-is-our-office) → An editor redefining what collaborative development means
- [Antigravity](https://antigravity.google/) → Google's VsCode fork for AI, will it replace Cursor ?

## Processes That Scale
_Team dynamics and rituals_

- [Why Scrum Fails in So Many Teams](https://www.youtube.com/watch?v=Yhu6yNsHEjg&list=PL-C4sc6sJMtZK1-KO0husD0hUkIUDYMOP) → Candid reflection on structural reasons
- [Why your retrospectives don't work and how to fix them](https://www.lucasfcosta.com/blog/retrospectives) → Practical lessons for turning this ritual into real leverage
- [Do You Really Know OKRs? Tips for Getting Started](https://blog.octo.com/connaissez-vous-vraiment-les-okr-quelques-astuces-pour-bien-demarrer) → Practical guidance for beginning with objectives

## Gaming Systems & Simulations
_Gaming, social experiments, and human behaviors at scale_

- ["It's not esports, it's the FGC"](https://www.youtube.com/watch?v=gv5tzFa2yBg) → Deep dive into Fighting Game Community history, arcade culture, and competitive evolution from Street Fighter origins to modern legends.
- ["1000 Players Simulate Civilization: Rich & Poor"](https://www.youtube.com/watch?v=ef568d0CrRY) → Epic Minecraft social experiment: 1000 players form civilizations across rich/poor islands over 10 days, revealing emergent societies, alliances, and conflict.
- [Valve is about to win the console generation](https://xeiaso.net/blog/2025/valve-is-about-to-win-the-console-generation/) → Strategic analysis: why Valve's positioning could redefine the gaming industry
- [Steam Machine](https://store.steampowered.com/sale/steammachine) → The future of gaming hardware
- [I turned the Lego Game Boy into a working Game Boy part. 1](https://blog.nataliethenerd.com/i-turned-the-lego-game-boy-into-a-working-game-boy-part-1/) → A fascinating hardware project where Lego becomes functional reality
- [Subway builder](https://www.subwaybuilder.com/) → An addictive game: become an urban planner and create the metro your city deserves
- [A Good Enough Guestbook](https://guestbook.goodenough.us/) → Gallery of all the wonderful drawings received by a small connected printer

## Brief Events & Quick Reads
_Don't miss these_

- [Advent of code 2025](https://adventofcode.com/2025/about#faq_num_days) → The annual developer gathering returns, but this year with only [12 puzzles](https://adventofcode.com/2025/about#faq_num_days) instead of the usual 25, ending mid-December
- [La Duck Conf : Découvrez les premiers speakers !](https://blog.octo.com/la-duck-conf--decouvrez-les-premier-speakers-!) → France's flagship tech event reveals its lineup

## Design & Nostalgia

- [IKEA catalogue](https://ikeamuseum.com/en/explore/ikea-catalogue/) → Revisit IKEA catalogues from 1950 onward, a window into design of yesteryear
- [The art of atari](http://www.artofatari.com/) → Cultural dive into vintage gaming aesthetics

