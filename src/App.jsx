import { lazy, Suspense, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// ── Above-the-fold: imports estáticos (sem lazy) ──────────────────────────────
// Estes componentes são críticos para o primeiro render / LCP.
import SEO            from './components/ui/SEO'
import Header         from './components/layout/Header'
import WhatsAppButton from './components/ui/WhatsAppButton'
import BackToTop      from './components/ui/BackToTop'
import Hero           from './components/sections/Hero'

// ── Below-the-fold: lazy-loaded (code splitting) ──────────────────────────────
// O Vite dividirá cada um num chunk separado, carregado apenas quando
// o utilizador fizer scroll suficiente para o browser os pedir.
// O fallback={null} garante que não há qualquer spinner / layout shift visível.
const Estatisticas = lazy(() => import('./components/sections/Estatisticas'))
const Servicos     = lazy(() => import('./components/sections/Servicos'))
const PorQueSeday  = lazy(() => import('./components/sections/PorQueSeday'))
const Frota        = lazy(() => import('./components/sections/Frota'))
const MVV          = lazy(() => import('./components/sections/MVV'))
const Clientes     = lazy(() => import('./components/sections/Clientes'))
const FAQ          = lazy(() => import('./components/sections/FAQ'))
const Contato      = lazy(() => import('./components/sections/Contato'))
const QuemSomos    = lazy(() => import('./components/sections/QuemSomos'))

export default function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 })
  }, [])

  return (
    <>
      <SEO />
      <BackToTop />
      <WhatsAppButton />
      <Header />

      <main className="overflow-x-hidden w-full">
        {/* Triggers para o IntersectionObserver do Header/BackToTop */}
        <div id="header-trigger"   aria-hidden="true" style={{ position:'absolute', top:80,  left:0, width:1, height:1, pointerEvents:'none' }} />
        <div id="backtotop-trigger" aria-hidden="true" style={{ position:'absolute', top:400, left:0, width:1, height:1, pointerEvents:'none' }} />

        {/* Hero: estático — primeiro elemento visível, crítico para LCP */}
        <Hero />

        {/* Secções lazy: carregadas progressivamente conforme o scroll */}
        <Suspense fallback={null}>
          <Estatisticas />
        </Suspense>
        <Suspense fallback={null}>
          <Servicos />
        </Suspense>
        <Suspense fallback={null}>
          <PorQueSeday />
        </Suspense>
        <Suspense fallback={null}>
          <Frota />
        </Suspense>
        <Suspense fallback={null}>
          <MVV />
        </Suspense>
        <Suspense fallback={null}>
          <Clientes />
        </Suspense>
        <Suspense fallback={null}>
          <FAQ />
        </Suspense>
        <Suspense fallback={null}>
          <Contato />
        </Suspense>
        <Suspense fallback={null}>
          <QuemSomos />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  )
}

// Footer lazy (abaixo de todo o conteúdo)
const Footer = lazy(() => import('./components/layout/Footer'))
