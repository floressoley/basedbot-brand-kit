import { Lightning, Crosshair, LinkSimple } from '@phosphor-icons/react'

interface Props { item: string }

const mono: React.CSSProperties = { fontFamily: "'Geist Mono', monospace" }

function PageShell({ path, title, children }: { path: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ padding: '40px 48px', maxWidth: 860, width: '100%' }}>
      <p style={{ ...mono, color: '#7D7D87', fontSize: 11, letterSpacing: '0.08em', marginBottom: 16 }}>{path}</p>
      <h2 style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 500, margin: '0 0 32px', letterSpacing: '-0.01em' }}>{title}</h2>
      {children}
    </div>
  )
}

function WordCard({ word, tagline, body, icon }: { word: string; tagline: string; body: React.ReactNode; icon: React.ReactNode }) {
  return (
    <div style={{
      background: '#12121A',
      border: '1px solid #1E1E2E',
      borderRadius: 10,
      padding: '28px 32px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
        <span style={{ color: '#2388FF', display: 'flex', alignItems: 'center' }}>{icon}</span>
        <h3 style={{ color: '#FFFFFF', fontSize: 28, fontWeight: 500, fontFamily: "'Zalando Sans Expanded', sans-serif", letterSpacing: '-0.01em', margin: 0 }}>{word}</h3>
      </div>
      <p style={{ ...mono, color: '#7D7D87', fontSize: 11, letterSpacing: '0.08em', margin: '0 0 16px', textTransform: 'uppercase' }}>{tagline}</p>
      <p style={{ color: '#ABABB1', fontSize: 14, lineHeight: 1.75, margin: 0 }}>{body}</p>
    </div>
  )
}

function BrandPersonality() {
  return (
    <PageShell path="/BRAND FOUNDATION / BRAND PERSONALITY" title="BasedBot doesn't explain crypto to you. It moves with you.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <WordCard
          word="Capable"
          icon={<Lightning size={22} weight="duotone" />}
          tagline="Earns trust through performance, not promises."
          body={<><strong style={{ color: '#FFFFFF' }}>Speed, precision, multi-chain coverage</strong>, limit orders, automations, these aren't features to announce; they're the baseline expectation.</>}
        />
        <WordCard
          word="Focused"
          icon={<Crosshair size={22} weight="duotone" />}
          tagline="One mind. One objective."
          body={<>Every element of the product, and every piece of content, should feel like it came from one mind with one objective: <strong style={{ color: '#FFFFFF' }}>help this trader make this trade, right now.</strong> Clutter is disrespect. Noise is a betrayal of the user's time.</>}
        />
        <WordCard
          word="Fluent"
          icon={<LinkSimple size={22} weight="duotone" />}
          tagline="Moves with you, not behind you."
          body={<>BasedBot speaks <strong style={{ color: '#FFFFFF' }}>on-chain natively</strong> — not translating it for outsiders, not performing it for show. The culture, the speed, the terminology, the risk tolerance: it's all assumed.</>}
        />
      </div>
    </PageShell>
  )
}

function WhoWeDesignFor() {
  return (
    <PageShell path="/BRAND FOUNDATION / WHO WE'RE DESIGNING FOR" title="Built for the trader who doesn't need things explained.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{
          background: '#12121A',
          border: '1px solid #1E1E2E',
          borderRadius: 10,
          padding: '24px 28px',
        }}>
          <p style={{ color: '#ABABB1', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
            BasedBot exists for the trader who doesn't need things explained —{' '}
            <span style={{ color: '#FFFFFF', fontWeight: 500 }}>they need things <em>fast</em>.</span>{' '}
            Not a beginner's tool dressed up in friendly UI. Not an institution's terminal buried in complexity.
            Something in between: a professional-grade weapon{' '}
            <span style={{ color: '#FFFFFF', fontWeight: 500 }}>that feels native to the culture it serves.</span>
          </p>
        </div>

        <div style={{
          background: '#0D1627',
          border: '1px solid #163569',
          borderRadius: 10,
          padding: '24px 28px',
        }}>
          <p style={{ ...mono, color: '#8EC5FF', fontSize: 11, letterSpacing: '0.06em', margin: '0 0 12px' }}>/ CORE BELIEF</p>
          <p style={{ color: '#FFFFFF', fontSize: 17, fontWeight: 500, lineHeight: 1.6, margin: 0 }}>
            On-chain trading shouldn't require a second tab.
          </p>
          <p style={{ color: '#ABABB1', fontSize: 14, lineHeight: 1.7, margin: '10px 0 0' }}>
            Everything — discovery, execution, tracking, PnL — happens in one place, across every chain that matters,
            without asking the trader to slow down.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 10,
        }}>
          {[
            { label: 'Experience level', value: 'Advanced — assumes on-chain fluency' },
            { label: 'Risk tolerance', value: 'High — moves fast, adjusts faster' },
            { label: 'What they need', value: 'Speed, precision, cultural fit' },
            { label: 'What they reject', value: 'Handholding, noise, slow UX' },
          ].map(row => (
            <div key={row.label} style={{
              background: '#12121A',
              border: '1px solid #1E1E2E',
              borderRadius: 8,
              padding: '14px 18px',
            }}>
              <p style={{ ...mono, color: '#7D7D87', fontSize: 10, letterSpacing: '0.06em', margin: '0 0 6px' }}>{row.label.toUpperCase()}</p>
              <p style={{ color: '#FFFFFF', fontSize: 14, margin: 0 }}>{row.value}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  )
}

function ToneOfVoice() {
  const onBrand = [
    '"Trading on HyperEVM. Live now."',
    '"First bot live on MegaETH. Execute faster."',
    '"Your PnL. Every chain. One place."',
  ]
  const offBrand = [
    '"We\'re excited to announce an incredible new partnership with..."',
    '"Empowering traders to unlock the full potential of DeFi"',
    '"gm frens 🐸"',
  ]
  const rules = [
    { rule: 'Short sentences.', detail: 'Active voice. No passive constructions.' },
    { rule: 'Announce, don\'t hype.', detail: 'State the fact. Let it land.' },
    { rule: 'Numbers over adjectives.', detail: '"$2.2M" beats "massive gains" every time.' },
    { rule: 'Never explain on-chain.', detail: 'The audience already knows. Trust them.' },
    { rule: 'Emoji sparingly.', detail: 'Only when it adds signal — never noise.' },
  ]

  return (
    <PageShell path="/BRAND FOUNDATION / TONE OF VOICE" title="Direct. Precise. No filler.">
      <p style={{ color: '#ABABB1', fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
        BasedBot communicates like a trader who knows what they're talking about.
        The voice is <span style={{ color: '#FFFFFF', fontWeight: 500 }}>confident without being arrogant</span>,
        technical without being alienating, and native to the culture without performing it.
      </p>

      {/* Comparison table */}
      <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid #1E1E2E', marginBottom: 24 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <div style={{ background: '#0D1627', padding: '12px 20px', borderBottom: '1px solid #1E1E2E' }}>
            <span style={{ ...mono, color: '#22C55E', fontSize: 11, letterSpacing: '0.06em' }}>✅  ON-BRAND SOUNDS LIKE</span>
          </div>
          <div style={{ background: '#12121A', padding: '12px 20px', borderBottom: '1px solid #1E1E2E', borderLeft: '1px solid #1E1E2E' }}>
            <span style={{ ...mono, color: '#EF4444', fontSize: 11, letterSpacing: '0.06em' }}>⛔  OFF-BRAND SOUNDS LIKE</span>
          </div>
          {onBrand.map((text, i) => (
            <>
              <div key={`on-${i}`} style={{
                background: '#0A0F1A',
                padding: '14px 20px',
                borderBottom: i < onBrand.length - 1 ? '1px solid #1E1E2E' : undefined,
              }}>
                <p style={{ color: '#FFFFFF', fontSize: 14, lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>{text}</p>
              </div>
              <div key={`off-${i}`} style={{
                background: '#12121A',
                padding: '14px 20px',
                borderLeft: '1px solid #1E1E2E',
                borderBottom: i < offBrand.length - 1 ? '1px solid #1E1E2E' : undefined,
              }}>
                <p style={{ color: '#7D7D87', fontSize: 14, lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>{offBrand[i]}</p>
              </div>
            </>
          ))}
        </div>
      </div>

      {/* Rules */}
      <div style={{ background: '#12121A', border: '1px solid #1E1E2E', borderRadius: 10, overflow: 'hidden' }}>
        <div style={{ padding: '12px 20px', borderBottom: '1px solid #1E1E2E' }}>
          <span style={{ ...mono, color: '#7D7D87', fontSize: 11, letterSpacing: '0.06em' }}>/ THE RULES</span>
        </div>
        {rules.map((r, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 16,
            padding: '14px 20px',
            borderBottom: i < rules.length - 1 ? '1px solid #1E1E2E' : undefined,
          }}>
            <span style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 500, minWidth: 200, flexShrink: 0 }}>{r.rule}</span>
            <span style={{ color: '#ABABB1', fontSize: 14 }}>{r.detail}</span>
          </div>
        ))}
      </div>
    </PageShell>
  )
}

function ArtisticDirection() {
  const weAre = [
    ['Dark, precise, focused', 'Bright, scattered, decorative'],
    ['Terminal-grade density', 'Beginner-friendly simplicity'],
    ['Teal as signal, not decoration', 'Rainbow gradients for effect'],
    ['Confident stillness', 'Aggressive noise'],
    ['Native to on-chain culture', 'Translating crypto for outsiders'],
  ]

  return (
    <PageShell path="/BRAND FOUNDATION / ARTISTIC DIRECTION" title="Watching. Fast. Precise. Always on.">
      <p style={{ color: '#ABABB1', fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
        BasedBot is the trader who never blinks, always scanning, always ahead.
        Every visual decision should reinforce that feeling.{' '}
        <span style={{ color: '#FFFFFF', fontWeight: 500 }}>Not aggressive, not flashy. Quietly dominant.</span>
      </p>

      {/* Visual anchor */}
      <div style={{
        background: '#0D1627',
        border: '1px solid #163569',
        borderRadius: 10,
        padding: '24px 28px',
        marginBottom: 24,
      }}>
        <p style={{ ...mono, color: '#8EC5FF', fontSize: 11, letterSpacing: '0.06em', margin: '0 0 12px' }}>/ THE VISUAL ANCHOR</p>
        <p style={{ color: '#FFFFFF', fontSize: 15, fontWeight: 500, margin: '0 0 8px' }}>The eyes.</p>
        <p style={{ color: '#ABABB1', fontSize: 14, lineHeight: 1.7, margin: 0 }}>
          Abstract, precise, glowing against dark. This mark sets the tone for everything —{' '}
          <span style={{ color: '#FFFFFF', fontWeight: 500 }}>it's not a mascot, it's a presence.</span>{' '}
          Premium without being cold. Native to the culture without performing it.
        </p>
      </div>

      {/* Aesthetic poles */}
      <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid #1E1E2E', marginBottom: 24 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <div style={{ background: '#0D1627', padding: '12px 20px', borderBottom: '1px solid #1E1E2E' }}>
            <span style={{ ...mono, color: '#22C55E', fontSize: 11, letterSpacing: '0.06em' }}>✅  WHAT WE ARE</span>
          </div>
          <div style={{ background: '#12121A', padding: '12px 20px', borderBottom: '1px solid #1E1E2E', borderLeft: '1px solid #1E1E2E' }}>
            <span style={{ ...mono, color: '#EF4444', fontSize: 11, letterSpacing: '0.06em' }}>⛔  WHAT WE ARE NOT</span>
          </div>
          {weAre.map(([yes, no], i) => (
            <>
              <div key={`yes-${i}`} style={{
                background: '#0A0F1A',
                padding: '13px 20px',
                borderBottom: i < weAre.length - 1 ? '1px solid #1E1E2E' : undefined,
              }}>
                <p style={{ color: '#FFFFFF', fontSize: 14, margin: 0 }}>{yes}</p>
              </div>
              <div key={`no-${i}`} style={{
                background: '#12121A',
                padding: '13px 20px',
                borderLeft: '1px solid #1E1E2E',
                borderBottom: i < weAre.length - 1 ? '1px solid #1E1E2E' : undefined,
              }}>
                <p style={{ color: '#7D7D87', fontSize: 14, margin: 0 }}>{no}</p>
              </div>
            </>
          ))}
        </div>
      </div>

      {/* Reference feeling */}
      <div style={{
        background: 'linear-gradient(135deg, #0A091E 0%, #0D1627 60%, #163569 100%)',
        border: '1px solid #163569',
        borderRadius: 10,
        padding: '28px 32px',
      }}>
        <p style={{ ...mono, color: '#8EC5FF', fontSize: 11, letterSpacing: '0.06em', margin: '0 0 14px' }}>/ THE REFERENCE FEELING</p>
        <p style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 500, margin: '0 0 10px', lineHeight: 1.5 }}>
          Clinical precision with cultural fluency.
        </p>
        <p style={{ color: '#ABABB1', fontSize: 14, lineHeight: 1.7, margin: 0 }}>
          The interface of someone who has{' '}
          <span style={{ color: '#FFFFFF', fontWeight: 500 }}>watched a $2M position move in real time</span>{' '}
          and needed everything to keep up.
        </p>
      </div>
    </PageShell>
  )
}

export default function BrandFoundationSection({ item }: Props) {
  switch (item) {
    case 'who-we-design-for': return <WhoWeDesignFor />
    case 'tone-of-voice': return <ToneOfVoice />
    case 'artistic-direction': return <ArtisticDirection />
    default: return <BrandPersonality />
  }
}
