# Space Portfolio

A modern, responsive single-page portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Lucide React, and `next/font`.

## Run locally

Install Node.js 20.9 or newer, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. To verify a production build:

```bash
npm run build
npm start
```

## Personalize

- Change the name, biography, contact details, and social URLs in `src/components/Portfolio.tsx`.
- Edit projects, skills, activities, certificates, and experience in `src/data/portfolio.ts`.
- Update site metadata in `src/app/layout.tsx`.
- Replace `public/images/astronaut-hero.png` with a personal portrait or another hero image.
- Add your actual resume as `public/resume.pdf` so both resume buttons can download it.
- Connect the contact form to Formspree or a Next.js route in the `submit` handler before deploying.

The current content is polished sample data intended to make the site useful immediately.
