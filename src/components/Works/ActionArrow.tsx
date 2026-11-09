export default function ActionArrow({ stroke_width = 2.5 }: { stroke_width?: number }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke_width} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M5 19 17 7M7 7h10v10" />
    </svg>
  )
}

