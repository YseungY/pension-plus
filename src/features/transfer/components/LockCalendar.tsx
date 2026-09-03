export function LockCalendar({ fast }: { fast: boolean }) {
  const stripeStyle = {
    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, #F59E0B 4px, #F59E0B 8px)',
  }

  return (
    <div className="flex flex-col">
      <h4 className="mb-2 text-left text-[15px] font-[800] text-navy-800">8월</h4>
      <div className="grid grid-cols-7 gap-1 text-center text-[13px]">
        <div className="pb-1 font-[700] text-navy-300">일</div>
        <div className="pb-1 font-[700] text-navy-300">월</div>
        <div className="pb-1 font-[700] text-navy-300">화</div>
        <div className="pb-1 font-[700] text-navy-300">수</div>
        <div className="pb-1 font-[700] text-navy-300">목</div>
        <div className="pb-1 font-[700] text-navy-300">금</div>
        <div className="pb-1 font-[700] text-navy-300">토</div>

        <div className="flex h-9 items-center justify-center font-[600] text-navy-400">23</div>
        <div className="flex h-9 items-center justify-center rounded-l-md bg-[#EF4444] font-[800] text-white shadow-[0_4px_12px_rgba(239,68,68,0.35)]">
          24
        </div>
        <div className="flex h-9 items-center justify-center bg-[#FEE2E2] font-[800] text-[#EF4444]">25</div>
        <div className="flex h-9 items-center justify-center bg-[#FEE2E2] font-[800] text-[#EF4444]">26</div>
        <div className="flex h-9 items-center justify-center bg-[#FEE2E2] font-[800] text-[#EF4444]">27</div>
        <div className="flex h-9 items-center justify-center rounded-r-md bg-[#FEE2E2] font-[800] text-[#EF4444]">28</div>
        <div className="flex h-9 items-center justify-center font-[600] text-navy-400">29</div>
      </div>

      <h4 className="mb-2 mt-5 text-left text-[15px] font-[800] text-navy-800">9월</h4>
      <div className="grid grid-cols-7 gap-1 text-center text-[13px]">
        <div className="flex h-9 items-center justify-center font-[600] text-navy-400">30</div>
        <div className="flex h-9 items-center justify-center rounded-md bg-[#FEE2E2] font-[800] text-[#EF4444]">31</div>

        <div className="relative flex h-9 items-center justify-center overflow-hidden rounded-md bg-[#FEF3C7] font-[800] text-[#D97706]">
          <div className="absolute inset-0 opacity-[0.25]" style={stripeStyle} />
          <span className="relative z-10">1</span>
        </div>

        <div className="relative flex h-9 items-center justify-center overflow-hidden rounded-md bg-[#FEF3C7] font-[800] text-[#D97706]">
          <div className="absolute inset-0 opacity-[0.25]" style={stripeStyle} />
          <span className="relative z-10">2</span>
        </div>

        <div className="z-10 flex h-9 scale-[1.03] items-center justify-center rounded-md bg-[#F59E0B] font-[800] text-white shadow-[0_4px_12px_rgba(245,158,11,0.4)]">
          3
        </div>
        <div className="flex h-9 items-center justify-center font-[600] text-navy-800">4</div>
        <div className="flex h-9 items-center justify-center font-[600] text-navy-400">5</div>
      </div>
    </div>
  )
}
