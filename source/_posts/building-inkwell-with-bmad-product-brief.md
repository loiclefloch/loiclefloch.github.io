---
title: "Building Inkwell with BMAD: BMAD output files - Product Brief"
date: 2026-01-08 23:03:00
permalink: /building-inkwell-with-bmad/output/product-brief
description: "Output file of the BMAD method for the product brief phase."
tags: [bmad, obsidian, development, spec-driven-development, methodology]
hidden: true
---


>This post contains the output of the BMAD Method "Product brief" for my Inkwell project. Inkwell is a read-it-later app optimised for my workflow and that works on my e-reader.
>I made a [blog post about how I built a project using AI and BMAD Method](/building-inkwell-with-bmad)

<br />
Path: _bmad-output/planning-artifacts/product-brief-inkwell-2026-01-06.md

<br />
The file begins with a markdown Front Matter metadata header:

```markdown
---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - _bmad-output/analysis/brainstorming-session-2026-01-06.md
date: 2026-01-06
author: Loic
---
```

# Product Brief: inkwell

<!-- Content will be appended sequentially through collaborative workflow steps -->

## Executive Summary

**inkwell** is a personal article queue and reading system designed for tech professionals who maintain their knowledge base in Obsidian. Unlike generic read-it-later services, it treats Obsidian as the single source of truth, providing a thin cross-device reading layer without creating another data silo.

The system captures article links via Telegram bot, integrates with existing Obsidian Web Clipper workflows, and syncs automatically via GitHub to provide a clean, distraction-free reading interface accessible from any device - particularly optimized for e-ink readers like Boox.

Built for maintainability with modern web standards (React Router SSR, Tailwind), hosted on fly.io, and designed to survive where commercial services like Omnivore failed - by keeping you in control of your data.

---

## Core Vision

### Problem Statement

Tech professionals who curate monthly newsletters or maintain knowledge bases face a critical workflow fragmentation: article discovery happens across devices (phone, laptop), but processing requires specific tools (Obsidian Web Clipper on laptop), and comfortable reading demands different devices (e-ink readers, phones). Current solutions force uncomfortable tradeoffs:

- Browser tab queues are fragile and device-locked
- Third-party read-it-later services create data silos separate from knowledge bases
- Syncing full Obsidian vaults to mobile devices fails due to size and git compatibility issues
- Generic tools don't integrate with existing, refined workflows

The result: friction at every step, fear of data loss, and inability to read comfortably on preferred devices.

### Problem Impact

**Time waste**: Constant context switching between devices and tools adds hours to what should be a streamlined workflow.

**Opportunity cost**: Articles go unread because they're trapped in laptop-only browser tabs, or the friction of capturing from mobile is too high.

**Data anxiety**: Reliance on browser state or third-party services creates constant low-level stress about losing curated content.

**Workflow disruption**: Current solutions force changing established, effective Obsidian-based knowledge management practices.

### Why Existing Solutions Fall Short

**Commercial read-it-later services** (Pocket, Instapaper, Omnivore):
- Create separate data silos outside your knowledge base
- Risk of shutdown (Omnivore's fate proves this)
- Don't integrate with Obsidian workflows
- Generic UIs not optimized for technical content

**Self-hosted alternatives** (Wallabag, Readeck, Linkwarden):
- Still treat reading queue as separate from knowledge base
- Require maintaining another database/system
- UIs designed for general audiences, not technical readers
- Don't leverage existing Obsidian investment

**Direct Obsidian mobile sync**:
- Git sync fails on Android with special characters
- Full vault too large for mobile devices
- Obsidian mobile UI not optimized for article reading queues
- Complexity of maintaining sync infrastructure

**Browser-based solutions** (Arc spaces, bookmarks):
- Fragile - one crash loses everything
- Device-locked
- No cross-device reading capability
- No integration with knowledge management

### Proposed Solution

**inkwell** is a lightweight web application that extends your Obsidian workflow to any device without creating a separate data silo.

**Core Components:**

1. **Link Capture Layer**: Telegram bot for frictionless article saving from any device via iOS/Android share menu

2. **Processing Integration**: Works with existing Obsidian Web Clipper workflow - doesn't replace it, enhances it

3. **Sync Bridge**: GitHub webhook automatically syncs articles from Obsidian vault (`1. Inbox/clippings/`) to hosted reader

4. **Reading Interface**: Clean, distraction-free web reader optimized for e-ink devices (Boox) and mobile browsers

5. **Curation Tools**: One-click "add to newsletter" marking that integrates back with Obsidian workflow

**Technical Foundation:**
- React Router SSR with loaders for fast, server-rendered reading experience
- Tailwind + shadcn for clean, accessible UI
- Fly.io hosting for reliable, low-cost operation
- Markdown-native (reads directly from Obsidian files)
- Stateless architecture (Obsidian/GitHub is the state)

### Key Differentiators

**1. Obsidian-First Architecture**
Not a competitor to your knowledge base - a thin reading layer that treats Obsidian as the authoritative source. Articles live in markdown in your vault, period.

**2. Zero Vendor Lock-in**
If this tool disappears tomorrow, you lose nothing. Every article is in your Obsidian vault, in git, in markdown. The reader is just a view.

**3. Workflow Enhancement, Not Replacement**
Keeps your proven Web Clipper → Obsidian → Newsletter workflow intact. Just makes it work across devices.

**4. Built for Longevity**
Simple tech stack you already know (React Router + Tailwind). Minimal dependencies. Easy to maintain or fork. Won't become abandonware because it's tailored for you.

**5. E-ink Optimized**
Unlike generic readers, specifically designed for the Boox e-reader experience - clean typography, minimal UI chrome, fast loading.

**6. Stateless Simplicity**
No database to maintain. No complex sync. Obsidian + GitHub is your database. The app just reads and renders.

---

## Target Users

### Primary Users

**Loic** - Tech professional and knowledge curator who maintains a monthly technical newsletter while pursuing diverse learning interests across multiple domains.

**Profile:**
- Senior developer working with modern web technologies (React, TypeScript, React Router)
- Maintains extensive Obsidian vault as single source of truth for knowledge management
- Curates monthly newsletter covering technical developments and best practices
- Active learner across multiple domains: Tech (primary), D&D, fantasy literature, writing, plants, yoga
- Values data ownership and self-hosted solutions over third-party services
- Comfortable with technical implementation but prioritizes maintainability

**Current Pain Points:**
- Forced to read long-form content on computer screen despite owning preferred e-ink reader (Boox)
- Discovers dozens of articles weekly but current workflow creates friction at every step
- Arc browser tabs are fragile - constant anxiety about losing queued articles
- Cannot capture articles from phone where much discovery happens
- Obsidian vault too large/complex to sync to mobile devices via git
- No cross-device reading solution that integrates with Obsidian workflow

**Reading Behavior:**
- Discovers ~dozens of articles per week across all interest areas
- Filters ~50% immediately by title and quick scan
- Keeps remainder for deep reading during dedicated time blocks
- Preferred reading times: Morning sessions, evening wind-down, weekend deep-dives
- Strongly prefers e-ink reading experience over laptop screen
- Subset of tech articles (highest quality) become newsletter recommendations

**Success Criteria:**
- Effortless article capture from any device (phone, laptop)
- Comfortable reading on Boox e-reader without technical barriers
- All articles flow into Obsidian vault regardless of topic area
- One-tap marking of tech articles for newsletter during reading flow
- Zero data loss anxiety - everything safely persisted in Obsidian
- Maintains existing Web Clipper workflow without disruption

**Motivations:**
- Stay current with rapidly evolving tech landscape for professional growth
- Maintain high-quality newsletter that provides genuine value to readers
- Learn deeply across multiple personal interest areas
- Build comprehensive, searchable knowledge base in Obsidian
- Reduce eye strain and screen fatigue from forced laptop reading
- Own his data completely - no dependence on commercial services that might shut down

### Secondary Users

N/A - This is a personal tool built for single-user workflow optimization.

### User Journey

**Phase 1: Discovery (Continuous, Any Device)**
Loic encounters interesting content throughout his day - scrolling Twitter during commute, checking email newsletters at desk, browsing Hacker News on phone. When something catches his attention, he shares the link directly to the Telegram bot via iOS share menu. Bot confirms receipt. Articles are safely queued, no matter where he is or what device he's using.

**Phase 2: Processing (Batch, Laptop)**
Once or twice weekly, Loic opens the Telegram bot to see his queued URLs. He opens each link in browser, quickly assesses if it's worth deep reading. For keepers, he uses Obsidian Web Clipper to save the full article content to his vault at `1. Inbox/clippings/` with tags `#clippings #to-read`. The articles are now in his knowledge base, markdown format, version controlled in git.

**Phase 3: Reading (Dedicated Sessions, Boox E-reader)**
Weekend morning with coffee, Loic opens inkwell URL on his Boox e-reader browser. The interface loads quickly - clean, minimal, optimized for e-ink. He sees a list of all unread articles across his interest areas. He can filter by topic or read chronologically. 

He starts with a React Server Components deep-dive. The e-ink screen is easy on his eyes. No blue light, no screen glare. He reads at his pace, highlights mentally interesting points. At the end, he taps "Add to newsletter" - the article is marked for his tech curation. He continues through his queue - a D&D adventure design article, something about indoor plant care, back to tech with a TypeScript performance piece.

**Phase 4: Curation (During Reading)**
As Loic reads throughout the month, his best tech finds are automatically accumulated via the "Add to newsletter" action. When publication time comes, he has a pre-filtered list of genuinely valuable articles he's actually read and found useful. No last-minute scrambling to remember what was good.

**Phase 5: Long-term Integration**
Over time, inkwell becomes Loic's central reading hub. His Obsidian vault grows organically with cross-topic knowledge. His newsletter quality improves because recommendations come from deep, comfortable reading sessions rather than laptop screen skimming. His eye strain decreases, his learning increases, and he never worries about losing valuable content. The system just works, invisibly supporting his knowledge work without becoming another thing to maintain.

**Key Moments:**
- **Relief moment**: Capturing article from phone without needing to "remember to save it later"
- **Aha moment**: First time opening reader on Boox and seeing clean, readable article list
- **Confidence moment**: Realizing all content is safely in Obsidian, reader is just a view
- **Quality moment**: Publishing newsletter knowing every recommendation was deeply read and valued

---

## Success Metrics

**inkwell** success is measured by genuine workflow improvement for a single user (Loic), not vanity metrics. Success means the tool becomes an invisible, reliable part of daily knowledge work that reduces friction and improves output quality.

### User Success Metrics

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

### Business Objectives

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

### Key Performance Indicators

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

### Success Validation Method

**Monthly Self-Assessment:**
- Time tracking: How long did newsletter curation take this month?
- Usage tracking: How many days did I use the reader?
- Quality check: Did I read articles deeply or skim them?
- Anxiety check: Did I worry about losing articles this month?
- ROI check: Is this tool worth the maintenance time?

**Quarterly Review:**
- Newsletter quality trending up or down?
- Reading completion rate at 80% target?
- Device shift to e-reader achieved?
- Still using the tool regularly or falling back to old habits?
- Should continue, iterate, or abandon?

---

## MVP Scope

### Core Features

**inkwell MVP (v1.0)** delivers the minimum functionality to solve the core problem: reading Obsidian-clipped articles on e-reader without device lock-in or data loss anxiety.

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

### Out of Scope for MVP

**Explicitly NOT included in v1.0 to maintain 1-week timeline and technical simplicity:**

**Newsletter Curation Tools (Deferred to v1.1):**
- "Add to newsletter" button functionality
- Category selection during reading
- One-line summary capture field
- AI-assisted summary generation
- Newsletter export or management views

**Advanced Storage & Queue Management:**
- Persistent storage for Telegram bot links
- Queue management UI for captured URLs
- Batch processing workflows
- Link metadata extraction or preview

**Content Enhancement:**
- Full-text search across articles
- Topic-based filtering or tagging
- Reading progress tracking within articles
- Highlight or annotation system

**Automation & Integration:**
- Automated Web Clipper integration
- Direct GitHub commits (auto-push on mark as read)
- GitHub webhooks for real-time sync
- Browser extension for direct capture

**Advanced Features:**
- Reading statistics dashboard
- Offline/PWA support for disconnected reading
- EPUB export functionality
- Multi-vault or multi-user support
- Public API for integrations
- Spaced repetition system

**Rationale for Deferrals:**
- **Newsletter tools**: Validate core reading workflow works before adding curation complexity
- **Persistent storage**: Chat-based queue sufficient for MVP; storage adds database/state management
- **GitHub auto-commit**: Manual push simpler, avoids GitHub auth complexity
- **Advanced features**: Focus on solving core problem first, iterate based on real usage

### MVP Success Criteria

**Week 1 (Build Complete):**
- All 6 core features implemented and deployed to fly.io
- End-to-end test: Telegram → Web Clipper → Obsidian → Reader → Mark Read
- Authentication working, reader accessible on Boox browser
- No critical bugs blocking basic usage

**Week 2-3 (Initial Validation):**
- Successfully read 5+ articles on Boox e-reader
- Telegram bot used to capture 10+ URLs from phone
- Reading experience on e-ink confirmed comfortable and functional
- Arc reading tabs workspace closed permanently

**Month 1 (Adoption Validation):**
- Tool used 5+ days per week for reading
- 80% of reading shifted from Mac to e-reader
- Zero incidents of lost articles or data anxiety
- 10+ articles marked as read through interface

**Decision Gate (End of Month 1):**
- **Proceed to v1.1** if: Daily usage established, reading comfort improved, workflow feels better
- **Iterate MVP** if: Core features need refinement, usability issues, technical problems
- **Abandon** if: Not actually using it, workflow not improved, maintenance burden too high

**Success Signals:**
- User voluntarily chooses reader over Mac for article reading
- Positive emotional response to reading workflow
- Newsletter curation feels easier even without dedicated tools
- No regret about building vs. using third-party solution

**Failure Signals:**
- Still reading primarily on Mac after 2 weeks
- Telegram capture too much friction, not being used
- E-ink rendering has issues making reading uncomfortable
- Tool maintenance already consuming too much time

### Future Vision

**If inkwell MVP succeeds, the long-term vision expands from personal reading tool to comprehensive knowledge workflow hub.**

**v1.1 - Newsletter Enhancement (Month 2):**
Once core reading workflow proves valuable, add curation tools:
- "Add to newsletter" button marks articles for monthly curation
- Category selection during reading (Tech, D&D, Writing, Plants, Yoga, etc.)
- Quick one-line summary field (captures context while fresh)
- Optional AI-powered summary generation to speed up curation
- Newsletter view showing all marked articles with metadata
- Export functionality for newsletter assembly

**Target**: Reduce newsletter curation from 1 day to few hours.

**v2.0 - Power User Features (6-12 months):**
Scale up functionality for heavy reading workflows:
- **Persistent queue management**: Telegram bot with database storage, advanced queue UI
- **Topic organization**: Filter articles by interest area, custom tags
- **Full-text search**: Find articles across entire reading history
- **Reading analytics**: Track reading volume, velocity, completion rates
- **GitHub automation**: Optional auto-commit on mark-as-read
- **Offline support**: PWA with local caching for disconnected reading
- **Performance**: Optimize for 1000+ articles in vault

**Target**: Support 100+ articles/month reading volume efficiently.

**v3.0 - Ecosystem Expansion (2+ years):**
Transform into knowledge management platform:
- **Browser extension**: Capture articles directly without Telegram intermediary
- **EPUB generation**: Export articles or collections as e-books
- **Highlights & annotations**: Capture insights during reading, sync to Obsidian
- **Spaced repetition**: Surface older articles for re-reading based on forgetting curve
- **Multi-vault support**: Separate work/personal knowledge bases
- **Collaboration**: Share reading lists or recommendations (optional social layer)
- **Public API**: Enable custom integrations and automation

**Target**: Become comprehensive personal knowledge infrastructure.

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

**However**: This remains a personal tool first. Only expand scope if it doesn't compromise the core workflow or add maintenance burden.

---

You can see the other outputs [here](/building-inkwell-with-bmad/output/) and the [blog post about how I built a project using AI and BMAD Method](/building-inkwell-with-bmad).
