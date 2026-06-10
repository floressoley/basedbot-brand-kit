interface Props { item: string }

interface Spec { label: string; value: string }

interface PlatformPageProps {
  path: string
  title: string
  handle: string
  accentColor: string
  description: string
  specs: Spec[]
  notes: string[]
}

function PlatformPage({ path, title, handle, accentColor, description, specs, notes }: PlatformPageProps) {
  return (
    <div style={{ padding: '40px 48px', maxWidth: 860 }}>
      <p style={{ color: '#7D7D87', fontSize: 11, fontFamily: "'Geist Mono', monospace", letterSpacing: '0.08em', marginBottom: 16 }}>{path}</p>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <div style={{ width: 7, height: 7, borderRadius: '50%', background: accentColor, flexShrink: 0 }} />
        <h2 style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 500, margin: 0, letterSpacing: '-0.01em' }}>{title}</h2>
        <span style={{ color: '#7D7D87', fontSize: 12 }}>{handle}</span>
      </div>

      <p style={{ color: '#ABABB1', fontSize: 15, lineHeight: 1.75, marginBottom: 32 }}>{description}</p>

      <div style={{ background: '#12121A', borderRadius: 10, border: '1px solid #1E1E2E', marginBottom: 10, overflow: 'hidden' }}>
        <div style={{ padding: '10px 20px', borderBottom: '1px solid #1E1E2E' }}>
          <span style={{ color: '#7D7D87', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Asset Specs</span>
        </div>
        {specs.map((s, i) => (
          <div key={s.label} style={{ display: 'flex', padding: '11px 20px', borderBottom: i < specs.length - 1 ? '1px solid #1E1E2E' : 'none' }}>
            <span style={{ color: '#7D7D87', fontSize: 13, width: 200, flexShrink: 0 }}>{s.label}</span>
            <span style={{ color: '#ABABB1', fontSize: 13, fontFamily: "'Geist Mono', monospace" }}>{s.value}</span>
          </div>
        ))}
      </div>

      <div style={{ background: '#12121A', borderRadius: 10, border: '1px solid #1E1E2E', overflow: 'hidden' }}>
        <div style={{ padding: '10px 20px', borderBottom: '1px solid #1E1E2E' }}>
          <span style={{ color: '#7D7D87', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Usage Notes</span>
        </div>
        <div style={{ padding: '6px 20px 14px' }}>
          {notes.map((n, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 10, padding: '7px 0', borderBottom: i < notes.length - 1 ? '1px solid #1E1E2E' : 'none' }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: accentColor, flexShrink: 0, marginTop: 1 }} />
              <span style={{ color: '#ABABB1', fontSize: 13, lineHeight: 1.7 }}>{n}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function SocialMediaSection({ item }: Props) {
  switch (item) {
    case 'telegram':
      return (
        <PlatformPage
          path="/SOCIAL MEDIA / TELEGRAM"
          title="Telegram"
          handle="t.me/BasedBot"
          accentColor="#2AABEE"
          description="Community hub for BasedBot users. Updates, support threads, and trading discussion."
          specs={[
            { label: 'Channel icon', value: '512 × 512 px — logomark, dark bg' },
            { label: 'Pinned image', value: '1280 × 720 px' },
            { label: 'Sticker pack', value: '512 × 512 px, WebP' },
          ]}
          notes={[
            'Channel icon: logomark centered on #0D1627 background.',
            'Pinned announcements should use the brand gradient header.',
            'Keep tone conversational but precise — this is a user community.',
          ]}
        />
      )
    case 'discord':
      return (
        <PlatformPage
          path="/SOCIAL MEDIA / DISCORD"
          title="Discord"
          handle="BasedBot Server"
          accentColor="#5865F2"
          description="Developer and power-user community. Feature feedback, integrations, and support."
          specs={[
            { label: 'Server icon', value: '512 × 512 px — logomark, dark bg' },
            { label: 'Banner', value: '960 × 540 px — brand gradient' },
            { label: 'Invite splash', value: '1920 × 1080 px' },
          ]}
          notes={[
            'Server icon: logomark on #0D1627, with subtle glow from brand blue.',
            'Role colors should pull from the core palette — navyMid and blue.',
            'Embed accent color: #2388FF (brand blue).',
            'Maintain dark theme across all visuals — no white backgrounds.',
          ]}
        />
      )
    default:
      return (
        <PlatformPage
          path="/SOCIAL MEDIA / X/TWITTER"
          title="X / Twitter"
          handle="@BasedBot"
          accentColor="#1D9BF0"
          description="Primary channel for announcements, market commentary, and community engagement. Tone is direct, sharp, and informed."
          specs={[
            { label: 'Profile picture', value: '400 × 400 px — logomark on dark bg' },
            { label: 'Header image', value: '1500 × 500 px — brand gradient bg' },
            { label: 'Post image', value: '1200 × 675 px (16:9)' },
            { label: 'Card image', value: '800 × 418 px' },
          ]}
          notes={[
            'Use the full logo for the header. Logomark only for the profile picture.',
            'Dark backgrounds only — never place the logo on white.',
            'Keep copy under 240 characters for maximum engagement.',
            'Brand blue (#2388FF) for highlights and callouts in images.',
          ]}
        />
      )
  }
}
