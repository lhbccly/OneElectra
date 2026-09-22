import { site } from '@/data/site'
import type { Product } from '@/types/catalogue'

export function buildWhatsAppUrl(message: string) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${site.contact.whatsappNumber}?text=${encoded}`
}

export function buildProductQuotationMessage(product: Product) {
  return [
    `Hello ${site.brand.name},`,
    'I would like a quotation for:',
    `Product: ${product.name}`,
    `Model: ${product.model}`,
    `Website: ${site.brand.website}`,
  ].join('\n')
}

export function getProductWhatsAppUrl(product: Product) {
  return buildWhatsAppUrl(buildProductQuotationMessage(product))
}

export function getGeneralQuoteWhatsAppUrl() {
  return buildWhatsAppUrl(
    `Hello ${site.brand.name},\nI would like a product quotation.\nWebsite: ${site.brand.website}`,
  )
}
