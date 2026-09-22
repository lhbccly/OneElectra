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

**Start here:** [ONE_ELECTRA_CLIENT_GUIDE.md](./ONE_ELECTRA_CLIENT_GUIDE.md)

That guide is organised by task so you can jump to one section (contact details, products, logo, FAQ, etc.) and update only what you need.

| File | Purpose |
|------|---------|
| `src/data/site.ts` | Homepage / about / contact / solutions / standards copy |
| `src/data/products.ts` | Product catalogue |
| `src/data/categories.ts` | Categories |
| `src/data/services.ts` | Services |
| `src/data/faqs.ts` | FAQ content |
| `src/assets/products/` | Product images |
| `src/assets/brand/logo-mark.svg` | Logo mark |

## Product → WhatsApp flow

1. Product card opens `/products/:slug`
2. Detail page **Get Quotation** builds a WhatsApp deep link with product name/model
3. Phone number lives in `src/data/site.ts` → `contact.whatsappNumber`

## Contact form

- Destination: value of `contact.supportEmail` in `src/data/site.ts`
- Set `VITE_CONTACT_ENDPOINT` to the production serverless contact endpoint before deployment
- Never put Resend, SMTP, database, or storage credentials in `VITE_*` variables or the React bundle

## Deployment

Deploy the Vite static build (`dist/`) to Vercel, Netlify, or Cloudflare Pages. Configure SPA fallback to `index.html` for client routes.

The build generates `public/sitemap.xml` from the route list and product slugs. See `docs/DEPLOYMENT_GUIDE.md` for endpoint, domain, and verification requirements.
