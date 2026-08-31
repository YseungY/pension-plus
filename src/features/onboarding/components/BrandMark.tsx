type BrandMarkProps = {
  inverted?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const sizeClass = { sm: 'text-[18px]', md: 'text-[26px]', lg: 'text-[42px]' }

export function BrandMark({ inverted = false, size = 'md' }: BrandMarkProps) {
  return (
    <span className="inline-flex items-start gap-1" aria-label="연금플러스">
      <span className={`${sizeClass[size]} font-[800] leading-none tracking-[-0.05em] ${inverted ? 'text-white' : 'text-navy-800'}`}>
        연금<span className={inverted ? 'text-mint-400' : 'text-mint-600'}>플러스</span>
      </span>
      <span aria-hidden="true" className={`${size === 'lg' ? 'text-[22px]' : size === 'md' ? 'text-[15px]' : 'text-[11px]'} font-[800] leading-none ${inverted ? 'text-mint-400' : 'text-mint-600'}`}>
        +
      </span>
    </span>
  )
}
