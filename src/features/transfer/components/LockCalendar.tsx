type DayType = 'plain' | 'warning' | 'peak'

interface Day {
  d: number
  type: DayType
}

const DAYS: Day[] = [
  { d: 28, type: 'plain' },
  { d: 31, type: 'warning' },
  { d: 1, type: 'warning' },
  { d: 2, type: 'peak' },
  { d: 3, type: 'warning' },
  { d: 4, type: 'plain' },
  { d: 7, type: 'plain' },
]

const DAYS_FAST: Day[] = [
  { d: 28, type: 'peak' },
  { d: 29, type: 'plain' },
  { d: 1, type: 'plain' },
  { d: 2, type: 'plain' },
  { d: 3, type: 'plain' },
  { d: 4, type: 'plain' },
  { d: 5, type: 'plain' },
]

const CELL_CLASS: Record<DayType, string> = {
  plain: 'bg-surface text-text-tertiary',
  warning: 'bg-warning-surface font-[700] text-warning-text',
  peak: 'bg-status-warning font-[700] text-white',
}

export function LockCalendar({ fast }: { fast: boolean }) {
  const days = fast ? DAYS_FAST : DAYS

  return (
    <div className="grid grid-cols-7 gap-1.5">
      {days.map((day, i) => (
        <div key={i} className={`flex h-[30px] items-center justify-center rounded-lg text-[12px] tabular-nums ${CELL_CLASS[day.type]}`}>
          {day.d}
        </div>
      ))}
    </div>
  )
}
