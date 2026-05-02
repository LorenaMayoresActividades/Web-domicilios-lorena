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
            cambiarPestana('inicio');
        });