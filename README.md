# Bitscale Dashboard

A pixel-perfect implementation of the Bitscale dashboard UI built with Next.js, Typescript and Tailwind CSS.

## Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Iconify**, **Lucide Icons** for icons
- **shadcn/ui** for Progress component

## Features

- Pixel-perfect implementation of the Figma design
- **Find People Modal** with:
  - Accordion filters with smooth chevron animation
  - Close on backdrop click
  - Close on `Escape` key
- **Desktop-only guard** — mobile and tablet users see a friendly message instead of a broken layout
- Responsive-safe dashboard layout via `DashboardLayout`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Live Demo

[https://your-app.vercel.app](https://your-app.vercel.app)

## Project Structure

```
app/
├── dashboard/
│   ├── layout.tsx       # Dashboard layout with desktop guard
│   └── page.tsx         # Main dashboard page
├── components/
│   ├── dashboard/
│   │   ├── Sidebar.tsx
│   │   ├── GridRow.tsx
│   │   ├── TableHeader.tsx
│   │   └── FindPeopleModal.tsx
│   └── DesktopOnly.tsx      # Mobile block wrapper
```
