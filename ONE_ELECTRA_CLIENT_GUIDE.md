# One Electra Website Guide

This guide explains how to make simple website updates safely.

## Important

Most content changes can be made without touching the website layout.

Use these files:

- `src/data/products.ts` for products
- `src/data/categories.ts` for product categories
- `src/data/services.ts` for services
- `src/data/site.ts` for headings, paragraphs, contact details, and homepage text
- `src/assets/` for images and logos

Logo files are kept in `src/assets/brand/client-logo/`. The website currently uses `icon-badge-dark.svg` for the logo symbol and `icon-transparent-favicon.svg` for the browser tab icon. Replace those matching SVG files when the logo needs to change, and keep the same file names so the website updates automatically.

Do not edit files inside `src/components/` unless a developer asks you to. These files control the website design and functionality.

## Change Website Text

1. Open `src/data/site.ts`.
2. Find the text you want to change.
3. Replace only the words between the quotation marks.
4. Save the file.
5. Check the page in the browser.

This is the best place to change:

- Homepage headings and descriptions
- About page text
- Contact details
- Email addresses
- WhatsApp number
- Market names
- SEO title and description

## Add or Change a Product

1. Open `src/data/products.ts`.
2. Copy a product that is similar to the new product.
3. Change the product name, model, description, features, and specifications.
4. Add the correct image file path.
5. Save the file.
6. Check the Products page in the browser.

Each product needs a unique:

- `id`
- `slug`
- `model`

Available category names are:

```text
ac-charging-pile
dc-charging-pile
portable-charging-pile
adapters-connectors
```

Do not reuse an existing product `id` or `slug`.

## Add Product Images

Put product images inside the matching folder:

```text
src/assets/products/
├── ac-charging-pile/
├── dc-charging-pile/
├── portable-charging-pile/
└── adapters-connectors/
```

It is best to create a folder for each product:

```text
src/assets/products/ac-charging-pile/dl-eu004-1/
├── 01.webp
├── 02.webp
└── 03.webp
```

Use `01.webp` as the main product image. Use WebP or AVIF when possible. Avoid very large files because they make the website slow.

## Add a Category

Ask a developer before adding a new category.

If you have developer support, add the category in `src/data/categories.ts` using this format:

```ts
{
  id: 'new-category',
  name: 'New Category',
  slug: 'new-category',
  description: 'Short description',
}
```

The category `id` must match the category used by the products.

## WhatsApp Quotations

Product quotation buttons automatically create a WhatsApp message from the product information.

Do not create a separate WhatsApp link for every product. Update the product information instead.

## Contact Form

Contact form messages are sent to:

**support@oneelectra.com**

Do not add passwords, email API keys, or other private information to the website files.

If the contact form stops working, contact a developer.

## Preview the Website

Ask a developer to start the local preview, or run:

```text
npm install
npm run dev
```

Then open the local address shown in the terminal, usually:

```text
http://localhost:5173
```

## Before Publishing

Check the website on:

- Desktop
- Tablet
- Mobile

Also check:

- Product images
- Product names and model numbers
- Product categories
- WhatsApp quotation buttons
- Contact form
- Navigation links
- Footer links
- Spelling and contact details

## When to Ask a Developer

Ask a developer when you need to:

- Change the layout or design
- Add a new page
- Add a new homepage section
- Change animations
- Change the contact form system
- Fix a build or browser error
- Add a new website feature

The safest rule is simple: edit content in `src/data/` and images in `src/assets/`. Leave layout and component files to a developer.
