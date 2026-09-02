import { Modal } from '../../../components/ui/Modal'

const GROUPS = [
  {
    group: '원리금보장형',
    rows: [
      { name: '예금 (은행·저축은행·우체국·증권금융)', ok: true },
      { name: '원리금보장 ELB · DLB', ok: true },
      { name: 'GIC (신탁제공형)', ok: true },
    ],
  },
  {
    group: '실적배당형',
    rows: [
      { name: '펀드 / ETF', ok: true },
      { name: '사모펀드, MMF, 환매 불가 펀드', ok: false },
      { name: 'ELS, ELF (주가연계펀드)', ok: false },
      { name: '금리연동형보험', ok: false },
      { name: '지분증권, 리츠', ok: false },
    ],
  },
  {
    group: '기타',
    rows: [{ name: '디폴트옵션', ok: false }],
  },
] as const

export function ProductTransferabilityModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Modal open={open} title="상품별 실물이전 가능 여부" onClose={onClose}>
      <p className="text-[13px] leading-[1.55] text-text-secondary">
        모든 퇴직연금 상품이 실물이전 대상은 아닙니다. 일부 상품은 계약 형태·상품 특성에 따라 대상에서 제외됩니다.
      </p>

      <div className="mt-4 flex flex-col gap-4">
        {GROUPS.map(({ group, rows }) => (
          <div key={group}>
            <p className="mb-1.5 text-[11.5px] font-[800] text-text-tertiary">{group}</p>
            <div className="flex flex-col gap-1.5">
              {rows.map((row) => (
                <div key={row.name} className="flex items-center justify-between gap-3 rounded-xl border border-line px-3.5 py-2.5">
                  <span className="text-[13px] text-navy-800">{row.name}</span>
                  <span
                    className={`shrink-0 rounded px-1.5 py-0.5 text-[11px] font-[800] ${
                      row.ok ? 'bg-mint-100 text-mint-700' : 'bg-warning-surface text-status-danger'
                    }`}
                  >
                    {row.ok ? '가능' : '불가능'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-xl bg-surface p-3.5">
        <p className="text-[12px] font-[800] text-navy-800">주의</p>
        <p className="mt-1.5 text-[12px] leading-[1.6] text-text-secondary">
          · 보유 상품 중 실물이전이 불가한 상품은 <strong className="text-navy-800">매도 후 현금으로</strong> 이전됩니다.
          <br />
          · 금융기관별로 <strong className="text-navy-800">수수료 등 조건이 다를 수 있어</strong> 이전하기 전 꼼꼼하게 조건을 비교해 보세요.
          <br />
          · <strong className="text-navy-800">DC형</strong> 퇴직연금 가입자는 소속 회사의 규약으로 정해진 금융기관 내에서만 이전
          가능합니다.
        </p>
      </div>
      <p className="mt-3 text-[11px] leading-[1.5] text-text-tertiary">
        ※ 위 기준은 퇴직연금 실물이전 제도 시행 기준이며, 실제 판정은 이관회사의 사전조회 결과를 따릅니다.
      </p>

      <button
        type="button"
        onClick={onClose}
        className="mt-4 h-11 w-full rounded-xl border border-line text-[14px] font-[700] text-text-secondary transition active:scale-[0.98]"
      >
        닫기
      </button>
    </Modal>
  )
}
