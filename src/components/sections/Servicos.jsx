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
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-[#0f172a] text-4xl font-extrabold mb-4">Nossos Serviços</h2>
          <div className="w-16 h-1 bg-[#2B5C85] mx-auto rounded" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map(({ Icon, title, desc, delay }) => (
            <div
              key={title}
              className="bg-white p-8 rounded-[1.5rem] shadow-sm border border-slate-200 hover:shadow-xl transition-all group"
              data-aos="fade-up"
              data-aos-delay={delay}
            >
              <div className="bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-[#eaf2f8]">
                <Icon className="w-6 h-6 text-[#0f172a]" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#0f172a]">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
