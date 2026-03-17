export default function WhatsAppButton() {
  const msg = encodeURIComponent('Olá! Acessei o site da Seday e gostaria de solicitar um orçamento.')
  const url = `https://wa.me/5531984657066?text=${msg}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title="Fale com a Seday no WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:bg-green-600 transition-all flex items-center justify-center group hover:scale-110 border-2 border-white/20"
    >
      <span className="absolute right-full mr-4 bg-slate-800 text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-bold shadow-lg">
        Fale com um Especialista
        <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-y-4 border-y-transparent border-l-4 border-l-slate-800" />
      </span>
      <img
        src="/img/whatsapp.png"
        alt="Logotipo WhatsApp"
        width={40}
        height={40}
        fetchPriority="high"
        className="w-8 h-8 md:w-10 md:h-10 object-contain"
      />
    </a>
  )
}
