document.addEventListener("DOMContentLoaded", () => {
  // Inicialização segura dos ícones
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  // Elementos cacheados
  const header = document.getElementById("main-header");
  const headerLogo = document.getElementById("header-logo");
  const desktopMenu = document.getElementById("desktop-menu");
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeBtn = document.getElementById("closeBtn");
  const menuLinks = mobileMenu?.querySelectorAll("a");

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
  // Lógica de Scroll (Otimizada com requestAnimationFrame)
  // Mantém a lógica original da Seday (aplica/remove brightness invertido)
  // ==========================================
  let ticking = false;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      // SCROLLED (Fundo Branco)
      header?.classList.add("scrolled");

      // Tira o filtro branco para a logo original (azul/cinza) aparecer
      headerLogo?.classList.remove("brightness-0", "invert");

      // Menu desktop escuro
      if (desktopMenu) {
        desktopMenu.classList.remove("text-slate-300");
        desktopMenu.classList.add("text-slate-900");
      }

      // Botão hambúrguer escuro
      if (menuBtn) {
        menuBtn.classList.remove("text-white");
        menuBtn.classList.add("text-slate-900");
      }
    } else {
      // TOP (Fundo Azul Escuro)
      header?.classList.remove("scrolled");

      // Força a logo a ficar 100% branca para contrastar
      headerLogo?.classList.add("brightness-0", "invert");

      // Menu desktop claro
      if (desktopMenu) {
        desktopMenu.classList.remove("text-slate-900");
        desktopMenu.classList.add("text-slate-300");
      }

      // Botão hambúrguer branco
      if (menuBtn) {
        menuBtn.classList.remove("text-slate-900");
        menuBtn.classList.add("text-white");
      }
    }

    ticking = false;
  };

  // Event Listener Otimizado
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(handleScroll);
      ticking = true;
    }
  }, { passive: true });

  // Executa uma vez no load para garantir o estado inicial correto
  handleScroll();
});