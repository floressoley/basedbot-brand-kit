interface Props { item: string }

const ASSETS = {
  fullDark:      { svg: '/images/Logo/Logo_Full_Dark%20Mode.svg', png: '/images/Logo/Logo_Full_DarkMode.png' },
  fullLight:     { svg: '/images/Logo/Logo_Full_LightMode.svg',   png: '/images/Logo/Logo_Full_LightMode.png' },
  markDark:      { svg: '/images/Logo/Logo_Mark_DarkMode.svg',    png: '/images/Logo/Logo_Mark_DarkMode.png' },
  markLight:     { svg: '/images/Logo/Logo_Mark_LightMode.svg',   png: '/images/Logo/Logo_Mark_LightMode.png' },
  wordmarkDark:  { svg: '/images/Logo/Logo_Wordmark_DarkMode.svg', png: '/images/Logo/Logo_Wordmark_DarkMode.png' },
  wordmarkLight: { svg: '/images/Logo/Logo_Wordmark_LightMode.svg', png: '/images/Logo/Logo_Wordmark_LightMode.png' },
}

const THEMES = {
  dark: {
    bg: 'rgba(255,255,255,0.08)',
    border: 'rgba(255,255,255,0.18)',
    color: 'rgba(255,255,255,0.7)',
    hoverBorder: '#4B4BFF',
    hoverColor: '#FFFFFF',
    tipBg: '#1E1E2E',
    tipBorder: '#2E2E3E',
    tipColor: '#FFFFFF',
  },
  light: {
    bg: 'rgba(0,0,0,0.06)',
    border: 'rgba(0,0,0,0.18)',
    color: 'rgba(0,0,0,0.5)',
    hoverBorder: '#4B4BFF',
    hoverColor: '#0A091E',
    tipBg: '#0A091E',
    tipBorder: '#2E2E3E',
    tipColor: '#FFFFFF',
  },
}

function DownloadBtn({ href, label, filename, theme }: { href: string; label: string; filename: string; theme: 'dark' | 'light' }) {
  const t = THEMES[theme]
  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={e => {
        const tip = (e.currentTarget as HTMLElement).querySelector('.tip') as HTMLElement
        if (tip) tip.style.opacity = '1'
      }}
      onMouseLeave={e => {
        const tip = (e.currentTarget as HTMLElement).querySelector('.tip') as HTMLElement
        if (tip) tip.style.opacity = '0'
      }}
    >
      <a
        href={href}
        download={filename}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '5px 12px',
          borderRadius: 999,
          border: `1px solid ${t.border}`,
          background: t.bg,
          backdropFilter: 'blur(8px)',
          color: t.color,
          fontSize: 11,
          fontFamily: "'Geist Mono', monospace",
          letterSpacing: '0.04em',
          textDecoration: 'none',
          cursor: 'pointer',
          transition: 'border-color 0.15s, color 0.15s',
        }}
        onMouseEnter={e => {
          const a = e.currentTarget as HTMLAnchorElement
          a.style.borderColor = t.hoverBorder
          a.style.color = t.hoverColor
        }}
        onMouseLeave={e => {
          const a = e.currentTarget as HTMLAnchorElement
          a.style.borderColor = t.border
          a.style.color = t.color
        }}
      >
        {label}
      </a>
      <span
        className="tip"
        style={{
          position: 'absolute',
          bottom: 'calc(100% + 6px)',
          left: '50%',
          transform: 'translateX(-50%)',
          background: t.tipBg,
          border: `1px solid ${t.tipBorder}`,
          color: t.tipColor,
          fontSize: 10,
          fontFamily: "'Geist Mono', monospace",
          letterSpacing: '0.04em',
          padding: '3px 8px',
          borderRadius: 4,
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          opacity: 0,
          transition: 'opacity 0.15s',
        }}
      >
        Download
      </span>
    </div>
  )
}

function DownloadButtons({ svg, png, name, theme }: { svg: string; png: string; name: string; theme: 'dark' | 'light' }) {
  return (
    <div style={{ display: 'flex', gap: 6 }}>
      <DownloadBtn href={svg} label="SVG" filename={`${name}.svg`} theme={theme} />
      <DownloadBtn href={png} label="PNG" filename={`${name}.png`} theme={theme} />
    </div>
  )
}

function PreviewCard({
  bg,
  src,
  imgSize,
  label,
  downloadSvg,
  downloadPng,
  downloadName,
  theme,
}: {
  bg: string
  src: string
  imgSize: number
  label: string
  downloadSvg: string
  downloadPng: string
  downloadName: string
  theme: 'dark' | 'light'
}) {
  return (
    <div>
      <div
        style={{
          position: 'relative',
          borderRadius: 10,
          background: bg,
          border: '1px solid #1E1E2E',
          height: 220,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
          marginBottom: 8,
          overflow: 'visible',
        }}
      >
        <img src={src} alt={label} style={{ maxWidth: imgSize, width: '100%', height: 'auto' }} />
        <div style={{ position: 'absolute', bottom: 12, right: 12 }}>
          <DownloadButtons svg={downloadSvg} png={downloadPng} name={downloadName} theme={theme} />
        </div>
      </div>
      <p style={{ color: '#7D7D87', fontSize: 11, fontFamily: "'Geist Mono', monospace", letterSpacing: '0.06em', margin: 0 }}>
        {label}
      </p>
    </div>
  )
}

function PreviewPair({
  darkSrc,
  lightSrc,
  darkSize = 260,
  lightSize = 220,
  darkSvg,
  darkPng,
  darkName,
  lightSvg,
  lightPng,
  lightName,
}: {
  darkSrc: string
  lightSrc: string
  darkSize?: number
  lightSize?: number
  darkSvg: string
  darkPng: string
  darkName: string
  lightSvg: string
  lightPng: string
  lightName: string
}) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 24 }}>
      <PreviewCard
        bg="#0A091E"
        src={darkSrc}
        imgSize={darkSize}
        label="DARK MODE"
        downloadSvg={darkSvg}
        downloadPng={darkPng}
        downloadName={darkName}
        theme="dark"
      />
      <PreviewCard
        bg="#FFFFFF"
        src={lightSrc}
        imgSize={lightSize}
        label="LIGHT MODE"
        downloadSvg={lightSvg}
        downloadPng={lightPng}
        downloadName={lightName}
        theme="light"
      />
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

      <PreviewPair
        darkSrc={ASSETS.fullDark.svg}
        lightSrc={ASSETS.fullLight.svg}
        darkSvg={ASSETS.fullDark.svg}
        darkPng={ASSETS.fullDark.png}
        darkName="BasedBot_FullLogo_Dark"
        lightSvg={ASSETS.fullLight.svg}
        lightPng={ASSETS.fullLight.png}
        lightName="BasedBot_FullLogo_Light"
      />

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

      <PreviewPair
        darkSrc={ASSETS.markDark.svg}
        lightSrc={ASSETS.markLight.svg}
        darkSize={100}
        lightSize={100}
        darkSvg={ASSETS.markDark.svg}
        darkPng={ASSETS.markDark.png}
        darkName="BasedBot_Logomark_Dark"
        lightSvg={ASSETS.markLight.svg}
        lightPng={ASSETS.markLight.png}
        lightName="BasedBot_Logomark_Light"
      />

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

      <PreviewPair
        darkSrc={ASSETS.wordmarkDark.svg}
        lightSrc={ASSETS.wordmarkLight.svg}
        darkSvg={ASSETS.wordmarkDark.svg}
        darkPng={ASSETS.wordmarkDark.png}
        darkName="BasedBot_Wordmark_Dark"
        lightSvg={ASSETS.wordmarkLight.svg}
        lightPng={ASSETS.wordmarkLight.png}
        lightName="BasedBot_Wordmark_Light"
      />

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
