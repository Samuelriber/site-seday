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
      <footer className="bg-background w-full border-t border-outline-variant/10">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-12 w-full gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-xl font-black text-primary font-headline tracking-widest">SEDAY</div>
            <p className="font-body text-sm text-on-surface-variant max-w-sm text-center md:text-left">
                Potencializando a infraestrutura nacional com tecnologia de ponta e compromisso inabalável com a segurança.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <a className="text-on-tertiary-container hover:text-secondary transition-colors font-body text-sm font-medium" href="#">Privacidade</a>
            <a className="text-on-tertiary-container hover:text-secondary transition-colors font-body text-sm font-medium" href="#">Termos de Uso</a>
            <a className="text-on-tertiary-container hover:text-secondary transition-colors font-body text-sm font-medium" href="#">Trabalhe Conosco</a>
          </div>

          <div className="text-on-tertiary-container font-body text-sm font-medium text-center md:text-right">
              © 2024 SEDAY Transportes e Mineração. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Cookie banner */}
      {!cookieAccepted && (
        <div
          className={`fixed bottom-0 left-0 w-full bg-surface-container-high text-on-surface p-6 z-[60] flex flex-col md:flex-row justify-between items-center gap-6 transition-transform duration-500 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border-t border-outline-variant/20 border-b-4 border-b-primary ${
            bannerVisible ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="text-sm text-on-surface-variant md:max-w-4xl text-center md:text-left leading-relaxed">
            Utilizamos cookies para oferecer a melhor experiência, analisar o tráfego e personalizar conteúdo.
            Ao continuar navegando, você concorda com nossas políticas de privacidade e segurança de dados operacionais.
          </div>
          <button
            onClick={accept}
            className="bg-primary hover:bg-surface-tint text-on-primary font-headline font-bold uppercase py-3 px-8 transition-all active:scale-95 shadow-lg"
          >
            Aceitar e Fechar
          </button>
        </div>
      )}
    </>
  )
}
