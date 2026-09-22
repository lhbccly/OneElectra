# One Electra — Client Update Guide

**Who this is for:** anyone who needs to change website text, products, contact details, or images — without coding.

**Golden rule:** only edit files listed in this guide. Do not open folders named `components`, `pages`, or `lib` unless a developer asks you to.

---

## Jump to what you need

1. [Change phone, email, WhatsApp, or social links](#1-change-phone-email-whatsapp-or-social-links)
2. [Change homepage & About page text](#2-change-homepage--about-page-text)
3. [Add or edit a product](#3-add-or-edit-a-product)
4. [Add or replace product photos](#4-add-or-replace-product-photos)
5. [Change product categories](#5-change-product-categories)
6. [Change services page text](#6-change-services-page-text)
7. [Change FAQ answers](#7-change-faq-answers)
8. [Change the logo or browser tab icon](#8-change-the-logo-or-browser-tab-icon)
9. [Preview your changes](#9-preview-your-changes)
10. [Checklist before publishing](#10-checklist-before-publishing)
11. [When to ask a developer](#11-when-to-ask-a-developer)

---

## Quick map — which file do I open?

| I want to change… | Open this file |
|---|---|
| Phone, email, WhatsApp, address, social links | `src/data/site.ts` → `contact` and `social` |
| Homepage headings, About text, Why Choose Us, Solutions, Standards | `src/data/site.ts` |
| Product name, model, specs, features | `src/data/products.ts` |
| Product photos | `src/assets/products/...` |
| Category names / descriptions | `src/data/categories.ts` |
| Services / trade terms | `src/data/services.ts` |
| FAQ questions & answers | `src/data/faqs.ts` |
| Logo symbol | `src/assets/brand/logo-mark.svg` |
| Browser tab icon | `public/favicon.svg` |

---

## How to edit text safely

1. Open the file in the table above.
2. Find the words you want to change.
3. Change **only** the text between quotation marks `"..."`.
4. Do **not** remove commas `,` or curly braces `{ }`.
5. Save the file.
6. Refresh the website preview in your browser.

**Example — change the support email:**

```ts
supportEmail: 'support@oneelectra.com',
```

Become:

```ts
supportEmail: 'hello@yourcompany.com',
```

---

## 1. Change phone, email, WhatsApp, or social links

**File:** `src/data/site.ts`

Find the `contact` block:

```ts
contact: {
  supportEmail: 'support@oneelectra.com',
  infoEmail: 'info@oneelectra.com',
  inquiryEmail: 'jasmin@oneelectra.com',
  whatsappNumber: '8615504192700',
  markets: 'Europe | Middle East | South Asia | Global',
  address: 'Shenyang, Liaoning 110000, China',
},
```

| Field | What it controls |
|---|---|
| `supportEmail` | Contact form destination (and success message) |
| `infoEmail` | Info email shown on the site |
| `inquiryEmail` | Sales / enquiry email |
| `whatsappNumber` | WhatsApp “Get Quotation” buttons (digits only, country code included, **no** `+` or spaces) |
| `markets` | Markets line in contact areas |
| `address` | Company address |

Then find the `social` block to update LinkedIn, Facebook, Instagram, or WhatsApp profile links.

Also update the brand website if needed:

```ts
brand: {
  name: 'One Electra',
  website: 'oneelectra.com',
  ...
}
```

---

## 2. Change homepage & About page text

**File:** `src/data/site.ts`

Use the section name that matches what you see on the website:

| Website section | Look for this name in `site.ts` |
|---|---|
| Top banner (hero) | `hero` |
| “I Need EV Charging Hardware For…” cards | `solutions` |
| “Charging systems for every deployment” | `categoriesSection` |
| Brand story / “Why Buy Through One Electra?” | `brandStory` |
| Why Choose Us cards | `whyChooseSection` + `whyChoose` |
| Charging standards (About page) | `standardsSection` + `standards` |
| Bottom “Need Certified Hardware…” banner | `finalCta` |
| About page intro & benefit lists | `about` |
| Number tiles (4 Major / Shenyang / etc.) | `trustStats` |
| Google title & description | `seo` |

**Tip:** Search inside the file (Ctrl+F / Cmd+F) for a few words you already see on the website. That jumps you straight to the right place.

---

## 3. Add or edit a product

**File:** `src/data/products.ts`

### Edit an existing product

1. Search for the product name or model number.
2. Change only the text between quotes: `name`, `model`, descriptions, `features`, `specifications`.
3. Save and check `/products` and the product detail page.

### Add a new product

1. Copy a whole product block that is similar to yours.
2. Paste it below the last product (keep a comma between products).
3. Give it a **new unique** `id`, `slug`, and `model` (do not copy another product’s values).
4. Set `category` to one of:

```text
ac-charging-pile
dc-charging-pile
portable-charging-pile
adapters-connectors
```

5. Point `images` to your photo files (see next section).
6. Set `featured: true` only if you want it on the homepage featured row.

**Slug rule:** lowercase words separated by hyphens, for example `dl-eu004-1`. This becomes the web address `/products/dl-eu004-1`.

---

## 4. Add or replace product photos

Put photos in the matching category folder:

```text
src/assets/products/
├── ac-charging-pile/
├── dc-charging-pile/
├── portable-charging-pile/
└── adapters-connectors/
```

**Best practice — one folder per product:**

```text
src/assets/products/ac-charging-pile/dl-eu004-1/
├── 01.webp
├── 02.webp
└── 03.webp
```

- Use `01.webp` as the main image shown on cards.
- Prefer **WebP** (smaller = faster website). Avoid huge camera originals.
- After adding files, update the product’s `images` list in `products.ts` so the new file names are used.

---

## 5. Change product categories

**File:** `src/data/categories.ts`

You can safely change:

- `name` — title on the site
- `description` — short paragraph
- `powerLabel` — small badge like `7–22 kW AC`
- `shortLabel` — short label

**Do not change** `id` or `slug` unless a developer helps you — products depend on those exact values.

**Adding a brand-new category:** ask a developer first (extra images and filters may be needed).

---

## 6. Change services page text

**File:** `src/data/services.ts`

Edit service titles, descriptions, and trade terms the same way — only change text inside quotation marks.

---

## 7. Change FAQ answers

**File:** `src/data/faqs.ts`

1. Find the question you want to update.
2. Edit the question text and/or the answer text between quotes.
3. To add a new FAQ, copy an existing item and change its text. Give it a new unique `id` if the file uses IDs.

---

## 8. Change the logo or browser tab icon

| What | Replace this file (keep the same name) |
|---|---|
| Logo mark used in the header / footer | `src/assets/brand/logo-mark.svg` |
| Logo for dark backgrounds | `src/assets/brand/logo-mark-light.svg` |
| Browser tab icon | `public/favicon.svg` |

Replace the file with your new artwork, **keeping the exact same file name and folder**. The site will pick it up automatically.

---

## 9. Preview your changes

Ask a developer to start the preview, or run these commands yourself:

```text
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:5173`).

After larger product changes, a full build also refreshes the sitemap:

```text
npm run build
```

---

## 10. Checklist before publishing

Check on **desktop**, **tablet**, and **phone**:

- [ ] Contact email and WhatsApp number are correct
- [ ] Product names, models, and photos look right
- [ ] Categories still filter correctly
- [ ] “Get Quotation” opens WhatsApp with the right product details
- [ ] Contact form still submits
- [ ] Menu and footer links work
- [ ] Spelling of company name and address

---

## 11. When to ask a developer

Ask a developer if you need to:

- Change layout, colours, or animations
- Add a new page or homepage section type
- Add a completely new product category
- Change how the contact form sends email (`VITE_CONTACT_ENDPOINT`)
- Fix a build error or broken page
- Update SEO tags inside `index.html` or the live domain / sitemap

---

## Safe vs unsafe folders

| Safe for clients | Leave to developers |
|---|---|
| `src/data/` | `src/components/` |
| `src/assets/` (images & logos) | `src/pages/` |
| `public/favicon.svg` | `src/lib/`, `src/hooks/`, `src/context/` |

If you are unsure, send the change request to a developer instead of guessing.
