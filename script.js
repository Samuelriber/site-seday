document.addEventListener('DOMContentLoaded', () => {
    // Ativar ícones do Lucide
    lucide.createIcons();

    const header = document.getElementById('main-header');
    const headerLogo = document.getElementById('header-logo');
    const desktopMenu = document.getElementById('desktop-menu');
    const menuBtn = document.getElementById('menuBtn');

    // Mudar estilo do Header ao rolar a página
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            
            // Ajustar cores para o estado "scrolled" (Fundo branco)
            if (headerLogo) headerLogo.classList.remove('brightness-0', 'invert');
            if (desktopMenu) {
                desktopMenu.classList.remove('text-slate-300');
                desktopMenu.classList.add('text-slate-900');
            }
            if (menuBtn) {
                menuBtn.classList.remove('text-white');
                menuBtn.classList.add('text-slate-900');
            }
        } else {
            header.classList.remove('scrolled');
            
            // Voltar para o estado inicial (Fundo escuro/transparente)
            if (headerLogo) headerLogo.classList.add('brightness-0', 'invert');
            if (desktopMenu) {
                desktopMenu.classList.add('text-slate-300');
                desktopMenu.classList.remove('text-slate-900');
            }
            if (menuBtn) {
                menuBtn.classList.add('text-white');
                menuBtn.classList.remove('text-slate-900');
            }
        }
    });
});