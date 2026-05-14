const BG = 'radial-gradient(ellipse at 50% 50%, #162A18 0%, #0D1E11 50%, #07100A 100%)'

export default function Hero() {
  return (
    <section className="hero-section" style={{
      position: 'relative',
      height: '100svh',
      minHeight: '600px',
      overflow: 'hidden',
      background: BG,
    }}>
      <video
        src="/hero.mp4"
        autoPlay
        muted
        playsInline
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'contain',
          background: BG,
          zIndex: 0,
        }}
      />

      {/* Bottom fade into next section */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%', zIndex: 1,
        background: 'linear-gradient(to top, var(--forest) 0%, transparent 100%)',
      }} />

      <style>{`
        @media (max-width: 640px) {
          .hero-section {
            height: 56.25vw !important;
            min-height: 180px !important;
          }
        }
      `}</style>
    </section>
  )
}
