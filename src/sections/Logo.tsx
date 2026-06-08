interface Props { item: string }

const ASSETS = {
  fullDark:      '/images/Logo/Logo_Full_Dark%20Mode.svg',
  fullLight:     '/images/Logo/Logo_Full_LightMode.svg',
  markDark:      '/images/Logo/Logo_Mark_DarkMode.svg',
  markLight:     '/images/Logo/Logo_Mark_LightMode.svg',
  wordmarkDark:  '/images/Logo/Logo_Wordmark_DarkMode.svg',
  wordmarkLight: '/images/Logo/Logo_Wordmark_LightMode.svg',
}

function PreviewPair({
  darkSrc,
  lightSrc,
  darkSize = 260,
  lightSize = 220,
}: {
  darkSrc: string
  lightSrc: string
  darkSize?: number
  lightSize?: number
}) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 24 }}>
      {/* Dark mode */}
      <div>
        <div
          style={{
            borderRadius: 10,
            background: '#0A091E',
            border: '1px solid #1E1E2E',
            height: 220,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
            marginBottom: 8,
          }}
        >
          <img src={darkSrc} alt="Dark mode" style={{ maxWidth: darkSize, width: '100%', height: 'auto' }} />
        </div>
        <p style={{ color: '#7D7D87', fontSize: 11, fontFamily: "'Geist Mono', monospace", letterSpacing: '0.06em', margin: 0 }}>
          DARK MODE
        </p>
      </div>
      {/* Light mode */}
      <div>
        <div
          style={{
            borderRadius: 10,
            background: '#FFFFFF',
            border: '1px solid #1E1E2E',
            height: 220,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
            marginBottom: 8,
          }}
        >
          <img src={lightSrc} alt="Light mode" style={{ maxWidth: lightSize, width: '100%', height: 'auto' }} />
        </div>
        <p style={{ color: '#7D7D87', fontSize: 11, fontFamily: "'Geist Mono', monospace", letterSpacing: '0.06em', margin: 0 }}>
          LIGHT MODE
        </p>
      </div>
    </div>
  )
}

function FullLogo() {
  return (
    <div style={{ padding: '40px 48px', maxWidth: 860 }}>
      <p style={{ color: '#7D7D87', fontSize: 11, fontFamily: "'Geist Mono', monospace", letterSpacing: '0.08em', marginBottom: 16 }}>
        /FULL LOGO
      </p>
      <h2 style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 500, margin: '0 0 24px', lineHeight: 1.3, letterSpacing: '-0.01em' }}>
        Logomark + wordmark together.
      </h2>

      <PreviewPair darkSrc={ASSETS.fullDark} lightSrc={ASSETS.fullLight} />

      <p style={{ color: '#ABABB1', fontSize: 15, lineHeight: 1.75, marginBottom: 12 }}>
        The primary asset. Used when BasedBot is establishing presence — website header, presentations, onboarding, marketing. When in doubt, this is the one.
      </p>
      <p style={{ color: '#ABABB1', fontSize: 15, lineHeight: 1.75 }}>
        The mark leads. The name confirms. Together they communicate the full weight of the brand: capable, focused, and built for traders who don't need things explained.
      </p>
    </div>
  )
}

function Logomark() {
  return (
    <div style={{ padding: '40px 48px', maxWidth: 860 }}>
      <p style={{ color: '#7D7D87', fontSize: 11, fontFamily: "'Geist Mono', monospace", letterSpacing: '0.08em', marginBottom: 16 }}>
        /LOGOMARK
      </p>
      <h2 style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 500, margin: '0 0 24px', letterSpacing: '-0.01em' }}>
        The mark, alone.
      </h2>

      <PreviewPair darkSrc={ASSETS.markDark} lightSrc={ASSETS.markLight} darkSize={100} lightSize={100} />

      <p style={{ color: '#ABABB1', fontSize: 15, lineHeight: 1.75, marginBottom: 12 }}>
        Used when space is limited or the brand is already established in context — app icons, favicons, small UI elements, avatar crops.
      </p>
      <p style={{ color: '#ABABB1', fontSize: 15, lineHeight: 1.75 }}>
        It stands on its own. Don't shrink it below 24px or use it where the wordmark would create redundancy.
      </p>
    </div>
  )
}

function Wordmark() {
  return (
    <div style={{ padding: '40px 48px', maxWidth: 860 }}>
      <p style={{ color: '#7D7D87', fontSize: 11, fontFamily: "'Geist Mono', monospace", letterSpacing: '0.08em', marginBottom: 16 }}>
        /WORDMARK
      </p>
      <h2 style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 500, margin: '0 0 24px', letterSpacing: '-0.01em' }}>
        The name, set in type.
      </h2>

      <PreviewPair darkSrc={ASSETS.wordmarkDark} lightSrc={ASSETS.wordmarkLight} />

      <p style={{ color: '#ABABB1', fontSize: 15, lineHeight: 1.75, marginBottom: 12 }}>
        Used when the logomark can't be reproduced at proper quality, or when a purely typographic treatment is required — certain print contexts, text-based social content.
      </p>
      <p style={{ color: '#ABABB1', fontSize: 15, lineHeight: 1.75 }}>
        Always use the approved font and spacing. Don't alter the letterforms, scale, or tracking.
      </p>
    </div>
  )
}

export default function LogoSection({ item }: Props) {
  switch (item) {
    case 'logomark': return <Logomark />
    case 'wordmark': return <Wordmark />
    default: return <FullLogo />
  }
}
