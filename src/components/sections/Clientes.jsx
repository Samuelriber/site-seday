const row1 = [
  { src: 'img/cliente-gps.png',       w: 300,  h: 139,  alt: 'Grupo GPS — cliente Seday Transportes para locação de equipamentos e logística industrial',    cls: 'h-16' },
  { src: 'img/cliente-usiminas.png',  w: 500,  h: 139,  alt: 'Usiminas — cliente Seday para intralogística e movimentação de cargas em siderurgia',          cls: 'h-16' },
  { src: 'img/cliente-mrs.png',       w: 2560, h: 1199, alt: 'MRS Logística — cliente Seday para transporte pesado e locação de máquinas no setor ferroviário', cls: 'h-16' },
  { src: 'img/cliente-magnesita.png', w: 3840, h: 2318, alt: 'RHI Magnesita — cliente Seday para locação de equipamentos linha amarela em mineração de magnésio', cls: 'h-16' },
  { src: 'img/cliente-vale.png',      w: 960,  h: 375,  alt: 'Vale — cliente Seday para locação de máquinas e transporte pesado em mineração de ferro em Minas Gerais', cls: 'h-14' },
  { src: 'img/cliente-vli.png',       w: 512,  h: 512,  alt: 'VLI Logística — cliente Seday para transporte e movimentação de cargas no corredor logístico do Brasil', cls: 'h-16' },
]

const row2 = [
  { src: 'img/cliente-mip.png',       w: 521,  h: 195,  alt: 'MIP Engenharia — cliente Seday para locação de escavadeiras e retroescavadeiras em obras de infraestrutura', cls: 'h-16' },
  { src: 'img/cliente-milplan.png',   w: 500,  h: 393,  alt: 'Milplan — cliente Seday para locação de equipamentos pesados e transporte de cargas especiais',               cls: 'h-16' },
  { src: 'img/cliente-timken.png',    w: 708,  h: 145,  alt: 'Timken — cliente Seday para intralogística e locação de empilhadeiras em planta industrial',                   cls: 'h-14' },
  { src: 'img/cliente-aterpa.png',    w: 1727, h: 559,  alt: 'Aterpa — cliente Seday para locação de máquinas linha amarela em obras de infraestrutura e saneamento',       cls: 'h-16' },
  { src: 'img/cliente-reframax.webp', w: 458,  h: 122,  alt: 'Reframax — cliente Seday para movimentação de materiais refratários e locação de manipuladores telescópicos', cls: 'h-14' },
  { src: 'img/cliente-terraco.png',   w: 213,  h: 40,   alt: 'Terraço — cliente Seday para locação de equipamentos e transporte pesado em projetos de construção civil',     cls: 'h-16' },
]

function LogoSet({ logos, visible }) {
  return (
    <div className="logo-set" aria-hidden={!visible || undefined}>
      {logos.map((l, i) => (
        <img
          key={i}
          src={l.src}
          width={l.w}
          height={l.h}
          alt={visible ? l.alt : ''}
          loading="lazy"
          decoding="async"
          className={`client-logo ${l.cls} w-auto object-contain shrink-0`}
        />
      ))}
    </div>
  )
}

function LogoTrack({ logos, rowClass }) {
  return (
    <div className={`logo-track ${rowClass}`}>
      <LogoSet logos={logos} visible={true} />
      <LogoSet logos={logos} visible={true} />
      <LogoSet logos={logos} visible={false} />
      <LogoSet logos={logos} visible={false} />
    </div>
  )
}

export default function Clientes() {
  return (
    <section id="credibilidade" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-[#0f172a] text-3xl md:text-4xl font-extrabold mb-4">
            Empresas que confiam na Seday
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A sua carga tratada com o mesmo padrão de exigência das maiores indústrias do país.
          </p>
        </div>

        <div className="logo-carousel" aria-label="Principais clientes" data-aos="zoom-in">
          <LogoTrack logos={row1} rowClass="row-1" />
          <LogoTrack logos={row2} rowClass="row-2" />
        </div>
      </div>
    </section>
  )
}
