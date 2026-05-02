        // Función de Javascript para cambiar de pestaña
        function cambiarPestana(idSeccion) {
            // Oculta todas las secciones
            document.querySelectorAll('section').forEach(section => {
                section.style.display = 'none';
            });

            // Desactiva el botón 'activo' del menú de navegación principal
            document.querySelectorAll('.menu-links .btn-menu').forEach(button => {
                button.classList.remove('activo');
            });

            // Muestra la sección deseada
            const seccionActiva = document.getElementById(idSeccion);
            if (seccionActiva) {
                seccionActiva.style.display = 'block';
            }

            // Si la sección activa es una de las del menú superior, activa el botón correspondiente
            // Nota: Las páginas legales no activarán un botón del menú superior.
            const botonActivo = document.getElementById('btn-' + idSeccion);
            if (botonActivo && (idSeccion !== 'terminos-condiciones' && idSeccion !== 'politica-privacidad' && idSeccion !== 'politica-cookies' && idSeccion !== 'aviso-legal')) {
                botonActivo.classList.add('activo');
            }
        }

        // Asegúrate de que la sección de inicio se muestre al cargar
        document.addEventListener('DOMContentLoaded', () => {
    // 1. Mostrar la sección de inicio al cargar
    cambiarPestana('inicio');

    // 2. Control del Formulario de Contacto (NUEVO)
    const formulario = document.getElementById('miFormulario');
    if (formulario) {
        formulario.addEventListener('submit', async (e) => {
            e.preventDefault(); // Evita que la página se recargue o se vaya a blanco

            const formData = new FormData(formulario);
            
            try {
                // Envío silencioso a Netlify
                await fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams(formData).toString(),
                });

                // Mensaje emergente de éxito
                alert("¡Mensaje enviado con éxito! Lorena te responderá lo antes posible.");
                
                // Limpiar el formulario
                formulario.reset();

            } catch (error) {
                alert("Hubo un error al enviar el formulario. Por favor, revisa tu conexión o inténtalo más tarde.");
            }
        });
    }
});
        