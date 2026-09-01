import { LogOut, UserRound } from 'lucide-react'
import { useNavigate } from 'react-router'
import { BottomTabBar } from '../components/layout/BottomTabBar'
import { ListRow } from '../components/ui/ListRow'

const infoSections = [
  {
    title: '계정',
    items: [
      { emoji: '🔐', label: '연결된 인증서 관리' },
      { emoji: '🔔', label: '알림 설정' },
    ],
  },
  {
    title: '약관·정책',
    items: [
      { emoji: '📄', label: '이용약관' },
      { emoji: '📄', label: '개인정보 처리방침' },
    ],
  },
] as const

export function MyInfoPage() {
  const navigate = useNavigate()

  return (
    <main className="flex flex-1 flex-col bg-white">
      <header className="flex h-16 items-center px-5">
        <h1 className="text-[17px] font-[800] text-navy-800">내 정보</h1>
      </header>

      <div className="flex-1 pb-8">
        <div className="flex items-center gap-3 px-5 pb-6 pt-1">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-2">
            <UserRound className="h-6 w-6 text-navy-300" aria-hidden="true" />
          </span>
          <strong className="text-[17px] font-[800] text-navy-800">김연금님</strong>
        </div>

        {infoSections.map(({ title, items }) => (
          <section key={title} className="px-5 pt-6">
            <h2 className="mb-4 text-[18px] font-[700] text-navy-800">{title}</h2>
            {items.map(({ emoji, label }) => (
              <ListRow key={label} emoji={emoji} label={label} />
            ))}
          </section>
        ))}

        <div className="px-5 pt-6">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="flex w-full items-center gap-2 py-3 text-[14px] font-[700] text-status-danger"
          >
            <LogOut className="h-[16px] w-[16px]" aria-hidden="true" />
            연결 해제하고 처음으로
          </button>
        </div>
      </div>

      <BottomTabBar />
    </main>
  )
}
