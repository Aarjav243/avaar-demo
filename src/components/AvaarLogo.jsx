export default function AvaarLogo({ width = 400 }) {
  const gold = '#C9A452'
  const bg   = '#0C2415'
  const cx   = 260   // icon centre x
  const base = 108   // text baseline y
  const fs   = 112   // font size — BIG like the original

  /* Icon scales with font — sits between the letter feet */
  const iconTop  = 8
  const iconBot  = 104   // same level as letter baseline
  const spreadX  = 46    // how far legs splay outward at bottom
  const leafTop  = 24
  const leafBot  = 88
  const leafW    = 13    // half-width of each lobe at widest

  return (
    <svg
      viewBox="30 0 460 150"
      width={width}
      height="auto"
      aria-label="AVAAR — Healthy Unstoppable"
      style={{ display: 'block', overflow: 'visible' }}
    >
      {/* ── AV ── */}
      <text
        x={cx - 48} y={base}
        textAnchor="end"
        fontFamily="Cinzel, 'Trajan Pro', serif"
        fontSize={fs}
        fontWeight="400"
        fill={gold}
      >AV</text>

      {/* ══ ICON ══ */}
      {/* Left arch leg */}
      <path
        d={`M ${cx},${iconTop} C ${cx-14},26 ${cx-30},58 ${cx-spreadX},${iconBot}`}
        fill="none" stroke={gold} strokeWidth="3" strokeLinecap="round"
      />
      {/* Right arch leg */}
      <path
        d={`M ${cx},${iconTop} C ${cx+14},26 ${cx+30},58 ${cx+spreadX},${iconBot}`}
        fill="none" stroke={gold} strokeWidth="3" strokeLinecap="round"
      />

      {/* Left lobe — rounded teardrop, inner edge is straight centre line */}
      <path
        d={`
          M ${cx},${leafBot}
          C ${cx-leafW},${leafBot-12} ${cx-leafW-4},${leafBot-32} ${cx-leafW+2},${leafBot-52}
          C ${cx-leafW+4},${leafTop+4} ${cx-4},${leafTop} ${cx},${leafTop+4}
          Z
        `}
        fill={gold}
      />
      {/* Right lobe — mirror */}
      <path
        d={`
          M ${cx},${leafBot}
          C ${cx+leafW},${leafBot-12} ${cx+leafW+4},${leafBot-32} ${cx+leafW-2},${leafBot-52}
          C ${cx+leafW-4},${leafTop+4} ${cx+4},${leafTop} ${cx},${leafTop+4}
          Z
        `}
        fill={gold}
      />
      {/* Centre vein splits the two lobes */}
      <line
        x1={cx} y1={leafTop + 2}
        x2={cx} y2={leafBot - 2}
        stroke={bg} strokeWidth="2.2" strokeLinecap="round"
      />

      {/* ── AR ── */}
      <text
        x={cx + 48} y={base}
        textAnchor="start"
        fontFamily="Cinzel, 'Trajan Pro', serif"
        fontSize={fs}
        fontWeight="400"
        fill={gold}
      >AR</text>

      {/* ── Tagline ── */}
      <line x1="52"  y1="124" x2="162" y2="124" stroke={gold} strokeWidth="0.9" opacity="0.5"/>
      <text
        x={cx} y="129"
        textAnchor="middle"
        fontFamily="Cinzel, serif"
        fontSize="11"
        fill={gold}
        letterSpacing="5"
      >HEALTHY UNSTOPPABLE</text>
      <line x1="358" y1="124" x2="468" y2="124" stroke={gold} strokeWidth="0.9" opacity="0.5"/>
    </svg>
  )
}
