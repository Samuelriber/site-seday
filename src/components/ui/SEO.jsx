import { Helmet } from 'react-helmet-async'

/**
 * SEO component — injects all head meta tags + JSON-LD structured data.
 *
 * Props:
 *   title         – page <title>
 *   description   – meta description (≤ 155 chars recommended)
 *   canonicalUrl  – canonical URL for this page
 *   keywords      – comma-separated keywords (minor signal but useful for crawlers)
 *   ogImage       – absolute URL for OG/Twitter card image
 */

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.seday.com.br/#local-business',
      name: 'Seday Transportes e Equipamentos',
      alternateName: 'Seday',
      description:
        'Empresa especializada em locação de máquinas linha amarela (empilhadeiras, escavadeiras, retroescavadeiras), transporte pesado, intralogística e locação de equipamentos para mineração, siderurgia e construção civil no Sudeste do Brasil.',
      url: 'https://www.seday.com.br/',
      telephone: '+55 31 98465-7066',
      email: 'comercial@seday.com.br',
      foundingDate: '1999',
      priceRange: '$$',
      image: 'https://www.seday.com.br/img/SEDAY.PADRÃO02transparente.png',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.seday.com.br/img/SEDAY.PADRÃO02transparente.png',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rodovia BR-040, 22750, Barreira',
        addressLocality: 'Conselheiro Lafaiete',
        addressRegion: 'MG',
        postalCode: '36407-430',
        addressCountry: 'BR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -20.6277,
        longitude: -43.7719,
      },
      areaServed: [
        { '@type': 'State', name: 'Minas Gerais' },
        { '@type': 'State', name: 'São Paulo' },
        { '@type': 'State', name: 'Rio de Janeiro' },
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+55 31 98465-7066',
        contactType: 'sales',
        areaServed: 'BR',
        availableLanguage: 'Portuguese',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Serviços Seday Transportes e Equipamentos',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Locação de Máquinas Linha Amarela', description: 'Locação de empilhadeiras, escavadeiras hidráulicas, retroescavadeiras, tratores e carregadeiras para mineração, siderurgia e construção civil.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transporte Rodoviário de Cargas', description: 'Transporte rodoviário de carga fechada em todo território nacional, com foco na região Sudeste.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Intralogística Industrial', description: 'Movimentação interna de materiais com empilhadeiras e transpaleteiras para operações industriais.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Içamento de Cargas Pesadas', description: 'Içamento e movimentação de cargas com caminhões Guindauto e manipuladores telescópicos.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Locação de Caminhões Especiais', description: 'Locação de caminhões pipa, comboio, basculante, roll-on roll-off e carretas prancha.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transporte de Cargas Especiais e Dimensionadas', description: 'Transporte de cargas especiais, indivisíveis e superdimensionadas com carretas prancha e carreta silo.' } },
        ],
      },
      sameAs: [
        'https://www.linkedin.com/company/seday',
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.seday.com.br/#organization',
      name: 'Seday Transportes e Equipamentos',
      url: 'https://www.seday.com.br/',
      logo: 'https://www.seday.com.br/img/SEDAY.PADRÃO02transparente.png',
      memberOf: {
        '@type': 'Organization',
        name: 'Grupo Seday',
        member: [
          { '@type': 'Organization', name: 'Avapex Transportes', url: 'https://www.avapex.com.br/' },
          { '@type': 'Organization', name: 'Innomach Equipamentos', url: 'https://www.innomach.com.br/' },
        ],
      },
    },
  ],
}

export default function SEO({
  title = 'Seday | Locação de Máquinas Linha Amarela, Transporte Pesado e Intralogística',
  description = 'Seday Transportes e Equipamentos: locação de máquinas linha amarela (empilhadeiras, escavadeiras, tratores), transporte pesado e intralogística no Sudeste. Desde 1999 em Conselheiro Lafaiete/MG.',
  canonicalUrl = 'https://www.seday.com.br/',
  keywords = 'locação de máquinas linha amarela, locação de empilhadeira, locação de escavadeira hidráulica, transporte pesado, intralogística, locação de retroescavadeira, locação de trator de esteira, transporte rodoviário, locação de equipamentos pesados, Conselheiro Lafaiete, Minas Gerais',
  ogImage = 'https://www.seday.com.br/img/og-seday.jpg',
}) {
  return (
    <Helmet>
      {/* ── Primary ────────────────────────────────────────── */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords"    content={keywords} />
      <link rel="canonical"    href={canonicalUrl} />
      <meta name="robots"      content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* ── Geo ────────────────────────────────────────────── */}
      <meta name="geo.region"    content="BR-MG" />
      <meta name="geo.placename" content="Conselheiro Lafaiete" />
      <meta name="geo.position"  content="-20.6277;-43.7719" />
      <meta name="ICBM"          content="-20.6277, -43.7719" />

      {/* ── Open Graph (WhatsApp, LinkedIn, Facebook) ──────── */}
      <meta property="og:type"        content="website" />
      <meta property="og:url"         content={canonicalUrl} />
      <meta property="og:title"       content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image"       content={ogImage} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt"   content="Seday Transportes e Equipamentos — Locação de Máquinas e Transporte Pesado" />
      <meta property="og:locale"      content="pt_BR" />
      <meta property="og:site_name"   content="Seday Transportes e Equipamentos" />

      {/* ── Twitter / X Card ───────────────────────────────── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={ogImage} />
      <meta name="twitter:image:alt"   content="Seday Transportes e Equipamentos" />

      {/* ── JSON-LD Structured Data ────────────────────────── */}
      <script type="application/ld+json">
        {JSON.stringify(SCHEMA)}
      </script>
    </Helmet>
  )
}
