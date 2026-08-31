type ProgressRingProps = { compact?: boolean; label?: string; value?: string }

export function ProgressRing({ compact = false, label, value }: ProgressRingProps) {
  const outerSize = compact ? 'h-[132px] w-[132px] rounded-[36px]' : 'h-[196px] w-[196px] rounded-full'
  const ringSize = compact ? 'h-[117px] w-[117px]' : 'h-full w-full'
  const innerSize = compact ? 'h-[97px] w-[97px]' : 'h-[164px] w-[164px]'

  return (
    <div className={`flex items-center justify-center ${outerSize} ${compact ? 'bg-navy-900' : ''}`}>
      <div className={`pension-progress-ring flex items-center justify-center rounded-full ${ringSize}`}>
        <div className={`flex flex-col items-center justify-center rounded-full bg-navy-800 ${innerSize}`}>
          {label && <span className="text-[13px] font-[700] text-navy-300">{label}</span>}
          {value && <strong className="mt-1 text-[38px] font-[800] leading-none tracking-[-0.04em] text-white tabular-nums">{value}</strong>}
          {!label && !value && (
            <span className="inline-flex items-start gap-[2px]">
              <span className="text-[31px] font-[800] leading-none tracking-[-0.05em] text-white">연금</span>
              <span className="text-[18px] font-[800] leading-none text-mint-400">+</span>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
