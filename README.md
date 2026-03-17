# Seday Transportes e Equipamentos — Site Institucional

Site institucional da **Seday Transportes e Equipamentos**, empresa especializada em locação de máquinas linha amarela, transporte pesado e intralogística no Sudeste do Brasil.

**Live:** [samuelriber.github.io/site-seday](https://samuelriber.github.io/site-seday/)

---

## Stack

| Tecnologia | Versão |
|---|---|
| React | 18 |
| Vite | 5 |
| Tailwind CSS | 3 |
| lucide-react | 0.453 |
| react-helmet-async | 3 |
| AOS (Animate on Scroll) | 2.3 |

---

## Estrutura

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx       # Navbar fixa com glassmorphism + toggle de logo
│   │   └── Footer.jsx       # Rodapé + cookie banner
│   ├── sections/
│   │   ├── Hero.jsx         # Banner principal (vídeo desktop / imagem mobile)
│   │   ├── Estatisticas.jsx # Cartão flutuante com 4 métricas
│   │   ├── Servicos.jsx     # 6 cards de serviços
│   │   ├── PorQueSeday.jsx  # 4 diferenciais
│   │   ├── Frota.jsx        # Galeria de equipamentos (Rodoviária + Linha Amarela)
│   │   ├── MVV.jsx          # Missão, Visão e Valores
│   │   ├── Clientes.jsx     # Carrossel CSS de logos de clientes
│   │   ├── FAQ.jsx          # Perguntas frequentes com <details>/<summary>
│   │   ├── Contato.jsx      # Formulário controlado + mapa Google
│   │   └── QuemSomos.jsx    # História da empresa + Grupo Seday
│   └── ui/
│       ├── SEO.jsx          # react-helmet-async: meta, OG, Twitter Cards, JSON-LD
│       ├── WhatsAppButton.jsx
│       └── BackToTop.jsx
├── App.jsx
├── main.jsx
└── index.css                # Tailwind directives + animações do carrossel
public/
├── img/                     # Logos, fotos e vídeo
├── Equipamentos/            # Fotos dos equipamentos da frota
├── robots.txt
└── sitemap.xml
```

---

## Desenvolvimento local

```bash
npm install
npm run dev        # http://localhost:5173/site-seday/
```

## Build

```bash
npm run build      # gera dist/
npm run preview    # pré-visualiza o build em http://localhost:4173/site-seday/
```

---

## Deploy

O deploy é automático via **GitHub Actions** (`.github/workflows/deploy.yml`).

Qualquer `push` para `main` dispara o pipeline:
1. `npm ci` — instala dependências
2. `npm run build` — gera `dist/`
3. `actions/deploy-pages` — publica em GitHub Pages

**Configuração necessária no repositório:** Settings → Pages → Source → **GitHub Actions**

---

## SEO

- `SEO.jsx` injeta todas as meta tags via `react-helmet-async`
- JSON-LD Schema.org: `LocalBusiness` + `Organization`
- Open Graph (WhatsApp / LinkedIn / Facebook) e Twitter Cards
- `public/robots.txt` e `public/sitemap.xml`
- Alt texts keyword-rich em todos os equipamentos e logos de clientes
- Hierarquia de headings h1 → h2 → h3 auditada

---

## Grupo Seday

| Empresa | Área |
|---|---|
| **Seday Transportes e Equipamentos** | Locação linha amarela e transporte pesado |
| [Avapex Transportes](https://www.avapex.com.br/) | Logística inteligente |
| [Innomach Equipamentos](https://www.innomach.com.br/) | Maquinário industrial |
