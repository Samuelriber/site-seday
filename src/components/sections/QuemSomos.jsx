import { Award, Map } from 'lucide-react'

export default function QuemSomos() {
  return (
    <>
      {/* Quem Somos */}
      <section id="quem-somos" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center">
            <span className="text-[#2B5C85] font-bold tracking-widest uppercase text-xs mb-3 block">
              Nossa História
            </span>
            <h2 className="text-[#0f172a] text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Mais de 27 Anos de <br className="hidden md:block" /> Excelência Operacional
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-6 text-justify md:text-center">
              A <strong>Seday Transportes e Equipamentos</strong> consolida-se pela credibilidade e forte
              compromisso com os resultados de cada cliente. Fundada em 1999, somos especialistas em
              locação e prestação de serviços com máquinas e equipamentos, além de transporte pesado.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-12 text-justify md:text-center">
              Atendemos principalmente siderúrgicas, mineradoras e construtoras. Nossa matriz está
              localizada estrategicamente às margens da BR-040 em Conselheiro Lafaiete/MG, garantindo
              agilidade e prontidão para operações de grande escala em todo o Sudeste.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-5 bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm transition-transform hover:-translate-y-1">
              <div className="text-[#2B5C85] mt-1"><Award className="w-8 h-8" /></div>
              <div>
                <h4 className="font-bold text-[#0f172a] text-lg">Qualidade Comprovada</h4>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  Foco rigoroso em processos e excelência operacional constante.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5 bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm transition-transform hover:-translate-y-1">
              <div className="text-[#2B5C85] mt-1"><Map className="w-8 h-8" /></div>
              <div>
                <h4 className="font-bold text-[#0f172a] text-lg">Cobertura Estratégica</h4>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  Bases em MG, SP e RJ para pronto atendimento e suporte 24h.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grupo Seday */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-2 text-[#0f172a]">
              Parte do Grupo <span className="text-[#2B5C85]">Seday</span>
            </h3>
            <p className="text-slate-500">Sinergia estratégica para garantir uma operação logística e industrial 360º.</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16">
            <div className="text-center group hover:scale-105 transition-transform">
              <a href="https://www.avapex.com.br/" target="_blank" rel="noopener noreferrer" title="Visitar site da Avapex">
                <img src="/img/AVAPEX OFICIAL 01.png" alt="Avapex" loading="lazy" decoding="async" className="h-14 w-auto mx-auto mb-3 object-contain" />
              </a>
              <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">Logística Inteligente</p>
            </div>

            <div className="hidden md:block h-16 w-px bg-slate-200" />

            <div className="text-center group hover:scale-105 transition-transform">
              <img src="/img/SEDAY.PADRÃO02transparente.png" alt="Seday" loading="lazy" decoding="async" className="h-16 w-auto mx-auto mb-3 object-contain" />
              <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">Locação Linha Amarela</p>
            </div>

            <div className="hidden md:block h-16 w-px bg-slate-200" />

            <div className="text-center group hover:scale-105 transition-transform">
              <a href="https://www.innomach.com.br/" target="_blank" rel="noopener noreferrer">
                <img src="/img/INNOMACH EQUIPAMENTO oficial 01.png" alt="Innomach" loading="lazy" decoding="async" className="h-12 w-auto mx-auto mb-3 object-contain" />
              </a>
              <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">Maquinário Industrial</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
