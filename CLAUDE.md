# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

This is a **Next.js 15 App Router** portfolio site with a Matrix/hacker aesthetic and an integrated AI chat feature.

### Key directories

- `src/app/` — App Router pages and the `/api/chat` route
- `src/components/pages/` — One component per portfolio section (Hero, About, Skills, Experience, etc.)
- `src/components/shared/` — Reusable UI: ChatBox, MatrixRain, TypewriterQuote, etc.
- `src/components/navigation/` — Desktop and mobile nav with scroll-active detection
- `src/data/` — All portfolio content as JSON files (skills, experiences, projects, etc.)
- `src/provider/` — React context providers for MUI theme and Snackbar

### Tech stack

- **UI:** Material-UI (MUI) 7 with Emotion (CSS-in-JS)
- **Animations:** Framer Motion
- **Particle effects:** `@tsparticles/*` (Matrix rain background)
- **AI chat:** Vercel AI SDK (`ai`, `@ai-sdk/react`) + Groq API (`@ai-sdk/groq`) with LLaMA 3.3-70B
- **PWA:** `next-pwa` (disabled in dev, enabled in production)

### AI chat data flow

1. All `/src/data/*.json` files are loaded in `/api/chat/route.ts` and merged into a system prompt
2. The assistant is constrained to answer only questions about the portfolio owner using that JSON data
3. Responses are streamed back to the frontend via `toDataStreamResponse()`
4. `ChatBox.tsx` + `ChatLauncher.tsx` handle the frontend chat UI using `useChat` from `@ai-sdk/react`

### Path alias

`@/*` maps to `./src/*` (configured in `tsconfig.json`).

### Environment variables

The Groq API key must be set as `GROQ_API_KEY` for the chat feature to work.
