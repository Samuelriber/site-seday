document.addEventListener("DOMContentLoaded", () => {
  // Lucide icons
  if (window.lucide) lucide.createIcons();

  const header = document.getElementById("main-header");
  const headerLogo = document.getElementById("header-logo");
  const desktopMenu = document.getElementById("desktop-menu");
  const menuBtn = document.getElementById("menuBtn");

  const mobileMenu = document.getElementById("mobileMenu");
  const closeBtn = document.getElementById("closeBtn");

  // Menu mobile
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => mobileMenu.classList.remove("hidden"));
  }
  if (closeBtn && mobileMenu) {
    closeBtn.addEventListener("click", () => mobileMenu.classList.add("hidden"));
  }
  if (mobileMenu) {
    mobileMenu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => mobileMenu.classList.add("hidden"));
    });
  }

  // Header scrolled
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY > 50;

    if (!header) return;

    if (scrolled) {
      header.classList.add("scrolled");

      // Logo volta à cor original no scrolled
      if (headerLogo) headerLogo.classList.remove("brightness-0", "invert");

      // Menu texto escuro
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
      header.classList.remove("scrolled");

      // Logo invertida (branca)
      if (headerLogo) headerLogo.classList.add("brightness-0", "invert");

      // Menu texto claro
      if (desktopMenu) {
        desktopMenu.classList.add("text-slate-300");
        desktopMenu.classList.remove("text-slate-900");
      }

      // Botão hambúrguer branco
      if (menuBtn) {
        menuBtn.classList.add("text-white");
        menuBtn.classList.remove("text-slate-900");
      }
    }
  });
});
