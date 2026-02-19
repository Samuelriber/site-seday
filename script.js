document.addEventListener("DOMContentLoaded", () => {
  // Inicialização Segura: Ícones
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  // Inicialização Segura: Animações de Scroll (AOS)
  if (window.AOS) {
    AOS.init({
      once: true, // A animação ocorre apenas na primeira vez que rola a página
      duration: 800, // Duração da animação (0.8 segundos)
      offset: 50, // Começa a animar 50px antes do elemento aparecer
    });
  }

  // Elementos do DOM Cacheados
  const header = document.getElementById("main-header");
  const headerLogo = document.getElementById("header-logo");
  const desktopMenu = document.getElementById("desktop-menu");
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeBtn = document.getElementById("closeBtn");
  const menuLinks = mobileMenu?.querySelectorAll("a");
  const backToTopBtn = document.getElementById("backToTop");

  // ==========================================
  // Lógica do Menu Mobile
  // ==========================================
  const toggleMenu = () => {
    mobileMenu?.classList.toggle("hidden");
  };

  menuBtn?.addEventListener("click", toggleMenu);
  closeBtn?.addEventListener("click", toggleMenu);
  menuLinks?.forEach((a) => a.addEventListener("click", toggleMenu));

  // ==========================================
  // Lógica do Botão "Voltar ao Topo"
  // ==========================================
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ==========================================
  // Lógica de Scroll (Otimizada a 60fps)
  // Mantém a logo Original da Seday usando filtros CSS
  // ==========================================
  let ticking = false;

  const handleScroll = () => {
    // 1. Controle do Cabeçalho e Logo
    if (window.scrollY > 50) {
      header?.classList.add("scrolled");
      headerLogo?.classList.remove("brightness-0", "invert"); // Cor Original (Colorida)

      if (desktopMenu) {
        desktopMenu.classList.remove("text-slate-300");
        desktopMenu.classList.add("text-slate-900");
      }
      if (menuBtn) {
        menuBtn.classList.remove("text-white");
        menuBtn.classList.add("text-slate-900");
      }
    } else {
      header?.classList.remove("scrolled");
      headerLogo?.classList.add("brightness-0", "invert"); // Filtro Branco no topo

      if (desktopMenu) {
        desktopMenu.classList.remove("text-slate-900");
        desktopMenu.classList.add("text-slate-300");
      }
      if (menuBtn) {
        menuBtn.classList.remove("text-slate-900");
        menuBtn.classList.add("text-white");
      }
    }

    // 2. Controle do botão "Voltar ao Topo"
    if (window.scrollY > 400) {
      backToTopBtn?.classList.remove("opacity-0", "pointer-events-none", "translate-y-10");
    } else {
      backToTopBtn?.classList.add("opacity-0", "pointer-events-none", "translate-y-10");
    }

    ticking = false;
  };

  // Escuta o scroll sem pesar o navegador
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(handleScroll);
      ticking = true;
    }
  }, { passive: true });

  handleScroll(); // Checagem inicial

  // ==========================================
  // Banner de Cookies (LGPD)
  // ==========================================
  const cookieBanner = document.getElementById("cookieBanner");
  const acceptCookiesBtn = document.getElementById("acceptCookies");

  if (cookieBanner && acceptCookiesBtn) {
    // Verifica se já aceitou antes
    if (!localStorage.getItem("seday_cookies_accepted")) {
      // Exibe após 1,5 segundos suavemente
      setTimeout(() => {
        cookieBanner.classList.remove("translate-y-full");
      }, 1500);
    }

    // Ação de Clique
    acceptCookiesBtn.addEventListener("click", () => {
      localStorage.setItem("seday_cookies_accepted", "true");
      cookieBanner.classList.add("translate-y-full"); // Esconde de volta
    });
  }
});