import AvaarLogo from './AvaarLogo'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--forest-mid)',
      borderTop: '1px solid rgba(201,164,82,0.12)',
      padding: 'clamp(48px, 8vw, 80px) clamp(24px, 6vw, 80px) 32px',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Top row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
          gap: '48px',
          paddingBottom: '48px',
          borderBottom: '1px solid rgba(201,164,82,0.1)',
        }}>
          {/* Brand */}
          <div>
            <AvaarLogo width={150} />
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              fontWeight: 400,
              color: 'var(--cream-dim)',
              lineHeight: 1.8,
              maxWidth: '220px',
            }}>Premium health foods for those who are Healthy Unstoppable.</p>
          </div>

          {/* Links */}
          {[
            { title: 'Explore', links: ['Our Collection', 'New Arrivals', 'Bestsellers', 'Gift Sets'] },
            { title: 'Company', links: ['Our Story', 'Values', 'Sustainability', 'Careers'] },
            { title: 'Support', links: ['FAQs', 'Shipping Info', 'Returns', 'Contact Us'] },
          ].map(col => (
            <div key={col.title}>
              <p style={{
                fontFamily: 'var(--font-label)',
                fontSize: '11px',
                letterSpacing: '0.22em',
                color: 'var(--gold)',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}>{col.title}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      fontWeight: 400,
                      color: 'var(--cream-dim)',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                    onMouseLeave={e => e.target.style.color = 'var(--cream-dim)'}
                    >{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '28px',
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            fontWeight: 300,
            color: 'rgba(201,164,82,0.35)',
            letterSpacing: '1px',
          }}>© 2025 AVAAR. All rights reserved.</p>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            {['Instagram', 'Facebook', 'WhatsApp'].map(s => (
              <a key={s} href="#" style={{
                fontFamily: 'var(--font-label)',
                fontSize: '9px',
                letterSpacing: '2px',
                color: 'rgba(201,164,82,0.4)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'color 0.3s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--gold)'}
              onMouseLeave={e => e.target.style.color = 'rgba(201,164,82,0.4)'}
              >{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
