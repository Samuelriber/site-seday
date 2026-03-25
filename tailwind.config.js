/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── BACKGROUNDS ── */
        "background":                    "#0f172a",  /* slate-900 */
        "surface":                       "#1e293b",  /* slate-800 */
        "surface-container-low":         "#0f172a",
        "surface-container":             "#1e293b",  /* slate-800 */
        "surface-container-high":        "#1e293b",
        "surface-container-highest":     "#334155",  /* slate-700 */
        "surface-dim":                   "#0f172a",
        "surface-bright":                "#475569",
        "surface-variant":               "#0f172a",

        /* ── TEXT ── */
        "on-surface":                    "#f8fafc",  /* slate-50  */
        "on-surface-variant":            "#94a3b8",  /* slate-400 */
        "on-background":                 "#f8fafc",
        "on-primary":                    "#ffffff",
        "on-secondary":                  "#f8fafc",
        "on-tertiary":                   "#f8fafc",
        "on-primary-container":          "#dbeafe",
        "on-secondary-container":        "#f1f5f9",
        "on-tertiary-container":         "#94a3b8",
        "on-tertiary-fixed":             "#0f172a",
        "on-tertiary-fixed-variant":     "#475569",
        "on-secondary-fixed":            "#0f172a",
        "on-secondary-fixed-variant":    "#334155",
        "on-primary-fixed":              "#1e3a8a",
        "on-primary-fixed-variant":      "#1d4ed8",
        "on-error":                      "#ffffff",
        "on-error-container":            "#ffdad6",
        "inverse-on-surface":            "#1e293b",

        /* ── MARCA OFICIAL SEDAY ── */
        "seday-blue":                    "#386B9B",  /* botões primários, destaques, ícones, overlays */
        "seday-gray":                    "#5C5C5E",  /* textos secundários, bordas sutis */
        "seday-dark":                    "#373435",  /* títulos, fundos escuros, rodapé */

        /* ── ACCENT / PRIMARY ── */
        "primary":                       "#386B9B",  /* ← seday-blue oficial */
        "primary-container":             "#2d5580",
        "primary-fixed":                 "#5a8cbf",
        "primary-fixed-dim":             "#2d6090",
        "surface-tint":                  "#386B9B",
        "inverse-primary":               "#a8c8e8",

        /* ── SECONDARY ── */
        "secondary":                     "#94a3b8",  /* slate-400 = silver */
        "secondary-container":           "#64748b",
        "secondary-fixed":               "#e2e8f0",
        "secondary-fixed-dim":           "#cbd5e1",

        /* ── TERTIARY ── */
        "tertiary":                      "#94a3b8",
        "tertiary-container":            "#1e293b",
        "tertiary-fixed":                "#e2e8f0",
        "tertiary-fixed-dim":            "#cbd5e1",

        /* ── UTILITY ── */
        "outline":                       "#64748b",
        "outline-variant":               "#334155",  /* slate-700 */
        "error":                         "#ef4444",
        "error-container":               "#991b1b",
        "inverse-surface":               "#f8fafc",
        "surface-container-lowest":      "#020617",
      },
      fontFamily: {
        "headline": ["'Segoe UI'", "system-ui", "-apple-system", "Arial", "sans-serif"],
        "body":     ["'Segoe UI'", "system-ui", "-apple-system", "Arial", "sans-serif"],
        "label":    ["'Segoe UI'", "system-ui", "-apple-system", "Arial", "sans-serif"],
        "sans":     ["'Segoe UI'", "system-ui", "-apple-system", "Arial", "sans-serif"],
      },
      borderRadius: { "DEFAULT": "0px", "lg": "0px", "xl": "0px", "full": "9999px" },
    },
  },
  plugins: [],
}
