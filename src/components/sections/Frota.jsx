import { Truck, Boxes } from 'lucide-react'

const frotaRodoviaria = [
  { name: 'Caminhão Basculante',                img: 'Equipamentos/basculantes-tracados.png',                   alt: 'Locação de Caminhão Basculante Traçado para obras de mineração e construção civil em Minas Gerais' },
  { name: 'Caminhão Guindauto',                 img: 'Equipamentos/caminhoes-munck.jpg',                        alt: 'Locação de Caminhão Guindauto Munck para içamento e movimentação de cargas pesadas industriais' },
  { name: 'Caminhão Comboio/Abastecedor',       img: 'Equipamentos/caminhoes-comboio.png',                      alt: 'Locação de Caminhão Comboio Abastecedor para suporte tático de frotas em campo e mineração' },
  { name: 'Caminhão Pipa',                      img: 'Equipamentos/caminhoes-pipa.png',                         alt: 'Locação de Caminhão Pipa para controle de poeira e abastecimento de água em canteiros de obras' },
  { name: 'Caminhão Carroceria',                img: 'Equipamentos/caminhoes-34-cabine-suplementar.png',        alt: 'Locação de Caminhão 3/4 com Carroceria e Cabine Suplementar para transporte de equipes e materiais' },
  { name: 'Caminhão Poliguindaste Telescópico', img: 'Equipamentos/poliguidantes.png',                          alt: 'Locação de Caminhão Poliguindaste Telescópico para transporte de contêineres e caçambas estacionárias' },
  { name: 'Roll on Roll off',                   img: 'Equipamentos/roll-on-roll-off.png',                       alt: 'Locação de Caminhão Roll on Roll off para movimentação e transporte de equipamentos e plataformas industriais' },
  { name: 'Conjunto Carreta Prancha',           img: 'Equipamentos/carretas-prancha.png',                       alt: 'Locação de Conjunto Carreta Prancha para transporte de cargas especiais, máquinas e equipamentos pesados' },
  { name: 'Conjunto Carreta Basculante',        img: 'Equipamentos/basculantes-carreta.png',                    alt: 'Locação de Conjunto Carreta Basculante para transporte de minério, terra e materiais a granel em Minas Gerais' },
  { name: 'Conjunto Carreta Carga Seca',        img: 'Equipamentos/carretas-carga-seca.jpg',                    alt: 'Transporte de Carga Seca com Conjunto Carreta para logística de distribuição em todo o Sudeste do Brasil' },
  { name: 'Conjunto Carreta Silo',              img: 'Equipamentos/carreta-silo.png',                           alt: 'Locação de Conjunto Carreta Silo para transporte de granéis sólidos e produtos pulverulentos' },
]

const linhaAmarela = [
  { name: 'Empilhadeira à Combustão',  img: 'Equipamentos/empilhadeiras-industriais.png',     alt: 'Locação de Empilhadeira à Combustão para movimentação de cargas industriais em siderúrgicas e mineradoras' },
  { name: 'Empilhadeira Elétrica',     img: 'Equipamentos/empilhadeira-eletrica.webp',         alt: 'Locação de Empilhadeira Elétrica para intralogística e armazéns industriais com operação silenciosa' },
  { name: 'Transpaleteiras',           img: 'Equipamentos/Transpaleteiras.png',                alt: 'Locação de Transpaleteiras Industriais para movimentação de paletes em galpões e centros de distribuição' },
  { name: 'Empilhadeira Retrátil',     img: 'Equipamentos/empilhadeira-retrateis.png',         alt: 'Locação de Empilhadeira Retrátil para operação em corredores estreitos e armazenagem em altura' },
  { name: 'Empilhadeira Big Truck',    img: 'Equipamentos/big-truck.png',                      alt: 'Locação de Empilhadeira Pesada Big Truck para movimentação de grandes cargas e bobinas industriais' },
  { name: 'Trator de Esteira',         img: 'Equipamentos/tratores-esteira-pneus.jpg',         alt: 'Locação de Trator de Esteira para terraplanagem, mineração e obras em terrenos acidentados em Minas Gerais' },
  { name: 'Trator de Pneu',            img: 'Equipamentos/trator-de-pneu.png',                 alt: 'Locação de Trator de Pneu para obras civis, movimentação de terra e apoio em canteiros de obras' },
  { name: 'Carregadeira',              img: 'Equipamentos/carregadeiras-grande-porte.png',     alt: 'Locação de Carregadeira de Grande Porte para movimentação de materiais a granel em mineração e construção' },
  { name: 'Escavadeira Hidráulica',    img: 'Equipamentos/escavadeiras-hidraulicas.png',       alt: 'Locação de Escavadeira Hidráulica para mineração, terraplanagem e obras de infraestrutura em Minas Gerais' },
  { name: 'Retroescavadeira',          img: 'Equipamentos/retroescavadeiras-cabinadas.png',    alt: 'Locação de Retroescavadeira Cabinada para escavação, obras civis e infraestrutura urbana no Sudeste' },
  { name: 'Manipulador Telescópico',   img: 'Equipamentos/manipuladores-telescopicos.png',     alt: 'Locação de Manipulador Telescópico para içamento e posicionamento de cargas em obras e indústrias' },
]

function EquipmentCard({ name, img, alt, delay }) {
  return (
    <article
      className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="h-56 overflow-hidden bg-white flex items-center justify-center p-4">
        <img
          src={img}
          alt={alt}
          width={224}
          height={224}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-5 border-t border-slate-100">
        <h4 className="text-md font-bold text-[#0f172a] text-center">{name}</h4>
      </div>
    </article>
  )
}

export default function Frota() {
  return (
    <section id="equipamentos" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-[#0f172a] text-4xl font-extrabold mb-4">A Nossa Frota</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Equipamentos atualizados para garantir alta performance e segurança no canteiro de obras ou na estrada.
          </p>
        </div>

        {/* Frota Rodoviária */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-4" data-aos="fade-right">
            <div className="bg-[#2B5C85] p-3 rounded-xl text-white">
              <Truck className="w-7 h-7" aria-hidden="true" />
            </div>
            <h3 className="text-3xl font-extrabold text-[#0f172a]">Frota Rodoviária</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {frotaRodoviaria.map((item, i) => (
              <EquipmentCard key={item.name} {...item} delay={Math.min(i, 7) * 100} />
            ))}
          </div>
        </div>

        {/* Linha Amarela */}
        <div>
          <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-4" data-aos="fade-right">
            <div className="bg-[#2B5C85] p-3 rounded-xl text-white">
              <Boxes className="w-7 h-7" aria-hidden="true" />
            </div>
            <h3 className="text-3xl font-extrabold text-[#0f172a]">Linha Amarela &amp; Movimentação</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {linhaAmarela.map((item, i) => (
              <EquipmentCard key={item.name} {...item} delay={Math.min(i, 7) * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
