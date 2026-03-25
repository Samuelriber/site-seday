import { Award, Map } from 'lucide-react'

export default function QuemSomos() {
  return (
    <>
      {/* Quem Somos */}
      <section id="quem-somos" className="py-24 bg-surface">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">
              Nossa História
            </span>
            <h2 className="text-on-surface text-4xl md:text-6xl font-headline font-black uppercase mb-8 leading-tight">
              Mais de 27 Anos de <br className="hidden md:block" /> Excelência <span className="text-primary">Operacional</span>
            </h2>

            <p className="text-on-surface-variant text-lg leading-relaxed mb-6 text-justify md:text-center">
              A <strong className="text-on-surface">Seday Transportes e Equipamentos</strong> consolida-se pela credibilidade e forte
              compromisso com os resultados de cada cliente. Fundada em 1999, somos especialistas em
              locação e prestação de serviços com máquinas e equipamentos, além de transporte pesado.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-16 text-justify md:text-center">
              Atendemos principalmente siderúrgicas, mineradoras e construtoras. Nossa matriz está
              localizada estrategicamente às margens da BR-040 em Conselheiro Lafaiete/MG, garantindo
              agilidade e prontidão para operações de grande escala em todo o Sudeste.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex items-start gap-5 bg-surface-container p-8 border border-outline-variant/20 shadow-sm transition-transform hover:-translate-y-1">
              <div className="text-primary mt-1"><Award className="w-8 h-8" /></div>
              <div>
                <h3 className="font-headline font-bold uppercase text-on-surface text-xl">Qualidade Comprovada</h3>
                <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">
                  Foco rigoroso em processos e excelência operacional constante.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5 bg-surface-container p-8 border border-outline-variant/20 shadow-sm transition-transform hover:-translate-y-1">
              <div className="text-primary mt-1"><Map className="w-8 h-8" /></div>
              <div>
                <h3 className="font-headline font-bold uppercase text-on-surface text-xl">Cobertura Estratégica</h3>
                <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">
                  Bases em MG, SP e RJ para pronto atendimento e suporte 24h.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grupo Seday */}
      <section className="py-24 bg-white border-t border-outline-variant/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-headline font-black uppercase mb-4 text-[#0f172a]">
              Parte do Grupo <span className="text-primary">Seday</span>
            </h2>
            <p className="text-slate-600 text-lg font-medium">Sinergia estratégica para garantir uma operação logística e industrial 360º.</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-24">
            <div className="text-center group hover:scale-105 transition-transform">
              <a href="https://www.avapex.com.br/" target="_blank" rel="noopener noreferrer" title="Visitar site da Avapex">
                <img src="img/avapex-oficial-01.png" alt="Avapex" loading="lazy" decoding="async" className="h-16 w-auto mx-auto mb-4 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
              </a>
              <p className="text-primary text-xs font-headline font-bold uppercase tracking-widest mt-2">Logística Inteligente</p>
            </div>

            <div className="hidden md:block h-24 w-px bg-slate-200" />

            <div className="text-center group hover:scale-105 transition-transform">
              <img src="img/seday-padrao02transparente.png" alt="Seday" loading="lazy" decoding="async" className="h-20 w-auto mx-auto mb-4 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
              <p className="text-primary text-xs font-headline font-bold uppercase tracking-widest mt-2">Locação Linha Amarela</p>
            </div>

            <div className="hidden md:block h-24 w-px bg-slate-200" />

            <div className="text-center group hover:scale-105 transition-transform">
              <a href="https://www.innomach.com.br/" target="_blank" rel="noopener noreferrer">
                <img src="img/innomach-equipamento-oficial-01.png" alt="Innomach" loading="lazy" decoding="async" className="h-14 w-auto mx-auto mb-4 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
              </a>
              <p className="text-primary text-xs font-headline font-bold uppercase tracking-widest mt-2">Maquinário Industrial</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
