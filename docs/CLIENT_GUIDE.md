# One Electra — Client Content Guide

This guide is for non-technical users who need to update the One Electra website.

## 1. Important rule

Do not edit React component files unless a developer tells you to.

Most normal changes should happen in:

- `src/data/products.ts` — products
- `src/data/categories.ts` — categories
- `src/data/services.ts` — services
- `src/data/site.ts` — general website text
- `src/assets/` — images and brand assets

## 2. Add a product

1. Open `src/data/products.ts`.
2. Copy an existing product.
3. Change:
   - `id`
   - `slug`
   - `name`
   - `model`
   - `category`
   - description
   - specifications
   - features
   - image paths
4. Put images in the correct category folder.
5. Save and preview with `npm run dev`.
6. Commit and push to GitHub.

Allowed category IDs:

```text
ac-charging-pile
dc-charging-pile
portable-charging-pile
adapters-connectors
```

## 3. Add product images

Recommended location:

```text
src/assets/products/
├── ac-charging-pile/
├── dc-charging-pile/
├── portable-charging-pile/
└── adapters-connectors/
```

For each product, use a folder where practical:

```text
ac-charging-pile/
└── dl-eu004-1/
    ├── 01.webp
    ├── 02.webp
    └── 03.webp
```

`01.webp` should normally be the main image.

Use WebP/AVIF for photographs where possible. Avoid very large original camera files.

## 4. Add a category

Add a category to `src/data/categories.ts`:

```ts
{
  id: "new-category",
  name: "New Category",
  slug: "new-category",
  description: "Short description"
}
```

Then products can use that category ID.

## 5. Change homepage text

Use `src/data/site.ts`.

Do not change layout components just to change a paragraph or heading.

## 6. Get Quotation

The product detail page should contain:

**Get Quotation → WhatsApp**

The WhatsApp message is generated automatically from the product data.

Do not manually create a different WhatsApp URL for every product.

## 7. Contact form

Contact submissions are delivered to:

**support@oneelectra.com**

The frontend must never contain an email API secret.

The form architecture stores the enquiry first and then sends the email through the serverless delivery system. If an email provider has a temporary error or quota issue, the enquiry remains stored for retry.

## 8. Add a new homepage section

Ask a developer to create the reusable section component first.

After that, future content can normally be changed through a data file.

Recommended component structure:

```text
src/components/home/
├── HeroSection.tsx
├── BrandStorySection.tsx
├── ProductCategoriesSection.tsx
├── StandardsSection.tsx
├── GlobalPresenceSection.tsx
├── ServicesSection.tsx
└── FinalCtaSection.tsx
```

## 9. Before publishing

Always check:

- Desktop
- Tablet
- Mobile
- Product images
- Product model numbers
- WhatsApp quotation message
- Contact form
- Email delivery
- Navigation
- Footer links

## 10. Git workflow for a non-technical client

If the client is not comfortable with Git:

- Use GitHub's web editor for very small text/data changes.
- For image changes, upload files into the correct folder.
- For larger changes, send the requirement to the developer instead of changing component code.

The safest model is to make content changes in data files and image folders only.
