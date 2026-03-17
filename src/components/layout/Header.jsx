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
      <header
        id="main-header"
        className={`fixed w-full z-40 border-b border-slate-700 transition-all duration-300 py-4 backdrop-blur-sm ${
          scrolled
            ? 'bg-white/98 shadow-md border-slate-200'
            : 'bg-[#0f172a]/95'
        }`}
      >
        <nav className="container mx-auto px-6 md:px-10 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center" aria-label="Página Inicial Seday">
            <img
              id="logo-white"
              src="/img/SEDAY.PADRÃO02transparente.png"
              alt="Logotipo Seday Transportes"
              className={`h-10 md:h-12 w-auto object-contain transition-all duration-300 ${scrolled ? 'hidden' : 'block'} brightness-0 invert`}
              decoding="async"
            />
            <img
              id="logo-dark"
              src="/img/SEDAY.PADRÃO02transparente.png"
              alt="Logotipo Seday Transportes"
              className={`h-10 md:h-12 w-auto object-contain transition-all duration-300 ${scrolled ? 'block' : 'hidden'}`}
              decoding="async"
            />
          </a>

          {/* Desktop menu */}
          <div
            id="desktop-menu"
            className={`hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold transition-colors duration-300 ${
              scrolled ? 'text-slate-700' : 'text-slate-300'
            }`}
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="hover:text-[#4BA3E3] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#orcamento"
              className="bg-[#2B5C85] text-white px-6 py-2.5 rounded-full shadow-lg hover:bg-[#1A3B56] hover:scale-105 transition-all font-extrabold"
            >
              Contato
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-white shadow-lg backdrop-blur-sm transition-all active:scale-90"
            id="menuBtn"
            aria-label="Abrir menu principal"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="w-6 h-6" aria-hidden="true" />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 text-white bg-[#0f172a]">
          <button
            className="absolute top-6 right-6 p-2 text-white hover:text-[#4BA3E3] transition-colors"
            aria-label="Fechar menu"
            onClick={closeMenu}
          >
            <X className="w-10 h-10" aria-hidden="true" />
          </button>

          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="text-2xl font-bold hover:text-[#4BA3E3]"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#orcamento"
            className="bg-[#2B5C85] text-white px-10 py-4 rounded-full font-extrabold shadow-2xl active:scale-95"
            onClick={closeMenu}
          >
            Contato
          </a>
        </div>
      )}
    </>
  )
}
