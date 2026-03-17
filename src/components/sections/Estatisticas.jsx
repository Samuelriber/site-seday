const stats = [
  { value: '27+',  label: 'Anos de Experiência',  color: 'text-[#0f172a]', delay: 0   },
  { value: '9001', label: 'ISO de Qualidade',      color: 'text-[#0f172a]', delay: 100 },
  { value: '24/7', label: 'Suporte Operacional',   color: 'text-[#0f172a]', delay: 200 },
  { value: '100%', label: 'Foco em Segurança',     color: 'text-[#2B5C85]', delay: 300 },
]

export default function Estatisticas() {
  return (
    <section className="py-12 bg-white relative z-30 -mt-12 mx-6 md:mx-auto max-w-6xl rounded-2xl shadow-2xl border border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {stats.map((s) => (
            <div key={s.label} className="p-4" data-aos="fade-up" data-aos-delay={s.delay}>
              <span className={`block text-4xl font-extrabold mb-1 ${s.color}`}>{s.value}</span>
              <span className="text-slate-500 font-bold uppercase text-xs tracking-wider">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
