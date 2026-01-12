---
title: "Building Inkwell with BMAD: BMAD output files - PRD"
date: 2026-01-08 23:03:00
permalink: /building-inkwell-with-bmad/output/prd
description: "Output file of the BMAD method for the Product Requirements Document."
tags: [bmad, obsidian, development, spec-driven-development, methodology]
hidden: true
---

>This post contains the output of the BMAD Method "Product Requirements Document" for my Inkwell project. Inkwell is a read-it-later app optimised for my workflow and that works on my e-reader.
>I made a [blog post about how I built a project using AI and BMAD Method](/building-inkwell-with-bmad)

<br />
Path: _bmad-output/planning-artifacts/epics.md
<br />
The file begins with a markdown Front Matter metadata header:

```markdown
---
stepsCompleted: [1, 2, 3, 4]
inputDocuments:
  - _bmad-output/planning-artifacts/product-brief-inkwell-2026-01-06.md
  - _bmad-output/analysis/brainstorming-session-2026-01-06.md
workflowType: 'prd'
lastStep: 4
briefCount: 1
researchCount: 0
brainstormingCount: 1
projectDocsCount: 0
---
```

# Product Requirements Document - inkwell

**Author:** Loic
**Date:** 2026-01-06

## Executive Summary

**inkwell** is a server-side rendered web application that solves cross-device article reading for Obsidian-based knowledge workers. Built as a personal tool for a single user (Loic), it addresses the critical pain point of being unable to read saved articles on preferred e-ink devices while maintaining Obsidian as the single source of truth.

The system creates a thin reading layer over an existing Obsidian vault stored in GitHub. Articles are captured via Telegram bot from any device, processed through Obsidian Web Clipper into the vault at `1. Inbox/clippings/` with `#clippings #to-read` tags, then synced automatically to a hosted reader interface optimized for e-ink displays (particularly Boox e-readers).

**Target user:** Tech professional who curates a monthly newsletter, maintains extensive Obsidian vault across diverse topics (tech, D&D, fantasy, writing, plants, yoga), discovers dozens of articles weekly, and strongly prefers e-ink reading but is currently forced to read on Mac due to technical limitations.

**Core problem solved:** Workflow fragmentation where article discovery happens on phone, processing requires laptop with Obsidian Web Clipper, but comfortable reading demands e-ink device. Current solutions (Arc browser tabs, commercial read-it-later services, direct Obsidian mobile sync) all fail due to fragility, data silos, or technical complexity.

**Success metrics:** Tool used 5+ days/week, 80% of reading shifted from Mac to e-reader, 80% of queued articles actually read, newsletter curation time reduced from 2 days to 1 day per month, maintenance under few hours/month.

**MVP scope (1-week build):** Telegram bot for link capture, GitHub sync reading from vault, SSR web reader with e-ink optimization, article list with `#to-read` filtering, mark-as-read functionality, authentication. Newsletter curation features deferred to v1.1.

### What Makes This Special

**1. Obsidian-First Architecture**
Unlike read-it-later services that create separate data silos, inkwell is a read-only view layer. Articles live in Obsidian vault in markdown format, version-controlled in git. If the reader disappears, zero data loss - everything remains in the vault. The application never competes with Obsidian as source of truth.

**2. Zero Vendor Lock-in**
Every article exists as markdown in GitHub. No proprietary formats, no export needed, no migration anxiety. This addresses the specific pain of Omnivore shutting down - commercial services can disappear, but your data persists independently.

**3. Workflow Enhancement, Not Replacement**
Keeps the proven Obsidian Web Clipper workflow intact. Users continue their existing capture and processing habits. The tool only solves the "reading on wrong device" problem without disrupting established knowledge management practices.

**4. Built for Longevity**
Simple tech stack the user already knows (React Router SSR, Tailwind). Minimal dependencies. Easy to maintain or fork. Designed for long-term personal use with few hours/month maintenance budget. Won't become abandonware because it's tailored for specific workflow.

**5. E-ink Optimized**
Specifically designed for Boox e-reader experience with clean typography, minimal UI chrome, fast SSR loading. Unlike generic readers built for color displays, this prioritizes the constraints and strengths of e-ink (high readability, slow refresh, monochrome).

**6. Stateless Simplicity**
No database to maintain. No complex sync infrastructure. Obsidian vault in GitHub is the database - the application just reads and renders. Updates happen locally, user manually pushes to git. This architectural choice prioritizes simplicity and maintainability over features.

## Project Classification

**Technical Type:** web_app (SSR with React Router)
**Domain:** general (personal productivity)
**Complexity:** low to medium
**Project Context:** Greenfield - new project

**Technical Stack:**
- **Frontend/Backend:** React Router with server-side rendering
- **Styling:** Tailwind CSS + shadcn UI components
- **Hosting:** fly.io
- **Data Source:** GitHub API (reading Obsidian vault)
- **Integrations:** Telegram Bot API for link capture
- **Auth:** Basic authentication (username/password or token-based)

**Architecture Pattern:**
- Stateless SSR application
- No database - GitHub repository is the source of truth
- Read-only operations on remote markdown files
- Local updates with manual git push

**Key Technical Characteristics:**
- Server-side rendering for fast initial page load on e-ink devices
- E-ink optimized UI (minimal repaints, high contrast, clean typography)
- Markdown parsing and rendering
- GitHub API integration for file reading
- Tag-based filtering (`#to-read`, `#clippings`)
- Responsive design for Boox browser and mobile

**Complexity Justification:**
Low to medium complexity due to:
- Simple data model (read markdown files, parse frontmatter/tags)
- No complex business logic or state management
- Standard web authentication
- Third-party APIs (GitHub, Telegram) are well-documented
- No real-time requirements or complex sync

However, requires careful attention to:
- SSR performance for e-ink refresh rates
- GitHub API rate limiting and caching strategy
- Markdown rendering edge cases
- Cross-device responsive design for e-ink constraints

## Success Criteria

### User Success

**Daily Adoption & Engagement:**
- **Usage frequency**: ~5 days per week actively using the tool for article reading
- **Reading completion rate**: 80% of queued articles actually read (not just collected and forgotten)
- **Device shift**: 80% of reading happens on e-reader/phone, 20% or less on Mac for quick scans only
- **Zero data anxiety**: Complete elimination of fear about losing Arc tabs or queued articles

**Reading Quality:**
- Articles read deeply on comfortable e-ink screen rather than skimmed on laptop
- Able to focus on content across diverse topics (tech, D&D, fantasy, writing, plants, yoga)
- Reading sessions happen during preferred times (morning, evening, weekend) without device constraints

**Workflow Integration:**
- Frictionless article capture from any device via share menu
- Obsidian remains authoritative source - no data duplication or sync conflicts
- Existing Web Clipper workflow enhanced, not disrupted
- Newsletter-worthy articles marked during reading while context is fresh

### Business Success

**Time Efficiency:**
- **Newsletter curation time**: Reduced from ~2 days/month to ~1 day/month (50% time savings)
- Time savings come from: faster e-reader reading, less context-switching, marking articles during reading instead of re-reviewing later
- Category selection and summary writing streamlined by capturing context during reading

**Output Quality:**
- **Newsletter evolution**: From 80 links (quantity-driven) to ~60 links (quality-driven)
- All recommendations based on deep reading on e-reader, not laptop skimming
- Summaries and categorization done with fresh context, not reconstructed from memory weeks later
- Reader trust increases due to genuinely valuable, deeply-read recommendations

**Maintenance Burden:**
- **Low overhead**: Maximum few hours per month for tool maintenance and updates
- **Reliability**: Minimal bugs that disrupt reading workflow
- **Simplicity**: Tool remains technically simple to maintain long-term
- **Clear ROI**: Time saved exceeds time spent maintaining

### Technical Success

**Performance:**
- Fast SSR page loads on e-ink devices (optimized for slow refresh rates)
- Efficient GitHub API usage with proper caching (respect rate limits)
- Markdown rendering handles edge cases cleanly
- Responsive design works seamlessly on Boox browser and mobile

**Reliability:**
- Authentication secure and stable
- No data loss during mark-as-read operations
- Graceful handling of GitHub API failures
- Local updates persist correctly until manual push

**Maintainability:**
- Simple codebase easy to debug and extend
- Minimal dependencies to reduce update burden
- Clear separation of concerns (SSR, GitHub API, Telegram bot)
- Straightforward deployment on fly.io

### Measurable Outcomes

**Immediate Success Indicators (First Month):**
- Week 1: Successfully capture 10+ articles from phone via Telegram bot
- Week 2: Complete first full reading session on Boox e-reader
- Week 3: Mark first articles for newsletter using reader interface
- Week 4: Process queued Telegram links through Web Clipper to Obsidian

**Short-term Success Indicators (2-3 Months):**
- Permanently close Arc reading tabs workspace (anxiety eliminated)
- 5+ days per week reader usage established as routine
- 80%+ of reading shifted from Mac to e-reader/phone
- First newsletter published using reader-curated articles

**Long-term Success Indicators (6+ Months):**
- Newsletter curation consistently takes ~1 day instead of 2
- Newsletter quality feedback improves (reader comments, engagement)
- Reading across diverse topics increases (not just tech)
- Tool maintenance requires <2 hours/month on average
- Obsidian vault growth reflects increased reading volume

**Leading Indicators (Predictive):**
- **Article queue health**: Consistent flow of 10-20 articles queued per week
- **Read rate**: 80% of articles marked `#to-read` transition to read within 2 weeks
- **Newsletter pipeline**: 8-10 tech articles marked per month (feeds 60-article output)
- **Device usage pattern**: Boox reader access logs show 4-5 sessions per week

**Failure/Abandon Triggers (Red Flags):**
- Tool requires more than few hours/month maintenance (becomes a burden)
- Bugs disrupt reading workflow more than twice per month
- Reading still happens primarily on Mac after 2 months (device shift failed)
- Newsletter curation still takes ~2 days despite tool (no time savings)
- Becomes "yet another thing to manage" with separate queue from Obsidian

## Product Scope

### MVP - Minimum Viable Product

**inkwell MVP (v1.0)** delivers the minimum functionality to solve the core problem: reading Obsidian-clipped articles on e-reader without device lock-in or data loss anxiety.

**Timeline:** 1 week build

**Core Features:**

**1. Link Capture via Telegram Bot**
- Share article URLs from any device to Telegram bot
- Bot displays queued links in chat (no persistent storage in MVP)
- User processes links manually via Web Clipper to Obsidian
- Simple, zero-setup solution using Telegram's infrastructure

**2. GitHub Repository Sync**
- Connects to user's Obsidian vault GitHub repository
- Reads markdown files from `1. Inbox/clippings/` folder
- Detects articles tagged with `#clippings #to-read`
- Syncs on page load (no real-time webhooks in MVP)

**3. Clean Web Reading Interface**
- E-ink optimized typography and layout (minimal chrome)
- Server-side rendered for fast initial load (React Router SSR)
- Responsive design works on Boox browser and mobile
- Distraction-free reading experience (Tailwind + shadcn UI)

**4. Article List View**
- Displays all articles with `#to-read` tag
- Shows article title, date saved, and source
- Simple chronological or alphabetical sorting
- Click to open full article view

**5. Mark as Read Functionality**
- One-tap button to remove `#to-read` tag from article
- Updates markdown file frontmatter/tags locally
- User manually pushes changes to GitHub (no auto-commit)
- Article disappears from reading queue

**6. Authentication & Security**
- Login system to secure personal reading interface
- Basic username/password or token-based auth
- Prevents unauthorized access to private Obsidian content
- Simple, maintainable security implementation

**MVP Success Validation:**
- All 6 features working end-to-end within 1 week
- First article successfully read on Boox in week 2
- Arc reading tabs closed by week 3
- User reports reduced anxiety about losing articles
- Tool used 5+ days per week by month 1

**Explicitly Out of Scope for MVP:**
- "Add to newsletter" button functionality
- Category selection during reading
- One-line summary capture field
- AI-assisted summary generation
- Newsletter export or management views
- Persistent storage for Telegram bot links
- Queue management UI for captured URLs
- Full-text search across articles
- Topic-based filtering or tagging
- Reading progress tracking within articles
- Direct GitHub commits (auto-push on mark as read)
- GitHub webhooks for real-time sync
- Reading statistics dashboard
- Offline/PWA support
- Multi-vault or multi-user support

### Growth Features (Post-MVP)

**v1.1 - Newsletter Enhancement (Month 2):**

Once core reading workflow proves valuable (5+ days/week usage, 80% device shift achieved), add curation tools:

- "Add to newsletter" button marks articles for monthly curation
- Category selection during reading (Tech, D&D, Writing, Plants, Yoga, etc.)
- Quick one-line summary field (captures context while fresh)
- Optional AI-powered summary generation to speed up curation
- Newsletter view showing all marked articles with metadata
- Export functionality for newsletter assembly

**Target:** Reduce newsletter curation from 1 day to few hours.

**Success Gate:** Only proceed if MVP demonstrates 5+ days/week usage and 80%+ device shift. If MVP fails to shift reading behavior, iterate on core features rather than adding newsletter tools.

**v2.0 - Power User Features (6-12 months):**

Scale up functionality for heavy reading workflows (100+ articles/month):

- **Persistent queue management**: Telegram bot with database storage, advanced queue UI
- **Topic organization**: Filter articles by interest area, custom tags
- **Full-text search**: Find articles across entire reading history
- **Reading analytics**: Track reading volume, velocity, completion rates
- **GitHub automation**: Optional auto-commit on mark-as-read
- **Offline support**: PWA with local caching for disconnected reading
- **Performance optimization**: Handle 1000+ articles in vault efficiently

### Vision (Future)

**v3.0 - Ecosystem Expansion (2+ years):**

Transform into comprehensive personal knowledge infrastructure:

- **Browser extension**: Capture articles directly without Telegram intermediary
- **EPUB generation**: Export articles or collections as e-books
- **Highlights & annotations**: Capture insights during reading, sync to Obsidian
- **Spaced repetition**: Surface older articles for re-reading based on forgetting curve
- **Multi-vault support**: Separate work/personal knowledge bases
- **Collaboration features**: Share reading lists or recommendations (optional social layer)
- **Public API**: Enable custom integrations and automation

**Long-term Differentiation:**
- **Open source potential**: If successful, could help others with Obsidian workflows
- **Plugin ecosystem**: Community could build extensions for specific use cases
- **Template system**: Support different reading workflows beyond newsletter curation
- **Integration hub**: Connect with other knowledge tools while keeping Obsidian central

**Guiding Principles for Future Growth:**
1. **Obsidian-first always**: Never compromise the "vault as source of truth" architecture
2. **Simplicity bias**: Only add complexity when clear user value demonstrated
3. **Maintainability threshold**: No feature worth more than few hours/month maintenance
4. **Personal first**: Build for specific workflow, generalize only if easy
5. **Data ownership**: User controls data completely, no lock-in at any stage

**Market Expansion (Aspirational):**

If the tool proves valuable and maintainable:
- Tech professionals with similar Obsidian + newsletter workflows
- Researchers managing reading lists and literature reviews
- Educators curating resources across topics
- Anyone with "read-it-later hell" seeking Obsidian integration

**However:** This remains a personal tool first. Only expand scope if it doesn't compromise the core workflow or add maintenance burden.

## User Journeys

**Journey 1: The Relief Journey - Week One**

It's Monday morning, and Loic stares at his Arc browser with 47 open tabs in the "Reading" space. Three tabs are articles he meant to read two weeks ago but forgot about. Five are duplicates because he couldn't remember if he'd already saved them. He feels the familiar knot of anxiety - one crash and they're all gone.

He decides today is the day to try inkwell. He sets up the Telegram bot in 5 minutes, shares his first article from his phone during his morning coffee. The bot confirms: "Saved." That simple word feels significant.

By Tuesday evening, he's processed 12 queued URLs from Telegram through his usual Web Clipper workflow into Obsidian. Nothing about his existing routine changed - he just added a reliable queue before it. Wednesday morning, he opens the reader URL on his Boox. The list appears, rendered beautifully in e-ink. No blue light. Just clean, readable text. He taps the first article about React Server Components and starts reading. Twenty minutes pass. He realizes he's actually *reading*, not skimming while his eyes hurt.

The breakthrough comes Friday. He closes the Arc reading space permanently. Not hiding it - actually closing it. Forty-seven tabs gone. No anxiety. Everything that mattered is safely in Obsidian, tagged `#to-read`, accessible on his Boox. He feels lighter.

**Journey 2: The Morning Ritual - A Saturday in Flow**

Saturday, 9 AM. Coffee in hand, Loic settles into his favorite reading chair with his Boox reader. He opens inkwell and sees 8 unread articles from the week. The e-ink display is easy on his eyes even in the bright morning light.

He starts with a deep-dive on TypeScript performance optimization. The SSR-rendered page loads instantly - no waiting, no loading spinners. Just content. He reads at his own pace, the e-ink never flickering or hurting his eyes. Twenty-five minutes later, he finishes. He taps "Mark as Read" and the article disappears from his queue. Clean. Simple.

Next is a D&D campaign design article someone recommended. Then a piece on indoor plant care. Then back to tech with a React Router SSR tutorial. Each article gets his full attention because the reading experience is *comfortable*. No squinting at a laptop screen. No "I'll skim this quickly." Just deep, focused reading.

By 11 AM, he's read 6 of the 8 articles. His mind is energized, not strained. His eyes feel fine. He's learned deeply about three completely different topics. He realizes this is the first time in months he's actually *finished* reading his queue instead of just adding to it.

The newsletter curation that used to take 2 days? He's already mentally noted which 3 tech articles are newsletter-worthy. When v1.1 adds the "Add to newsletter" button, this will be even faster.

**Journey 3: The Phone Discovery Moment - Tuesday Commute**

Tuesday morning, 8:15 AM. Loic is on the train scrolling through Twitter on his iPhone. Someone shares an incredible article about React 19 concurrent features. In the past, he'd either:
- Try to remember to look it up later (and forget)
- Open it in Safari, read the first paragraph, lose focus
- Save it to Arc on his laptop later (if he remembered the tweet)

Instead, he taps Share → Telegram → his inkwell bot. The bot replies instantly: "Article saved: React 19 Concurrent Features Deep Dive." Three seconds total.

Ten minutes later, another great article - this time about running D&D campaigns for new players. Share → Telegram → done. No context switching. No "I'll deal with this later" anxiety.

At lunch, he checks his Telegram bot. Four links saved today - two from Twitter, one from an email newsletter, one from Hacker News. All queued, none lost, zero cognitive load.

That evening on his laptop, he reviews the four links in Telegram. The React 19 article? Definitely worth deep reading. He opens it, uses Web Clipper, saves to Obsidian with `#clippings #to-read`. The D&D article? Also good. Web Clipper, save. Two others he skims and decides aren't worth it - he just ignores them in Telegram.

The next Saturday morning, both articles appear in his inkwell queue on Boox, ready for comfortable deep reading. The entire flow - phone discovery to e-ink reading - works seamlessly.

**Journey 4: The Edge Case Recovery - When Things Break**

It's a Wednesday afternoon, and Loic opens inkwell on his Boox. The page loads, but the article list is empty. That's weird - he knows he has 5 unread articles.

He checks GitHub. The API is responding fine. He checks the reader logs on fly.io. There it is - GitHub API rate limit hit. The app tried to sync too frequently during his testing.

In the past, this would spiral into frustration. Commercial services break and you're helpless. But he built this. He knows exactly what's happening.

He opens the fly.io dashboard on his laptop, checks the environment variables, sees the caching strategy is too aggressive for his testing load. He adjusts the cache timeout from 5 minutes to 15 minutes, redeploys. Three minutes later, fly.io confirms deployment. He refreshes the Boox browser. Articles appear.

Total time from "something's wrong" to "it's fixed": 8 minutes. No support tickets. No waiting. No data loss - everything stayed safely in his Obsidian vault on GitHub.

Later that week, his Telegram bot stops responding. He checks BotFather - API is fine. He checks his bot token in the fly.io environment. Still valid. He runs the health check endpoint. Bot integration is down. He checks the Telegram Bot API logs, sees a webhook configuration issue. Five minutes of debugging, one configuration fix, bot is back.

This is exactly why he built this tool. When things break (and they will), he can fix them himself in minutes, not days. The maintenance burden stays under his "few hours per month" threshold. The tool stays reliable because *he* controls it.

### Journey Requirements Summary

These journeys reveal the following capabilities needed for inkwell:

**Core Reading Experience:**
- Fast SSR page loads optimized for e-ink refresh rates
- Clean, minimal UI that renders well on Boox browser
- Article list view with clear metadata (title, date, source)
- Single-tap "Mark as Read" functionality
- Immediate visual feedback on actions

**Link Capture & Queue Management:**
- Telegram bot integration with instant confirmation
- Simple chat-based queue (no complex UI needed)
- Support for capturing from multiple sources (Twitter, email, HN, etc.)
- Graceful handling when bot is temporarily unavailable

**Data Sync & Reliability:**
- GitHub API integration with proper caching strategy
- Rate limit handling and graceful degradation
- Tag-based filtering (`#to-read`, `#clippings`)
- Local updates with manual git push
- No data loss even when service has issues

**Authentication & Security:**
- Simple login protecting personal content
- Session management for Boox browser
- Secure token storage for GitHub and Telegram APIs

**Maintainability & Debugging:**
- Clear logging for troubleshooting
- Health check endpoints for monitoring
- Simple deployment process (fly.io)
- Environment variable configuration
- Ability to debug and fix issues quickly

**Performance & User Experience:**
- Markdown parsing that handles Web Clipper output
- Responsive design across devices (laptop, phone, Boox)
- Minimal cognitive load - tool stays invisible
- Integration with existing Obsidian workflow
- No disruption to established habits

---

You can see the other outputs [here](/building-inkwell-with-bmad/output/) and the [blog post about how I built a project using AI and BMAD Method](/building-inkwell-with-bmad).
