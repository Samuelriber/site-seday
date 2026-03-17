export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Mobile background */}
      <img
        src="/img/fundo site mobile.jpg"
        alt="Fundo Logística Seday"
        className="absolute inset-0 w-full h-full object-cover z-0 md:hidden"
        fetchPriority="high"
      />
      {/* Desktop video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/img/caminhão.webp"
        className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
        aria-hidden="true"
      >
        <source src="/img/videoSITE.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[#0f172a]/80 z-10" />

      <div
        className="container mx-auto px-6 relative z-20 text-center md:text-left text-white mt-16"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="inline-flex items-center gap-2 bg-transparent border border-[#4BA3E3] text-[#4BA3E3] px-5 py-2 rounded-full text-xs font-bold uppercase mb-6 tracking-wider">
          Soluções Logísticas Integradas
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 drop-shadow-2xl">
          Seday Transportes <br className="hidden md:block" />
          e Equipamentos <br className="hidden md:block" />
          <span className="text-[#4BA3E3]">desde 1999</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed font-medium">
          Locação e prestação de serviços com máquinas e equipamentos, movimentação de cargas
          (linha amarela), intralogística e transporte pesado.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-5 mt-4 justify-center md:justify-start">
          <a
            href="#orcamento"
            className="bg-[#2B5C85] text-white px-8 py-4 rounded-full font-extrabold text-center shadow-xl hover:bg-[#1A3B56] hover:scale-105 transition-all flex items-center justify-center gap-2 text-lg w-full sm:w-auto"
          >
            Solicitar Orçamento
          </a>
          <a
            href="#servicos"
            className="bg-transparent border-2 border-slate-500 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-center hover:bg-white/10 hover:border-white transition-all text-lg flex items-center justify-center w-full sm:w-auto"
          >
            Nossos Serviços
          </a>
        </div>
      </div>
    </section>
  )
}
