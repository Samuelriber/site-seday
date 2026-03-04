document.addEventListener("DOMContentLoaded", () => {
  // Ícones
  if (window.lucide) window.lucide.createIcons();

  // Animações de entrada suaves
  if (window.AOS) {
    AOS.init({ once: true, duration: 600, offset: 50 });
  }

  // --- MENU MOBILE ---
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeBtn = document.getElementById("closeBtn");
  const toggleMenu = () => mobileMenu?.classList.toggle("hidden");
  
  menuBtn?.addEventListener("click", toggleMenu);
  closeBtn?.addEventListener("click", toggleMenu);
  mobileMenu?.querySelectorAll("a").forEach(a => a.addEventListener("click", toggleMenu));

  // --- BOTÃO VOLTAR AO TOPO ---
  const backToTopBtn = document.getElementById("backToTop");
  backToTopBtn?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const header = document.getElementById("main-header");
  const headerTrigger = document.getElementById("header-trigger");
  if (headerTrigger && header) {
    const headerObserver = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) {
        header.classList.add("scrolled");
        menuBtn?.classList.remove("text-white");
        menuBtn?.classList.add("text-[#0f172a]");
      } else {
        header.classList.remove("scrolled");
        menuBtn?.classList.add("text-white");
        menuBtn?.classList.remove("text-[#0f172a]");
      }
    }, { threshold: 0 });
    headerObserver.observe(headerTrigger);
  }

  const btnTrigger = document.getElementById("backtotop-trigger");
  if (btnTrigger && backToTopBtn) {
    const btnObserver = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) {
        backToTopBtn.classList.remove("opacity-0", "pointer-events-none", "translate-y-10");
      } else {
        backToTopBtn.classList.add("opacity-0", "pointer-events-none", "translate-y-10");
      }
    });
    
    btnObserver.observe(btnTrigger);
  }

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