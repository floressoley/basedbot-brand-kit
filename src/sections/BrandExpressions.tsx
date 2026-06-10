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

const STEPS = [
  {
    n: '01',
    title: 'Place the noise layer',
    body: 'Add the Noise & Texture PNG as a layer on top of your image or gradient inside Figma, Photoshop, or any design tool.',
  },
  {
    n: '02',
    title: 'Set blend mode to Soft Light',
    body: 'Change the layer blend mode to Soft Light (or Overlay for a stronger effect). This merges the grain into the colors beneath.',
  },
  {
    n: '03',
    title: 'Dial opacity to taste',
    body: 'Start around 20% and adjust up or down. Lower keeps it subtle; higher gives a more filmic, printed feel.',
  },
]

function Texture() {
  return (
    <div style={{ padding: '40px 48px', maxWidth: 860, width: '100%' }}>
      <p style={{ ...mono, color: '#7D7D87', fontSize: 11, letterSpacing: '0.08em', marginBottom: 16 }}>
        /BRAND EXPRESSIONS / TEXTURE
      </p>
      <h2 style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 500, margin: '0 0 8px', letterSpacing: '-0.01em' }}>
        Noise & Texture
      </h2>
      <p style={{ color: '#ABABB1', fontSize: 15, lineHeight: 1.7, margin: '0 0 28px', maxWidth: 560 }}>
        Layering noise over gradients and patterns softens the image and adds organic grit — keeping the brand feeling premium without being sterile.
      </p>

      {/* Stacked Before → Noise → After */}
      {[
        {
          step: '01',
          label: 'Before',
          note: 'Pattern without noise',
          img: '/images/BrandExpressions/Pattern_Without_Noise.png',
          imgAlt: 'Pattern without noise',
          accent: '#7D7D87',
          border: '#1E1E2E',
        },
        {
          step: '02',
          label: 'Add Noise',
          note: 'Gaussian noise layer — Soft Light, ~20% opacity',
          img: '/images/BrandExpressions/Noise_Texture.png',
          imgAlt: 'Noise texture',
          accent: '#ABABB1',
          border: '#1E1E2E',
        },
        {
          step: '03',
          label: 'After',
          note: 'Pattern with noise applied',
          img: '/images/BrandExpressions/Pattern_With_Noise.png',
          imgAlt: 'Pattern with noise',
          accent: '#2388FF',
          border: '#2388FF44',
        },
      ].map(card => (
        <div key={card.step} style={{ borderRadius: 10, overflow: 'hidden', border: `1px solid ${card.border}`, marginBottom: 10 }}>
          <div style={{ height: 200, overflow: 'hidden' }}>
            <img src={card.img} alt={card.imgAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ background: '#12121A', padding: '12px 18px', borderTop: '1px solid #1E1E2E', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ ...mono, color: card.accent, fontSize: 10, letterSpacing: '0.06em', minWidth: 20 }}>
              {card.step}
            </span>
            <span style={{ color: '#FFFFFF', fontSize: 13, fontWeight: 500 }}>{card.label}</span>
            <span style={{ color: '#7D7D87', fontSize: 12 }}>—</span>
            <span style={{ color: '#7D7D87', fontSize: 12 }}>{card.note}</span>
          </div>
        </div>
      ))}

      <div style={{ marginBottom: 28 }} />

      {/* How to apply */}
      <p style={{ ...mono, color: '#7D7D87', fontSize: 11, letterSpacing: '0.08em', marginBottom: 14 }}>
        HOW TO APPLY
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
        {STEPS.map(s => (
          <div key={s.n} style={{ background: '#12121A', border: '1px solid #1E1E2E', borderRadius: 10, padding: '18px 20px' }}>
            <span style={{ ...mono, color: '#2388FF', fontSize: 20, fontWeight: 500, display: 'block', marginBottom: 12 }}>{s.n}</span>
            <p style={{ color: '#FFFFFF', fontSize: 13, fontWeight: 500, margin: '0 0 6px' }}>{s.title}</p>
            <p style={{ color: '#7D7D87', fontSize: 12, lineHeight: 1.65, margin: 0 }}>{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function BrandExpressionsSection({ item }: Props) {
  switch (item) {
    case 'texture': return <Texture />
    default: return <InAction />
  }
}
