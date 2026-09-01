import { Activity, Calculator, Home, UserRound } from 'lucide-react'
import { Link, useLocation } from 'react-router'

const tabs = [
  { to: '/home', label: '홈', icon: Home, isActive: (pathname: string) => pathname === '/home' },
  { to: '/transfer/status', label: '현황판', icon: Activity, isActive: (pathname: string) => pathname.startsWith('/transfer') },
  { to: '/pension-savings', label: '시뮬레이터', icon: Calculator, isActive: (pathname: string) => pathname.startsWith('/pension-savings') || pathname.startsWith('/withdrawal') },
  { to: '/my-info', label: '내 정보', icon: UserRound, isActive: (pathname: string) => pathname === '/my-info' },
] as const

export function BottomTabBar() {
  const { pathname } = useLocation()

  return (
    <nav className="grid grid-cols-4 border-t border-line bg-white px-2 pb-4 pt-3" aria-label="주요 메뉴">
      {tabs.map(({ to, label, icon: Icon, isActive }) => {
        const active = isActive(pathname)
        return (
          <Link key={to} to={to} className={`flex flex-col items-center gap-1.5 text-[11px] font-[700] ${active ? 'text-navy-800' : 'text-text-tertiary'}`}>
            <Icon className="h-[21px] w-[21px]" aria-hidden="true" />
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
