---
title: "Building Inkwell with BMAD: BMAD output files - Tech Specs"
date: 2026-01-08 23:03:00
permalink: /building-inkwell-with-bmad/output/tech-specs
description: "Output file of the BMAD method for the Tech Specs."
tags: [bmad, obsidian, development, spec-driven-development, methodology]
hidden: true
---

>This post contains the output of the BMAD Method "Tech Specs" for my Inkwell project. Inkwell is a read-it-later app optimised for my workflow and that works on my e-reader.
>I made a [blog post about how I built a project using AI and BMAD Method](/building-inkwell-with-bmad)

<br />

<br />
Path: _bmad-output/implementation-artifacts/tech-spec-inkwell-mvp-e2e.md
<br />
The file begins with a markdown Front Matter metadata header:

```markdown
---
title: 'Inkwell MVP - End-to-End Implementation'
slug: 'inkwell-mvp-e2e'
created: '2026-01-06T14:26:00Z'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: 
  - React Router v7 (@remix-run/react, @remix-run/node, @remix-run/serve)
  - TypeScript (strict mode)
  - Tailwind CSS v3+ (with custom e-ink theme)
  - shadcn UI (Radix UI primitives)
  - Octokit (GitHub REST API v3)
  - Telegraf or node-telegram-bot-api (Telegram Bot API)
  - gray-matter (frontmatter parsing)
  - marked or remark (markdown rendering)
  - bcrypt (password hashing)
  - fly.io (deployment)
files_to_modify:
  - 'package.json (to be created)'
  - 'app/root.tsx (to be created)'
  - 'app/routes/_index.tsx (to be created)'
  - 'app/routes/login.tsx (to be created)'
  - 'app/routes/logout.tsx (to be created)'
  - 'app/routes/articles._index.tsx (to be created)'
  - 'app/routes/articles.$slug.tsx (to be created)'
  - 'app/routes/api.telegram.tsx (to be created)'
  - 'app/routes/healthz.tsx (to be created)'
  - 'app/lib/auth.server.ts (to be created)'
  - 'app/lib/markdown.server.ts (to be created)'
  - 'app/lib/github.server.ts (to be created)'
  - 'app/lib/articles.server.ts (to be created)'
  - 'app/lib/telegram.server.ts (to be created)'
  - 'app/lib/logger.server.ts (to be created)'
  - 'app/lib/types.ts (to be created)'
  - 'tailwind.config.ts (to be created)'
  - 'tsconfig.json (to be configured)'
  - 'fly.toml (to be created)'
  - 'Dockerfile (to be created via fly.io)'
  - '.env.example (to be created)'
code_patterns:
  - 'File-based routing: app/routes/*.tsx'
  - 'Server functions: *.server.ts files (server-only code)'
  - 'Loader functions for SSR data fetching'
  - 'Action functions for form submissions and mutations'
  - 'Session management via createCookieSessionStorage'
  - 'Environment variables via process.env'
  - 'TypeScript interfaces for all data models'
  - 'Singleton pattern for GitHub/Telegram clients'
  - 'In-memory cache for GitHub API responses'
test_patterns:
  - 'Manual testing only for MVP'
  - 'Post-MVP: Vitest for unit tests'
  - 'Post-MVP: Playwright for E2E tests'
---
```

# Tech-Spec: Inkwell MVP - End-to-End Implementation

**Created:** 2026-01-06T14:26:00Z

## Overview

### Problem Statement

Tech professional cannot read saved Obsidian articles on preferred e-ink devices. Current workflow forces reading on Mac laptop despite strong preference for Boox e-reader. Existing solutions (Arc tabs, commercial services) are fragile, create data silos, or lack e-ink optimization. Workflow fragmentation exists where article discovery happens on phone, processing requires laptop with Obsidian Web Clipper, but comfortable reading demands e-ink device.

### Solution

Build a stateless SSR web application that creates a thin reading layer over an existing Obsidian vault stored in GitHub. The system enables:
- Link capture via Telegram bot from any device
- Processing through existing Obsidian Web Clipper workflow
- Automatic sync from GitHub vault at `1. Inbox/clippings/` folder
- E-ink optimized reading interface (Boox-focused)
- Mark-as-read functionality that updates markdown tags
- Zero vendor lock-in (all data remains in Obsidian vault)

### Scope

**In Scope:**
- Complete MVP application with all 6 core features from PRD
- Telegram bot for link capture (in-memory queue, no persistent storage)
- GitHub API sync reading from Obsidian vault at `1. Inbox/clippings/`
- SSR web reader with e-ink optimization using React Router v7 + Tailwind + shadcn UI
- Article list view filtering by `#to-read` + `#clippings` tags
- Mark-as-read functionality (removes `#to-read` tag from frontmatter)
- Basic authentication for single-user access
- Deployment configuration for fly.io
- TypeScript throughout the codebase
- Markdown parsing and rendering with proper handling of Web Clipper format
- Responsive design for Boox browser, mobile, and laptop

**Out of Scope:**
- Newsletter curation features (v1.1: "Add to newsletter" button, category selection, summary field)
- Persistent Telegram queue storage or queue management UI
- Auto-commit/auto-push to GitHub (manual push workflow)
- Real-time webhooks for GitHub sync
- Multi-user or multi-vault support
- Offline/PWA capabilities
- Reading analytics or progress tracking
- Full-text search across articles
- Topic-based filtering beyond tag system

## Context for Development

### Technical Preferences and Constraints

**Architecture Philosophy:**
- Stateless application (no database)
- GitHub repository is the single source of truth
- Read-only operations on remote markdown files
- Local updates via GitHub API, user manually pulls to local Obsidian

**Tech Stack Decisions:**
- **React Router v7** for modern SSR capabilities with file-based routing
- **TypeScript** for type safety throughout
- **npm** as package manager
- **Tailwind CSS + shadcn UI** for e-ink optimized styling
- **fly.io** for hosting with simple deployment
- **GitHub Personal Access Token** stored in environment variables
- **Telegram Bot API** with webhook for link capture

**E-ink Optimization Requirements:**
- Minimal UI chrome to reduce screen repaints
- High contrast, clean typography
- Fast SSR initial load (critical for slow e-ink refresh)
- Avoid animations or transitions
- Simple, distraction-free reading experience

**Data Model Assumptions:**
- Articles stored as individual `.md` files in `1. Inbox/clippings/` folder
- Frontmatter format from Obsidian Web Clipper with tags array: `tags: [clippings, to-read]`
- Tags can also appear inline in content as `#clippings #to-read`
- Article detection: must have both `#clippings` AND `#to-read` tags
- Mark-as-read: remove `to-read` from tags array in frontmatter

**Authentication Strategy:**
- Simple session-based auth with secure HTTP-only cookie
- Single hardcoded user credential (username/password in env vars)
- No registration or multi-user support needed

**GitHub Integration:**
- Read files via GitHub REST API (`GET /repos/{owner}/{repo}/contents/{path}`)
- Update files via GitHub REST API (`PUT /repos/{owner}/{repo}/contents/{path}`)
- Requires: repo owner, repo name, branch name, PAT with repo scope
- Cache file listings to respect rate limits (5000 requests/hour authenticated)

**Telegram Bot Integration:**
- Webhook-based (not polling) for efficiency
- In-memory queue: bot receives link, stores in app memory, displays in chat
- User processes queue manually via Web Clipper
- No persistence layer needed for MVP

### Codebase Patterns

**Confirmed Clean Slate - Greenfield Project**

Investigation confirmed this is a brand new project with no existing code. The following patterns will be established from scratch:

**Project Structure (React Router v7 Conventions):**
```
inkwell/
├── app/
│   ├── root.tsx                    # Root layout, global styles
│   ├── routes/
│   │   ├── _index.tsx              # Redirect to /articles or /login
│   │   ├── login.tsx               # Login page
│   │   ├── articles._index.tsx     # Article list (protected)
│   │   ├── articles.$slug.tsx      # Article reader (protected)
│   │   └── api.telegram.tsx        # Telegram webhook endpoint
│   ├── lib/
│   │   ├── github.server.ts        # GitHub API client (server-only)
│   │   ├── telegram.server.ts      # Telegram bot client (server-only)
│   │   ├── auth.server.ts          # Auth utilities (server-only)
│   │   └── markdown.server.ts      # Markdown parser (server-only)
│   ├── components/
│   │   └── ui/                     # shadcn UI components
│   └── styles/
│       └── tailwind.css            # Global styles + Tailwind
├── public/                          # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── fly.toml
└── Dockerfile
```

**React Router v7 SSR Patterns:**
- **Loader functions**: Fetch data server-side for SSR (e.g., `export async function loader()`)
- **Action functions**: Handle form submissions and mutations (e.g., `export async function action()`)
- **Server-only code**: Use `.server.ts` extension to prevent client bundling
- **Session management**: `createCookieSessionStorage` from `@remix-run/node`
- **Error boundaries**: `ErrorBoundary` exports in route files for error handling

**Authentication Pattern:**
```typescript
// app/lib/auth.server.ts
import { createCookieSessionStorage, redirect } from '@remix-run/node';

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '__session',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    secrets: [process.env.SESSION_SECRET!],
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 30, // 30 days
  },
});

export async function requireAuth(request: Request) {
  const session = await sessionStorage.getSession(request.headers.get('Cookie'));
  if (!session.get('userId')) {
    throw redirect('/login');
  }
  return session;
}
```

**GitHub API Client Pattern:**
```typescript
// app/lib/github.server.ts
import { Octokit } from 'octokit';

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

// In-memory cache with size limit
const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_TTL = 15 * 60 * 1000; // 15 minutes
const CACHE_MAX_SIZE = 100; // FIFO eviction when exceeded

export function clearCacheEntry(key: string) {
  cache.delete(key);
}

function addToCache(key: string, data: any) {
  // FIFO eviction if cache is full
  if (cache.size >= CACHE_MAX_SIZE) {
    const firstKey = cache.keys().next().value;
    cache.delete(firstKey);
  }
  cache.set(key, { data, timestamp: Date.now() });
}

export async function getArticles() {
  const cacheKey = 'articles-list';
  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }
  
  try {
    // Fetch from GitHub API - path is URL-encoded automatically by Octokit
    const response = await octokit.rest.repos.getContent({
      owner: process.env.GITHUB_OWNER!,
      repo: process.env.GITHUB_REPO!,
      path: '1. Inbox/clippings',
    });
    
    // Check rate limit headers
    const remaining = response.headers['x-ratelimit-remaining'];
    if (remaining && parseInt(remaining) < 100) {
      console.warn(`GitHub API rate limit low: ${remaining} requests remaining`);
    }
    
    addToCache(cacheKey, response.data);
    return response.data;
  } catch (error: any) {
    if (error.status === 403 && error.response?.headers['x-ratelimit-remaining'] === '0') {
      const resetTime = error.response.headers['x-ratelimit-reset'];
      throw new Error(`GitHub API rate limit exceeded. Resets at ${new Date(parseInt(resetTime) * 1000).toISOString()}`);
    }
    throw error;
  }
}
```

**Markdown Parsing Pattern:**
```typescript
// app/lib/markdown.server.ts
import matter from 'gray-matter';
import { marked } from 'marked';

export function parseArticle(content: string) {
  const { data: frontmatter, content: markdown } = matter(content);
  const html = marked(markdown);
  
  return {
    frontmatter,
    html,
    tags: frontmatter.tags || [],
    hasToRead: frontmatter.tags?.includes('to-read'),
    hasClippings: frontmatter.tags?.includes('clippings'),
  };
}
```

**Telegram Bot Pattern:**
```typescript
// app/lib/telegram.server.ts
import { Telegraf } from 'telegraf';

let botInstance: Telegraf | null = null;
const linkQueue: string[] = []; // In-memory queue

export function getBot(): Telegraf {
  if (!botInstance) {
    botInstance = new Telegraf(process.env.TELEGRAM_BOT_TOKEN!);
    
    // Set up handlers once on initialization
    botInstance.on('text', async (ctx) => {
      const text = ctx.message.text;
      if (isValidUrl(text)) {
        linkQueue.push(text);
        await ctx.reply(`Link saved: ${text}`);
      }
    });
    
    botInstance.command('queue', async (ctx) => {
      if (linkQueue.length === 0) {
        await ctx.reply('No links in queue');
      } else {
        await ctx.reply(`Queue:\n${linkQueue.join('\n')}`);
      }
    });
  }
  
  return botInstance;
}

export { linkQueue };
```

**Note:** Bot is initialized lazily on first webhook request via `getBot()` singleton pattern.

**TypeScript Interface Patterns:**
```typescript
// Types for data models
interface Article {
  slug: string;
  title: string;
  content: string;
  html: string;
  frontmatter: ArticleFrontmatter;
  tags: string[];
  sha: string; // GitHub file SHA for updates
}

interface ArticleFrontmatter {
  title?: string;
  date?: string;
  source?: string;
  tags: string[];
}

interface GitHubFile {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: 'file' | 'dir';
}
```

**E-ink Optimized Styling (Tailwind):**
```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        'eink-bg': '#ffffff',
        'eink-text': '#000000',
        'eink-gray': '#666666',
      },
      fontFamily: {
        'eink': ['Georgia', 'serif'], // Highly readable on e-ink
      },
    },
  },
  // Disable animations for e-ink
  corePlugins: {
    animation: false,
    transitionProperty: false,
  },
}
```

**Environment Variables Required:**
```
GITHUB_TOKEN=ghp_xxxxx
GITHUB_OWNER=username
GITHUB_REPO=obsidian-vault
GITHUB_BRANCH=main
TELEGRAM_BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_WEBHOOK_SECRET=random-secret-for-webhook-validation
SESSION_SECRET=random-secret-string
AUTH_USERNAME=loic
AUTH_PASSWORD_HASH=bcrypt-hash
LOG_LEVEL=info
NODE_ENV=production
```

### Files to Reference

| File | Purpose |
| ---- | ------- |
| `_bmad-output/planning-artifacts/prd.md` | Complete product requirements and success criteria |
| `_bmad-output/planning-artifacts/product-brief-inkwell-2026-01-06.md` | Original product brief with user journey details |

### Technical Decisions

**Decision 1: React Router v7 over Remix/Next.js**
- Rationale: Aligns with PRD "React Router with SSR" requirement
- Modern SSR capabilities without framework lock-in
- Simple deployment model for fly.io

**Decision 2: GitHub API updates over local git clone**
- Rationale: Simpler architecture, no git state management on server
- User manually pulls changes to local Obsidian
- Reduces deployment complexity

**Decision 3: In-memory Telegram queue over database**
- Rationale: MVP scope explicitly avoids persistent storage
- Acceptable data loss risk (links can be re-shared)
- Simplifies infrastructure (no database needed)

**Decision 4: Session auth over JWT**
- Rationale: Single-user application with simple security needs
- HTTP-only cookies more secure against XSS
- Simpler implementation for MVP

## Implementation Plan

### Tasks

Tasks are ordered by dependency (lowest level first). Each task is atomic and implementation-ready.

**Phase 1: Project Setup & Infrastructure**

- [ ] **Task 1.1: Initialize React Router v7 Project**
  - File: Root directory
  - Action: Run `npx create-remix@latest` with TypeScript template
  - Notes: Choose "Remix App Server" for deployment target; enable TypeScript strict mode

- [ ] **Task 1.2: Install Core Dependencies**
  - File: `package.json`
  - Action: Install dependencies via npm:
    - Core: `octokit`, `telegraf`, `gray-matter`, `marked`, `sanitize-html`, `bcrypt`, `pino` (structured logging)
    - Dev: `@types/bcrypt`, `eslint`, `prettier`
  - Notes: Lock versions for stability; pino for JSON structured logs

- [ ] **Task 1.3: Configure TypeScript**
  - File: `tsconfig.json`
  - Action: Enable strict mode, set paths alias for `~/` to `./app`, configure server/client separation
  - Notes: Ensure `.server.ts` files are excluded from client bundle

- [ ] **Task 1.4: Set Up Tailwind CSS**
  - Files: `tailwind.config.ts`, `app/styles/tailwind.css`
  - Action: Install `tailwindcss`, configure e-ink theme (high contrast, no animations), add base styles
  - Notes: Disable `animation` and `transitionProperty` in corePlugins; use Georgia serif font

- [ ] **Task 1.5: Initialize shadcn UI**
  - Files: `components.json`, `app/components/ui/*`
  - Action: Run `npx shadcn-ui@latest init` (components will be copied into project, not npm installed), then run `npx shadcn-ui@latest add button card input` to copy Button, Card, and Input components
  - Notes: Configure for Tailwind, set base color to neutral for e-ink compatibility; shadcn copies component source code into your project for full control

- [ ] **Task 1.6: Create Environment Variable Template**
  - File: `.env.example`
  - Action: Document all required env vars with example format
  - Notes: Include: GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO, GITHUB_BRANCH, TELEGRAM_BOT_TOKEN, TELEGRAM_WEBHOOK_SECRET, SESSION_SECRET, AUTH_USERNAME, AUTH_PASSWORD_HASH, LOG_LEVEL, NODE_ENV

**Phase 2: Server Utilities (Dependencies for All Features)**

- [ ] **Task 2.1: Create Auth Server Utility**
  - File: `app/lib/auth.server.ts`
  - Action: Implement `sessionStorage` using `createCookieSessionStorage`, `requireAuth()` function, `login()` function with bcrypt, `logout()` function
  - Notes: Session cookie: httpOnly, secure in prod, 30-day maxAge, use SESSION_SECRET env var

- [ ] **Task 2.2: Create Markdown Parser**
  - File: `app/lib/markdown.server.ts`
  - Action: Implement `parseArticle(content: string)` using gray-matter + marked, return frontmatter, html, tags array, validation flags
  - Notes: Sanitize HTML output with sanitize-html to prevent XSS; handle missing frontmatter gracefully

- [ ] **Task 2.3: Create GitHub API Client**
  - File: `app/lib/github.server.ts`
  - Action: Create Octokit singleton, implement `getArticleList()`, `getArticleContent(path)`, `updateArticleContent(path, content, sha, message)`, `clearCacheEntry(key)` for cache invalidation, add in-memory cache with 15min TTL, 100-entry FIFO limit, rate limit monitoring
  - Notes: Use env vars for repo config; cache key format: `${owner}/${repo}/${path}`; handle 404s and rate limits with retry headers; Octokit URL-encodes paths automatically; call `clearCacheEntry('articles-list')` after mark-as-read

- [ ] **Task 2.4: Create Article Service Layer**
  - File: `app/lib/articles.server.ts`
  - Action: Implement `getToReadArticles()` (fetches, parses, filters by tags), `getArticleBySlug(slug)`, `markArticleAsRead(slug)` (updates frontmatter tags via GitHub API), `generateSlug(filename)` helper
  - Notes: Filter logic: must have BOTH `clippings` AND `to-read` in tags array; Slug generation: lowercase, replace spaces/special chars with hyphens, remove leading/trailing hyphens, handle Unicode with encodeURIComponent, truncate to 100 chars

- [ ] **Task 2.5: Define TypeScript Interfaces**
  - File: `app/lib/types.ts`
  - Action: Create interfaces for `Article`, `ArticleFrontmatter`, `GitHubFile`, `TelegramMessage`
  - Notes: Export all types for use across codebase

- [ ] **Task 2.6: Create Structured Logger**
  - File: `app/lib/logger.server.ts`
  - Action: Create pino logger instance with JSON output, export `logger` singleton
  - Notes: Configure log level from env var `LOG_LEVEL` (default: info); use in all server-side code for error/warning logging

**Phase 3: Authentication Routes**

- [ ] **Task 3.1: Create Root Layout**
  - File: `app/root.tsx`
  - Action: Set up HTML structure, import Tailwind CSS, add meta tags for e-ink viewport, include ErrorBoundary
  - Notes: Meta viewport: `width=device-width, initial-scale=1`; minimal head for fast load

- [ ] **Task 3.2: Create Login Page**
  - File: `app/routes/login.tsx`
  - Action: Create login form with username/password fields, implement `action()` for form submission (validate credentials, create session), redirect to `/articles` on success
  - Notes: Use shadcn Button and Input components; show error message on failure; check if already logged in and redirect

- [ ] **Task 3.3: Create Logout Action**
  - File: `app/routes/logout.tsx`
  - Action: Implement `action()` to destroy session and redirect to `/login`
  - Notes: No UI needed, just action route

- [ ] **Task 3.4: Create Index Route Redirect**
  - File: `app/routes/_index.tsx`
  - Action: Implement `loader()` to check auth status, redirect to `/articles` if logged in, else `/login`
  - Notes: No UI rendering, pure redirect logic

- [ ] **Task 3.5: Create Health Check Endpoint**
  - File: `app/routes/healthz.tsx`
  - Action: Implement `loader()` that returns JSON `{ status: 'ok', timestamp: Date.now() }` with 200 status
  - Notes: Used by fly.io health checks; no authentication required; can add GitHub/Telegram API ping checks later

**Phase 4: Article Reading Interface**

- [ ] **Task 4.1: Create Article List Route**
  - File: `app/routes/articles._index.tsx`
  - Action: Implement `loader()` (requires auth, fetches to-read articles via article service), render list with title, date, source, link to article detail
  - Notes: SSR-rendered; e-ink styling (minimal chrome, high contrast); show "No articles" state

- [ ] **Task 4.2: Create Article Detail Route**
  - File: `app/routes/articles.$slug.tsx`
  - Action: Implement `loader()` (requires auth, fetches article by slug), `action()` (handles mark-as-read), render article HTML with mark-as-read button
  - Notes: SSR-rendered; use `dangerouslySetInnerHTML` for markdown HTML (already sanitized); e-ink optimized typography

- [ ] **Task 4.3: Add Mark-as-Read UI Logic**
  - File: `app/routes/articles.$slug.tsx` (update)
  - Action: Add Form with method POST to trigger action, implement optimistic UI (disable button on submit), redirect to `/articles` after success
  - Notes: Use shadcn Button component; show loading state; handle errors gracefully

- [ ] **Task 4.4: Style for E-ink**
  - File: `app/styles/tailwind.css` (extend)
  - Action: Add custom classes for article typography (large line-height, 18px base font, max-width 65ch), high contrast colors
  - Notes: Test on actual Boox device; no animations, no transitions, no hover effects

**Phase 5: Telegram Bot Integration**

- [ ] **Task 5.1: Create Telegram Server Utility**
  - File: `app/lib/telegram.server.ts`
  - Action: Create Telegraf bot instance, implement in-memory queue (array), export `bot`, `linkQueue`, `setupBotHandlers()` function
  - Notes: Singleton pattern; handlers: on('text') for URLs, command('queue') to list links, command('clear') to clear queue

- [ ] **Task 5.2: Create Telegram Webhook Route**
  - File: `app/routes/api.telegram.tsx`
  - Action: Implement `action()` to handle POST requests from Telegram, validate webhook signature using Telegram secret token, use `getBot().handleUpdate()`, return 200 OK
  - Notes: Verify `X-Telegram-Bot-Api-Secret-Token` header matches env var `TELEGRAM_WEBHOOK_SECRET` for security; handle errors silently (don't break bot); lazy-initialize bot via getBot() singleton

- [ ] **Task 5.3: Register Telegram Webhook**
  - File: Manual step / script
  - Action: Use BotFather to create bot, get token, call `setWebhook` API with fly.io URL + `/api/telegram` and set secret token
  - Notes: Requires HTTPS (fly.io provides); webhook URL format: `https://your-app.fly.dev/api/telegram`; set `TELEGRAM_WEBHOOK_SECRET` env var and pass to setWebhook API call; store secret for signature validation

- [ ] **Task 5.4: Add URL Validation**
  - File: `app/lib/telegram.server.ts` (update)
  - Action: Implement `isValidUrl()` helper, validate URLs before adding to queue
  - Notes: Use URL constructor, catch errors; accept http/https only

**Phase 6: Deployment & Environment**

- [ ] **Task 6.1: Create Dockerfile (via fly.io)**
  - File: `Dockerfile`
  - Action: Run `fly launch` which will generate an appropriate Dockerfile automatically; review and adjust if needed
  - Notes: fly.io detects Node.js projects and creates optimized Dockerfile; use Node 20; manual creation not required for MVP

- [ ] **Task 6.2: Create fly.io Configuration**
  - File: `fly.toml`
  - Action: Configure app name, region (cdg for Paris), internal port 3000, http service on port 80/443, auto-start/stop, health checks pointing to `/healthz`
  - Notes: Set env var placeholders; configure secrets via `fly secrets set`; Paris region code is `cdg`

- [ ] **Task 6.3: Add Build Script**
  - File: `package.json` (update)
  - Action: Add scripts: `build`, `start`, `dev`, `typecheck`
  - Notes: Build script: `remix build`; start script: `remix-serve build`

- [ ] **Task 6.4: Deploy to fly.io**
  - File: Manual step
  - Action: Run `fly launch`, configure secrets, deploy with `fly deploy`
  - Notes: Set all env vars as secrets; test deployment with health check endpoint

**Phase 7: Testing & Verification**

- [ ] **Task 7.1: Test Authentication Flow**
  - Action: Manual test login/logout, session persistence, protected route access
  - Notes: Test on Boox browser; verify cookie persistence

- [ ] **Task 7.2: Test GitHub Integration**
  - Action: Manual test article list loading, article detail loading, mark-as-read updates in GitHub
  - Notes: Verify tag removal in GitHub file; test cache behavior

- [ ] **Task 7.3: Test Telegram Bot**
  - Action: Send URL to bot, verify confirmation message, check `/queue` command, clear queue
  - Notes: Test from phone; verify in-memory queue works

- [ ] **Task 7.4: Test E-ink Rendering**
  - Action: Load article list and detail on Boox e-reader, verify typography, contrast, responsiveness
  - Notes: Test various article lengths; verify no animations/transitions

- [ ] **Task 7.5: End-to-End Workflow Test**
  - Action: Complete full workflow: Telegram bot → Web Clipper → GitHub → Reader → Mark as read → Verify removal
  - Notes: This validates the entire MVP scope

### Acceptance Criteria

Each AC follows Given/When/Then format and covers happy path, error handling, and edge cases.

**AC1: Telegram Link Capture (Happy Path)**
- **Given** user shares article URL to Telegram bot from phone
- **When** bot receives the message
- **Then** bot confirms "Link saved: [URL]" and stores in memory queue
- **And** bot command `/queue` displays all queued links

**AC1.1: Telegram Link Validation (Error Handling)**
- **Given** user sends non-URL text to Telegram bot
- **When** bot receives the message
- **Then** bot does not add to queue and optionally sends "Invalid URL" message
- **And** queue remains unchanged

**AC1.2: Telegram Queue Management (Edge Case)**
- **Given** user has links in Telegram queue
- **When** server restarts
- **Then** queue is cleared (acceptable data loss per MVP scope)
- **And** user can re-share links if needed

**AC2: GitHub Vault Sync (Happy Path)**
- **Given** articles exist in `1. Inbox/clippings/` with tags `[clippings, to-read]`
- **When** user loads article list page
- **Then** all matching articles appear with title, date, source
- **And** only articles with BOTH required tags are shown
- **And** page loads via SSR in <2 seconds on e-ink

**AC2.1: GitHub Tag Filtering (Edge Case)**
- **Given** article has only `clippings` tag OR only `to-read` tag
- **When** user loads article list
- **Then** article does NOT appear in list
- **And** only articles with BOTH tags are visible

**AC2.2: GitHub API Caching (Performance)**
- **Given** article list was fetched within last 15 minutes
- **When** user reloads article list page
- **Then** cached data is used instead of GitHub API call
- **And** page loads instantly without API delay

**AC2.3: GitHub API Error Handling**
- **Given** GitHub API is unavailable or rate limited
- **When** user loads article list page
- **Then** user sees error message explaining the issue
- **And** cached data is shown if available, or empty state displayed

**AC3: Article Reading Experience (Happy Path)**
- **Given** user clicks article from list on Boox
- **When** article page loads
- **Then** full markdown content renders with clean typography
- **And** UI is minimal chrome (just title, content, mark-as-read button)
- **And** text is high contrast, readable on e-ink
- **And** page is responsive on Boox browser viewport

**AC3.1: Article Not Found (Error Handling)**
- **Given** user navigates to non-existent article slug
- **When** page attempts to load
- **Then** 404 error page is shown with link back to article list
- **And** no crash occurs

**AC3.2: Markdown Rendering Safety (Security)**
- **Given** article contains potentially malicious HTML or scripts
- **When** markdown is rendered to HTML
- **Then** content is sanitized and no XSS vulnerability exists
- **And** only safe HTML tags are rendered

**AC4: Mark as Read (Happy Path)**
- **Given** user is reading an article
- **When** user clicks "Mark as Read" button
- **Then** `to-read` tag is removed from frontmatter via GitHub API
- **And** article disappears from reading list on next visit
- **And** changes persist in GitHub (verifiable by viewing raw file)
- **And** user sees confirmation message and is redirected to article list

**AC4.1: Mark as Read GitHub Failure (Error Handling)**
- **Given** GitHub API fails during mark-as-read operation
- **When** user clicks "Mark as Read" button
- **Then** error message is shown to user
- **And** article remains in reading list
- **And** user can retry the operation

**AC4.2: Mark as Read Idempotency (Edge Case)**
- **Given** article is already marked as read
- **When** user somehow accesses the article and clicks "Mark as Read" again
- **Then** operation completes without error
- **And** no duplicate tag removal attempted

**AC5: Authentication Security (Happy Path)**
- **Given** unauthenticated user tries to access reader
- **When** they navigate to any protected route (`/articles/*`)
- **Then** they are redirected to `/login` page
- **And** after successful login with correct credentials
- **Then** they access the reading interface
- **And** session persists across browser restarts via secure cookie

**AC5.1: Authentication Invalid Credentials (Error Handling)**
- **Given** user enters incorrect username or password
- **When** they submit login form
- **Then** error message "Invalid credentials" is shown
- **And** user remains on login page
- **And** no session is created

**AC5.2: Authentication Session Expiry (Edge Case)**
- **Given** user has valid session cookie older than 30 days
- **When** they access protected route
- **Then** session is treated as expired
- **And** user is redirected to login page
- **And** must re-authenticate

**AC6: End-to-End Workflow (Integration Test)**
- **Given** user discovers article on phone during commute
- **When** they share to Telegram bot
- **And** later process via Web Clipper to Obsidian with `#clippings #to-read`
- **And** push to GitHub
- **And** open reader on Boox
- **Then** article appears in reading list
- **And** they can read comfortably on e-ink
- **And** mark as read when finished
- **And** article disappears from queue on next page load

**AC6.1: End-to-End with Cache Clear (Integration Edge Case)**
- **Given** user marked article as read
- **When** cache is still active (within 15 min)
- **Then** article still appears in cached list temporarily
- **And** after cache expires or manual refresh, article is gone

## Additional Context

### Dependencies

**Core Framework:**
- `react` + `react-dom`
- `@remix-run/react` (React Router v7)
- `@remix-run/node` (server runtime)
- `@remix-run/serve` (production server)

**UI & Styling:**
- `tailwindcss`
- `@radix-ui/*` (shadcn UI primitives)
- Various shadcn UI components (Button, Card, etc.)

**Markdown:**
- `gray-matter` (frontmatter parsing)
- `marked` or `remark` (markdown to HTML)
- `sanitize-html` (XSS protection)

**API Clients:**
- `octokit` (GitHub API)
- `node-telegram-bot-api` or `telegraf` (Telegram Bot API)

**Authentication:**
- `bcrypt` (password hashing)
- Built-in session management with cookies

**Dev Dependencies:**
- `typescript`
- `@types/node`, `@types/react`, etc.
- `eslint`, `prettier`

### Testing Strategy

**MVP Testing Approach (Manual):**
- Manual testing on actual Boox e-reader device
- Manual testing of Telegram bot workflow
- Manual verification of GitHub API integration
- No automated tests for MVP (1-week build constraint)

**Post-MVP Testing:**
- Unit tests for markdown parsing logic
- Integration tests for GitHub API client
- E2E tests for authentication flow
- Playwright tests for article reading flow

### Notes

**Critical Success Factors:**
1. E-ink optimization is non-negotiable - must be tested on actual Boox device
2. GitHub API caching is essential to avoid rate limits during development
3. Markdown parsing must handle Obsidian Web Clipper format exactly
4. Session persistence critical for good mobile/e-reader UX
5. Telegram webhook requires HTTPS (fly.io provides this automatically)

**Known Risks:**
- GitHub API rate limits (5000/hour) - mitigate with aggressive caching
- Telegram in-memory queue data loss on restart - acceptable for MVP
- Obsidian Web Clipper format changes - document expected format clearly
- E-ink browser quirks - test early and often on Boox

**Future Considerations (v1.1+):**
- Add persistent Telegram queue storage (SQLite or similar)
- Implement newsletter curation features
- Add GitHub auto-commit option for mark-as-read
- Consider PWA for offline reading

---

You can see the other outputs [here](/building-inkwell-with-bmad/output/) and the [blog post about how I built a project using AI and BMAD Method](/building-inkwell-with-bmad).
