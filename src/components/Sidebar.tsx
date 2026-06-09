import { useState } from 'react'

interface SidebarProps {
  active: string
  onSelect: (id: string) => void
}

const NAV = [
  {
    id: 'brand-foundation',
    label: 'BRAND FOUNDATION',
    items: [
      { id: 'brand-personality', label: 'Brand personality' },
      { id: 'who-we-design-for', label: 'Who we design for' },
      { id: 'tone-of-voice', label: 'Tone of voice' },
      { id: 'artistic-direction', label: 'Artistic direction' },
    ],
  },
  {
    id: 'logo',
    label: 'LOGO',
    items: [
      { id: 'full-logo', label: 'Full logo' },
      { id: 'logomark', label: 'Logomark' },
      { id: 'wordmark', label: 'Wordmark' },
    ],
  },
  {
    id: 'typography',
    label: 'TYPOGRAPHY',
    items: [{ id: 'family-type', label: 'Family Type' }],
  },
  {
    id: 'color',
    label: 'COLOR',
    items: [
      { id: 'core-palette', label: 'Core Palette' },
      { id: 'marketing-colors', label: 'Marketing Colors' },
      { id: 'primary-gradient', label: 'Primary Gradient' },
    ],
  },
  {
    id: 'brand-expressions',
    label: 'BRAND EXPRESSIONS',
    items: [
      { id: 'in-action', label: 'In action' },
      { id: 'texture', label: 'Texture' },
    ],
  },
  {
    id: 'social-media',
    label: 'SOCIAL MEDIA',
    items: [
      { id: 'x-twitter', label: 'X/Twitter' },
      { id: 'telegram', label: 'Telegram' },
      { id: 'discord', label: 'Discord' },
    ],
  },
]

export default function Sidebar({ active, onSelect }: SidebarProps) {
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set())
  const [hovered, setHovered] = useState<string | null>(null)

  const toggleSection = (id: string) => {
    setCollapsed(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <nav
      style={{
        width: 220,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        background: '#12121A',
        borderRight: '1px solid #1E1E2E',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          height: 52,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '0 16px',
          borderBottom: '1px solid #1E1E2E',
          flexShrink: 0,
        }}
      >
        <img src="/images/Logo/Logo_Full_Dark%20Mode.svg" alt="BasedBot" style={{ height: 16, width: 'auto' }} />
      </div>

      {/* Nav */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '8px 0' }}>
        {NAV.map(section => {
          const isCollapsed = collapsed.has(section.id)
          return (
            <div key={section.id} style={{ marginBottom: 2 }}>
              {/* Section label */}
              <button
                onClick={() => toggleSection(section.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  width: '100%',
                  padding: '8px 16px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#7D7D87',
                  fontSize: 11,
                  fontWeight: 500,
                  fontFamily: "'Geist Mono', monospace",
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textAlign: 'left',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: 7,
                    transform: isCollapsed ? 'rotate(-90deg)' : 'none',
                    transition: 'transform 0.15s',
                    color: '#7D7D87',
                    lineHeight: 1,
                  }}
                >
                  ▼
                </span>
                {section.label}
              </button>

              {/* Items */}
              {!isCollapsed && (
                <div style={{ padding: '2px 8px' }}>
                  {section.items.map(item => {
                    const itemId = `${section.id}/${item.id}`
                    const isActive = active === itemId
                    const isHov = hovered === itemId && !isActive

                    return (
                      <button
                        key={item.id}
                        onClick={() => onSelect(itemId)}
                        onMouseEnter={() => setHovered(itemId)}
                        onMouseLeave={() => setHovered(null)}
                        style={{
                          display: 'block',
                          width: '100%',
                          textAlign: 'left',
                          padding: '6px 12px',
                          marginBottom: 1,
                          borderRadius: 6,
                          fontSize: 13,
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'background 0.1s',
                          background: isActive || isHov ? '#1E1E2E' : 'transparent',
                          color: '#FFFFFF',
                          boxShadow: 'none',
                          fontWeight: 400,
                        }}
                      >
                        {item.label}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </nav>
  )
}
