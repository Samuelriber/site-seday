document.addEventListener("DOMContentLoaded", () => {
  // Inicialização dos ícones Lucide
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  // Inicialização Animações AOS
  if (window.AOS) {
    AOS.init({
      once: true,
      duration: 800,
      offset: 50,
      easing: 'ease-in-out-cubic',
    });
  }

  // Cache dos elementos do DOM
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
  // Lógica de Scroll do Cabeçalho
  // Muda de Escuro (Topo) para Claro (Rolagem)
  // ==========================================
  let ticking = false;

  const handleScroll = () => {
    if (window.scrollY > 60) {
      // ESTADO: Página Rolada (Fundo Branco com Blur)
      header?.classList.add("scrolled");
      header?.classList.remove("bg-[#0f172a]/95");

      // Tira o filtro branco da logo da Seday para mostrar a original (Azul/Cinza)
      if (headerLogo) {
        headerLogo.classList.remove("brightness-0", "invert");
      }

      // Muda textos para escuro
      if (desktopMenu) {
        desktopMenu.classList.remove("text-slate-300");
        desktopMenu.classList.add("text-[#0f172a]");
      }
      if (menuBtn) {
        menuBtn.classList.remove("text-white");
        menuBtn.classList.add("text-[#0f172a]");
      }
    } else {
      // ESTADO: Topo da Página (Fundo Escuro Transparente)
      header?.classList.remove("scrolled");
      header?.classList.add("bg-[#0f172a]/95");

      // Coloca o filtro branco na logo da Seday para destacar no fundo escuro
      if (headerLogo) {
        headerLogo.classList.add("brightness-0", "invert");
      }

      // Muda textos de volta para claro
      if (desktopMenu) {
        desktopMenu.classList.remove("text-[#0f172a]");
        desktopMenu.classList.add("text-slate-300");
      }
      if (menuBtn) {
        menuBtn.classList.remove("text-[#0f172a]");
        menuBtn.classList.add("text-white");
      }
    }

    // Controle do botão Voltar ao Topo
    if (window.scrollY > 400) {
      backToTopBtn?.classList.remove("opacity-0", "pointer-events-none", "translate-y-10");
    } else {
      backToTopBtn?.classList.add("opacity-0", "pointer-events-none", "translate-y-10");
    }

    ticking = false;
  };

  // Escuta o scroll performático
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(handleScroll);
      ticking = true;
    }
  }, { passive: true });

  handleScroll(); // Trigger inicial

  // ==========================================
  // Banner de Cookies LGPD
  // ==========================================
  const cookieBanner = document.getElementById("cookieBanner");
  const acceptCookiesBtn = document.getElementById("acceptCookies");

  if (cookieBanner && acceptCookiesBtn) {
    if (!localStorage.getItem("seday_cookies_accepted")) {
      setTimeout(() => {
        cookieBanner.classList.remove("translate-y-full");
      }, 1500);
    }

    acceptCookiesBtn.addEventListener("click", () => {
      localStorage.setItem("seday_cookies_accepted", "true");
      cookieBanner.classList.add("translate-y-full");
    });
  }
});