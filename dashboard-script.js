// Sistema de Centros Barriales - Dashboard Script
let currentUser = null;
let sessionToken = null;

// Datos simulados para la base de datos
const centrosData = [
    { id: 1, nombre: 'Centro Barrial Norte', direccion: 'Av. Principal 123, Zona Norte', telefono: '+54911-1234-5678', activo: true },
    { id: 2, nombre: 'Centro Barrial Sur', direccion: 'Calle Secundaria 456, Zona Sur', telefono: '+54911-2345-6789', activo: true },
    { id: 3, nombre: 'Centro Barrial Este', direccion: 'Plaza Central 789, Zona Este', telefono: '+54911-3456-7890', activo: true },
    { id: 4, nombre: 'Centro Barrial Oeste', direccion: 'Ruta Provincial 101, Zona Oeste', telefono: '+54911-4567-8901', activo: true },
    { id: 5, nombre: 'Centro Barrial Centro', direccion: 'Av. Central 200, Zona Centro', telefono: '+54911-5678-9012', activo: true },
    { id: 6, nombre: 'Centro Barrial Costa', direccion: 'Boulevard Costero 300, Zona Costa', telefono: '+54911-6789-0123', activo: true },
    { id: 7, nombre: 'Centro Barrial Montaña', direccion: 'Camino a la Montaña 400, Zona Montaña', telefono: '+54911-7890-1234', activo: true }
];

const usuariosData = {
    total: 1234,
    recientes: [
        { id: 1, nombre: 'Juan Pérez', email: 'juan@email.com', dni: '12.345.678', rol: 'Usuario' },
        { id: 2, nombre: 'María García', email: 'maria@email.com', dni: '23.456.789', rol: 'Usuario' },
        { id: 3, nombre: 'Carlos López', email: 'carlos@email.com', dni: '34.567.890', rol: 'Tallerista' }
    ]
};

const actividadesData = {
    total: 45,
    recientes: [
        { id: 1, nombre: 'Yoga para Principiantes', centro: 'Centro Norte', inscritos: 15, maxCupos: 20, estado: 'Activa' },
        { id: 2, nombre: 'Fútbol Infantil', centro: 'Centro Sur', inscritos: 22, maxCupos: 30, estado: 'Activa' },
        { id: 3, nombre: 'Taller de Informática', centro: 'Centro Centro', inscritos: 12, maxCupos: 25, estado: 'Por Iniciar' }
    ]
};

const inscripcionesData = {
    total: 892,
    pendientes: 23
};

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    checkSession();
    updateStats();
    initCharts();
    loadCentrosTable();
    setupEventListeners();
});

// Verificar sesión
function checkSession() {
    const savedUser = localStorage.getItem('currentUser');
    const savedToken = localStorage.getItem('sessionToken');
    
    if (!savedUser || !savedToken) {
        window.location.href = 'login-funcional.html';
        return;
    }
    
    currentUser = JSON.parse(savedUser);
    sessionToken = savedToken;
    
    // Actualizar UI con datos del usuario
    document.getElementById('userInfo').innerHTML = `
        <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-2">
            ${currentUser.name.charAt(0).toUpperCase()}
        </div>
        <h3 class="font-medium text-gray-900">${currentUser.name}</h3>
        <p class="text-xs text-gray-500">${currentUser.email}</p>
    `;
    
    document.getElementById('userAvatar').innerHTML = currentUser.name.charAt(0).toUpperCase();
}

// Actualizar estadísticas
function updateStats() {
    // Animar contadores
    animateCounter('centros-count', centrosData.length);
    animateCounter('usuarios-count', usuariosData.total);
    animateCounter('actividades-count', actividadesData.total);
    animateCounter('inscripciones-count', inscripcionesData.total);
}

// Animar contadores
function animateCounter(elementId, target) {
    const element = document.getElementById(elementId);
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 16);
}

// Inicializar gráficos
function initCharts() {
    // Gráfico de distribución por género
    const genderCtx = document.getElementById('genderChart');
    if (genderCtx) {
        new Chart(genderCtx, {
            type: 'doughnut',
            data: {
                labels: ['Masculino', 'Femenino', 'Otro'],
                datasets: [{
                    data: [620, 550, 64],
                    backgroundColor: [
                        '#3B82F6',
                        '#EC4899',
                        '#10B981'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    // Gráfico de actividades más demandadas
    const activitiesCtx = document.getElementById('activitiesChart');
    if (activitiesCtx) {
        new Chart(activitiesCtx, {
            type: 'bar',
            data: {
                labels: ['Yoga', 'Fútbol', 'Informática', 'Pintura', 'Música'],
                datasets: [{
                    label: 'Inscriptos',
                    data: [15, 22, 12, 8, 18],
                    backgroundColor: '#3B82F6',
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
}

// Cargar tabla de centros
function loadCentrosTable() {
    const tbody = document.getElementById('centros-table-body');
    if (tbody) {
        tbody.innerHTML = centrosData.map(centro => `
            <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${centro.nombre}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${centro.direccion}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${centro.telefono}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${centro.activo ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                        ${centro.activo ? 'Activo' : 'Inactivo'}
                    </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button onclick="editCentro(${centro.id})" class="text-blue-600 hover:text-blue-900 mr-3">Editar</button>
                    <button onclick="deleteCentro(${centro.id})" class="text-red-600 hover:text-red-900">Eliminar</button>
                </td>
            </tr>
        `).join('');
    }
}

// Configurar event listeners
function setupEventListeners() {
    // Toggle menu
    document.getElementById('menuToggle').addEventListener('click', function() {
        document.getElementById('sidebar').classList.toggle('hidden');
    });

    // Search functionality
    document.getElementById('searchInput').addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        performSearch(searchTerm);
    });
}

// Mostrar sección
function showSection(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('[id$="-section"]').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Mostrar sección seleccionada
    const targetSection = document.getElementById(sectionId + '-section');
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }
    
    // Actualizar navegación activa
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('bg-blue-50');
    });
    
    event.target.classList.add('bg-blue-50');
    
    showToast(`Sección ${sectionId} cargada`, 'info');
}

// Modal functions
function openModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Form handlers
function handleInscripcion(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const inscripcion = {
        nombre: formData.get('nombre'),
        email: formData.get('email'),
        dni: formData.get('dni'),
        actividad: formData.get('actividad'),
        fecha: new Date().toISOString(),
        id: Date.now()
    };
    
    // Guardar en localStorage (simulación de base de datos)
    let inscripciones = JSON.parse(localStorage.getItem('inscripciones') || '[]');
    inscripciones.push(inscripcion);
    localStorage.setItem('inscripciones', JSON.stringify(inscripciones));
    
    // Actualizar contador
    inscripcionesData.total++;
    document.getElementById('inscripciones-count').textContent = inscripcionesData.total.toLocaleString();
    
    closeModal('inscripcion-modal');
    showToast('Inscripción creada exitosamente', 'success');
    event.target.reset();
}

// CRUD operations
function editCentro(id) {
    const centro = centrosData.find(c => c.id === id);
    if (centro) {
        showToast(`Editando centro: ${centro.nombre}`, 'info');
        // Aquí se abriría un modal de edición
    }
}

function deleteCentro(id) {
    if (confirm('¿Estás seguro de eliminar este centro?')) {
        const index = centrosData.findIndex(c => c.id === id);
        if (index > -1) {
            centrosData.splice(index, 1);
            loadCentrosTable();
            showToast('Centro eliminado exitosamente', 'success');
            
            // Actualizar contador
            document.getElementById('centros-count').textContent = centrosData.length.toLocaleString();
        }
    }
}

// User menu functions
function toggleUserMenu() {
    document.getElementById('userMenu').classList.toggle('hidden');
}

function showProfile() {
    showToast('Abriendo perfil de usuario...', 'info');
    document.getElementById('userMenu').classList.add('hidden');
}

function showSettings() {
    showToast('Abriendo configuración...', 'info');
    document.getElementById('userMenu').classList.add('hidden');
}

function logout() {
    if (confirm('¿Estás seguro de cerrar sesión?')) {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('sessionToken');
        showToast('Sesión cerrada exitosamente', 'info');
        setTimeout(() => {
            window.location.href = 'login-funcional.html';
        }, 1500);
    }
}

// Search functionality
function performSearch(term) {
    if (!term) {
        return;
    }
    
    // Buscar en todas las secciones
    const results = {
        centros: centrosData.filter(c => c.nombre.toLowerCase().includes(term)),
        usuarios: usuariosData.recientes.filter(u => u.nombre.toLowerCase().includes(term)),
        actividades: actividadesData.recientes.filter(a => a.nombre.toLowerCase().includes(term))
    };
    
    console.log('Resultados de búsqueda:', results);
}

// Refresh data
function refreshData() {
    showLoading();
    setTimeout(() => {
        updateStats();
        loadCentrosTable();
        hideLoading();
        showToast('Datos actualizados', 'success');
    }, 1000);
}

// Loading functions
function showLoading() {
    document.getElementById('loadingOverlay').classList.remove('hidden');
}

function hideLoading() {
    document.getElementById('loadingOverlay').classList.add('hidden');
}

// Toast notification system
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast bg-white rounded-lg shadow-lg p-4 mb-2 flex items-center space-x-3 max-w-sm`;
    
    let icon = '';
    let textColor = '';
    
    switch(type) {
        case 'success':
            icon = '<i class="fas fa-check-circle text-green-500 text-xl"></i>';
            textColor = 'text-green-800';
            break;
        case 'error':
            icon = '<i class="fas fa-exclamation-circle text-red-500 text-xl"></i>';
            textColor = 'text-red-800';
            break;
        case 'warning':
            icon = '<i class="fas fa-exclamation-triangle text-yellow-500 text-xl"></i>';
            textColor = 'text-yellow-800';
            break;
        default:
            icon = '<i class="fas fa-info-circle text-blue-500 text-xl"></i>';
            textColor = 'text-blue-800';
    }
    
    toast.innerHTML = `
        ${icon}
        <div class="flex-1">
            <p class="${textColor} font-medium">${message}</p>
        </div>
        <button onclick="this.parentElement.remove()" class="text-gray-400 hover:text-gray-600">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    document.getElementById('toastContainer').appendChild(toast);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        toast.remove();
    }, 5000);
    
    // Trigger animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
}

// Click outside to close dropdowns
document.addEventListener('click', function(event) {
    const userMenu = document.getElementById('userMenu');
    const userButton = event.target.closest('button[onclick="toggleUserMenu()"]');
    
    if (!userButton && !userMenu.contains(event.target)) {
        userMenu.classList.add('hidden');
    }
});

// Close modals on escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.querySelectorAll('.fixed.inset-0').forEach(modal => {
            if (!modal.classList.contains('hidden')) {
                modal.classList.add('hidden');
            }
        });
    }
});

console.log('Dashboard - Sistema de Centros Barriales - Cargado correctamente');