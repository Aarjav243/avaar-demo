import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const products = [
  {
    id: 1,
    name: 'Royal Dry Fruit Mix',
    tag: 'Bestseller',
    desc: 'A curated blend of premium cashews, almonds, pistachios and raisins. Nature\'s finest, unadulterated. No artificial coating, no added sugar.',
    weight: '250g · 500g',
    img: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=900&q=85',
  },
  {
    id: 2,
    name: 'Health Vermicelli',
    tag: 'Gluten Free',
    desc: 'Wheat-free, non-fried, cholesterol-free. Light on the gut, rich in taste. Your guilt-free breakfast.',
    weight: '200g · 400g',
    img: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=500&q=80',
  },
  {
    id: 3,
    name: 'Masala Trail Mix',
    tag: 'New Arrival',
    desc: 'Bold Indian spices meet handpicked premium nuts. A snack that fuels your unstoppable spirit.',
    weight: '150g · 300g',
    img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&q=80',
  },
  {
    id: 4,
    name: 'Golden Nut Medley',
    tag: 'Pure · Raw',
    desc: 'Cold-pressed, unroasted, no additives. Pure nourishment, the way nature intended.',
    weight: '200g · 500g',
    img: 'https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?w=500&q=80',
  },
  {
    id: 5,
    name: 'Immunity Boost Mix',
    tag: 'Superfood',
    desc: 'Handpicked seeds, berries and nuts loaded with antioxidants. Your daily defence, naturally.',
    weight: '150g · 300g',
    img: 'https://images.unsplash.com/photo-1490885578174-acda8905c2c6?w=500&q=80',
  },
]

function FeaturedProductCard({ product }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: 'spring', duration: 0.5, bounce: 0 }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
        background: 'linear-gradient(135deg, var(--forest-mid) 0%, var(--forest-light) 50%, var(--forest-mid) 100%)',
        border: '1px solid rgba(201,164,82,0.25)',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'border-color 0.4s, box-shadow 0.4s',
        marginBottom: '24px',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(201,164,82,0.55)'
        e.currentTarget.style.boxShadow = '0 24px 80px rgba(0,0,0,0.45), 0 0 40px rgba(201,164,82,0.07)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(201,164,82,0.25)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', minHeight: '360px', overflow: 'hidden' }}>
        <img
          src={product.img}
          alt={product.name}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.72) saturate(0.85)',
            transition: 'transform 0.7s ease, filter 0.4s',
          }}
          onMouseEnter={e => { e.target.style.transform = 'scale(1.04)'; e.target.style.filter = 'brightness(0.82) saturate(1)' }}
          onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.filter = 'brightness(0.72) saturate(0.85)' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, transparent 60%, var(--forest-mid) 100%)',
        }} />
        {/* Tag */}
        <div style={{
          position: 'absolute', top: '24px', left: '24px',
          background: 'var(--gold)',
          padding: '5px 14px',
        }}>
          <span style={{
            fontFamily: 'var(--font-label)',
            fontSize: '11px',
            letterSpacing: '0.12em',
            color: 'var(--forest)',
            textTransform: 'uppercase',
          }}>{product.tag}</span>
        </div>
      </div>

      {/* Content */}
      <div style={{
        padding: 'clamp(32px, 5vw, 56px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '20px',
      }}>
        <div>
          <p style={{
            fontFamily: 'var(--font-label)',
            fontSize: '11px',
            letterSpacing: '0.3em',
            color: 'rgba(201,164,82,0.6)',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}>Our Signature</p>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 500,
            color: 'var(--cream)',
            letterSpacing: '0.2px',
            lineHeight: 1.1,
          }}>{product.name}</h3>
        </div>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '16px',
          fontWeight: 400,
          color: 'var(--cream-dim)',
          lineHeight: 1.85,
          maxWidth: '42ch',
        }}>{product.desc}</p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            letterSpacing: '0.1em',
            color: 'var(--gold-dim)',
            textTransform: 'uppercase',
          }}>{product.weight}</span>

          <motion.button
            whileTap={{ scale: 0.97 }}
            style={{
            fontFamily: 'var(--font-label)',
            fontSize: '11px',
            letterSpacing: '0.12em',
            color: 'var(--forest)',
            background: 'var(--gold)',
            border: 'none',
            padding: '12px 28px',
            cursor: 'pointer',
            textTransform: 'uppercase',
            transition: 'background 0.3s, transform 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-light)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >Enquire Now</motion.button>
        </div>
      </div>
    </motion.div>
  )
}

function ProductCard({ product, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: 'spring', duration: 0.5, bounce: 0, delay: index * 0.07 }}
      style={{
        background: 'linear-gradient(145deg, var(--forest-mid) 0%, var(--forest) 100%)',
        border: '1px solid rgba(201,164,82,0.15)',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'border-color 0.4s, transform 0.3s, box-shadow 0.4s',
        position: 'relative',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(201,164,82,0.6)'
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(201,164,82,0.08)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(201,164,82,0.15)'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Tag */}
      <div style={{
        position: 'absolute', top: '16px', left: '16px', zIndex: 2,
        background: 'var(--gold)',
        padding: '4px 12px',
      }}>
        <span style={{
          fontFamily: 'var(--font-label)',
          fontSize: '11px',
          letterSpacing: '0.12em',
          color: 'var(--forest)',
          textTransform: 'uppercase',
        }}>{product.tag}</span>
      </div>

      {/* Image */}
      <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.75) saturate(0.9)',
            transition: 'transform 0.6s ease, filter 0.4s',
          }}
          onMouseEnter={e => { e.target.style.transform = 'scale(1.05)'; e.target.style.filter = 'brightness(0.85) saturate(1)' }}
          onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.filter = 'brightness(0.75) saturate(0.9)' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, transparent 50%, rgba(12,36,21,0.8) 100%)',
        }} />
      </div>

      {/* Content */}
      <div style={{ padding: '24px 24px 28px' }}>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '22px',
          fontWeight: 500,
          color: 'var(--cream)',
          letterSpacing: '0.3px',
          marginBottom: '10px',
        }}>{product.name}</h3>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '15px',
          fontWeight: 400,
          color: 'var(--cream-dim)',
          lineHeight: 1.8,
          marginBottom: '20px',
          maxWidth: '45ch',
        }}>{product.desc}</p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            letterSpacing: '0.1em',
            color: 'var(--gold-dim)',
            textTransform: 'uppercase',
          }}>{product.weight}</span>

          <motion.button
            whileTap={{ scale: 0.97 }}
            style={{
            fontFamily: 'var(--font-label)',
            fontSize: '10px',
            letterSpacing: '0.1em',
            color: 'var(--gold)',
            background: 'transparent',
            border: '1px solid rgba(201,164,82,0.35)',
            padding: '8px 18px',
            cursor: 'pointer',
            textTransform: 'uppercase',
            transition: 'background 0.3s, color 0.3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--forest)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}
          >Enquire</motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Products() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="collection" style={{
      padding: 'clamp(80px, 10vw, 140px) clamp(24px, 6vw, 80px)',
      background: 'var(--forest)',
      position: 'relative',
    }}>
      {/* Section header */}
      <div ref={ref} style={{ textAlign: 'center', marginBottom: '64px' }}>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', duration: 0.5, bounce: 0 }}
          style={{
            fontFamily: 'var(--font-label)',
            fontSize: '11px',
            letterSpacing: '0.35em',
            color: 'var(--gold)',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >Our Collection</motion.p>

        <motion.h2
          initial={{ opacity: 0, translateY: 8, filter: 'blur(4px)' }}
          animate={inView ? { opacity: 1, translateY: 0, filter: 'blur(0px)' } : {}}
          transition={{ type: 'spring', duration: 0.45, bounce: 0, delay: 0.06 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 5vw, 58px)',
            fontWeight: 400,
            color: 'var(--cream)',
            lineHeight: 1.15,
            letterSpacing: '0.5px',
          }}
        >Fuel Your <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Unstoppable</em></motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            width: '60px', height: '1px',
            background: 'var(--gold)',
            margin: '24px auto 0',
            transformOrigin: 'center',
          }}
        />
      </div>

      {/* Featured product */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <FeaturedProductCard product={products[0]} />

        {/* Supporting grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(260px, 100%), 1fr))',
          gap: '24px',
        }}>
          {products.slice(1).map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </div>

      {/* View all */}
      <motion.div
        initial={{ opacity: 0, translateY: 8, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, translateY: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ type: 'spring', duration: 0.45, bounce: 0 }}
        style={{ textAlign: 'center', marginTop: '56px' }}
      >
        <a href="#" style={{
          fontFamily: 'var(--font-label)',
          fontSize: '11px',
          letterSpacing: '0.22em',
          color: 'var(--cream-dim)',
          textDecoration: 'none',
          textTransform: 'uppercase',
          borderBottom: '1px solid rgba(201,164,82,0.3)',
          paddingBottom: '4px',
          transition: 'color 0.3s, border-color 0.3s',
        }}
        onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.borderColor = 'var(--gold)' }}
        onMouseLeave={e => { e.currentTarget.style.color = 'var(--cream-dim)'; e.currentTarget.style.borderColor = 'rgba(201,164,82,0.3)' }}
        >View Full Collection</a>
      </motion.div>
    </section>
  )
}
