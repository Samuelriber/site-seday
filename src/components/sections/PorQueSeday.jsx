import { Focus, BadgeDollarSign, ClipboardCheck, Handshake } from 'lucide-react'

const cards = [
  {
    Icon: Focus,
    title: 'Foco no seu core business',
    desc: 'Ao confiar a operação logística à Seday, sua empresa direciona energia e recursos para o que realmente gera valor: produção, vendas e crescimento do negócio.',
    delay: 0,
  },
  {
    Icon: BadgeDollarSign,
    title: 'Redução e previsibilidade de custos',
    desc: 'Eliminação de imobilização em frota e equipamentos, redução de custos com manutenção, gestão de pessoas e compliance, estrutura de custos clara e contratualizada.',
    delay: 100,
  },
  {
    Icon: ClipboardCheck,
    title: 'Gestão especializada',
    desc: 'Profissionais treinados e certificados, controle rigoroso de manutenção preventiva e corretiva, gestão de indicadores de desempenho (KPIs) e foco em segurança operacional.',
    delay: 200,
  },
  {
    Icon: Handshake,
    title: 'Parceria estratégica de longo prazo',
    desc: 'Nosso compromisso vai além da execução do serviço. Atuamos com transparência, previsibilidade contratual e construção conjunta de soluções.',
    delay: 300,
  },
]

export default function PorQueSeday() {
  return (
    <section id="por-que-seday" className="py-24 bg-surface-container border-y border-outline-variant/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-headline font-black mb-6 text-on-surface uppercase">
            Por que terceirizar a sua logística conosco?
          </h2>
          <p className="text-on-surface-variant max-w-3xl mx-auto text-lg leading-relaxed">
            Terceirizar a logística não é apenas transferir uma operação: é transformar custo fixo em
            eficiência operacional, previsibilidade financeira e foco estratégico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map(({ Icon, title, desc, delay }) => (
            <div
              key={title}
              className="bg-surface-container-high border border-outline-variant/10 p-10 rounded-2xl hover:bg-surface-container-highest transition-all group"
              data-aos="fade-up"
              data-aos-delay={delay}
            >
              <div className="bg-primary border border-primary/40 aspect-square w-16 h-16 flex items-center justify-center mb-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                <Icon className="w-8 h-8 text-white relative z-10" aria-hidden="true" />
              </div>
              <h3 className="text-on-surface text-xl font-headline font-black uppercase mb-4">{title}</h3>
              <p className="text-on-surface-variant font-medium leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
