# Douglas Driveway Services — Website (v2, multi-page)

Next.js 14 rebuild of the single-page demo, split into real pages, with all
of Corey's requested changes.

## Pages
- `/` — Home
- `/services` — Detailed services (sealing, pressure washing, snow clearing)
- `/process` — Step-by-step process (edge-trimmer line removed per request)
- `/gallery` — Photo gallery
- `/reviews` — Reviews + link out to Google
- `/contact` — Contact form, hours, WhatsApp, service-area map

## Setup

1. Install Node.js 18+ from https://nodejs.org
2. Install dependencies:
   ```
   npm install
   ```
3. Set up the contact form (Formspree, free):
   - Sign up at https://formspree.io with coreyddouglas76@gmail.com
   - Create a form, copy the endpoint it gives you (looks like
     `https://formspree.io/f/abcd1234`)
   - Copy `.env.local.example` to `.env.local` and paste the endpoint in
4. Run locally:
   ```
   npm run dev
   ```
   Visit http://localhost:3000

## Before going live
- Swap placeholder photos in `/public/images` and update paths in
  `app/page.tsx`, `app/services/page.tsx`, `app/gallery/page.tsx`
- Replace the 8 placeholder reviews in `app/reviews/page.tsx` with real
  Google reviews (copy them word-for-word)
- Replace `GOOGLE_REVIEWS_URL` in `app/reviews/page.tsx` with the real
  Google Business Profile share link (Google Maps listing → Share → Copy link)
- Update WhatsApp/phone numbers if they ever change (currently
  (306) 540-8311 — search for `3065408311` across the project)

## Deploy
Push this repo to GitHub, then connect it to either:
- **Netlify** — netlify.com, "Import from Git", auto-detects Next.js
- **Vercel** — vercel.com, "Import Project"

Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` as an environment variable in whichever
dashboard you use (the `.env.local` file is not committed to git).

Build for production locally to test first:
```
npm run build
npm run start
```

## Notes
- The service-area map on `/contact` shows a coverage **zone**, not an
  exact address — this is intentional, per Corey's request not to reveal
  his home address.
- Hours are currently set to 6:00 AM – 7:00 PM, Mon–Sun, in three places:
  `app/page.tsx`, `app/contact/page.tsx`.
