import { CheckCircle2, CircleAlert } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'
import { SubPageHeader } from '../../../components/layout/SubPageHeader'
import { ProductTransferabilityModal } from '../components/ProductTransferabilityModal'
import { PENSION_TYPE_INFO, type PensionType } from '../mock/pensionTypeInfo'

const pensionTypes: { id: PensionType; label: string }[] = [
  { id: 'IRP', label: '개인형 IRP' },
  { id: 'DC', label: 'DC형' },
  { id: 'DB', label: 'DB형' },
]

const transferModes = [
  { id: 'real', title: '실물이전', desc: '운용 상품을 그대로 가져옴\n(불가 상품은 현금화)' },
  { id: 'cash', title: '현금이전', desc: '전액 매도 후\n현금으로 가져옴' },
] as const

export function TransferPreCheckPage() {
  const [type, setType] = useState<PensionType>('IRP')
  const [mode, setMode] = useState<(typeof transferModes)[number]['id']>('real')
  const [productModalOpen, setProductModalOpen] = useState(false)

  const typeInfo = PENSION_TYPE_INFO[type]
  const isCash = mode === 'cash'

  const conditions = [
    { no: 1, title: '동일한 퇴직연금 유형', verdict: typeInfo.verdict, pass: true, body: typeInfo.cond1 },
    {
      no: 2,
      title: '수관회사의 동일 상품 판매',
      verdict: isCash ? '해당 없음' : '일부 미충족',
      pass: isCash,
      body: (
        <>
          보유 6종 중 <strong>1종(미래에셋 글로벌채권)</strong>은 연금플러스에서 판매하지 않아 <strong>매도 후 현금으로</strong> 이전됩니다.
        </>
      ),
    },
    {
      no: 3,
      title: '실물이전 가능 상품',
      verdict: isCash ? '해당 없음' : '일부 미충족',
      pass: isCash,
      body: (
        <>
          보유 6종 중 <strong>1종(디폴트옵션)</strong>은 제도상 실물이전 대상에서 제외되어 <strong>현금화</strong>됩니다.{' '}
          <button
            type="button"
            onClick={() => setProductModalOpen(true)}
            className="font-[700] text-status-progress underline"
          >
            상품별 가능 여부 보기
          </button>
        </>
      ),
    },
  ] as const

  return (
    <main className="flex flex-1 flex-col bg-white">
      <SubPageHeader title="실물이전 사전조회" backTo="/transfer/intro" />

      <div className="flex-1 px-5 pb-8 pt-4">
        <h1 className="text-[21px] font-[800] text-navy-800">이전 조건을 먼저 확인합니다</h1>
        <p className="mt-1.5 text-[14px] leading-[1.55] text-text-secondary">
          퇴직연금 실물이전은 아래 <strong className="text-navy-800">3가지 조건을 모두 충족</strong>해야 진행할 수 있습니다.
        </p>

        <h2 className="mb-2.5 mt-6 text-[15px] font-[700] text-navy-800">1. 이전할 퇴직연금 유형</h2>
        <div className="flex overflow-hidden rounded-xl border border-line">
          {pensionTypes.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setType(t.id)}
              className={`flex-1 py-2.5 text-center text-[13px] font-[700] transition ${
                type === t.id ? 'bg-navy-800 text-white' : 'text-text-tertiary'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="mt-2.5 flex gap-2 rounded-xl bg-surface p-3">
          <span className="inline-flex h-4.5 shrink-0 items-center rounded bg-navy-100 px-1.5 text-[10px] leading-none font-[800] text-navy-800">규칙</span>
          <p className="text-[12.5px] leading-[1.5] text-text-secondary">{typeInfo.note}</p>
        </div>

        <h2 className="mb-2.5 mt-6 text-[15px] font-[700] text-navy-800">2. 이관회사 계좌</h2>
        <div className="rounded-2xl border border-line p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-[700] text-text-tertiary">이관회사(기존 금융기관)</p>
              <p className="mt-1 text-[14.5px] font-[800] text-navy-800">{typeInfo.account}</p>
            </div>
            <span className="text-[11px] text-text-tertiary">변경 ▼</span>
          </div>
          <div className="mt-3 flex justify-between border-t border-dashed border-line pt-3 text-[13px]">
            <span className="text-text-secondary">보유 상품 · 총 평가금액</span>
            <span className="font-[800] tabular-nums text-navy-800">6종 · 44,890,000원</span>
          </div>
        </div>

        <h2 className="mb-2.5 mt-6 text-[15px] font-[700] text-navy-800">3. 이전 방식</h2>
        <div className="grid grid-cols-2 gap-2.5">
          {transferModes.map(({ id, title, desc }) => (
            <button
              key={id}
              type="button"
              onClick={() => setMode(id)}
              className={`rounded-2xl border p-4 text-left transition ${mode === id ? 'border-navy-800 bg-navy-800 text-white' : 'border-line text-navy-800'}`}
            >
              <p className="text-[15px] font-[800]">{title}</p>
              <p className={`mt-1.5 whitespace-pre-line text-[12px] leading-[1.5] ${mode === id ? 'text-navy-300' : 'text-text-tertiary'}`}>{desc}</p>
            </button>
          ))}
        </div>
        <div className="mt-2.5 flex gap-2 rounded-xl bg-surface p-3">
          <span className="inline-flex h-4.5 shrink-0 items-center rounded bg-navy-100 px-1.5 text-[10px] leading-none font-[800] text-navy-800">안내</span>
          <p className="text-[12.5px] leading-[1.5] text-text-secondary">
            {mode === 'real' ? (
              <>
                실물이전을 선택해도 <strong className="text-navy-800">실물이전이 불가한 상품은 매도 후 현금으로</strong> 이전됩니다.
              </>
            ) : (
              <>
                현금이전은 <strong className="text-navy-800">보유 상품 전액을 매도한 뒤 현금으로</strong> 가져오는 방식입니다. 실물이전
                판정과 무관하게 6종 모두 현금화됩니다. 정기예금도 중도해지됩니다.
              </>
            )}
          </p>
        </div>

        <h2 className="mb-2.5 mt-7 text-[15px] font-[700] text-navy-800">조건 판정 결과</h2>
        <div className="flex flex-col gap-3">
          {conditions.map(({ no, title, verdict, pass, body }) => (
            <div key={no} className={`rounded-2xl border p-4 ${pass ? 'border-mint-200 bg-mint-100' : 'border-line bg-warning-surface'}`}>
              <div className="flex items-center gap-2">
                {pass ? (
                  <CheckCircle2 className="h-4 w-4 text-mint-600" aria-hidden="true" />
                ) : (
                  <CircleAlert className="h-4 w-4 text-status-warning" aria-hidden="true" />
                )}
                <span className="text-[13px] font-[700] text-navy-800">
                  {no}. {title}
                </span>
                <span className={`ml-auto text-[12px] font-[800] ${pass ? 'text-mint-700' : 'text-warning-text'}`}>{verdict}</span>
              </div>
              <p className="mt-2 text-[13px] leading-[1.55] text-text-secondary">{body}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[11.5px] leading-[1.5] text-text-tertiary">
          ※ 사전조회는 이관회사에 실물이전 가능 여부를 조회하는 절차입니다. 조회 결과만으로는 이전이 신청되지 않습니다.
        </p>
      </div>

      <div className="px-5 pb-8">
        <Link
          to="/transfer/holdings"
          state={{ mode }}
          className="flex h-14 w-full items-center justify-center rounded-[14px] bg-navy-800 text-[16px] font-[800] text-white transition active:scale-[0.98]"
        >
          사전조회 결과 보기
        </Link>
      </div>

      <ProductTransferabilityModal open={productModalOpen} onClose={() => setProductModalOpen(false)} />
    </main>
  )
}
