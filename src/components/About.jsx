import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const pillars = [
  { label: 'No Preservatives', icon: '✦' },
  { label: 'Naturally Sourced', icon: '✦' },
  { label: 'Cholesterol Free', icon: '✦' },
  { label: 'Rich in Nutrients', icon: '✦' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="our-story" ref={ref} style={{
      padding: 'clamp(80px, 10vw, 140px) clamp(24px, 6vw, 80px)',
      background: 'var(--forest-mid)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background gold arc */}
      <div style={{
        position: 'absolute', right: '-10%', top: '10%',
        width: '500px', height: '500px',
        borderRadius: '50%',
        border: '1px solid rgba(201,164,82,0.06)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', right: '-5%', top: '15%',
        width: '350px', height: '350px',
        borderRadius: '50%',
        border: '1px solid rgba(201,164,82,0.05)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
        gap: 'clamp(48px, 8vw, 100px)',
        alignItems: 'center',
      }}>
        {/* Left — Visual */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ type: 'spring', duration: 0.55, bounce: 0 }}
          style={{ position: 'relative' }}
        >
          <div style={{
            position: 'relative',
            paddingBottom: '110%',
            overflow: 'hidden',
          }}>
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?w=700&q=80"
              alt="About AVAAR"
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.65) saturate(0.8)',
              }}
            />
            {/* Gold border accent */}
            <div style={{
              position: 'absolute',
              top: '16px', left: '16px', right: '-16px', bottom: '-16px',
              border: '1px solid rgba(201,164,82,0.3)',
              zIndex: 0,
              pointerEvents: 'none',
            }} />
          </div>

          {/* Floating stat */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: 'spring', duration: 0.5, bounce: 0, delay: 0.2 }}
            style={{
              position: 'absolute',
              bottom: '-12px', right: '8px',
              background: 'var(--gold)',
              padding: '20px 28px',
              zIndex: 2,
            }}
          >
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '38px',
              fontWeight: 400,
              color: 'var(--forest)',
              lineHeight: 1,
            }}>100%</p>
            <p style={{
              fontFamily: 'var(--font-label)',
              fontSize: '9px',
              letterSpacing: '2px',
              color: 'var(--forest-mid)',
              marginTop: '4px',
              textTransform: 'uppercase',
            }}>Natural</p>
          </motion.div>
        </motion.div>

        {/* Right — Text */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ type: 'spring', duration: 0.55, bounce: 0, delay: 0.08 }}
        >
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 4.5vw, 58px)',
            fontWeight: 400,
            color: 'var(--cream)',
            lineHeight: 1.15,
            letterSpacing: '0.2px',
            marginBottom: '32px',
          }}>
            Born from the belief that healthy should never mean&nbsp;
            <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>tasteless</em>
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(15px, 1.5vw, 17px)',
            fontWeight: 400,
            color: 'var(--cream-dim)',
            lineHeight: 1.9,
            marginBottom: '20px',
            maxWidth: '56ch',
          }}>
            AVAAR was founded on one unshakeable conviction: that the pursuit of health should
            ignite you, not restrict you. Every product we craft is a promise — premium ingredients,
            no compromise, no shortcuts.
          </p>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(15px, 1.5vw, 17px)',
            fontWeight: 400,
            color: 'var(--cream-dim)',
            lineHeight: 1.9,
            marginBottom: '40px',
            maxWidth: '56ch',
          }}>
            From handpicked dry fruits to cholesterol-free vermicelli and bold masala snacks,
            everything we make is designed to fuel the version of you that refuses to settle.
          </p>

          {/* Pillars */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            marginBottom: '44px',
          }}>
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ type: 'spring', duration: 0.45, bounce: 0, delay: 0.1 + i * 0.06 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '12px 16px',
                  border: '1px solid rgba(201,164,82,0.12)',
                  background: 'rgba(201,164,82,0.03)',
                }}
              >
                <span style={{ color: 'var(--gold)', fontSize: '8px' }}>{p.icon}</span>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  letterSpacing: '0.1em',
                  color: 'var(--cream-dim)',
                  textTransform: 'uppercase',
                  fontWeight: 400,
                }}>{p.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#"
            whileTap={{ scale: 0.97 }}
            style={{
            fontFamily: 'var(--font-label)',
            fontSize: '11px',
            letterSpacing: '3px',
            color: 'var(--forest)',
            background: 'var(--gold)',
            padding: '14px 36px',
            textDecoration: 'none',
            textTransform: 'uppercase',
            display: 'inline-block',
            transition: 'background 0.3s, transform 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-light)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >Discover More</motion.a>
        </motion.div>
      </div>
    </section>
  )
}
