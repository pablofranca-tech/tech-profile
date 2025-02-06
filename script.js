// Rolagem suave ao clicar nos links da navbar
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Remove o '#' do href
        const targetSection = document.getElementById(targetId);

        // Verifica se o targetSection existe antes de tentar acessar o offsetTop
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        } else {
            console.error(`Elemento com id "${targetId}" não encontrado.`);
        }
    });
});





