import fs from 'node:fs'
import path from 'node:path'

const siteUrl = 'https://oneelectra.com'
const productsSource = fs.readFileSync(path.resolve('src/data/products.ts'), 'utf8')
const productSlugs = [...productsSource.matchAll(/slug:\s*'([^']+)'/g)].map((match) => match[1])
const routes = [
  '/',
  '/products',
  '/services',
  '/about',
  '/faq',
  '/contact',
  ...productSlugs.map((slug) => `/products/${slug}`),
]

const urls = routes.map((route) => `  <url><loc>${siteUrl}${route}</loc></url>`).join('\n')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

fs.writeFileSync(path.resolve('public/sitemap.xml'), sitemap)
