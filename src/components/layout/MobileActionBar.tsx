import { MessageSquare, FileText } from 'lucide-react'
import { useQuote } from '@/context/QuoteContext'
import { site } from '@/data/site'

export function MobileActionBar() {
  const { openQuoteModal } = useQuote()

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 border-t border-line bg-ink/95 backdrop-blur-lg p-3 lg:hidden">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <button
          onClick={() => openQuoteModal()}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-lime py-2.5 px-3 text-xs font-semibold text-ink transition active:scale-95"
        >
          <FileText className="size-4" />
          Request Quote
        </button>

        <a
          href={`https://wa.me/${site.contact.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-lime/40 bg-lime/10 py-2.5 px-3 text-xs font-semibold text-lime transition active:scale-95"
        >
          <MessageSquare className="size-4" />
          WhatsApp Sales
        </a>
      </div>
    </div>
  )
}
