# GetMeUsers

A conversion-focused landing page for GetMeUsers, helping AI app founders get their first users.

## Stack

- Next.js (App Router)
- Tailwind CSS
- TypeScript

## Getting started

```bash
npm install
cp .env.local.example .env.local
# Edit .env.local with your Calendly URL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_CALENDLY_URL` | Your Calendly booking link |

## Deploy on Vercel

1. Push this repo to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Add `NEXT_PUBLIC_CALENDLY_URL` in Project Settings → Environment Variables
4. Deploy

No backend or database required.

## Project structure

```
app/           → layout, page, global styles
components/    → section components + UI primitives
lib/           → copy and Calendly URL constant
```
