# ESK Properties - landing page

Property dealers in Lahore (buy, sell, rent). Built with Next.js 16, Tailwind 4, GSAP and Lenis.
Based on the open-source "YourHome" template, fully rewritten in English.

## Run locally
```
npm ci
npm run dev        # http://localhost:3000
```

For local production verification:
```
npm run lint
npm run build
npm start
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project** and import the GitHub repository.
3. Keep the detected **Next.js** framework and default build settings (`npm run build`).
4. If using a custom domain, add `NEXT_PUBLIC_SITE_URL` in the Vercel project's Environment Variables for Production, Preview, and Development (for example, `https://eskproperties.pk`).
5. Deploy. Vercel will build pull requests and deploy updates pushed to the connected branch.

No server-side secrets or other environment variables are required. `.env.example` documents the optional canonical site URL; copy it to `.env.local` for local metadata previews and replace the example domain.

## GitHub checks

GitHub Actions runs `npm ci`, lint, and a production build on pushes to `main` and on pull requests. Vercel can be connected separately to the same repository for preview and production deployments.

## Where to change things
- Contact details, name, agent: `src/lib/site.ts` (WhatsApp number, email, Waseem Asghar).
- Societies / areas list (grouped, searchable): `src/data/societies.ts`
- Marla / Kanal sizes: `src/data/sizes.ts`
- Photos: `public/assets/images/esk/` (house photos) and `lahore/`; names in `src/lib/images.ts`
- Texts: the files in `src/components/` (Hero, Services, About, Process, Contact, Footer)

## Credits
House and interior photos: Unsplash (free licence). Lahore photos: Wikimedia Commons, CC BY-SA 4.0
("Badshahi Mosque, Lahore VII" by Fassifarooq, "Arfa Karim Tower Lahore" by Jugni). Credits are shown in the footer; keep them.
Fonts: Clash Display and General Sans (Fontshare free licence, see `public/fonts/licenses`).
