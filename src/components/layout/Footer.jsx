import { useState, useEffect } from 'react'

export default function Footer() {
  const [cookieAccepted, setCookieAccepted] = useState(false)
  const [bannerVisible,  setBannerVisible]  = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('seday_cookies_accepted')
    if (!accepted) {
      // pequeno delay para a animação de entrada
      setTimeout(() => setBannerVisible(true), 600)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('seday_cookies_accepted', '1')
    setCookieAccepted(true)
    setBannerVisible(false)
  }

  return (
    <>
      <footer className="bg-[#0f172a] pt-12 pb-8 text-slate-400 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <img
              src="img/seday-padrao02transparente.png"
              alt="Seday Logo"
              loading="lazy"
              decoding="async"
              className="h-10 opacity-50 brightness-0 invert hover:opacity-100 transition-opacity"
            />
          </div>
          <p className="mb-2 text-sm">© 2026 Seday Transportes e Equipamentos. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Cookie banner */}
      {!cookieAccepted && (
        <div
          className={`fixed bottom-0 left-0 w-full bg-[#0f172a] text-white p-6 z-[60] flex flex-col md:flex-row justify-between items-center gap-4 transition-transform duration-500 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] border-t border-slate-700 border-b-4 border-b-[#2B5C85] ${
            bannerVisible ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="text-sm text-slate-300 md:max-w-4xl text-center md:text-left">
            Utilizamos cookies para oferecer a melhor experiência, analisar o tráfego e personalizar conteúdo.
            Ao continuar navegando, você concorda com nossas políticas de privacidade e segurança de dados operacionais.
          </div>
          <button
            onClick={accept}
            className="bg-[#2B5C85] hover:bg-[#1A3B56] text-white font-bold py-3 px-8 rounded-lg whitespace-nowrap transition-colors shadow-lg active:scale-95"
          >
            Aceitar e Fechar
          </button>
        </div>
      )}
    </>
  )
}
