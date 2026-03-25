import { Target, Eye, ShieldCheck } from 'lucide-react'

const valores = [
  'Segurança intransigente',
  'Ética e transparência',
  'Respeito contínuo ao cliente',
  'Valorização de profissionais',
  'Aperfeiçoamento constante',
  'Credibilidade no mercado',
  'Compromisso integral com o Resultado',
]

// Shared Icon Frame component – pixel-perfect 64×64px square, mathematically centered
function IconFrame({ children }) {
  return (
    <div className="
      relative shrink-0
      w-16 h-16
      bg-primary/10
      border border-primary/25
      flex items-center justify-center
      mb-8
      overflow-hidden
      group-hover:bg-primary/20
      transition-colors duration-300
    ">
      {children}
    </div>
  )
}

export default function MVV() {
  return (
    <section id="mvv" className="py-24 bg-background border-b border-outline-variant/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-headline font-black mb-6 text-on-surface uppercase">
            Visão, Missão e Valores
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">
            Diretrizes que orientam nossa operação, conduta e compromisso com resultados.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Missão */}
          <div
            className="bg-surface-container border border-outline-variant/10 p-10 group hover:bg-surface-container-highest transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={0}
          >
            <IconFrame><Target size={32} className="text-primary relative z-10" aria-hidden="true" /></IconFrame>
            <h3 className="text-on-surface text-2xl font-headline font-black uppercase mb-4">Missão</h3>
            <p className="text-on-surface-variant font-medium leading-relaxed">
              Prover soluções operacionais altamente eficazes na locação de máquinas, equipamentos e
              transportes logísticos, pautadas em segurança, agilidade e qualidade técnica, sempre
              respeitando as metas dos clientes e o meio ambiente.
            </p>
          </div>

          {/* Visão */}
          <div
            className="bg-surface-container border border-outline-variant/10 p-10 group hover:bg-surface-container-highest transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <IconFrame><Eye size={32} className="text-primary relative z-10" aria-hidden="true" /></IconFrame>
            <h3 className="text-on-surface text-2xl font-headline font-black uppercase mb-4">Visão</h3>
            <p className="text-on-surface-variant font-medium leading-relaxed">
              Consolidar a Seday como a principal parceira estratégica no fornecimento de equipamentos
              pesados e logística do Sudeste brasileiro, destacando-se pelo atendimento pleno,
              responsabilidade socioambiental e robustez de processos.
            </p>
          </div>

          {/* Valores */}
          <div
            className="bg-surface-container border border-outline-variant/10 p-10 group hover:bg-surface-container-highest transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <IconFrame><ShieldCheck size={32} className="text-primary relative z-10" aria-hidden="true" /></IconFrame>
            <h3 className="text-on-surface text-2xl font-headline font-black uppercase mb-4">Valores</h3>
            <ul className="space-y-3 text-on-surface-variant font-medium">
              {valores.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <span className="mt-[7px] inline-block w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
