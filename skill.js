// Función para observar la visibilidad de la sección y activar la animación
document.addEventListener('DOMContentLoaded', () => {
    const habilidadesSection = document.getElementById('habilidades');
    const progressBars = document.querySelectorAll('.progreso');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Cuando la sección se vuelve visible, activar las barras de progreso
                progressBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = `${width}%`;
                });
            }
        });
    }, {
        threshold: 0.5  // Cuando al menos el 50% de la sección sea visible
    });

    observer.observe(habilidadesSection);
});
