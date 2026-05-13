import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const reviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    city: 'Mumbai',
    rating: 5,
    text: 'The Royal Dry Fruit Mix is absolutely premium. You can taste the quality difference immediately. No artificial coating, no added sugar.',
    avatar: 'PS',
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    city: 'Delhi',
    rating: 5,
    text: "AVAAR's Health Vermicelli changed my breakfast routine completely. Lighter, tastier, no heaviness. Finally a brand that delivers.",
    avatar: 'RM',
  },
  {
    id: 3,
    name: 'Ananya Patel',
    city: 'Bangalore',
    rating: 5,
    text: 'The Masala Trail Mix is insanely addictive. Bold spices, premium nuts, zero guilt. Replaced my evening junk food entirely with AVAAR.',
    avatar: 'AP',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    city: 'Pune',
    rating: 5,
    text: 'What sets AVAAR apart is the packaging — it screams premium. The Golden Nut Medley is now a daily ritual for our whole family.',
    avatar: 'VS',
  },
  {
    id: 5,
    name: 'Meera Krishnan',
    city: 'Chennai',
    rating: 5,
    text: 'Finally a health brand that delivers on its promise. So fresh you can smell the quality the moment you open the pack.',
    avatar: 'MK',
  },
  {
    id: 6,
    name: 'Arjun Nair',
    city: 'Hyderabad',
    rating: 5,
    text: 'My kids love the trail mix and I love that I can trust what goes into it. AVAAR has become our household staple.',
    avatar: 'AN',
  },
  {
    id: 7,
    name: 'Sunita Joshi',
    city: 'Ahmedabad',
    rating: 5,
    text: 'The vermicelli is light and cooks beautifully. No oil required, no guilt. A wholesome breakfast the whole family enjoys.',
    avatar: 'SJ',
  },
  {
    id: 8,
    name: 'Nikhil Gupta',
    city: 'Kolkata',
    rating: 5,
    text: 'Ordered twice already. The immunity mix is something special — you can feel the quality in every handful. Worth every rupee.',
    avatar: 'NG',
  },
]

function Stars({ count }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: 'var(--gold)', fontSize: '13px' }}>★</span>
      ))}
    </div>
  )
}

function ReviewCard({ review }) {
  return (
    <div style={{
      width: 'clamp(260px, 80vw, 320px)',
      flexShrink: 0,
      border: '1px solid rgba(201,164,82,0.14)',
      background: 'linear-gradient(145deg, var(--forest-mid) 0%, var(--forest) 100%)',
      padding: '24px 26px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
    }}>
      <Stars count={review.rating} />

      <p style={{
        fontFamily: 'var(--font-display)',
        fontSize: '15px',
        fontWeight: 400,
        fontStyle: 'italic',
        color: 'var(--cream)',
        lineHeight: 1.7,
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }}>"{review.text}"</p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: 'auto' }}>
        <div style={{
          width: '34px', height: '34px', flexShrink: 0,
          background: 'var(--gold)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{
            fontFamily: 'var(--font-label)',
            fontSize: '10px',
            color: 'var(--forest)',
            fontWeight: 500,
          }}>{review.avatar}</span>
        </div>
        <div>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            fontWeight: 500,
            color: 'var(--cream)',
          }}>{review.name}</p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            fontWeight: 400,
            color: 'var(--gold-dim)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>{review.city}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const row1 = [...reviews, ...reviews]
  const row2 = [...reviews.slice(4), ...reviews.slice(0, 4), ...reviews.slice(4), ...reviews.slice(0, 4)]

  return (
    <section id="reviews" ref={ref} style={{
      padding: 'clamp(80px, 10vw, 140px) 0',
      background: 'var(--forest)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* BG watermark */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(80px, 18vw, 200px)',
        fontWeight: 300,
        color: 'rgba(201,164,82,0.03)',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        pointerEvents: 'none',
        letterSpacing: '20px',
      }}>AVAAR</div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: 'spring', duration: 0.5, bounce: 0 }}
        style={{ textAlign: 'center', marginBottom: '52px' }}
      >
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(14px, 2vw, 18px)',
          fontWeight: 400,
          fontStyle: 'italic',
          color: 'rgba(201,164,82,0.55)',
          letterSpacing: '0.08em',
        }}>What our community says</h2>
      </motion.div>

      {/* Marquee rows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
      >
        {/* Row 1 — scrolls left */}
        <div className="marquee-track" style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          overflow: 'hidden',
        }}>
          <div className="marquee-left" style={{
            display: 'flex', gap: '16px',
            width: 'max-content',
            willChange: 'transform',
          }}>
            {row1.map((r, i) => <ReviewCard key={i} review={r} />)}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="marquee-track" style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          overflow: 'hidden',
        }}>
          <div className="marquee-right" style={{
            display: 'flex', gap: '16px',
            width: 'max-content',
            willChange: 'transform',
          }}>
            {row2.map((r, i) => <ReviewCard key={i} review={r} />)}
          </div>
        </div>
      </motion.div>

      <style>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .marquee-left  { animation: scrollLeft  42s linear infinite; }
        .marquee-right { animation: scrollRight 42s linear infinite; }
        @media (max-width: 640px) {
          .marquee-left  { animation-duration: 28s; }
          .marquee-right { animation-duration: 28s; }
        }
        .marquee-track:hover .marquee-left,
        .marquee-track:hover .marquee-right { animation-play-state: paused; }
      `}</style>
    </section>
  )
}
