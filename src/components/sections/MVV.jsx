const valores = [
  'Segurança intransigente',
  'Ética e transparência',
  'Respeito contínuo ao cliente',
  'Valorização de profissionais',
  'Aperfeiçoamento constante',
  'Credibilidade no mercado',
  'Compromisso integral com o Resultado',
]

export default function MVV() {
  return (
    <section id="mvv" className="py-24 bg-white border-b border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-[#0f172a] text-4xl font-extrabold mb-4">Visão, Missão e Valores</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Diretrizes que orientam nossa operação, conduta e compromisso com resultados.
          </p>
          <div className="w-16 h-1 bg-[#2B5C85] mx-auto rounded mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Missão */}
          <div
            className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
            data-aos="fade-up"
            data-aos-delay={0}
          >
            <div className="bg-[#0f172a] text-white px-6 py-4 border-b border-slate-700">
              <h3 className="text-xl font-extrabold tracking-wide uppercase">Missão</h3>
            </div>
            <div className="p-7">
              <p className="text-slate-600 leading-relaxed">
                Prover soluções operacionais altamente eficazes na locação de máquinas, equipamentos e
                transportes logísticos, pautadas em segurança, agilidade e qualidade técnica, sempre
                respeitando as metas dos clientes e o meio ambiente.
              </p>
            </div>
          </div>

          {/* Visão */}
          <div
            className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="bg-[#0f172a] text-white px-6 py-4 border-b border-slate-700">
              <h3 className="text-xl font-extrabold tracking-wide uppercase">Visão</h3>
            </div>
            <div className="p-7">
              <p className="text-slate-600 leading-relaxed">
                Consolidar a Seday como a principal parceira estratégica no fornecimento de equipamentos
                pesados e logística do Sudeste brasileiro, destacando-se pelo atendimento pleno,
                responsabilidade socioambiental e robustez de processos.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div
            className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="bg-[#0f172a] text-white px-6 py-4 border-b border-slate-700">
              <h3 className="text-xl font-extrabold tracking-wide uppercase">Valores</h3>
            </div>
            <div className="p-7">
              <ul className="space-y-3 text-slate-600">
                {valores.map((v) => (
                  <li key={v} className="flex items-start gap-3">
                    <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-[#2B5C85] shrink-0" />
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
