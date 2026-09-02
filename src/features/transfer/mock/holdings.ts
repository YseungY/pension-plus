import type { Holding, LockWindow, Transfer, TradingWindowStatus } from '../../../lib/mock-types'

// 시연용 데이터. docs/submission/SRS_MVP.md FR-002~009 근거.
export const transfer: Transfer = {
  transferId: 'TR-2026-0828-01',
  status: 'VERIFYING',
  fromInstitution: '미래연금증권',
  toAccount: '연금플러스 개인형IRP 013-22-104857',
  submittedAt: '2026-08-28',
  expectedCompletion: { from: '2026-09-04', to: '2026-09-08', businessDaysMin: 7, businessDaysMax: 9 },
}

export const holdings: Holding[] = [
  { code: 'A360750', name: 'KODEX 미국S&P500TR', status: 'TRANSFERABLE', evalAmount: 12_480_000, isCriticalPath: false, layer: 'confirmed' },
  { code: 'A133690', name: 'TIGER 미국나스닥100', status: 'TRANSFERABLE', evalAmount: 8_320_000, isCriticalPath: false, layer: 'confirmed' },
  { code: 'A069500', name: 'KODEX 200', status: 'TRANSFERABLE', evalAmount: 4_150_000, isCriticalPath: false, layer: 'confirmed' },
  { code: 'DEP-0001', name: '정기예금', status: 'TRANSFERABLE', evalAmount: 10_000_000, isCriticalPath: false, layer: 'confirmed' },
  {
    code: 'F900021',
    name: '미래에셋 글로벌채권',
    status: 'CASH_REQUIRED',
    evalAmount: 6_700_000,
    realizedPl: 214_000,
    settleDays: 3,
    isCriticalPath: false,
    layer: 'confirmed',
  },
  {
    code: 'DO-BF01',
    name: '디폴트옵션 (BF 고위험형)',
    status: 'CASH_REQUIRED',
    evalAmount: 3_240_000,
    realizedPl: -312_000,
    settleDays: 5,
    isCriticalPath: true,
    layer: 'confirmed',
  },
]

export const lockWindow: LockWindow = {
  startAt: '2026-08-28T14:00:00+09:00',
  endBand: { from: '2026-09-04', to: '2026-09-08', businessDaysMin: 7, businessDaysMax: 9 },
  confidence: 'estimated',
}

export const tradingWindowStatus: TradingWindowStatus = {
  value: 'SELL_ONLY',
  allowed: { buy: false, sell: true, pay: false, claim: false },
  confidence: 'confirmed',
}
