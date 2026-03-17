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
    <section id="faq" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-[#0f172a] text-4xl font-extrabold mb-4">Dúvidas Frequentes</h2>
          <p className="text-slate-600">Respostas rápidas para agilizar o planejamento da sua operação.</p>
        </div>

        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm">
              <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-[#0f172a] hover:bg-slate-50 transition-colors">
                {q}
                <span className="transition group-open:rotate-180 shrink-0 ml-4">
                  <ChevronDown className="text-[#2B5C85]" />
                </span>
              </summary>
              <div className="text-slate-600 p-6 pt-0 leading-relaxed bg-white border-t border-slate-100 mt-2">
                {a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
