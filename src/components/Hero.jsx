export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      height: '100svh',
      minHeight: '600px',
      overflow: 'hidden',
    }}>
      <video
        src="/hero.mp4"
        autoPlay
        muted
        playsInline
        className="hero-video"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

      <style>{`
        @media (max-width: 768px) and (orientation: portrait) {
          .hero-video {
            object-fit: contain;
            background: #081A0F;
          }
        }
      `}</style>

      {/* Bottom fade into next section */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%', zIndex: 1,
        background: 'linear-gradient(to top, var(--forest) 0%, transparent 100%)',
      }} />
    </section>
  )
}
