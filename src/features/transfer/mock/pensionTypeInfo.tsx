import type { ReactNode } from 'react'

export type PensionType = 'IRP' | 'DC' | 'DB'

export const PENSION_TYPE_INFO: Record<
  PensionType,
  { label: string; account: string; verdict: string; note: ReactNode; cond1: ReactNode }
> = {
  IRP: {
    label: '개인형 IRP',
    account: '○○은행 개인형 IRP 620-01-9944',
    verdict: '충족',
    note: (
      <>
        <strong className="text-navy-800">개인형 IRP ↔ 개인형 IRP</strong>처럼 같은 유형끼리만 이전할 수 있습니다. 유형이 다른
        계좌로는 실물이전이 불가합니다.
      </>
    ),
    cond1: (
      <>
        이관회사 <strong>개인형 IRP</strong> → 연금플러스 <strong>개인형 IRP</strong>. 같은 유형이므로 이전 가능합니다.
      </>
    ),
  },
  DC: {
    label: 'DC형',
    account: '○○은행 DC형 620-02-3311',
    verdict: '조건부 충족',
    note: (
      <>
        <strong className="text-navy-800">DC형 ↔ DC형</strong>만 이전할 수 있습니다. DC형 가입자는{' '}
        <strong className="text-navy-800">소속 회사 규약에 등록된 금융기관</strong>으로만 옮길 수 있어, 연금플러스가 규약에 없으면
        이전이 불가합니다.
      </>
    ),
    cond1: (
      <>
        이관회사 <strong>DC형</strong> → 연금플러스 <strong>DC형</strong>. 같은 유형이므로 이전 가능합니다. 단{' '}
        <strong>소속 회사의 규약으로 정해진 금융기관</strong> 내에서만 이전할 수 있습니다.
      </>
    ),
  },
  DB: {
    label: 'DB형',
    account: '○○은행 DB형 (회사 계약)',
    verdict: '충족',
    note: (
      <>
        <strong className="text-navy-800">DB형 ↔ DB형</strong>만 이전할 수 있습니다. DB형은 회사가 적립금을 운용·관리하는 유형입니다.
      </>
    ),
    cond1: (
      <>
        이관회사 <strong>DB형</strong> → 연금플러스 <strong>DB형</strong>. 같은 유형끼리만 이전 가능합니다. DB형은 회사가 적립금을
        운용하는 유형이므로 이전 절차는 <strong>회사(사용자) 규약</strong>에 따릅니다.
      </>
    ),
  },
}
