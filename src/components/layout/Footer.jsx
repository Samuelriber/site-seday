import { useState, useEffect } from 'react'
import { Instagram, Mail, Phone } from 'lucide-react'

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
        <div className="container mx-auto px-6 md:px-12 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
            
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="text-2xl font-black text-primary font-headline tracking-widest">SEDAY</div>
              <p className="font-body text-sm text-on-surface-variant max-w-sm leading-relaxed">
                  Potencializando a infraestrutura nacional com tecnologia de ponta e compromisso inabalável com a segurança.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-4">
              <h4 className="font-headline font-bold text-on-surface uppercase tracking-wider text-sm mb-2">Links Rápidos</h4>
              <a className="text-on-tertiary-container hover:text-secondary transition-colors font-body text-sm font-medium" href="#">Privacidade</a>
              <a className="text-on-tertiary-container hover:text-secondary transition-colors font-body text-sm font-medium" href="#">Termos de Uso</a>
              <a className="text-on-tertiary-container hover:text-secondary transition-colors font-body text-sm font-medium" href="#">Trabalhe Conosco</a>
            </div>

            <div className="flex flex-col items-center md:items-start gap-5">
              <a href="#orcamento" className="font-headline font-bold text-on-surface hover:text-primary transition-colors underline-offset-4 hover:underline uppercase tracking-wider text-sm mb-1 cursor-pointer">Contato</a>
              <div className="flex items-center gap-3 text-on-tertiary-container">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <div className="flex flex-col text-left gap-1 font-body text-sm font-medium">
                  <a href="https://wa.me/553195324129" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors underline-offset-4 hover:underline cursor-pointer">+55 31 9532-4129</a>
                  <a href="tel:+553184657066" className="hover:text-secondary transition-colors underline-offset-4 hover:underline cursor-pointer">+55 31 8465-7066</a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-on-tertiary-container">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <div className="flex flex-col text-left gap-1 font-body text-sm font-medium">
                  <a href="mailto:comercial@seday.com.br" className="hover:text-secondary transition-colors break-all underline-offset-4 hover:underline cursor-pointer">comercial@seday.com.br</a>
                  <a href="mailto:comercial3@seday.com.br" className="hover:text-secondary transition-colors break-all underline-offset-4 hover:underline cursor-pointer">comercial3@seday.com.br</a>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start gap-4">
              <h4 className="font-headline font-bold text-on-surface uppercase tracking-wider text-sm mb-1">Siga-nos</h4>
              <a 
                href="https://www.instagram.com/sedayequipamentos?igsh=b2N6Y2pobng5ZGl3" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-on-tertiary-container hover:text-primary transition-colors font-body text-sm font-medium bg-surface-container py-2 px-4 rounded-full border border-outline-variant/10 hover:border-primary/30"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
            </div>

          </div>
          
          <div className="w-full h-px bg-outline-variant/10 my-10"></div>
          
          <div className="text-on-tertiary-container font-body text-sm font-medium text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
              <span>© 2026 SEDAY Transportes. Todos os direitos reservados.</span>
              <span className="text-xs text-on-surface-variant flex items-center gap-1">Desenvolvido com excelência operacional.</span>
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
