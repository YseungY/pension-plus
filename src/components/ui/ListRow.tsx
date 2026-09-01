import { ChevronRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router'

interface ListRowProps {
  icon: ReactNode
  iconBg?: string
  label: string
  to?: string
}

export function ListRow({ icon, iconBg = 'var(--color-surface-2)', label, to }: ListRowProps) {
  const content = (
    <>
      <span className="flex items-center gap-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-full text-[14px]" style={{ background: iconBg }}>
          {icon}
        </span>
        <span className="text-[15px] text-navy-800">{label}</span>
      </span>
      <ChevronRight className="h-4 w-4 shrink-0 text-navy-300" aria-hidden="true" />
    </>
  )

  if (to) {
    return (
      <Link to={to} className="flex items-center justify-between gap-3 border-b border-line py-4 transition active:scale-[0.99]">
        {content}
      </Link>
    )
  }

  return (
    <div aria-disabled="true" className="flex cursor-default items-center justify-between gap-3 border-b border-line py-4">
      {content}
    </div>
  )
}
