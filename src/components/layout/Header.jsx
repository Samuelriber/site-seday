import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#home',          label: 'Início' },
  { href: '#servicos',      label: 'Serviços' },
  { href: '#equipamentos',  label: 'Nossa Frota' },
  { href: '#mvv',           label: 'MVV' },
  { href: '#credibilidade', label: 'Clientes' },
  { href: '#faq',           label: 'FAQ' },
  { href: '#quem-somos',    label: 'Quem Somos' },
  { href: 'https://avapextransportes.vagas.solides.com.br/', label: 'Trabalhe Conosco', external: true },
]

export default function Header() {
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [scrolled,  setScrolled]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav
        id="main-header"
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/98 backdrop-blur-xl border-b border-seday-gray/15 shadow-sm'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="flex justify-between items-center w-full px-6 md:px-8 py-4 max-w-full">
          <a href="#home" className="flex items-center gap-3" aria-label="Página Inicial Seday">
            <img
              src="img/seday-padrao02transparente.png"
              alt="Logotipo Seday Transportes e Equipamentos"
              width="220"
              height="48"
              decoding="async"
              className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
            />
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="font-headline font-bold uppercase tracking-tighter transition-colors duration-300 text-sm lg:text-base text-white hover:text-primary drop-shadow-md"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#orcamento"
            className="hidden md:flex bg-primary text-on-primary font-headline font-bold uppercase px-6 py-2 transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] active:translate-y-1 items-center justify-center"
          >
            Fale Conosco
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-lg transition-all hover:bg-primary/10 text-white"
            id="menuBtn"
            aria-label="Abrir menu principal"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="w-8 h-8" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-white text-seday-dark">
          <button
            className="absolute top-6 right-6 p-2 text-seday-gray hover:text-primary transition-colors"
            aria-label="Fechar menu"
            onClick={closeMenu}
          >
            <X className="w-10 h-10" aria-hidden="true" />
          </button>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="text-2xl font-headline font-bold uppercase tracking-tighter text-seday-dark hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#orcamento"
            className="bg-primary text-on-primary font-headline font-bold uppercase px-8 py-4 transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] active:translate-y-1 mt-4"
            onClick={closeMenu}
          >
            Fale Conosco
          </a>
        </div>
      )}
    </>
  )
}
