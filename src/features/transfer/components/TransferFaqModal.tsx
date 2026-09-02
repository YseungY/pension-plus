import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Modal } from '../../../components/ui/Modal'

const FAQ_ITEMS = [
  {
    q: '퇴직연금 실물이전이 무엇인가요?',
    a: (
      <>
        퇴직연금을 다른 금융기관으로 옮기는 방법 중 하나입니다. 옮길 때는 <strong className="text-navy-800">실물이전과 현금이전</strong>{' '}
        중 원하는 방법을 선택할 수 있습니다. 상품을 모두 매도한 뒤 이전하는 현금이전과 달리, 실물이전은 기존에 가지고 있던 운용
        상품을 <strong className="text-navy-800">해지 없이 그대로</strong> 다른 금융기관으로 옮기는 방식입니다.
      </>
    ),
  },
  {
    q: '실물이전이 불가능한 상품이 섞여 있으면 전체가 불가한가요?',
    a: (
      <>
        아니요. <strong className="text-navy-800">실물이전이 가능한 상품은 그대로 이전되고, 안 되는 상품만 매도 후 현금으로</strong>{' '}
        이전 처리됩니다. 사전조회 결과 화면이 바로 그 구분입니다.
      </>
    ),
  },
  {
    q: '금융기관을 바꾸려면 꼭 실물이전을 해야 하나요?',
    a: (
      <>
        아니요. 기존 계약이전에 쓰였던 <strong className="text-navy-800">현금이전(전부 매도하여 현금화 후 이전)</strong>도 선택할 수
        있습니다. 이전 신청 시 원하는 방식을 고르면 됩니다.
      </>
    ),
  },
  {
    q: '실물이전 신청 후 취소할 수 있나요?',
    a: (
      <>
        <strong className="text-navy-800">이전 신청 당일에만</strong> 취소할 수 있습니다. 수관회사에 취소 의사를 전달하거나,
        이관회사가 이전 의사를 재확인할 때 취소 의사를 밝히면 됩니다. 단, 신청 당일이라도{' '}
        <strong className="text-navy-800">이전 의사 재확인을 마쳤다면 취소가 불가능</strong>합니다.
      </>
    ),
  },
  {
    q: '보유 상품이 실물이전 가능한지 미리 확인할 수 없나요?',
    a: (
      <>
        가능합니다. 현재 퇴직연금을 운용하고 있는 금융기관에 <strong className="text-navy-800">실물이전 사전조회</strong>를 신청해
        가능 여부를 확인할 수 있습니다. 이 사전조회 화면이 그 절차를 앱 안으로 가져온 것입니다.
      </>
    ),
  },
] as const

export function TransferFaqModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Modal open={open} title="실물이전, 이런 점이 궁금해요" onClose={onClose}>
      <div className="flex flex-col gap-2">
        {FAQ_ITEMS.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div key={item.q} className="rounded-xl border border-line">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center gap-2.5 px-3.5 py-3 text-left"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy-100 text-[11px] font-[800] text-navy-800">
                  Q
                </span>
                <span className="flex-1 text-[13.5px] font-[700] text-navy-800">{item.q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-text-tertiary transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
              {isOpen && <p className="border-t border-line px-3.5 py-3 text-[12.5px] leading-[1.6] text-text-secondary">{item.a}</p>}
            </div>
          )
        })}
      </div>

      <p className="mt-4 text-[11px] leading-[1.5] text-text-tertiary">
        ※ 퇴직연금은 예금자보호 및 세제 취급이 상품별로 다릅니다. 가입 전 상품설명서와 약관을 반드시 확인하세요.
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
