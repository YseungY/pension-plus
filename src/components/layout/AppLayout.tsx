import type { ReactNode } from 'react'
import { DEMO_DATA_LABEL } from '../../lib/mock-types'

const KB_SUPPORT_NUMBER = '1588-6666'
const TRANSFER_COMPANY_SUPPORT_NUMBER = '1544-0000'

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col bg-surface">
      <div className="flex-1">{children}</div>
      <CustomerServiceBar />
    </div>
  )
}

function CustomerServiceBar() {
  return (
    <footer className="sticky bottom-0 border-t border-line bg-white px-5 py-3 text-xs text-text-secondary">
      <p className="font-semibold text-mint-700">{DEMO_DATA_LABEL} · 실제 계좌·상담과 무관합니다</p>
      <div className="mt-2 flex flex-col gap-1">
        <span>
          KB증권 고객센터(이체 절차) · <strong className="text-text-primary">{KB_SUPPORT_NUMBER}</strong>
        </span>
        <span>
          이관사 고객센터(해지공제·의사확인) ·{' '}
          <strong className="text-text-primary">{TRANSFER_COMPANY_SUPPORT_NUMBER}</strong>
        </span>
      </div>
    </footer>
  )
}
