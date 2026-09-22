# Content Guide

For day-to-day content edits, use the client guide:

**[ONE_ELECTRA_CLIENT_GUIDE.md](../ONE_ELECTRA_CLIENT_GUIDE.md)**

Developer quick reference:

| Content | File |
|---|---|
| Brand, contact, homepage, About, SEO | `src/data/site.ts` |
| Products | `src/data/products.ts` |
| Categories | `src/data/categories.ts` |
| Services | `src/data/services.ts` |
| FAQs | `src/data/faqs.ts` |
| Product images | `src/assets/products/<category>/<product>/` |

After product slug changes, run `npm run build` so `public/sitemap.xml` regenerates.

Deployment and contact endpoint setup: see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md).
