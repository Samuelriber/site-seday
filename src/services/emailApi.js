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
  const response = await fetch('./send-email.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })

  // 404 → arquivo PHP não encontrado na hospedagem
  if (response.status === 404) {
    console.error(
      '[emailApi] 404 — send-email.php não encontrado. ' +
      'Verifique se o arquivo está na raiz do domínio na Hostinger.'
    )
    throw new Error('Serviço de e-mail não encontrado no servidor (404). Contate o suporte.')
  }

  let payload
  let rawText = ''

  try {
    rawText = await response.text()   // lê como texto primeiro
    payload = JSON.parse(rawText)     // tenta converter para JSON
  } catch {
    // O servidor retornou algo que não é JSON válido
    // (HTML de erro, warning do PHP, página 500 da hospedagem, etc.)
    console.error(
      `[emailApi] Resposta não-JSON recebida do servidor (HTTP ${response.status}):`,
      rawText
    )
    throw new Error(
      `Resposta inesperada do servidor (HTTP ${response.status}). ` +
      'Verifique o console para detalhes.'
    )
  }

  // Loga o campo debug do PHP se presente — útil para diagnóstico remoto
  if (payload?.debug) {
    console.warn('[emailApi] Debug do servidor PHP:', payload.debug)
  }

  // HTTP 400 — campos faltando ou e-mail inválido
  if (response.status === 400) {
    throw new Error(
      payload?.message ?? 'Dados inválidos. Verifique os campos e tente novamente.'
    )
  }

  // HTTP 405 — só ocorre se o endpoint for acessado incorretamente
  if (response.status === 405) {
    throw new Error('Método não permitido.')
  }

  // HTTP 502 — mail() do PHP falhou
  if (response.status === 502) {
    throw new Error(
      payload?.message ??
      'Não foi possível enviar o e-mail. Tente novamente em alguns instantes.'
    )
  }

  // Qualquer outro status não-OK
  if (!response.ok) {
    throw new Error(
      payload?.message ?? `Erro no servidor (HTTP ${response.status}).`
    )
  }

  return payload // { ok: true, message: '...' }
}
