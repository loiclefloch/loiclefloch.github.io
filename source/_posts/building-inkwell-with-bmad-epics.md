---
title: "Building Inkwell with BMAD: BMAD output files - Product Epics"
date: 2026-01-08 23:03:00
permalink: /building-inkwell-with-bmad/output/epics
description: "Output file of the BMAD method for the product epics."
tags: [bmad, obsidian, development, spec-driven-development, methodology]
hidden: true
---

>This post contains the output of the BMAD Method "Product brief" for my Inkwell project. Inkwell is a read-it-later app optimised for my workflow and that works on my e-reader.
>I made a [blog post about how I built a project using AI and BMAD Method](/building-inkwell-with-bmad)

<br />
Path: _bmad-output/planning-artifacts/epics.md
<br />
The file begins with a markdown Front Matter metadata header:

```markdown
---
stepsCompleted: [1, 2]
inputDocuments:
  - _bmad-output/planning-artifacts/prd.md
  - _bmad-output/implementation-artifacts/tech-spec-inkwell-mvp-e2e.md
---
```

# inkwell - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for inkwell, decomposing the requirements from the PRD and Tech Spec into implementable stories.

## Requirements Inventory

### Functional Requirements

**FR1:** System shall provide Telegram bot integration that accepts article URLs from any device and displays queued links in chat

**FR2:** System shall connect to user's Obsidian vault GitHub repository and read markdown files from `1. Inbox/clippings/` folder

**FR3:** System shall detect and display articles tagged with both `#clippings` AND `#to-read` tags

**FR4:** System shall provide a server-side rendered web reading interface optimized for e-ink displays

**FR5:** System shall display an article list view showing title, date saved, and source for all to-read articles

**FR6:** System shall provide one-tap "Mark as Read" functionality that removes `#to-read` tag from article frontmatter

**FR7:** System shall update markdown file tags locally via GitHub API when articles are marked as read

**FR8:** System shall require user authentication via username/password to access reading interface

**FR9:** System shall sync articles from GitHub on page load (no real-time webhooks)

**FR10:** System shall render full markdown content with clean typography optimized for e-ink devices

**FR11:** System shall provide responsive design that works on Boox browser, mobile, and laptop devices

**FR12:** System shall validate URLs before adding to Telegram queue

### Non-Functional Requirements

**NFR1:** System shall load pages via SSR in under 2 seconds on e-ink devices

**NFR2:** System shall implement in-memory caching with 15-minute TTL to respect GitHub API rate limits (5000 requests/hour)

**NFR3:** System shall use HTTP-only secure cookies for session management with 30-day expiration

**NFR4:** System shall sanitize all markdown HTML output to prevent XSS vulnerabilities

**NFR5:** System shall require maximum few hours per month maintenance burden

**NFR6:** System shall be built with TypeScript in strict mode throughout the codebase

**NFR7:** System shall use minimal UI chrome to reduce e-ink screen repaints

**NFR8:** System shall disable animations and transitions for e-ink optimization

**NFR9:** System shall handle GitHub API rate limiting gracefully with proper error messages

**NFR10:** System shall provide structured logging using Pino for debugging and monitoring

**NFR11:** System shall deploy to fly.io with simple one-command deployment

**NFR12:** System shall achieve 80% reading completion rate and 5+ days per week usage within first month

### Additional Requirements

**Architecture & Technical Requirements:**

- **AR1: Starter Template** - React Router v7 greenfield project using `npx create-remix@latest` with TypeScript template
- **AR2: Technology Stack** - React Router v7, TypeScript, Tailwind CSS, shadcn UI, Octokit, Telegraf, gray-matter, marked, bcrypt, fly.io
- **AR3: Data Model** - Articles stored as `.md` files in `1. Inbox/clippings/` with frontmatter format `tags: [clippings, to-read]`
- **AR4: Authentication Strategy** - Session-based auth with secure HTTP-only cookies using `createCookieSessionStorage`
- **AR5: GitHub Integration** - Use GitHub REST API with personal access token, implement FIFO cache with 100-entry limit, 15-minute TTL
- **AR6: Telegram Integration** - Webhook-based bot with in-memory queue (acceptable data loss on restart)
- **AR7: File Structure** - React Router v7 conventions with `app/routes/` for file-based routing, `*.server.ts` for server-only code
- **AR8: E-ink Styling** - Tailwind config with high contrast colors, Georgia serif font, disabled animations/transitions
- **AR9: Environment Variables** - Requires GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO, GITHUB_BRANCH, TELEGRAM_BOT_TOKEN, TELEGRAM_WEBHOOK_SECRET, SESSION_SECRET, AUTH_USERNAME, AUTH_PASSWORD_HASH, LOG_LEVEL, NODE_ENV
- **AR10: Security Implementation** - Telegram webhook signature validation using secret token, bcrypt for password hashing, HTML sanitization
- **AR11: Error Handling** - Graceful degradation for GitHub API failures, 404 handling, rate limit monitoring
- **AR12: Deployment** - fly.io with Dockerfile auto-generation, health check endpoint at `/healthz`, Paris region (cdg)
- **AR13: Code Patterns** - Singleton pattern for API clients, TypeScript interfaces for all data models, loader/action functions for SSR
- **AR14: Testing Strategy** - Manual testing only for MVP on actual Boox device

### FR Coverage Map

**FR1:** Epic 4 - Telegram bot for link capture  
**FR2:** Epic 3 - GitHub vault connection  
**FR3:** Epic 3 - Tag-based article detection  
**FR4:** Epic 3 - SSR reading interface  
**FR5:** Epic 3 - Article list view  
**FR6:** Epic 3 - Mark as read functionality  
**FR7:** Epic 3 - GitHub API tag updates  
**FR8:** Epic 2 - User authentication  
**FR9:** Epic 3 - Page-load GitHub sync  
**FR10:** Epic 3 - Markdown rendering  
**FR11:** Epic 3 - Responsive design  
**FR12:** Epic 4 - URL validation

## Epic List

### Epic 1: Project Foundation & Infrastructure

Development environment is set up with all core infrastructure, enabling rapid feature development with type safety, e-ink optimization, and deployment capabilities.

**FRs covered:** None directly (foundational)  
**NFRs covered:** NFR6, NFR11  
**ARs covered:** AR1, AR2, AR7, AR8, AR9, AR12, AR13, AR14

### Epic 2: Secure Access & Authentication

As Loic, I can securely log into the reading interface from my Boox e-reader, ensuring my private Obsidian content is protected while maintaining persistent sessions across reading sessions.

**FRs covered:** FR8  
**NFRs covered:** NFR3  
**ARs covered:** AR4, AR10

### Epic 3: Article Discovery & Reading

As Loic, I can view all my to-read articles from my Obsidian vault, read them comfortably on my Boox e-reader with clean typography, and mark articles as read when finished, with changes persisting back to my vault.

**FRs covered:** FR2, FR3, FR4, FR5, FR6, FR7, FR9, FR10, FR11  
**NFRs covered:** NFR1, NFR2, NFR4, NFR7, NFR8, NFR9, NFR10  
**ARs covered:** AR3, AR5, AR11

### Epic 4: Cross-Device Link Capture

As Loic, I can capture article links from my phone or any device by sharing them to a Telegram bot, which queues them for later processing through my existing Obsidian Web Clipper workflow.

**FRs covered:** FR1, FR12  
**NFRs covered:** None directly  
**ARs covered:** AR6, AR10

### Epic 5: Production Readiness & Monitoring

As Loic, I have confidence that the tool is reliable, maintainable, and performs well in production, with health monitoring and error visibility for quick troubleshooting.

**FRs covered:** None directly (operational)  
**NFRs covered:** NFR5, NFR12  
**ARs covered:** AR12


---

You can see the other outputs [here](/building-inkwell-with-bmad/output/) and the [blog post about how I built a project using AI and BMAD Method](/building-inkwell-with-bmad).
