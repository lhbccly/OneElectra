import { MessageCircle } from 'lucide-react'
import { ExternalButton } from '@/components/ui/Button'
import { getProductWhatsAppUrl, getGeneralQuoteWhatsAppUrl } from '@/lib/whatsapp'
import type { Product } from '@/types/catalogue'

interface WhatsAppButtonProps {
  product?: Product
  label?: string
  variant?: 'lime' | 'primary' | 'secondary' | 'ghost'
  size?: 'md' | 'lg'
  className?: string
}

export function WhatsAppButton({
  product,
  label = 'Get Quotation',
  variant = 'lime',
  size = 'lg',
  className,
}: WhatsAppButtonProps) {
  const href = product ? getProductWhatsAppUrl(product) : getGeneralQuoteWhatsAppUrl()

  return (
    <ExternalButton href={href} variant={variant} size={size} className={className}>
      <MessageCircle className="size-4" aria-hidden />
      {label}
    </ExternalButton>
  )
}
