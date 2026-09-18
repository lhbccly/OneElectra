import { createContext, useContext, useState, type ReactNode } from 'react'
import type { Product } from '@/types/catalogue'

export interface QuoteRequestDetails {
  product?: Product
  productModel?: string
  productName?: string
  category?: string
  standard?: string
  powerOutput?: string
  useCase?: string
}

interface QuoteContextType {
  isOpen: boolean
  quoteDetails: QuoteRequestDetails | null
  openQuoteModal: (details?: QuoteRequestDetails) => void
  closeQuoteModal: () => void
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined)

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [quoteDetails, setQuoteDetails] = useState<QuoteRequestDetails | null>(null)

  function openQuoteModal(details?: QuoteRequestDetails) {
    if (details) {
      setQuoteDetails(details)
    } else {
      setQuoteDetails(null)
    }
    setIsOpen(true)
  }

  function closeQuoteModal() {
    setIsOpen(false)
  }

  return (
    <QuoteContext.Provider value={{ isOpen, quoteDetails, openQuoteModal, closeQuoteModal }}>
      {children}
    </QuoteContext.Provider>
  )
}

export function useQuote() {
  const context = useContext(QuoteContext)
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider')
  }
  return context
}
