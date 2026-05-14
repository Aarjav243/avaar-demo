export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      height: '100svh',
      minHeight: '600px',
      overflow: 'hidden',
      background: '#0C1C13',
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
          background: '#0C1C13',
          zIndex: 0,
        }}
      />

      {/* Bottom fade into next section */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%', zIndex: 1,
        background: 'linear-gradient(to top, #0C1C13 0%, transparent 100%)',
      }} />
    </section>
  )
}
