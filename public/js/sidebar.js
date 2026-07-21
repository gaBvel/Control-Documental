/*Control del comportamiento retráctil del Sidebar*/
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggleSidebar');

    // Comprobación de seguridad por si los elementos no existen en el DOM
    if (!sidebar || !toggleBtn) return;

    // 1. Función para alternar el estado del sidebar
    const toggleSidebar = () => {
        sidebar.classList.toggle('collapsed');
        
        // Guardar la preferencia del usuario en localStorage
        const isCollapsed = sidebar.classList.contains('collapsed');
        localStorage.setItem('sidebar-collapsed', isCollapsed);
    };

    // 2. Escuchar el evento click en el botón
    toggleBtn.addEventListener('click', toggleSidebar);

    // 3. Restaurar la preferencia del usuario al cargar/navegar entre páginas
    const savedState = localStorage.getItem('sidebar-collapsed');
    if (savedState === 'true') {
        sidebar.classList.add('collapsed');
    }
});