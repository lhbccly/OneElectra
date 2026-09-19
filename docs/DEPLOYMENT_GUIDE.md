# Deployment Guide

## Rendering decision

This repository uses React Router with a Vite client build. Vercel serves `index.html` for application routes, while route-level metadata updates the browser document, social preview tags, canonical URL, and Product JSON-LD after navigation.

If organic search becomes a primary acquisition channel, move to a prerendered framework such as Next.js or Astro before expanding the catalogue substantially. Do not assume client-side metadata is equivalent to server-rendered HTML for every crawler.

## Vercel setup

1. Import the repository into Vercel.
2. Use the default Vite build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
3. Add the production variable `VITE_CONTACT_ENDPOINT`.
4. Point the endpoint at a serverless contact handler that validates and rate-limits requests, rejects the `website` honeypot, stores the enquiry durably, and then sends email to `support@oneelectra.com`.
5. Verify the sending domain with the email provider. Do not put provider API keys in `VITE_*` variables.
6. Confirm the production domain is `https://oneelectra.com` before relying on the generated sitemap.

The current FormSubmit URL is a fallback for local/staging continuity. It does not provide the durable-capture guarantee described in the v2 plan and should not be treated as the final production architecture.

## Acceptance checks

- Open `/`, `/products`, `/services`, `/about`, `/faq`, `/contact`, and at least one `/products/:slug` URL directly.
- Confirm each route has a distinct title, description, canonical URL, Open Graph title/description, and Twitter title/description.
- Confirm `https://oneelectra.com/robots.txt` points to `/sitemap.xml`.
- Confirm `https://oneelectra.com/sitemap.xml` includes the current product detail routes.
- Submit a test enquiry and verify both the durable record and email delivery status.
- Test keyboard focus, mobile layout, reduced motion, and contrast before launch.
