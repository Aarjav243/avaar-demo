import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['Collection', 'Our Story', 'Reviews']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, type: 'spring', bounce: 0 }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          padding: '18px clamp(20px, 5vw, 48px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled || open ? 'rgba(12,36,21,0.97)' : 'transparent',
          backdropFilter: scrolled || open ? 'blur(12px)' : 'none',
          borderBottom: scrolled || open ? '1px solid rgba(201,164,82,0.15)' : 'none',
          transition: 'background 0.35s ease, border-color 0.35s ease',
        }}
      >
        <a href="#" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'var(--font-label)',
            fontSize: '13px',
            letterSpacing: '3px',
            color: 'var(--gold)',
            fontWeight: 400,
          }}>AVAAR</span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }} className="nav-desktop">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              fontWeight: 400,
              letterSpacing: '0.14em',
              color: 'var(--cream-dim)',
              textDecoration: 'none',
              textTransform: 'uppercase',
              transition: 'color 0.25s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--gold)'}
            onMouseLeave={e => e.target.style.color = 'var(--cream-dim)'}
            >{link}</a>
          ))}
          <motion.a
            href="#collection"
            whileTap={{ scale: 0.97 }}
            style={{
              fontFamily: 'var(--font-label)',
              fontSize: '11px',
              letterSpacing: '2px',
              color: 'var(--forest)',
              background: 'var(--gold)',
              padding: '9px 20px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              transition: 'background 0.25s',
            }}
            onMouseEnter={e => e.target.style.background = 'var(--gold-light)'}
            onMouseLeave={e => e.target.style.background = 'var(--gold)'}
          >Shop Now</motion.a>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '8px', display: 'none',
            flexDirection: 'column', gap: '5px',
          }}
        >
          <span style={{
            display: 'block', width: '22px', height: '1px',
            background: 'var(--gold)',
            transform: open ? 'translateY(6px) rotate(45deg)' : 'none',
            transition: 'transform 0.25s',
          }} />
          <span style={{
            display: 'block', width: '22px', height: '1px',
            background: 'var(--gold)',
            opacity: open ? 0 : 1,
            transition: 'opacity 0.2s',
          }} />
          <span style={{
            display: 'block', width: '22px', height: '1px',
            background: 'var(--gold)',
            transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none',
            transition: 'transform 0.25s',
          }} />
        </button>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: 'spring', duration: 0.35, bounce: 0 }}
            style={{
              position: 'fixed',
              top: '58px', left: 0, right: 0,
              zIndex: 99,
              background: 'rgba(12,36,21,0.98)',
              backdropFilter: 'blur(12px)',
              borderBottom: '1px solid rgba(201,164,82,0.15)',
              padding: '24px clamp(20px, 5vw, 48px) 32px',
              display: 'flex', flexDirection: 'column', gap: '0',
            }}
          >
            {links.map((link, i) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                onClick={close}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  fontWeight: 400,
                  letterSpacing: '0.12em',
                  color: 'var(--cream-dim)',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  padding: '16px 0',
                  borderBottom: i < links.length - 1 ? '1px solid rgba(201,164,82,0.08)' : 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                onMouseLeave={e => e.target.style.color = 'var(--cream-dim)'}
              >{link}</a>
            ))}
            <a
              href="#collection"
              onClick={close}
              style={{
                fontFamily: 'var(--font-label)',
                fontSize: '12px',
                letterSpacing: '2px',
                color: 'var(--forest)',
                background: 'var(--gold)',
                padding: '14px 28px',
                textDecoration: 'none',
                textTransform: 'uppercase',
                display: 'inline-block',
                marginTop: '20px',
                alignSelf: 'flex-start',
                transition: 'background 0.25s',
              }}
              onMouseEnter={e => e.target.style.background = 'var(--gold-light)'}
              onMouseLeave={e => e.target.style.background = 'var(--gold)'}
            >Shop Now</a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
