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
    <section id="por-que-seday" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-[#0f172a] text-3xl md:text-4xl font-extrabold mb-4">
            Por que terceirizar a sua logística conosco?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Terceirizar a logística não é apenas transferir uma operação: é transformar custo fixo em
            eficiência operacional, previsibilidade financeira e foco estratégico.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {cards.map(({ Icon, title, desc, delay }) => (
            <div
              key={title}
              className="bg-white border border-slate-200 shadow-sm p-8 rounded-2xl hover:shadow-lg transition-all"
              data-aos="fade-up"
              data-aos-delay={delay}
            >
              <div className="text-[#2B5C85] mb-6 bg-[#eaf2f8] w-16 h-16 rounded-full flex items-center justify-center">
                <Icon className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3 className="text-[#0f172a] text-xl font-bold mb-3">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
