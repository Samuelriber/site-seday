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
              A <strong className="text-on-surface">Seday Transportes</strong> completa 27 anos de estrada, período marcado pela
              parceria formada com grandes empresas e composta de sinceridade, eficiência e pontualidade.
              Fundada em 1999 na cidade de Ouro Branco-MG, a empresa atua no ramo de Locação e Prestação
              de Serviço com Máquinas e Equipamentos, além do Transporte Pesados.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-6 text-justify md:text-center">
              Com atuação significativa neste segmento, a Seday Transportes atende siderúrgicas,
              mineradoras, construtoras e empresas terceiras, locando máquinas e equipamentos e realizando
              o transporte de seus produtos e subprodutos, em harmonia com o meio ambiente, conquistando o
              respeito e a confiança de seus stakeholders.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-6 text-justify md:text-center">
              A Seday destaca-se por suprir de forma inteligente e eficaz as mais diversas necessidades
              relacionadas a logística, transporte e movimentação de carga, agregando valor e eficiência
              aos processos de seus clientes.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-6 text-justify md:text-center">
              Dotado de profissionais capacitados e comprometidos com o bom atendimento, a Seday vem
              construindo ao longo desses 27 anos, junto de seus colaboradores e clientes, uma história
              alicerçada em competência e credibilidade.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-16 text-justify md:text-center">
              Com o objetivo de otimizar suas operações logísticas, a Seday está estrategicamente
              localizada com sua matriz em Conselheiro Lafaiete/MG, às margens da BR-040, um posto
              avançado em Belo Horizonte/MG, e filiais nos estados de São Paulo e Rio de Janeiro. Além
              de contar com unidades de apoio em Juatuba/MG, Paraopeba/MG e Ipatinga/MG.
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
                <img src="img/avapex-oficial-01.png" alt="Avapex" loading="lazy" decoding="async" className="h-16 w-auto mx-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            <div className="hidden md:block h-24 w-px bg-slate-200" />

            <div className="text-center group hover:scale-105 transition-transform">
              <img src="img/seday-padrao02transparente.png" alt="Seday" loading="lazy" decoding="async" className="h-20 w-auto mx-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="hidden md:block h-24 w-px bg-slate-200" />

            <div className="text-center group hover:scale-105 transition-transform">
              <a href="https://www.innomach.com.br/" target="_blank" rel="noopener noreferrer">
                <img src="img/innomach-equipamento-oficial-01.png" alt="Innomach" loading="lazy" decoding="async" className="h-14 w-auto mx-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
