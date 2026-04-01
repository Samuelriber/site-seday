<?php
// ─────────────────────────────────────────────
//  Seday Transportes — send-email.php
//  Recebe POST do formulário de orçamento e
//  envia e-mail via mail() do PHP/Hostinger.
// ─────────────────────────────────────────────

// Captura qualquer output espúrio (warnings, notices) para
// garantir que apenas JSON válido seja enviado ao cliente.
ob_start();

// ── CORS ──────────────────────────────────────
header('Access-Control-Allow-Origin: https://www.seday.com.br');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=UTF-8');

// Preflight OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// ── Aceita apenas POST ────────────────────────
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Método não permitido.']);
    exit;
}

// ── Lê e decodifica body JSON ─────────────────
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);

// Suporte a form-data (fallback)
if (empty($data)) {
    $data = $_POST;
}

// ── Validação dos campos obrigatórios ─────────
$required = ['nome', 'empresa', 'email', 'telefone', 'servico'];
foreach ($required as $field) {
    if (empty(trim($data[$field] ?? ''))) {
        http_response_code(400);
        echo json_encode(['ok' => false, 'message' => "Campo obrigatório ausente: {$field}"]);
        exit;
    }
}

if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'message' => 'E-mail inválido.']);
    exit;
}

// ── Honeypot anti-spam ──────────────────────────
// O campo 'website' é invisível para humanos (CSS display:none no React).
// Bots o preenchem automaticamente. Retornamos 200 para não alertá-los.
if (!empty($data['website'] ?? '')) {
    http_response_code(200);
    echo json_encode(['ok' => true, 'message' => 'Mensagem recebida.']);
    exit;
}

// ── Validação de mensagem (opcional, mínimo 5 chars se preenchida) ───
$mensagemRaw = trim($data['mensagem'] ?? '');
if (strlen($mensagemRaw) > 0 && strlen($mensagemRaw) < 5) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'message' => 'A mensagem deve ter pelo menos 5 caracteres.']);
    exit;
}

// ── Sanitização ───────────────────────────────
$nome     = htmlspecialchars(trim($data['nome']),     ENT_QUOTES, 'UTF-8');
$empresa  = htmlspecialchars(trim($data['empresa']),  ENT_QUOTES, 'UTF-8');
$email    = filter_var(trim($data['email']),          FILTER_SANITIZE_EMAIL);
$telefone = htmlspecialchars(trim($data['telefone']), ENT_QUOTES, 'UTF-8');
$servico  = htmlspecialchars(trim($data['servico']),  ENT_QUOTES, 'UTF-8');
$mensagem = htmlspecialchars(trim($data['mensagem'] ?? ''), ENT_QUOTES, 'UTF-8');

// ── Configuração do e-mail ────────────────────
$to      = 'comercial@seday.com.br';
$subject = "=?UTF-8?B?" . base64_encode("Novo Orçamento via Site — {$empresa}") . "?=";

$from_name  = 'Site Seday';
$from_email = 'noreply@seday.com.br';

// ── Cores da marca Seday ──────────────────────
//  seday-blue  #386B9B
//  seday-dark  #373435
//  seday-gray  #5C5C5E

$body = <<<HTML
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Novo Orçamento — Seday</title>
</head>
<body style="margin:0;padding:0;background-color:#f0f4f8;font-family:'Segoe UI',system-ui,Arial,sans-serif;">

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f4f8;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:4px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.10);">

          <!-- Header -->
          <tr>
            <td style="background-color:#373435;padding:32px 40px;text-align:center;">
              <p style="margin:0;color:#386B9B;font-size:11px;font-weight:700;letter-spacing:4px;text-transform:uppercase;">SEDAY TRANSPORTES E EQUIPAMENTOS</p>
              <h1 style="margin:8px 0 0;color:#ffffff;font-size:22px;font-weight:900;letter-spacing:1px;text-transform:uppercase;">Nova Solicitação de Orçamento</h1>
              <div style="height:3px;width:60px;background:#386B9B;margin:16px auto 0;"></div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 32px;">
              <p style="margin:0 0 24px;color:#5C5C5E;font-size:14px;line-height:1.6;">
                Uma nova solicitação de orçamento foi recebida pelo formulário do site. Confira os dados abaixo e entre em contato com o cliente o quanto antes.
              </p>

              <!-- Data table -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">

                <tr>
                  <td style="padding:12px 16px;background:#f8fafc;border-left:4px solid #386B9B;font-size:11px;font-weight:700;color:#386B9B;letter-spacing:2px;text-transform:uppercase;width:35%;">Nome</td>
                  <td style="padding:12px 16px;background:#f8fafc;font-size:14px;color:#373435;font-weight:600;">{$nome}</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;background:#ffffff;border-left:4px solid #5C5C5E;font-size:11px;font-weight:700;color:#5C5C5E;letter-spacing:2px;text-transform:uppercase;">Empresa</td>
                  <td style="padding:12px 16px;background:#ffffff;font-size:14px;color:#373435;font-weight:600;">{$empresa}</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;background:#f8fafc;border-left:4px solid #386B9B;font-size:11px;font-weight:700;color:#386B9B;letter-spacing:2px;text-transform:uppercase;">E-mail</td>
                  <td style="padding:12px 16px;background:#f8fafc;font-size:14px;color:#373435;"><a href="mailto:{$email}" style="color:#386B9B;font-weight:600;text-decoration:none;">{$email}</a></td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;background:#ffffff;border-left:4px solid #5C5C5E;font-size:11px;font-weight:700;color:#5C5C5E;letter-spacing:2px;text-transform:uppercase;">Telefone</td>
                  <td style="padding:12px 16px;background:#ffffff;font-size:14px;color:#373435;font-weight:600;">{$telefone}</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;background:#f8fafc;border-left:4px solid #386B9B;font-size:11px;font-weight:700;color:#386B9B;letter-spacing:2px;text-transform:uppercase;">Serviço</td>
                  <td style="padding:12px 16px;background:#f8fafc;font-size:14px;color:#373435;font-weight:600;">{$servico}</td>
                </tr>

HTML;

if (!empty($mensagem)) {
    $body .= <<<HTML
                <tr>
                  <td colspan="2" style="padding:16px;background:#e8f0f7;border-left:4px solid #386B9B;">
                    <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#386B9B;letter-spacing:2px;text-transform:uppercase;">Detalhes da Demanda</p>
                    <p style="margin:0;font-size:14px;color:#373435;line-height:1.7;">{$mensagem}</p>
                  </td>
                </tr>
HTML;
}

$body .= <<<HTML
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:0 40px 40px;text-align:center;">
              <a href="mailto:{$email}" style="display:inline-block;background-color:#386B9B;color:#ffffff;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:14px 32px;margin-top:8px;">
                RESPONDER AO CLIENTE
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#373435;padding:24px 40px;text-align:center;">
              <p style="margin:0;color:#5C5C5E;font-size:11px;letter-spacing:1px;">
                © 2025 Seday Transportes e Equipamentos — Este e-mail foi gerado automaticamente pelo site
                <a href="https://www.seday.com.br" style="color:#386B9B;text-decoration:none;">www.seday.com.br</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
HTML;

// ── Headers do e-mail ─────────────────────────
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: {$from_name} <{$from_email}>\r\n";
$headers .= "Reply-To: {$nome} <{$email}>\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// ── Envio ─────────────────────────────────────
try {
    // Descarta qualquer output espúrio acumulado antes de enviar a resposta
    ob_end_clean();

    $sent = mail($to, $subject, $body, $headers);

    if ($sent) {
        http_response_code(200);
        echo json_encode(['ok' => true, 'message' => 'E-mail enviado com sucesso.']);
    } else {
        $lastError = error_get_last();
        $detail    = $lastError['message'] ?? 'Função mail() retornou false sem detalhe adicional.';
        http_response_code(502);
        echo json_encode([
            'ok'      => false,
            'message' => 'Falha ao enviar o e-mail. Verifique as configurações de SMTP da hospedagem.',
            'debug'   => $detail,
        ]);
    }
} catch (Throwable $e) {
    ob_end_clean();
    http_response_code(500);
    echo json_encode([
        'ok'      => false,
        'message' => 'Erro interno no servidor.',
        'debug'   => $e->getMessage(),
    ]);
}
