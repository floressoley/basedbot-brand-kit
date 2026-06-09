import { useState } from 'react'
import Sidebar from './components/Sidebar'
import LogoSection from './sections/Logo'
import TypographySection from './sections/Typography'
import ColorsSection from './sections/Colors'
import BrandFoundationSection from './sections/BrandFoundation'
import BrandExpressionsSection from './sections/BrandExpressions'
import SocialMediaSection from './sections/SocialMedia'

function renderContent(active: string) {
  const slash = active.indexOf('/')
  const section = active.slice(0, slash)
  const item = active.slice(slash + 1)
  switch (section) {
    case 'brand-foundation': return <BrandFoundationSection item={item} />
    case 'logo': return <LogoSection item={item} />
    case 'typography': return <TypographySection item={item} />
    case 'color': return <ColorsSection item={item} />
    case 'brand-expressions': return <BrandExpressionsSection item={item} />
    case 'social-media': return <SocialMediaSection item={item} />
    default: return null
  }
}

export default function App() {
  const [active, setActive] = useState('logo/full-logo')

  return (
    <div className="flex h-full overflow-hidden">
      <Sidebar active={active} onSelect={setActive} />
      <main
        className="flex-1 overflow-y-auto"
        style={{ background: '#0A0A0F' }}
      >
        <div key={active} className="page-content" style={{ display: 'flex', justifyContent: 'center' }}>
          {renderContent(active)}
        </div>
      </main>
    </div>
  )
}
