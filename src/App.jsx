import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header      from './components/layout/Header'
import Footer      from './components/layout/Footer'
import WhatsAppButton from './components/ui/WhatsAppButton'
import BackToTop   from './components/ui/BackToTop'

import Hero        from './components/sections/Hero'
import Estatisticas from './components/sections/Estatisticas'
import Servicos    from './components/sections/Servicos'
import PorQueSeday from './components/sections/PorQueSeday'
import Frota       from './components/sections/Frota'
import MVV         from './components/sections/MVV'
import Clientes    from './components/sections/Clientes'
import FAQ         from './components/sections/FAQ'
import Contato     from './components/sections/Contato'
import QuemSomos   from './components/sections/QuemSomos'

export default function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 })
  }, [])

  return (
    <>
      <BackToTop />
      <WhatsAppButton />
      <Header />

      <main className="overflow-x-hidden w-full">
        {/* Triggers para o IntersectionObserver do Header/BackToTop */}
        <div id="header-trigger"   aria-hidden="true" style={{ position:'absolute', top:80,  left:0, width:1, height:1, pointerEvents:'none' }} />
        <div id="backtotop-trigger" aria-hidden="true" style={{ position:'absolute', top:400, left:0, width:1, height:1, pointerEvents:'none' }} />

        <Hero />
        <Estatisticas />
        <Servicos />
        <PorQueSeday />
        <Frota />
        <MVV />
        <Clientes />
        <FAQ />
        <Contato />
        <QuemSomos />
      </main>

      <Footer />
    </>
  )
}
