import { useState } from 'react'

interface Props { item: string }

interface ColorEntry {
  key: string
  varName: string
  hex: string
  label: string
  usage: string
}

const CORE_PALETTE: ColorEntry[] = [
  { key: 'black',    varName: 'colors.black',    hex: '#0A0A0F', label: 'Black',      usage: 'Page background' },
  { key: 'darkest',  varName: 'colors.darkest',  hex: '#12121A', label: 'Darkest',    usage: 'Card / panel' },
  { key: 'dark',     varName: 'colors.dark',     hex: '#1E1E2E', label: 'Dark',       usage: 'Elevated surface' },
  { key: 'navy',     varName: 'colors.navy',     hex: '#0A091E', label: 'Navy',       usage: 'Deep accent bg' },
  { key: 'navyDeep', varName: 'colors.navyDeep', hex: '#0D1627', label: 'Navy Deep',  usage: 'Sidebar' },
  { key: 'navyMid',  varName: 'colors.navyMid',  hex: '#163569', label: 'Navy Mid',   usage: 'Active states' },
  { key: 'blueSky',  varName: 'colors.blueSky',  hex: '#8EC5FF', label: 'Sky Blue',   usage: 'Light accent' },
  { key: 'blue',     varName: 'colors.blue',     hex: '#2388FF', label: 'Blue',       usage: 'Primary CTA' },
  { key: 'slate',    varName: 'colors.slate',    hex: '#64748B', label: 'Slate',      usage: 'Muted labels' },
  { key: 'white',    varName: 'colors.white',    hex: '#FFFFFF', label: 'White',      usage: 'Primary text' },
  { key: 'muted',    varName: 'colors.muted',    hex: '#ABABB1', label: 'Muted',      usage: 'Secondary text' },
]

const MARKETING_COLORS: ColorEntry[] = [
  { key: 'blue',     varName: 'colors.blue',     hex: '#2388FF', label: 'Brand Blue',  usage: 'CTAs, links' },
  { key: 'blueSky',  varName: 'colors.blueSky',  hex: '#8EC5FF', label: 'Sky Blue',    usage: 'Hover, accents' },
  { key: 'navyMid',  varName: 'colors.navyMid',  hex: '#163569', label: 'Navy Mid',    usage: 'Hero backgrounds' },
  { key: 'navyDeep', varName: 'colors.navyDeep', hex: '#0D1627', label: 'Navy Deep',   usage: 'Dark sections' },
  { key: 'white',    varName: 'colors.white',    hex: '#FFFFFF', label: 'White',       usage: 'Text on dark' },
  { key: 'muted',    varName: 'colors.muted',    hex: '#ABABB1', label: 'Muted',       usage: 'Supporting copy' },
]

const GRADIENTS = [
  {
    name: 'Brand Dark',
    stops: ['#0A091E', '#0D1627', '#163569'],
    css: 'linear-gradient(135deg, #0A091E 0%, #0D1627 50%, #163569 100%)',
    usage: 'Hero sections, card backgrounds',
  },
  {
    name: 'Brand Blue',
    stops: ['#163569', '#2388FF', '#8EC5FF'],
    css: 'linear-gradient(135deg, #163569 0%, #2388FF 60%, #8EC5FF 100%)',
    usage: 'CTA buttons, accent elements',
  },
  {
    name: 'Night to Day',
    stops: ['#0A0A0F', '#0D1627', '#2388FF'],
    css: 'linear-gradient(180deg, #0A0A0F 0%, #0D1627 60%, #2388FF 100%)',
    usage: 'Full-page backgrounds, landing pages',
  },
]

function isLight(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 > 128
}

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r}, ${g}, ${b}`
}

function ColorSwatch({ entry }: { entry: ColorEntry }) {
  const [copied, setCopied] = useState(false)
  const [hov, setHov] = useState(false)
  const rgb = hexToRgb(entry.hex)
  const light = isLight(entry.hex)

  const copy = () => {
    navigator.clipboard.writeText(entry.hex)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <button
      onClick={copy}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        textAlign: 'left',
        width: '100%',
        transition: 'transform 0.18s ease, box-shadow 0.18s ease',
        transform: hov ? 'translateY(-3px)' : 'translateY(0)',
        borderRadius: 10,
        boxShadow: hov
          ? `0 8px 28px rgba(${rgb}, 0.22), 0 0 0 1px rgba(${rgb}, 0.15)`
          : '0 0 0 1px #1E1E2E',
      }}
    >
      <div style={{ borderRadius: 10, overflow: 'hidden' }}>
        <div style={{ background: entry.hex, height: 90, display: 'flex', alignItems: 'flex-end', padding: '8px 12px' }}>
          {copied && (
            <span style={{ fontSize: 10, fontFamily: "'Geist Mono', monospace", color: light ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.6)', letterSpacing: '0.06em' }}>
              COPIED
            </span>
          )}
        </div>
        <div style={{ background: '#12121A', padding: '12px 14px 13px', borderTop: '1px solid #1E1E2E' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 5 }}>
            <span style={{ color: '#FFFFFF', fontSize: 13, fontWeight: 500 }}>{entry.label}</span>
            <span style={{ color: '#ABABB1', fontSize: 11, fontFamily: "'Geist Mono', monospace" }}>{entry.hex}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#7D7D87', fontSize: 10, fontFamily: "'Geist Mono', monospace" }}>{entry.varName}</span>
            <span style={{ color: '#7D7D87', fontSize: 10 }}>{entry.usage}</span>
          </div>
        </div>
      </div>
    </button>
  )
}

function SectionHeader({ path, title, description }: { path: string; title: string; description: string }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <p style={{ color: '#7D7D87', fontSize: 11, fontFamily: "'Geist Mono', monospace", letterSpacing: '0.08em', marginBottom: 14 }}>{path}</p>
      <h2 style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 500, margin: '0 0 8px', letterSpacing: '-0.01em' }}>{title}</h2>
      <p style={{ color: '#ABABB1', fontSize: 15, lineHeight: 1.7, margin: 0 }}>{description}</p>
    </div>
  )
}

function CorePalette() {
  return (
    <div style={{ padding: '40px 48px', maxWidth: 860 }}>
      <SectionHeader
        path="/COLOR / CORE PALETTE"
        title="Core Palette"
        description="The complete BasedBot color set. Every color used across product, marketing, and brand."
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
        {CORE_PALETTE.map(entry => <ColorSwatch key={entry.key} entry={entry} />)}
      </div>
      <p style={{ color: '#7D7D87', fontSize: 11, fontFamily: "'Geist Mono', monospace", marginTop: 14, letterSpacing: '0.04em' }}>
        Click any swatch to copy hex
      </p>
    </div>
  )
}

function MarketingColors() {
  return (
    <div style={{ padding: '40px 48px', maxWidth: 860 }}>
      <SectionHeader
        path="/COLOR / MARKETING COLORS"
        title="Marketing Colors"
        description="The focused palette for external-facing materials — ads, social posts, landing pages, presentations."
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
        {MARKETING_COLORS.map(entry => <ColorSwatch key={entry.key} entry={entry} />)}
      </div>
      <p style={{ color: '#7D7D87', fontSize: 11, fontFamily: "'Geist Mono', monospace", marginTop: 14, letterSpacing: '0.04em' }}>
        Click any swatch to copy hex
      </p>
    </div>
  )
}

function PrimaryGradient() {
  return (
    <div style={{ padding: '40px 48px', maxWidth: 860 }}>
      <SectionHeader
        path="/COLOR / PRIMARY GRADIENT"
        title="Primary Gradient"
        description="Directional gradients built from the core palette. Use for backgrounds, hero sections, and feature highlights."
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {GRADIENTS.map(g => (
          <div key={g.name} style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid #1E1E2E' }}>
            <div style={{ background: g.css, height: 100 }} />
            <div style={{ background: '#12121A', padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #1E1E2E' }}>
              <div>
                <div style={{ color: '#FFFFFF', fontSize: 13, fontWeight: 500, marginBottom: 3 }}>{g.name}</div>
                <div style={{ color: '#7D7D87', fontSize: 12 }}>{g.usage}</div>
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                {g.stops.map(s => (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 10, height: 10, borderRadius: 3, background: s, border: '1px solid #1E1E2E' }} />
                    <span style={{ color: '#ABABB1', fontSize: 10, fontFamily: "'Geist Mono', monospace" }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ColorsSection({ item }: Props) {
  switch (item) {
    case 'marketing-colors': return <MarketingColors />
    case 'primary-gradient': return <PrimaryGradient />
    default: return <CorePalette />
  }
}
