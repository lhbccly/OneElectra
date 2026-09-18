import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { QuoteProvider } from '@/context/QuoteContext'
import { QuoteModal } from '@/components/ui/QuoteModal'
import { MobileActionBar } from '@/components/layout/MobileActionBar'

export function RootLayout() {
  return (
    <QuoteProvider>
      <div className="flex min-h-dvh flex-col pb-16 lg:pb-0">
        <Header />
        <main className="flex-1 pt-16 md:pt-20">
          <Outlet />
        </main>
        <Footer />
        <QuoteModal />
        <MobileActionBar />
        <ScrollRestoration />
      </div>
    </QuoteProvider>
  )
}

