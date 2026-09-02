import type { DateBand } from './mock-types'

export function formatWon(amount: number): string {
  return `${Math.round(amount).toLocaleString('ko-KR')}원`
}

export function formatDateBand(band: DateBand): string {
  const from = new Date(band.from)
  const to = new Date(band.to)
  const fromMonth = from.getMonth() + 1
  const toMonth = to.getMonth() + 1

  if (fromMonth === toMonth) {
    return `${fromMonth}월 ${from.getDate()}~${to.getDate()}일`
  }
  return `${fromMonth}월 ${from.getDate()}일~${toMonth}월 ${to.getDate()}일`
}
