interface Props { item: string }

function Placeholder({ path, title, note }: { path: string; title: string; note: string }) {
  return (
    <div style={{ padding: '40px 48px', maxWidth: 860 }}>
      <p style={{ color: '#7D7D87', fontSize: 11, fontFamily: "'Geist Mono', monospace", letterSpacing: '0.08em', marginBottom: 16 }}>{path}</p>
      <h2 style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 500, margin: '0 0 28px', letterSpacing: '-0.01em' }}>{title}</h2>
      <div
        style={{
          borderRadius: 10,
          border: '1px dashed #1E1E2E',
          height: 260,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
        }}
      >
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
      return <Placeholder path="/BRAND EXPRESSIONS / IN ACTION" title="In action" note="Brand-in-use examples coming soon" />
  }
}
