import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Como funciona a locação de máquinas pesadas na Seday?',
    a: 'A Seday oferece modelos flexíveis de contrato. Podemos fornecer apenas o equipamento (dry rent) ou a solução completa com operadores altamente capacitados, combustível e manutenção inclusos.',
  },
  {
    q: 'Em quais regiões a Seday atua?',
    a: 'Nossa matriz está localizada estrategicamente em Conselheiro Lafaiete/MG, mas temos estrutura e capilaridade logística para atuar em projetos nos principais pólos de mineração e siderurgia de Minas Gerais, São Paulo, Rio de Janeiro e estados adjacentes.',
  },
  {
    q: 'A empresa possui certificações para atuar em áreas de risco?',
    a: 'Sim. Nossos processos e nossa equipe seguem rigorosamente os padrões de compliance e SSMA (Saúde, Segurança e Meio Ambiente) exigidos por grandes empresas do setor.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-background border-t border-outline-variant/10">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-headline font-black mb-6 text-on-surface uppercase">Dúvidas Frequentes</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">Respostas rápidas para agilizar o planejamento da sua operação.</p>
        </div>

        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group border border-outline-variant/20 rounded-xl bg-surface-container overflow-hidden shadow-sm transition-all hover:bg-surface-container-highest">
              <summary className="flex justify-between items-center font-headline font-bold uppercase cursor-pointer list-none p-6 text-on-surface transition-colors">
                {q}
                <span className="transition group-open:rotate-180 shrink-0 ml-4">
                  <ChevronDown className="text-primary" />
                </span>
              </summary>
              <div className="text-on-surface-variant font-medium p-6 pt-0 leading-relaxed bg-surface-container border-t border-outline-variant/10 mt-2">
                {a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
