---
title: "Building Inkwell with BMAD Method: A Greenfield Development Story"
date: 2026-01-12 20:21:00
permalink: /building-inkwell-with-bmad
description: "How I used BMAD methodology to build a personal e-ink reading tool for my Obsidian vault in record time, with clean architecture and zero scope creep."
tags: [bmad, obsidian, development, spec-driven-development, methodology]
image: /images/building-inkwell-with-bmad/inkwell-homepage.png
---

## The Problem: Reading on the Wrong Device

I have a confession: I had 30 browser tabs in Arc for articles I wanted to read.

Not just any tabs-these were articles I _really_ wanted to read. React Server Components deep-dives. TypeScript performance guides. D&D campaign design tips. Every week I'd discover dozens of interesting articles across my various interests (tech, writing, plants, D&D, yoga), save them to Arc, and promise myself I'd read them "later.".

The problem? "Later" meant reading on my MacBook screen. And after a whole day of coding, the last thing I wanted was more blue light burning my retinas. Plus, I wanted to save the relevant articles on my Obsidian Second Brain.

I am a big reader, and I have an e-reader. It's perfect for reading-no eye strain, comfortable for hours, great for focused deep reading. But my workflow was broken:

- **Discovery**: Happens everywhere (phone, laptop, random scrolling)
- **Processing**: Requires my laptop with Obsidian Web Clipper plugin to add articles to my Second Brain
- **Reading**: Forced to happen on Mac because articles were locked there

I tried everything:

- **Commercial read-it-later services** (Pocket, Instapaper, Omnivore): Data silos separate from my Obsidian vault. Plus, Omnivore shut down-proving vendor lock-in is real. It broke my little hearth.
- **Self-hosted alternatives** (Wallabag, Readeck): Still separate from my knowledge base, extra systems to maintain.
- **Direct Obsidian mobile sync**: My vault is too large, git sync breaks on Android, and before Obsidian Bases, it was not really made for a reading queue.
- **Browser tabs**: Fragile, device-locked, anxiety-inducing, laptop only.

I wanted to keep Obsidian, because this is my Second Brain, and where I am writing my Newsletter and blog posts.
And I needed something that would let me read my Obsidian articles on my e-reader, without creating another data silo or adding maintenance burden.

So I built it. It was a good opportunity to test the BMAD Method.

## The Solution: Inkwell

**Inkwell** is a server-side rendered web app that creates a thin reading layer over my Obsidian vault. It's deliberately simple:

- I process links through my existing Obsidian Web Clipper workflow on my laptop
- Articles sync automatically from GitHub (where my vault lives)
- I read them on my Boox e-reader via a clean, optimized web interface
- Mark as read with one tap, which updates the markdown tags
- I can use a Telegram bot to share URLs from my phone

>[!INSIGHT]
>**Obsidian remains the source of truth**. The reader is just a view. If this tool disappears tomorrow, I lose nothing-every article is in my vault, in markdown, in git.

Built with React Router v7, TypeScript, Tailwind, deployed to fly.io. About 2000 lines of code total. Clean, maintainable, focused.

But here's the real story: **how BMAD helped me build this in a fraction of the time it would have taken otherwise.**

![Inkwell homepage, listing articles to read](/images/building-inkwell-with-bmad/inkwell-homepage.png)

## Enter BMAD: Breakthrough Method for Agile AI-Driven Development

**BMAD** (Breakthrough Method for Agile AI-Driven Development) is a structured development methodology designed specifically for AI-assisted coding. Think of it as a workflow framework that guides you (and your AI pair programmer) through the complete software development lifecycle.

The core insight: **AI assistants are amazing at implementation but terrible at figuring out what to build.** They'll happily code whatever you ask for, even if it's the wrong thing. BMAD solves this by forcing you to think _before_ you code.

This is what Github Spec-Kit is doing as well, which I already tested with [building an Exam Prep App in 12 Hours with AI and Spec-First Development](/spec-kit-cappei-quest/).

But BMAD is much more advanced  with 21 specialized agents and 50+ guided workflows. 

### BMAD Phases

BMAD breaks development into four distinct phases:

1. **Analysis**: What problem are we actually solving? Who's it for?
2. **Planning**: What exactly should we build? What are the requirements?
3. **Solutioning**: How should we architect this? What's the technical approach?
4. **Implementation**: Now build it, with clear specs to guide AI.

Each phase produces artifacts-documents that capture decisions, requirements, and technical specs. These artifacts serve multiple purposes:

- They force you to think deeply before coding
- They give AI clear, unambiguous instructions
- They prevent scope creep (you committed to specific requirements)
- They document decisions for future-you who forgets why things work the way they do

For greenfield projects like Inkwell, BMAD is particularly powerful: **you start with a blank canvas and structure your thinking to build exactly what you need, not a bloated mess of "what if" features.**

## The BMAD Journey: Building Inkwell

Let me walk you through how BMAD guided this project from "I have a problem" to "I have a solution deployed to production."

### Phase 1: Analysis – Understanding the Problem

**Artifact created**: Product Brief - [`_bmad-output/planning-artifacts/product-brief-inkwell-2026-01-06.md`](/building-inkwell-with-bmad/output/product-brief)

The Analysis phase started with a brainstorming session. BMAD's analyst agent asked some questions:

- What exactly is frustrating about your current workflow?
- Who is this tool for? (Spoiler: just me, but that's important to articulate)
- What have you already tried? Why didn't those solutions work?
- What would success look like?

This produced a **Product Brief** that crystallized the problem:

```markdown
## Problem Statement

Tech professionals who curate monthly newsletters or maintain knowledge bases
face a critical workflow fragmentation: article discovery happens across devices
(phone, laptop), but processing requires specific tools (Obsidian Web Clipper on
laptop), and comfortable reading demands different devices (e-ink readers, phones).

Current solutions force uncomfortable tradeoffs:

- Browser tab queues are fragile and device-locked
- Third-party read-it-later services create data silos separate from knowledge bases
- Syncing full Obsidian vaults to mobile devices fails due to size and git compatibility
- Generic tools don't integrate with existing, refined workflows

The result: friction at every step, fear of data loss, and inability to read
comfortably on preferred devices.
```

> [!INSIGHT]
>This wasn't about building a generic read-it-later service. It was about **extending my existing Obsidian workflow** to work across devices without creating a separate data silo. That distinction shaped every subsequent decision.

The Product Brief also defined success metrics that would guide priorities:

- 5+ days per week usage
- 80% of reading shifted from Mac to e-reader
- Maintenance under a few hours per month
- Newsletter curation time reduced from 2 days to 1 day per month

These concrete metrics prevented me from building features I didn't need. "Would this help achieve 80% device shift?" became the filter for every feature idea.

### Phase 2: Planning – What to Build

**Artifact created**: Product Requirements Document (PRD) - [`_bmad-output/planning-artifacts/prd.md`](/building-inkwell-with-bmad/output/product-brief)

With the problem understood, BMAD's PM agent worked with me to create a comprehensive PRD. This was where BMAD really shined-it forced me to define _exactly_ what MVP meant.

The PRD included detailed **user journeys** that made abstract requirements concrete:

```markdown
## Journey 1: The Relief Journey - Week One

It's Monday morning, and Loic stares at his Arc browser with 30 open tabs in
the "Reading" space. Three tabs are articles he meant to read two weeks ago but
forgot about. Five are duplicates because he couldn't remember if he'd already
saved them. He feels the familiar knot of anxiety - one crash and they're all gone.

He decides today is the day to try inkwell. He sets up the Telegram
bot in 5 minutes, shares his first article from his phone during his morning
coffee. The bot confirms: "Saved." That simple word feels significant.

By Tuesday evening, he's processed 12 queued URLs from Telegram through his
usual Web Clipper workflow into Obsidian. Nothing about his existing routine
changed - he just added a reliable queue before it. Wednesday morning, he opens
the reader URL on his Boox...
```

Writing these journeys was transformative. Instead of thinking "I need a Telegram bot," I thought "I need to find a way to capture an article from my phone." The technical implementation became a means to an emotional outcome.

The PRD also explicitly defined **out-of-scope features**:

```markdown
## Explicitly Out of Scope for MVP:

- AI-assisted summary generation
- Persistent storage for Telegram bot links
- Reading statistics dashboard
- Offline/PWA support
```

Every time I thought "wouldn't it be cool if..." during development, I checked this list. If it was out of scope, I wrote it down for v1.1 and kept moving. **BMAD prevented scope creep by making me commit to a specific MVP scope upfront.**

### Phase 3: Solutioning – How to Build It

**Artifacts created**:

- Epics & Stories - [`_bmad-output/planning-artifacts/prd.md`](/building-inkwell-with-bmad/output/product-brief)
- Tech Spec - [`_bmad-output/implementation-artifacts/tech-spec-inkwell-mvp-e2e.md`](/building-inkwell-with-bmad/output/tech-specs)


With requirements clear, BMAD moved to technical planning. This phase produced two critical artifacts:

#### Epics Breakdown

The PM agent broke the PRD into implementable epics:

```markdown
## Requirements Inventory

### Functional Requirements

FR1: System shall provide Telegram bot integration that accepts article URLs
from any device and displays queued links in chat

FR2: System shall connect to user's Obsidian vault GitHub repository and read
markdown files from `1. Inbox/clippings/` folder

FR3: System shall detect and display articles tagged with `#to-read` tag

[... 12 functional requirements total ...]

### Non-Functional Requirements

NFR1: System shall load pages via SSR in under 2 seconds on e-ink devices

NFR2: System shall implement in-memory caching with 15-minute TTL to respect
GitHub API rate limits (5000 requests/hour)

[... 12 non-functional requirements total ...]
```

This inventory gave me a checklist. I could work through requirements systematically rather than randomly implementing whatever seemed interesting.

#### Technical Specification

The tech spec was where the architecture came together. BMAD's architect worked through:

**Technology Stack Decisions:**

```yaml
tech_stack:
  - React Router v7 (SSR capabilities)
  - TypeScript (strict mode)
  - Tailwind CSS v3+ (custom e-ink theme)
  - shadcn UI (Radix UI primitives)
  - Octokit (GitHub REST API)
  - Telegraf (Telegram Bot API)
  - fly.io (deployment)
```

**Critical Architectural Decisions:**

- Stateless application (no database)
- GitHub repository as single source of truth
- In-memory caching with 15-minute TTL for GitHub API
- Session-based auth with HTTP-only cookies
- Server-side rendering for fast e-ink loads

**Code Patterns:**

```typescript
// GitHub API Client Pattern with caching
const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_TTL = 15 * 60 * 1000; // 15 minutes
const CACHE_MAX_SIZE = 100; // FIFO eviction

export async function getArticles() {
  const cacheKey = "articles-list";
  const cached = cache.get(cacheKey);

  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }

  // Fetch from GitHub, check rate limits, cache result...
}
```

The tech spec even included file structure:

```
app/
├── routes/
│   ├── _index.tsx              # Redirect to /articles or /login
│   ├── login.tsx               # Login page
│   ├── articles._index.tsx     # Article list (protected)
│   ├── articles.$slug.tsx      # Article reader (protected)
│   └── api.telegram.tsx        # Telegram webhook endpoint
├── lib/
│   ├── github.server.ts        # GitHub API client (server-only)
│   ├── telegram.server.ts      # Telegram bot client
│   ├── auth.server.ts          # Auth utilities
│   └── markdown.server.ts      # Markdown parser
```

**This is where BMAD delivered massive value**: By the time I finished the Solutioning phase, I had a complete implementation plan. I knew exactly what to build, how to structure it, what patterns to use, and what libraries to install.

### Phase 4: Implementation – Finally, Code!

With three phases of planning complete, implementation was really fast.

I used BMAD's dev agent with the tech spec as input. Instead of vague requests like "build a reading app," I could say:

> "Implement the GitHub API client according to the tech spec. Use the caching pattern defined in section 3.2, respect the rate limit handling from NFR2, and follow the code structure in the project patterns section."

The AI had _context_. It knew:

- Exactly what features to build (from PRD)
- How to architect them (from tech spec)
- What patterns to follow (from code examples)
- What trade-offs were intentional (from decision records)

**Results:**

- ~2000 lines of TypeScript
- 8 route files, 6 server utility modules
- Complete feature implementation
- Deployed to fly.io
- Zero scope creep
- Built in a focused development session

Here's a snippet of the clean implementation that resulted:

```typescript
// app/routes/articles._index.tsx
import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { requireAuth } from '~/lib/auth.server';
import { getToReadArticles } from '~/lib/articles.server';

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAuth(request);
  const articles = await getToReadArticles();
  return json({ articles });
}

export default function ArticlesIndex() {
  const { articles } = useLoaderData<typeof loader>();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Reading Queue</h1>
      <div className="space-y-4">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
```

Clean. Simple. Exactly what the spec called for, nothing more.

## Technical Deep-Dive: The Implementation

Let me highlight a few technical decisions that made this project successful:

### 1. Stateless Architecture

The decision to keep this stateless (no database) was crucial for maintainability:

```typescript
// No database - GitHub is the source of truth
export async function getToReadArticles() {
  const files = await githubClient.getContent("1. Inbox/clippings");
  const articles = await Promise.all(
    files.map(async (file) => {
      const content = await githubClient.getFile(file.path);
      const parsed = parseMarkdown(content);
      return parsed.tags.includes("to-read") ? parsed : null;
    }),
  );
  return articles.filter(Boolean);
}
```

Every article exists as markdown in GitHub. The app just reads and displays. If the app dies, I lose nothing. This architectural constraint (enforced by BMAD planning) prevented me from building complex state management I didn't need.

### 2. E-ink Optimization

The PRD specified e-ink optimization, which translated to specific technical choices:

```typescript
// tailwind.config.ts - E-ink optimized theme
const config: Config = {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // High contrast for e-ink
        "eink-bg": "#ffffff",
        "eink-text": "#000000",
        "eink-gray": "#666666",
      },
      fontFamily: {
        // Some great font for reading, same as my blog
        sans: ['"Open Sans"', "system-ui", "sans-serif"],
        eink: ['"Open Sans"', "system-ui", "sans-serif"],
      },
    },
  },
  // typography plugin to style content of the articles
  plugins: [require("@tailwindcss/typography")],
};
```

Because the tech spec explicitly called out "minimal UI chrome, no animations, high contrast," I didn't waste time making things fancy. I built for the actual use case.

### 3. Smart Caching Strategy

The GitHub API has rate limits (5000 requests/hour). The tech spec defined a caching strategy:

This simple in-memory cache means I can load the article list hundreds of times without hitting rate limits. When I mark an article as read, I clear the cache for that entry, forcing a fresh fetch.


## Results: Does It Work?

After implementing the MVP according to the BMAD artifacts:

**Technical Success:**

- Deployed to fly.io in minutes
- SSR pages load in ~1 second on my e-reader
- GitHub API caching works perfectly
- E-ink rendering is crisp and readable
- Zero maintenance issues so far

**Workflow Success:**

- I closed those 30 Arc tabs permanently
- Capturing articles from phone is frictionless
- Reading on Boox is comfortable and distraction-free
- Already reading multiple articles a day on the e-reader
- Newsletter curation feels easier: I can tag an article as to include in my next newsletter

**The BMAD Difference:**

What BMAD gave me that I wouldn't have had otherwise:

1. **Clarity**: The PRD forced me to articulate exactly what I was building and why
2. **Discipline**: The scope definition prevented me from adding "cool" features that I didn't need
3. **Speed**: Having a complete tech spec meant implementation was straightforward
4. **Quality**: The architecture was well thought-out before I wrote a single line of code
5. **Documentation**: All the planning artifacts document why decisions were made

Compare this to my usual approach:

- Start coding immediately with vague idea
- Build features that seem cool
- Realize halfway through the architecture is wrong
- Refactor everything
- End up with bloated, over-engineered solution
- Abandon project because it's too complex to maintain

With BMAD:

- Spend time thinking and planning first
- Build exactly what I need
- Architecture is solid from day one
- Code is clean and maintainable
- Project stays focused and achievable

## Lessons Learned: BMAD for Greenfield Projects

### What Worked Brilliantly

**1. User Journeys Over Features**

Writing those narrative journeys in the PRD was transformative. Instead of "I need a list view and a detail view," I thought about _feeling relief when capturing articles from my phone_. This emotional grounding kept the UI focused on what actually matters.

**2. Explicit Out-of-Scope List**

Having a written list of deferred features prevented scope creep. Every time I thought "wouldn't it be cool to add AI summaries?", I checked the list, saw it was v1.1, and kept moving. This discipline kept the project achievable.

**3. Technical Constraints as Features**

The decision to keep the app stateless (no database) felt limiting at first, but it became a feature. Simpler deployment, easier maintenance, zero vendor lock-in. BMAD's architecture phase helped me see that constraints can be advantages.

**4. Success Metrics Drive Priorities**

Having concrete metrics (80% device shift, 5+ days/week usage) made every decision easier. "Does this help achieve the core metrics?" If no, defer it.

### What I'd Do Differently

**1. More Iteration on Tech Spec**

I implemented the tech spec as written, but a few patterns could have been better. In particular, the markdown parsing needed some edge case handling I didn't anticipate. I could have spent more time in the Solutioning phase exploring the actual markdown format from Web Clipper.
One problem is that there are a lot of markdown files to review. At some point I just wanted the implementation to start and stop reading specs. But better reviewing the specs now than waste time later on.

**2. Earlier Testing on Actual Device**

The tech spec called for e-ink optimization, but I didn't test on the actual Boox until after implementation. I had some problem with the css not appearing on the default browser of the e-reader. Didn't want to take too much time on this, so I just downloaded a different browser.

**3. Capture Decision Trade-offs Explicitly**

Some architectural decisions (like in-memory Telegram queue) were trade-offs. The tech spec documented them, but I wish I'd been even more explicit about the pros/cons and under what conditions I'd revisit them.
When I moved from a queue to retrieve the latest changes, I didn't saw that we could retrieve them only for the latest 24 hours.

**4. Still have some problems**

The initial implementation of the Github API call was to retrieve all the files on the specifc directory. It ended up consumming to much of the API, reaching quotas. I had to change the implementation to use Github GraphQL API, which makes a single request.
Still, it is not future proof because it loads all the files and their content with a single request. If I have too much file, it could make the request take longer or even fail.

## Getting Started with BMAD

If you're intrigued by this methodology, here's how to get started:

### Step 1. Install BMAD

BMAD is a methodology framework that works with AI assistants (Claude, ChatGPT, etc.). Check the official BMAD documentation for installation instructions specific to your setup. The basic approach involves:

```bash
# Example workflow initialization
# (Exact commands depend on your BMAD installation)
bmad init
```

### Step 2. Create the plan

#### Phase 1 - Start with Analysis

Don't jump to code. Start with the Analysis phase. Each of this workflow is optional but recommanded:

- brainstorm-project - Guided ideation
- research - Market and technical research
- product-brief - Recommended foundation document

This launches an interactive session where the analyst agent asks questions about:

- What problem you're solving
- Who it's for
- Why existing solutions don't work
- What success looks like

The output is a Product Brief that crystallizes your thinking.

#### Phase 2 - Planning: Create a PRD

The PM agent works with you to define:

- Functional requirements
- Non-functional requirements
- User journeys
- Explicit out-of-scope features
- Success metrics

This prevents you from building the wrong thing.

This phase is required. You will run the PRD workflow.
The output will be [PRD.md](/building-inkwell-with-bmad/output/prd) file.

After that, you can run the UX Design workflow. I personnaly did not do it since my UI is pretty simple.

#### Phase 3 - Solution Architecture

Before coding, plan the technical approach and architecture

The architect agent helps you:

- Choose appropriate technology stack
- Define architectural patterns
- Make trade-off decisions
- Create implementation plan

It creates a document with technical decisions.

Then we create the epics and stories. The workflow uses both PRD and Architecture to create technically-informed stories.

It is then highly recommended to run the Implementation Readiness Check, which validates cohesion across all planning documents.

### Step 3. Implementation

Now, _finally_, the code. With BMAD, you have:

- Clear requirements (PRD)
- Defined architecture (tech spec)
- Documented patterns (code examples)
- Explicit constraints (NFRs)

Your AI pair programmer has context. Instead of "build a reading app", you provide all the necessary context, specifications and technical specs.

The AI produces better code because it knows exactly what you want and how you want it structured.

## Conclusion: Think Before You Code

Building Inkwell with BMAD taught me a fundamental lesson: **time spent planning is time saved coding.**

I've built enough side projects to know my pattern:

1. Get excited about idea
2. Start coding immediately
3. Realize I'm building the wrong thing
4. Refactor everything
5. Add too many features
6. Abandon project because it's too complex

BMAD breaks this cycle by forcing structure:

- **Analysis**: Am I solving a real problem?
- **Planning**: What exactly should I build?
- **Solutioning**: How should I build it?
- **Implementation**: Now execute the plan.

For greenfield projects especially, BMAD is powerful because you start with a blank canvas. There's no legacy code forcing your hand. You can design the ideal architecture from the start, but only if you think it through _before_ writing code.

The method seem especially optimised for Typescript projects: the architecte agent comes from [a knowledge documentation](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/src/modules/bmm/testarch/knowledge), written with Typescript examples.


The result? A simple and maintainable tool that does exactly what I need. Deployed and working. No scope creep. No over-engineering. Just a solution to a real problem.

And now, finally, I can read my articles on my Boox e-reader, exactly where I wanted to read them all along.

![An article on my Boox](/images/building-inkwell-with-bmad/article-on-boox.jpg)

---

**Want to see other methods?** Take a look at how I used [Github Spec-Kit](/spec-kit-cappei-quest/) to build another project.

**Interested in BMAD?** Learn more about the methodology at [BMAD documentation](https://github.com/bmad-ai/bmad).

**Want to see the full BMAD artifacts from this project?** All the planning documents (Product Brief, PRD, Tech Spec, Epics) are available [here](/building-inkwell-with-bmad/output). 

**Got questions about the implementation?** Find me on [linkedin](https://www.linkedin.com/in/loiclefloch/) or check out more technical write-ups on [my blog](https://www.loiclefloch.fr).
