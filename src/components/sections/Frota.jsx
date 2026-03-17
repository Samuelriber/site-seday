import { Truck, Boxes } from 'lucide-react'

const frotaRodoviaria = [
  { name: 'Caminhão Basculante',              img: '/Equipamentos/Basculantes Traçados.png',                       alt: 'Locação de Caminhão Basculante Traçado' },
  { name: 'Caminhão Guindauto',               img: '/Equipamentos/Caminhões Munck.jpg',                            alt: 'Locação de Caminhão Guindauto Munck' },
  { name: 'Caminhão Comboio/Abastecedor',     img: '/Equipamentos/Caminhões Comboio.png',                          alt: 'Locação de Caminhão Comboio para Abastecimento' },
  { name: 'Caminhão Pipa',                    img: '/Equipamentos/Caminhões Pipa.png',                             alt: 'Locação de Caminhão Pipa' },
  { name: 'Caminhão Carroceria',              img: '/Equipamentos/Caminhões ¾ com cabine suplementar.png',         alt: 'Locação de Caminhão 3/4 Carroceria com Cabine Suplementar' },
  { name: 'Caminhão Poliguindaste Telescópico', img: '/Equipamentos/poliguidantes.png',                            alt: 'Locação de Caminhão Poliguindaste Telescópico' },
  { name: 'Roll on Roll off',                 img: '/Equipamentos/Roll on Roll of.png',                            alt: 'Locação de Caminhão Roll on Roll off' },
  { name: 'Conjunto Carreta Prancha',         img: '/Equipamentos/Carretas Prancha.png',                           alt: 'Transporte com Conjunto Carreta Prancha' },
  { name: 'Conjunto Carreta Basculante',      img: '/Equipamentos/Basculantes carreta.png',                        alt: 'Transporte com Conjunto Carreta Basculante' },
  { name: 'Conjunto Carreta Carga Seca',      img: '/Equipamentos/Carretas Carga Seca.jpg',                        alt: 'Transporte Especial com Carreta Carga Seca' },
  { name: 'Conjunto Carreta Silo',            img: '/Equipamentos/carreta silo.png',                               alt: 'Transporte com Conjunto Carreta Silo' },
]

const linhaAmarela = [
  { name: 'Empilhadeira à Combustão',   img: '/Equipamentos/Empilhadeiras industriais.png',     alt: 'Locação de Empilhadeira à Combustão' },
  { name: 'Empilhadeira Elétrica',      img: '/Equipamentos/Empilhadeira eletrica.webp',         alt: 'Locação de Empilhadeira Elétrica' },
  { name: 'Transpaleteiras',            img: '/Equipamentos/Transpaleteiras.png',                alt: 'Locação de Transpaleteiras Industriais' },
  { name: 'Empilhadeira Retrátil',      img: '/Equipamentos/Empilhadeira Retráteis.png',         alt: 'Locação de Empilhadeira Retrátil' },
  { name: 'Empilhadeira Big Truck',     img: '/Equipamentos/Big Truck.png',                      alt: 'Locação de Empilhadeira Pesada Big Truck' },
  { name: 'Trator de Esteira',          img: '/Equipamentos/Tratores de esteira e de pneus.jpg', alt: 'Locação de Trator de Esteira' },
  { name: 'Trator de Pneu',             img: '/Equipamentos/Trator de Pneu.png',                 alt: 'Locação de Trator de Pneu' },
  { name: 'Carregadeira',               img: '/Equipamentos/Carregadeiras de grande porte.png',  alt: 'Locação de Carregadeira de Grande Porte' },
  { name: 'Escavadeira Hidráulica',     img: '/Equipamentos/Escavadeiras Hidráulicas.png',       alt: 'Locação de Escavadeira Hidráulica' },
  { name: 'Retroescavadeira',           img: '/Equipamentos/Retroescavadeiras cabinadas.png',    alt: 'Locação de Retroescavadeira' },
  { name: 'Manipulador Telescópico',    img: '/Equipamentos/Manipuladores Telescópicos.png',     alt: 'Locação de Manipulador Telescópico' },
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
