# Content Guide

## Add a product

Edit `src/data/products.ts` and copy an existing product object. Change the `id`, lowercase hyphenated `slug`, `name`, `model`, `category`, descriptions, specifications, features, standards, and image imports. Product cards and detail pages update automatically from this data.

Use one of these category IDs:

- `ac-charging-pile`
- `dc-charging-pile`
- `portable-charging-pile`
- `adapters-connectors`

A product card links to `/products/:slug`. Quotation text is generated on the detail page from the product name and model, so do not add a second WhatsApp URL to the card.

## Add images

Place images under `src/assets/products/<category>/<product-folder>/`. Use predictable names such as `01.webp`, `02.webp`, and `03.webp`; keep `01` as the primary image. Prefer WebP or AVIF for photographs and compress large source files before adding them to Git.

## Change copy

- Homepage, About, contact, and global brand copy: `src/data/site.ts`
- Product catalogue: `src/data/products.ts`
- Categories: `src/data/categories.ts`
- Services and trade terms: `src/data/services.ts`
- FAQ answers: `src/data/faqs.ts`

Keep claims such as certifications, power ranges, lead times, and compliance documents aligned with current factory documentation. Do not label a product as certified without the corresponding evidence.

## Add a category

Add the category to `src/data/categories.ts`. The category filter and product links use the category slug from that file. If a new category needs different imagery, add its assets under `src/assets/products/` and update the product objects.

After content changes, run:

```bash
npm run build
```

The build regenerates `public/sitemap.xml` from the product slugs.
