# One Electra Website

Premium React rebuild of the One Electra EV charging brand site.

## Stack

- React + TypeScript + Vite
- Tailwind CSS (design tokens)
- React Router
- Framer Motion
- Lucide React

## Quick start

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Content editing (non-technical)

Prefer these files — do not edit React components for normal copy/product changes:

| File | Purpose |
|------|---------|
| `src/data/products.ts` | Product catalogue |
| `src/data/categories.ts` | Categories |
| `src/data/services.ts` | Services |
| `src/data/site.ts` | Homepage / about / contact copy |
| `src/data/faqs.ts` | FAQ content |
| `src/assets/products/` | Product images |
| `ONE_ELECTRA_CLIENT_GUIDE.md` | Client guide |

## Product → WhatsApp flow

1. Product card opens `/products/:slug`
2. Detail page **Get Quotation** builds a WhatsApp deep link with product name/model
3. Phone number lives in `src/data/site.ts` → `contact.whatsappNumber`

## Contact form

- Destination: `support@oneelectra.com`
- Set `VITE_CONTACT_ENDPOINT` to the production serverless contact endpoint before deployment.
- The current FormSubmit URL is only a development fallback. A production endpoint must validate, rate-limit, honeypot-check, and durably store each enquiry before attempting email delivery.
- Never put Resend, SMTP, database, or storage credentials in `VITE_*` variables or the React bundle.

## Design system

- Ink `#080A0C`
- Graphite `#111519`
- Off white `#F2F4F3`
- Muted `#B3BDBF`
- Electric lime `#B8FF3D`

## Deployment

Deploy the Vite static build (`dist/`) to Vercel, Netlify, or Cloudflare Pages. Configure SPA fallback to `index.html` for client routes.

The build generates `public/sitemap.xml` from the route list and product slugs. See `docs/DEPLOYMENT_GUIDE.md` for endpoint, domain, and verification requirements.
