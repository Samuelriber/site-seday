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
    <div
      className="bg-surface-container border border-outline-variant/20 group hover:border-primary/40 transition-all duration-500"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {/* Image box with generous padding so vehicle never fills 100% */}
      <div className="relative bg-surface-container-highest overflow-hidden flex items-center justify-center p-6" style={{ aspectRatio: '4/3' }}>
        <img
          src={img}
          alt={name}
          loading="lazy"
          decoding="async"
          className="max-h-full max-w-full object-contain opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
        />
        {/* Blue accent corner */}
        <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      {/* Label */}
      <div className="px-4 py-3 border-t border-outline-variant/20">
        <h4 className="text-sm font-headline font-bold uppercase text-on-surface leading-tight">{name}</h4>
      </div>
    </div>
  )
}

export default function Frota() {
  return (
    <section id="equipamentos" className="py-32 bg-surface-container-low border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-headline font-black uppercase mb-6 text-on-surface">
            Nossa <span className="text-primary">Frota</span> de Elite
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Equipamentos modernos com tecnologia embarcada para máxima produtividade no canteiro de obras ou na estrada.
          </p>
        </div>

        {/* Frota Rodoviária */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10 border-b border-outline-variant/20 pb-4" data-aos="fade-right">
            <div className="bg-primary/10 p-4 text-primary border border-primary/20">
              <Truck className="w-8 h-8" aria-hidden="true" />
            </div>
            <h3 className="text-3xl font-headline font-black uppercase text-on-surface">Frota Rodoviária</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {frotaRodoviaria.map((item, i) => (
              <EquipmentCard key={item.name} {...item} delay={Math.min(i, 7) * 100} />
            ))}
          </div>
        </div>

        {/* Linha Amarela */}
        <div>
          <div className="flex items-center gap-4 mb-10 border-b border-outline-variant/20 pb-4" data-aos="fade-right">
            <div className="bg-primary/10 p-4 text-primary border border-primary/20">
              <Boxes className="w-8 h-8" aria-hidden="true" />
            </div>
            <h3 className="text-3xl font-headline font-black uppercase text-on-surface">Linha Amarela &amp; Movimentação</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
            {linhaAmarela.map((item, i) => (
              <EquipmentCard key={item.name} {...item} delay={Math.min(i, 7) * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
