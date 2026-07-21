document.addEventListener('DOMContentLoaded', () => {
    const modalPerfil = document.getElementById('modalPerfil');
    const btnPerfil = document.getElementById('btnPerfil');
    const closePerfil = document.getElementById('closePerfil');
    const btnCerrarModalPerfil = document.getElementById('btnCerrarModalPerfil');

    // Función para abrir modal
    if (btnPerfil && modalPerfil) {
        btnPerfil.addEventListener('click', (e) => {
            e.preventDefault();
            modalPerfil.classList.add('active');
        });
    }

    // Funciones para cerrar modal
    const cerrarModal = () => {
        if (modalPerfil) modalPerfil.classList.remove('active');
    };

    if (closePerfil) closePerfil.addEventListener('click', cerrarModal);
    if (btnCerrarModalPerfil) btnCerrarModalPerfil.addEventListener('click', cerrarModal);

    // Cerrar al hacer clic fuera del recuadro blanco (en el overlay)
    window.addEventListener('click', (e) => {
        if (e.target === modalPerfil) {
            cerrarModal();
        }
    });
});