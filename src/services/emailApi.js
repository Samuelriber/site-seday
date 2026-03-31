/**
 * emailApi.js — Seday Transportes
 *
 * Envia os dados do formulário de contato para o
 * backend PHP hospedado no mesmo domínio.
 *
 * @param {Object} formData - Campos do formulário
 * @param {string} formData.nome
 * @param {string} formData.empresa
 * @param {string} formData.email
 * @param {string} formData.telefone
 * @param {string} formData.servico
 * @param {string} [formData.mensagem]
 *
 * @returns {Promise<{ ok: boolean, message: string }>}
 * @throws {Error} Em caso de falha de rede ou resposta inesperada
 */
export async function sendContactEmail(formData) {
  const response = await fetch('/send-email.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })

  let payload

  try {
    payload = await response.json()
  } catch {
    // O servidor retornou algo que não é JSON válido
    throw new Error('Resposta inesperada do servidor. Tente novamente.')
  }

  // HTTP 400 — campos faltando ou e-mail inválido
  if (response.status === 400) {
    throw new Error(payload?.message ?? 'Dados inválidos. Verifique os campos e tente novamente.')
  }

  // HTTP 405 — só ocorre se o endpoint for acessado incorretamente
  if (response.status === 405) {
    throw new Error('Método não permitido.')
  }

  // HTTP 502 — mail() do PHP falhou
  if (response.status === 502) {
    throw new Error(
      payload?.message ?? 'Não foi possível enviar o e-mail. Tente novamente em alguns instantes.'
    )
  }

  // Qualquer outro status não-OK
  if (!response.ok) {
    throw new Error(payload?.message ?? `Erro no servidor (HTTP ${response.status}).`)
  }

  return payload // { ok: true, message: '...' }
}
