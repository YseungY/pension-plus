import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router'

interface SubPageHeaderProps {
  title: string
  backTo: string
  accountLabel?: string
}

export function SubPageHeader({ title, backTo, accountLabel }: SubPageHeaderProps) {
  const navigate = useNavigate()

  return (
    <>
      <header className="flex h-16 items-center gap-3 border-b border-line px-5">
        <button
          type="button"
          onClick={() => navigate(backTo)}
          aria-label="이전 화면으로"
          className="flex h-9 w-9 items-center justify-center rounded-full text-navy-800 transition active:scale-95"
        >
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <h1 className="text-[17px] font-[800] text-navy-800">{title}</h1>
      </header>
      {accountLabel && <p className="px-5 pt-4 text-[13px] text-text-tertiary">{accountLabel}</p>}
    </>
  )
}
