import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router'
import { DEMO_DATA_LABEL } from '../../lib/mock-types'

const KB_SUPPORT_NUMBER = '1588-6666'
const TRANSFER_COMPANY_SUPPORT_NUMBER = '1544-0000'

export function AppLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const isWelcomeFlow = ['/', '/onboarding', '/connect'].includes(pathname)

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[393px] flex-col bg-white">
      <div className="flex flex-1 flex-col">{children}</div>
      {!isWelcomeFlow && <CustomerServiceBar />}
    </div>
  )
}

function CustomerServiceBar() {
  return (
    <footer className="sticky bottom-0 border-t border-line bg-white px-5 py-2 text-[11px] leading-relaxed text-text-tertiary">
      <p>
        {DEMO_DATA_LABEL} · KB증권 {KB_SUPPORT_NUMBER} · 이관사 {TRANSFER_COMPANY_SUPPORT_NUMBER}
      </p>
    </footer>
  )
}
