import type { ReactNode } from 'react'

type NoticeTone = 'success' | 'warning' | 'danger'

interface NoticeProps {
  tone: NoticeTone
  title: string
  children?: ReactNode
}

const TONE: Record<NoticeTone, { bg: string; icon: string; title: string; body: string; glyph: string }> = {
  success: { bg: 'bg-mint-100', icon: 'bg-mint-600', title: 'text-mint-700', body: 'text-mint-700', glyph: '✓' },
  warning: { bg: 'bg-warning-surface', icon: 'bg-status-warning', title: 'text-warning-text', body: 'text-warning-text', glyph: '!' },
  danger: { bg: 'bg-[#FCEAED]', icon: 'bg-status-danger', title: 'text-status-danger', body: 'text-status-danger', glyph: '×' },
}

export function Notice({ tone, title, children }: NoticeProps) {
  const t = TONE[tone]
  return (
    <div className={`flex gap-3 rounded-2xl p-4 ${t.bg}`}>
      <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[12px] font-[800] text-white ${t.icon}`}>
        {t.glyph}
      </span>
      <div className="flex flex-col gap-0.5">
        <strong className={`text-[14.5px] font-[700] ${t.title}`}>{title}</strong>
        {children && <span className={`text-[13.5px] leading-[1.55] ${t.body}`}>{children}</span>}
      </div>
    </div>
  )
}
