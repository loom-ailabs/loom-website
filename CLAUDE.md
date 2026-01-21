# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Loom Website is a documentation site built with Next.js 16 (App Router) and Fumadocs. It uses MDX for content management with documentation stored in `/content/docs/`.

## Commands

```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm run lint         # Fix linting issues with oxlint
npm run format       # Format code with oxfmt
npm run types:check  # Check TypeScript types + generate fumadocs types
```

## Code Quality

This project uses **Oxlint** and **Oxfmt** (Rust-based tools) instead of ESLint and Prettier. These are configured in `.oxlintrc.json` and `.oxfmtrc.json`.

Git hooks enforce:

- Pre-commit: lint-staged runs oxlint --fix and oxfmt on staged files
- Commit message: must follow conventional commits format (e.g., `feat:`, `fix:`, `chore:`)

## Architecture

### Content System

- MDX documentation lives in `/content/docs/`
- Fumadocs MDX processes content via `source.config.ts`
- Page tree and metadata are generated automatically from MDX frontmatter
- Source loader configured in `src/lib/source.ts`

### Routing

- `/` - Landing page (`src/app/(home)/page.tsx`)
- `/docs/[[...slug]]` - Dynamic documentation pages using Fumadocs
- `/api/search` - Search API endpoint (Fumadocs/Orama search)
- `/llms.mdx/docs/...` and `/llms-full.txt` - LLM-friendly content routes

### Key Components

- `src/components/layout/notebook/` - Main docs layout (DocsLayout, sidebar, navigation)
- `src/components/ui/` - Radix UI component wrappers
- `src/components/toc/` - Table of contents components
- `src/lib/layout.shared.tsx` - Shared layout configuration (nav title, links)

### Styling

- Tailwind CSS with CVA (Class Variance Authority) for component variants
- Dark/light theme via next-themes
- Utility function `cn()` in `src/lib/cn.ts` for Tailwind class merging

## TypeScript

Strict mode is enabled. Path aliases:

- `@/*` → `./src/*`
- `fumadocs-mdx:collections/*` → `.source/*` (generated types)

## Adding Documentation

1. Create MDX file in `/content/docs/`
2. Include frontmatter with `title` and `description`
3. The page automatically appears in the sidebar navigation
