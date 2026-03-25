export default function Hero() {
  return (
    <header id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden topography-bg min-h-screen flex items-center">
      {/* Mobile background */}
      <img
        src="img/fundo-site-mobile.jpg"
        alt="Frota de caminhões Seday em operação de transporte pesado em Minas Gerais"
        width="390"
        height="844"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover z-0 md:hidden"
      />
      {/* Desktop video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="img/caminhao.webp"
        className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
        aria-hidden="true"
      >
        <source src="img/videoSITE.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-seday-dark/60 via-seday-dark/40 to-seday-dark/90 z-0" aria-hidden="true"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full pt-16 md:pt-0">
        <div className="max-w-3xl" data-aos="fade-up" data-aos-duration="1000">
          <span className="inline-block bg-primary/90 text-white font-headline font-bold uppercase tracking-widest px-4 py-1 mb-6 text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-1 transition-transform cursor-default">
              Liderança em Mineração
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-black text-white uppercase leading-none tracking-tighter mb-8 drop-shadow-lg">
              Força e Precisão <br/> para a sua <span className="text-primary" style={{textShadow: '0 0 30px rgba(56,107,155,0.5)'}}>Operação.</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 max-w-2xl mb-12 leading-relaxed drop-shadow-md">
              Logística pesada e locação de linha amarela para mineração e siderurgia. Infraestrutura robusta para os desafios mais complexos do setor industrial.
          </p>
          <div className="flex flex-wrap gap-5">
            <a href="#orcamento" className="bg-primary text-white font-headline font-bold uppercase px-8 py-4 text-base md:text-lg hover:bg-seday-blue/90 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] transition-all flex items-center justify-center">
                Solicitar Orçamento
            </a>
            <a href="#equipamentos" className="border-2 border-white/40 text-white font-headline font-bold uppercase px-8 py-4 text-base md:text-lg hover:bg-white/10 transition-all flex items-center justify-center backdrop-blur-sm">
                Conhecer Frota
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
