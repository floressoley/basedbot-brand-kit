interface Props { item: string }

interface FontEntry {
  name: string
  role: string
  family: string
  specimenWeight: number
  opticalSizing?: boolean
  specimen: string
  description: string
  usedFor: string
}

const FONTS: FontEntry[] = [
  {
    name: 'Geist',
    role: 'PRIMARY · UI',
    family: "'Geist', system-ui, sans-serif",
    specimenWeight: 400,
    specimen: 'AaBbCc\n1234567',
    description:
      'The backbone of the interface. Geist carries everything the trader needs in the moment of action: headlines, labels, navigation, buttons, body copy — all supremely precise. Designed for screens, built for speed.',
    usedFor: 'Headlines, body text, labels, navigation, buttons, all UI copy.',
  },
  {
    name: 'Geist Mono',
    role: 'SECONDARY · UI',
    family: "'Geist Mono', ui-monospace, monospace",
    specimenWeight: 400,
    specimen: 'AABBCC\n1234567',
    description:
      'Numbers have their own language. Geist Mono keeps prices, percentages, and addresses visually distinct from copy — monospaced for alignment, readable at a glance, precise by nature. When a trader is scanning a table of data, this font doesn\'t slow them down.',
    usedFor: 'Prices, percentages, wallet addresses, token amounts, any numerical data.',
  },
  {
    name: 'Zalando Sans Expanded (Bold)',
    role: 'TERTIARY · MARKETING',
    family: '"Zalando Sans Expanded", sans-serif',
    specimenWeight: 700,
    opticalSizing: true,
    specimen: 'AaBbCc\n1234567',
    description:
      'For moments when BasedBot steps outside the terminal and into the world. Zalando Sans Expanded Bold brings presence — wide, confident, impossible to miss. Not an everyday font — it shows when BasedBot is something to stop and pay attention to.',
    usedFor: 'Campaign headlines, hero text, social media graphics, launch announcements.',
  },
]

function FontCard({ font }: { font: FontEntry }) {
  const lines = font.specimen.split('\n')

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: 32,
        padding: '32px 0',
        borderBottom: '1px solid #1E1E2E',
      }}
    >
      {/* Left: info */}
      <div>
        <div style={{ marginBottom: 12 }}>
          <h3 style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 400, fontFamily: font.family, fontOpticalSizing: font.opticalSizing ? 'auto' : undefined, margin: '0 0 6px', letterSpacing: '-0.01em' }}>
            {font.name}
          </h3>
          <span
            style={{
              color: '#7D7D87',
              fontSize: 10,
              fontFamily: "'Geist Mono', monospace",
              letterSpacing: '0.1em',
            }}
          >
            {font.role}
          </span>
        </div>

        <p style={{ color: '#ABABB1', fontSize: 15, lineHeight: 1.75, marginBottom: 12 }}>
          {font.description}
        </p>

        <p style={{ color: '#7D7D87', fontSize: 13, margin: 0 }}>
          <span style={{ color: '#ABABB1' }}>Used for:</span>{' '}
          {font.usedFor}
        </p>
      </div>

      {/* Right: specimen */}
      <div
        style={{
          width: 200,
          background: '#12121A',
          border: '1px solid #1E1E2E',
          borderRadius: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px 24px',
          flexShrink: 0,
        }}
      >
        <div style={{ textAlign: 'center' }}>
          {lines.map((line, i) => (
            <div
              key={i}
              style={{
                color: '#FFFFFF',
                fontSize: i === 0 ? 28 : 26,
                fontFamily: font.family,
                fontWeight: font.specimenWeight,
                fontOpticalSizing: font.opticalSizing ? 'auto' : undefined,
                lineHeight: 1.2,
                letterSpacing: i === 0 ? '-0.01em' : '0.02em',
              }}
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function FamilyType() {
  return (
    <div style={{ padding: '40px 48px', maxWidth: 860 }}>
      <p style={{ color: '#7D7D87', fontSize: 11, fontFamily: "'Geist Mono', monospace", letterSpacing: '0.08em', marginBottom: 16 }}>
        /TYPOGRAPHY
      </p>
      <h2 style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 500, margin: '0 0 8px', letterSpacing: '-0.01em' }}>
        Family Type
      </h2>
      <p style={{ color: '#ABABB1', fontSize: 15, lineHeight: 1.7, marginBottom: 40 }}>
        Three families, three jobs. Geist for the interface, Geist Mono for data, Zalando Sans Expanded for when the brand needs to be seen from a distance.
      </p>

      <div>
        {FONTS.map(font => <FontCard key={font.name} font={font} />)}
      </div>
    </div>
  )
}

export default function TypographySection({ item }: Props) {
  switch (item) {
    default: return <FamilyType />
  }
}
