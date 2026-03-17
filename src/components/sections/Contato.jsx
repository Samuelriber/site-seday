import { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'

const INITIAL = { nome: '', empresa: '', email: '', telefone: '', servico: '', mensagem: '' }

export default function Contato() {
  const [form,    setForm]    = useState(INITIAL)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handle = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simula envio (substitua por fetch/emailjs conforme necessário)
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setSuccess(true)
    setForm(INITIAL)
  }

  const inputCls =
    'w-full p-4 rounded-xl border border-slate-300 focus:border-[#2B5C85] focus:ring-2 focus:ring-[#eaf2f8] outline-none transition-all bg-slate-50'

  return (
    <section id="orcamento" className="py-24 bg-[#0B1121] text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Coluna esquerda — info + mapa */}
          <div className="flex flex-col h-full">
            <span className="text-[#4BA3E3] font-bold uppercase tracking-widest text-xs mb-3 block">
              CONTATO DIRETO
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Receba uma Proposta Comercial
            </h2>
            <p className="text-slate-300 mb-8 text-base leading-relaxed">
              Nossa equipe de engenharia logística está pronta para analisar sua demanda e desenhar
              a operação com o melhor custo-benefício.
            </p>

            <div className="space-y-4 bg-[#141E30] p-6 rounded-2xl border border-slate-700/50 mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-[#2B5C85] p-3 rounded-xl text-white shadow-md shrink-0">
                  <Phone className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Central de Atendimento</p>
                  <p className="text-[#4BA3E3] text-lg font-bold">(31) 98465-7066</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#2A3447] p-3 rounded-xl text-[#4BA3E3] shadow-md shrink-0">
                  <Mail className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">E-mail Corporativo</p>
                  <p className="text-slate-400 text-sm">comercial@seday.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#2A3447] p-3 rounded-xl text-[#4BA3E3] shadow-md shrink-0">
                  <MapPin className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Base Operacional</p>
                  <p className="text-slate-400 text-sm italic">
                    Rodovia BR-040, 22750, Barreira — Conselheiro Lafaiete/MG
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-64 border border-slate-700 shadow-lg relative w-full mt-auto">
              <iframe
                className="w-full h-full"
                title="Mapa Localização Seday"
                src="https://maps.google.com/maps?q=Rodovia%20BR-040,%2022750,%20Barreira%20-%20Conselheiro%20Lafaiete%20-%20MG&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Coluna direita — formulário */}
          <div className="bg-white text-slate-900 p-8 md:p-10 rounded-3xl shadow-2xl relative">
            <h3 className="text-2xl font-bold mb-6 text-[#0f172a]">Solicite um Orçamento</h3>

            {success ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                <CheckCircle className="w-16 h-16 text-green-500" />
                <h4 className="text-2xl font-extrabold text-[#0f172a]">Solicitação enviada com sucesso!</h4>
                <p className="text-slate-500">
                  Nossa equipe entrará em contato em breve. Obrigado pelo interesse na Seday!
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-4 bg-[#2B5C85] text-white font-bold py-3 px-8 rounded-xl hover:bg-[#1A3B56] transition-all"
                >
                  Enviar outra solicitação
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Nome do Responsável *</label>
                    <input
                      type="text" name="nome" required value={form.nome} onChange={handle}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Empresa *</label>
                    <input
                      type="text" name="empresa" required value={form.empresa} onChange={handle}
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">E-mail Profissional *</label>
                    <input
                      type="email" name="email" required value={form.email} onChange={handle}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Telefone / WhatsApp *</label>
                    <input
                      type="tel" name="telefone" required value={form.telefone} onChange={handle}
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Em qual área podemos ajudar? *</label>
                  <select
                    name="servico" required value={form.servico} onChange={handle}
                    className={inputCls + ' font-medium'}
                  >
                    <option value="" disabled>Selecione uma opção...</option>
                    <option>Locação de Máquinas Linha Amarela</option>
                    <option>Transporte Rodoviário / Pesado</option>
                    <option>Operação de Intralogística</option>
                    <option>Movimentação de Carga Pesada</option>
                    <option>Outra Necessidade</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Detalhes da Demanda</label>
                  <textarea
                    name="mensagem" rows={3} value={form.mensagem} onChange={handle}
                    placeholder="Descreva brevemente sua necessidade..."
                    className={inputCls + ' resize-none'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#2B5C85] text-white font-extrabold py-5 rounded-xl shadow-lg hover:bg-[#1A3B56] transition-all flex items-center justify-center gap-3 text-lg group disabled:opacity-70"
                >
                  {loading ? 'Enviando…' : (
                    <>
                      Enviar Solicitação
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
