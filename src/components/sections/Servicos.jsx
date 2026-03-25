import { Package, Network, Settings, ArrowUpFromLine, Fuel, Truck } from 'lucide-react'

const services = [
  {
    Icon: Package,
    title: 'Transporte Rodoviário',
    desc: 'Transporte rodoviário de carga fechada em todo território nacional com foco na região sudeste.',
    delay: 0,
  },
  {
    Icon: Network,
    title: 'Intralogística',
    desc: 'Transporte e movimentação interna com equipamentos móveis principalmente empilhadeiras.',
    delay: 100,
  },
  {
    Icon: Settings,
    title: 'Locação de Equipamentos',
    desc: 'Frota completa de veículos pesados e máquinas da linha amarela.',
    delay: 200,
  },
  {
    Icon: ArrowUpFromLine,
    title: 'Içamento de Cargas',
    desc: 'Serviços de movimentação e içamento de carga com caminhões Guindauto e manipuladores.',
    delay: 300,
  },
  {
    Icon: Fuel,
    title: 'Apoio Logístico',
    desc: 'Caminhão Comboio para abastecimento rápido e suporte tático de frotas em campo.',
    delay: 400,
  },
  {
    Icon: Truck,
    title: 'Cargas Especiais',
    desc: 'Transporte de cargas especiais e dimensionadas.',
    delay: 500,
  },
]

export default function Servicos() {
  return (
    <section id="servicos" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-headline font-black uppercase mb-4">
            Serviços <span className="text-primary">Especializados</span>
          </h2>
          <div className="h-2 w-32 bg-primary"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ Icon, title, desc, delay }) => (
            <div
              key={title}
              className="flex flex-col h-full bg-surface-container p-10 relative group hover:bg-surface-container-high transition-colors duration-300"
              data-aos="fade-up"
              data-aos-delay={delay}
            >
              {/* Square icon frame: w-16 h-16 = 64×64px, mathematically centered */}
              <div className="mb-8 bg-surface-container-highest shrink-0 w-16 h-16 flex items-center justify-center border-b-4 border-primary transition-colors group-hover:bg-primary/10">
                <Icon size={32} className="text-white" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-headline font-bold uppercase mb-4 text-on-surface">{title}</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">{desc}</p>
              <a className="mt-auto text-primary font-headline font-bold uppercase flex items-center gap-2 group-hover:translate-x-2 transition-transform" href="#orcamento">
                SAIBA MAIS
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
