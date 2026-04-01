import { Network, Settings, ArrowUpFromLine, Fuel, Truck } from 'lucide-react'

const services = [
  {
    Icon: Network,
    title: 'Intralogística Industrial',
    desc: 'Movimentação interna de materiais com empilhadeiras à combustão, elétricas e transpaleteiras para siderúrgicas, mineradoras e indústrias.',
    delay: 0,
  },
  {
    Icon: Settings,
    title: 'Locação de Máquinas Linha Amarela',
    desc: 'Frota completa de escavadeiras hidráulicas, retroescavadeiras, tratores de esteira, carregadeiras e manipuladores telescópicos para mineração e construção civil.',
    delay: 100,
  },
  {
    Icon: ArrowUpFromLine,
    title: 'Içamento de Cargas Pesadas',
    desc: 'Movimentação e içamento de carga com caminhões Guindauto (Munck) e manipuladores telescópicos para obras industriais e siderúrgicas.',
    delay: 200,
  },
  {
    Icon: Fuel,
    title: 'Apoio Logístico em Campo',
    desc: 'Caminhão Comboio para abastecimento rápido e suporte tático de frotas em campo, minas e canteiros de obras em Minas Gerais.',
    delay: 300,
  },
  {
    Icon: Truck,
    title: 'Transporte de Cargas Especiais',
    desc: 'Transporte de cargas indivisíveis e superdimensionadas com carretas prancha, carreta silo e conjunto basculante em todo o Sudeste.',
    delay: 400,
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

        {/*
          Flex wrap + justify-center:
          ─ Mobile  → 100% (1 coluna)
          ─ Tablet  → ~50% (2 por linha)
          ─ Desktop → ~33% (3 por linha)
          Com 5 cards, o flex quebra em 3 + 2.
          O justify-center centra automaticamente os 2 da segunda linha.
        */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.map(({ Icon, title, desc, delay }) => (
            <div
              key={title}
              className="service-card flex flex-col bg-surface-container p-10 relative group hover:bg-surface-container-high transition-colors duration-300"
              data-aos="fade-up"
              data-aos-delay={delay}
            >
              {/* Ícone — moldura quadrada 64×64 px */}
              <div className="mb-8 bg-surface-container-highest shrink-0 w-16 h-16 flex items-center justify-center border-b-4 border-primary transition-colors group-hover:bg-primary/10">
                <Icon size={32} className="text-white" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-headline font-bold uppercase mb-4 text-on-surface">{title}</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">{desc}</p>
              <a
                className="mt-auto text-primary font-headline font-bold uppercase flex items-center gap-2 group-hover:translate-x-2 transition-transform"
                href="#orcamento"
                aria-label={`Solicitar orçamento para ${title}`}
              >
                SAIBA MAIS
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
