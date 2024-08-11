// Menu navbar
  // JavaScript para alternar la visibilidad del menú
  document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');

    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
});
 // JavaScript para añadir la clase activa a los enlaces
 document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    function setActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
        
        links.forEach((link) => link.classList.remove('active'));
        links[index].classList.add('active');
    }

    setActiveLink();
    window.addEventListener('scroll', setActiveLink);
});

// Animacion para los h1
document.addEventListener("DOMContentLoaded", function() {
    // Crear una instancia de Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animado');
            } else {
                entry.target.classList.remove('animado');
            }
        });
    }, { threshold: 0.1 }); // Ajusta el umbral según sea necesario

    // Seleccionar todos los h1 con la clase 'animacion'
    document.querySelectorAll('.animacion').forEach(h1 => {
        observer.observe(h1);
    });
});