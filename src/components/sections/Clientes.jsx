const row1 = [
  { src: '/img/cliente-gps.png',       w: 300,  h: 139,  alt: 'Logotipo Cliente Grupo GPS',    cls: 'h-16' },
  { src: '/img/cliente-usiminas.png',  w: 500,  h: 139,  alt: 'Logotipo Cliente Usiminas',     cls: 'h-16' },
  { src: '/img/cliente-mrs.png',       w: 2560, h: 1199, alt: 'Logotipo Cliente MRS',          cls: 'h-16' },
  { src: '/img/cliente-magnesita.png', w: 3840, h: 2318, alt: 'Logotipo Cliente RHI Magnesita',cls: 'h-16' },
  { src: '/img/cliente-vale.png',      w: 960,  h: 375,  alt: 'Logotipo Cliente Vale',         cls: 'h-14' },
  { src: '/img/cliente-vli.png',       w: 512,  h: 512,  alt: 'Logotipo Cliente VLI',          cls: 'h-16' },
]

const row2 = [
  { src: '/img/cliente-mip.png',       w: 521,  h: 195,  alt: 'Logotipo Cliente MIP Engenharia', cls: 'h-16' },
  { src: '/img/cliente-milplan.png',   w: 500,  h: 393,  alt: 'Logotipo Cliente Milplan',        cls: 'h-16' },
  { src: '/img/cliente-timken.png',    w: 708,  h: 145,  alt: 'Logotipo Cliente Timken',         cls: 'h-14' },
  { src: '/img/cliente-aterpa.png',    w: 1727, h: 559,  alt: 'Logotipo Cliente Aterpa',         cls: 'h-16' },
  { src: '/img/cliente-reframax.webp', w: 458,  h: 122,  alt: 'Logotipo Cliente Reframax',       cls: 'h-14' },
  { src: '/img/cliente-terraco.png',   w: 213,  h: 40,   alt: 'Logotipo Cliente Terraço',        cls: 'h-16' },
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
