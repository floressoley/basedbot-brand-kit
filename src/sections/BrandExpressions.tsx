import { useState } from 'react'

interface Props { item: string }

const mono: React.CSSProperties = { fontFamily: "'Geist Mono', monospace" }

const IN_ACTION_ASSETS = [
  {
    src: '/images/BrandExpressions/Post.png',
    label: 'Marketing post',
    description: 'Full-bleed campaign asset. Terminal grid, brand blue, Zalando Sans Expanded for the headline.',
  },
  {
    src: '/images/BrandExpressions/Visual_TwitterDisplay.png',
    label: 'X / Twitter display',
    description: 'Profile header in production. Logomark centered on brand dark, wordmark top-right.',
  },
  {
    src: '/images/BrandExpressions/Twitter_partnership.png',
    label: 'Partnership announcement',
    description: 'Co-brand post format. Dark background, logo lockup, short declarative copy — no hype.',
  },
  {
    src: '/images/BrandExpressions/Pattern.png',
    label: 'Brand texture',
    description: 'Repeating logomark grid. Used as background texture for cards, headers, and social assets.',
  },
]

function AssetCard({ src, label, description }: { src: string; label: string; description: string }) {
  const [hov, setHov] = useState(false)

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: '#12121A',
        border: `1px solid ${hov ? '#2388FF44' : '#1E1E2E'}`,
        borderRadius: 10,
        overflow: 'hidden',
        transition: 'border-color 0.15s',
      }}
    >
      <div style={{ overflow: 'hidden', height: 220 }}>
        <img
          src={src}
          alt={label}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.2s ease',
            transform: hov ? 'scale(1.04)' : 'scale(1)',
          }}
        />
      </div>
      <div style={{ padding: '14px 18px', borderTop: '1px solid #1E1E2E' }}>
        <p style={{ color: '#FFFFFF', fontSize: 13, fontWeight: 500, margin: '0 0 4px' }}>{label}</p>
        <p style={{ ...mono, color: '#7D7D87', fontSize: 11, lineHeight: 1.6, margin: 0 }}>{description}</p>
      </div>
    </div>
  )
}

function InAction() {
  return (
    <div style={{ padding: '40px 48px', maxWidth: 860, width: '100%' }}>
      <p style={{ ...mono, color: '#7D7D87', fontSize: 11, letterSpacing: '0.08em', marginBottom: 16 }}>
        /BRAND EXPRESSIONS / IN ACTION
      </p>
      <h2 style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 500, margin: '0 0 8px', letterSpacing: '-0.01em' }}>
        The brand in the wild.
      </h2>
      <p style={{ color: '#ABABB1', fontSize: 15, lineHeight: 1.7, margin: '0 0 28px' }}>
        How BasedBot looks when it shows up — social, campaign, texture, and co-brand formats.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {IN_ACTION_ASSETS.map(asset => (
          <AssetCard key={asset.label} {...asset} />
        ))}
      </div>
    </div>
  )
}

function Placeholder({ path, title, note }: { path: string; title: string; note: string }) {
  return (
    <div style={{ padding: '40px 48px', maxWidth: 860 }}>
      <p style={{ ...mono, color: '#7D7D87', fontSize: 11, letterSpacing: '0.08em', marginBottom: 16 }}>{path}</p>
      <h2 style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 500, margin: '0 0 28px', letterSpacing: '-0.01em' }}>{title}</h2>
      <div style={{
        borderRadius: 10,
        border: '1px dashed #1E1E2E',
        height: 260,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
      }}>
        <div style={{ width: 40, height: 40, borderRadius: 8, border: '1px dashed #1E1E2E', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7D7D87', fontSize: 20 }}>
          +
        </div>
        <span style={{ color: '#7D7D87', fontSize: 12, letterSpacing: '0.06em' }}>{note}</span>
      </div>
    </div>
  )
}

export default function BrandExpressionsSection({ item }: Props) {
  switch (item) {
    case 'texture':
      return <Placeholder path="/BRAND EXPRESSIONS / TEXTURE" title="Texture" note="Texture assets coming soon" />
    default:
      return <InAction />
  }
}
