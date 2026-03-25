const stats = [
  { value: '27+',  label: 'Anos de Mercado',    delay: 0   },
  { value: 'ISO',  label: 'Certificação 9001',   delay: 100 },
  { value: '100%', label: 'Operação Segura',     delay: 200 },
  { value: '500+', label: 'Equipamentos Ativos', delay: 300 },
]

export default function Estatisticas() {
  return (
    <section aria-label="Estatísticas da empresa" className="max-w-7xl mx-auto px-8 relative z-20 -mt-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-surface-container-high rounded-xl shadow-xl p-8 md:py-10 flex flex-col items-center justify-center text-center border-b-4 border-primary"
            data-aos="fade-up"
            data-aos-delay={s.delay}
          >
            <span className="text-4xl md:text-5xl font-headline font-black text-primary mb-2">{s.value}</span>
            <span className="text-xs uppercase font-headline tracking-widest text-on-surface-variant">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
