/**
 * API ADMIN - MUEBLERÍA ESPAÑA
 *
 * Centraliza todas las llamadas al backend para el panel de administración.
 * Conecta con Spring Boot backend.
 *
 * CONFIGURACIÓN: Cambiar API_BASE_URL según el entorno
 */

// ===================================
// CONFIGURACIÓN
// ===================================

/**
 * URL base del backend
 * Desarrollo: 'http://localhost:8080'
 * Producción: 'https://api.tudominio.com'
 */
const API_BASE_URL = 'http://localhost:8080';

// ===================================
// UTILIDADES
// ===================================

/**
 * Maneja errores de respuesta HTTP
 * @param {Response} response - Respuesta de fetch
 */
async function handleResponse(response) {
    if (!response.ok) {
        const error = await response.text();
        throw new Error(error || `Error HTTP: ${response.status}`);
    }

    // Si la respuesta es vacía (204 No Content), devolver null
    if (response.status === 204) {
        return null;
    }

    return await response.json();
}

/**
 * Realiza petición fetch con manejo de errores
 * @param {string} endpoint - Endpoint de la API
 * @param {Object} options - Opciones de fetch
 */
async function apiFetch(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;

    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        },
        ...options
    };

    try {
        const response = await fetch(url, defaultOptions);
        return await handleResponse(response);
    } catch (error) {
        console.error(`Error en ${endpoint}:`, error);
        throw error;
    }
}

// ===================================
// 1. GESTIÓN DE PRODUCTOS
// ===================================

/**
 * Obtiene todos los productos (incluye inactivos - Solo Admin)
 * @returns {Promise<Array>}
 */
async function obtenerTodosLosProductos() {
    return await apiFetch('/api/productos/admin/todos');
}

/**
 * Obtiene productos activos (para clientes)
 * @returns {Promise<Array>}
 */
async function obtenerProductosActivos() {
    return await apiFetch('/api/productos');
}

/**
 * Obtiene un producto por ID
 * @param {number} productId
 * @returns {Promise<Object>}
 */
async function obtenerProductoPorId(productId) {
    return await apiFetch(`/api/productos/${productId}`);
}

/**
 * Crea un nuevo producto
 * @param {Object} productoData - Datos del producto
 * @returns {Promise<Object>}
 */
async function crearProducto(productoData) {
    return await apiFetch('/api/productos/admin/add', {
        method: 'POST',
        body: JSON.stringify(productoData)
    });
}

/**
 * Actualiza un producto existente
 * @param {number} productId
 * @param {Object} productoData
 * @returns {Promise<Object>}
 */
async function actualizarProducto(productId, productoData) {
    return await apiFetch(`/api/productos/admin/update/${productId}`, {
        method: 'PUT',
        body: JSON.stringify(productoData)
    });
}

/**
 * Desactiva un producto
 * @param {number} productId
 * @returns {Promise<void>}
 */
async function desactivarProducto(productId) {
    return await apiFetch(`/api/productos/admin/desactivar/${productId}`, {
        method: 'DELETE'
    });
}

/**
 * Activa un producto
 * @param {number} productId
 * @returns {Promise<void>}
 */
async function activarProducto(productId) {
    return await apiFetch(`/api/productos/admin/activar/${productId}`, {
        method: 'DELETE'
    });
}

// ===================================
// 2. GESTIÓN DE CATEGORÍAS
// ===================================

/**
 * Obtiene todas las categorías
 * @returns {Promise<Array>}
 */
async function obtenerCategorias() {
    return await apiFetch('/api/categorias');
}

/**
 * Obtiene una categoría por ID
 * @param {number} categoriaId
 * @returns {Promise<Object>}
 */
async function obtenerCategoriaPorId(categoriaId) {
    return await apiFetch(`/api/categorias/${categoriaId}`);
}

/**
 * Crea una nueva categoría
 * @param {Object} categoriaData - {nombreCategoria, activo, idCategoriaPadre}
 * @returns {Promise<Object>}
 */
async function crearCategoria(categoriaData) {
    return await apiFetch('/api/categorias/admin/add', {
        method: 'POST',
        body: JSON.stringify(categoriaData)
    });
}

/**
 * Actualiza una categoría
 * @param {number} categoriaId
 * @param {Object} categoriaData
 * @returns {Promise<Object>}
 */
async function actualizarCategoria(categoriaId, categoriaData) {
    return await apiFetch(`/api/categorias/admin/update/${categoriaId}`, {
        method: 'PUT',
        body: JSON.stringify(categoriaData)
    });
}

/**
 * Desactiva una categoría
 * @param {number} categoriaId
 * @returns {Promise<void>}
 */
async function desactivarCategoria(categoriaId) {
    return await apiFetch(`/api/categorias/admin/desactivar/${categoriaId}`, {
        method: 'DELETE'
    });
}

/**
 * Activa una categoría
 * @param {number} categoriaId
 * @returns {Promise<void>}
 */
async function activarCategoria(categoriaId) {
    return await apiFetch(`/api/categorias/admin/activar/${categoriaId}`, {
        method: 'DELETE'
    });
}

// ===================================
// 3. GESTIÓN DE PROVEEDORES
// ===================================

/**
 * Obtiene todos los proveedores activos
 * @returns {Promise<Array>}
 */
async function obtenerProveedores() {
    return await apiFetch('/api/proveedores');
}

/**
 * Obtiene todos los proveedores (incluye inactivos - Admin)
 * @returns {Promise<Array>}
 */
async function obtenerTodosLosProveedores() {
    return await apiFetch('/api/proveedores/admin/todos');
}

/**
 * Obtiene un proveedor por ID
 * @param {number} proveedorId
 * @returns {Promise<Object>}
 */
async function obtenerProveedorPorId(proveedorId) {
    return await apiFetch(`/api/proveedores/${proveedorId}`);
}

/**
 * Crea un nuevo proveedor
 * @param {Object} proveedorData
 * @returns {Promise<Object>}
 */
async function crearProveedor(proveedorData) {
    return await apiFetch('/api/proveedores/admin/add', {
        method: 'POST',
        body: JSON.stringify(proveedorData)
    });
}

/**
 * Actualiza un proveedor
 * @param {number} proveedorId
 * @param {Object} proveedorData
 * @returns {Promise<Object>}
 */
async function actualizarProveedor(proveedorId, proveedorData) {
    return await apiFetch(`/api/proveedores/admin/update/${proveedorId}`, {
        method: 'PUT',
        body: JSON.stringify(proveedorData)
    });
}

/**
 * Desactiva un proveedor
 * @param {number} proveedorId
 * @returns {Promise<void>}
 */
async function desactivarProveedor(proveedorId) {
    return await apiFetch(`/api/proveedores/admin/desactivar/${proveedorId}`, {
        method: 'DELETE'
    });
}

/**
 * Activa un proveedor
 * @param {number} proveedorId
 * @returns {Promise<void>}
 */
async function activarProveedor(proveedorId) {
    return await apiFetch(`/api/proveedores/admin/activar/${proveedorId}`, {
        method: 'DELETE'
    });
}

// ===================================
// 4. GESTIÓN DE IMÁGENES DE PRODUCTOS
// ===================================

/**
 * Obtiene las imágenes de un producto
 * @param {number} productId
 * @returns {Promise<Array>}
 */
async function obtenerImagenesProducto(productId) {
    return await apiFetch(`/api/imagenes/producto/${productId}`);
}

/**
 * Agrega una imagen a un producto
 * @param {number} productId
 * @param {string} urlImagen
 * @returns {Promise<Object>}
 */
async function agregarImagenProducto(productId, urlImagen) {
    return await apiFetch('/api/imagenes/admin/add', {
        method: 'POST',
        body: JSON.stringify({
            idProducto: productId,
            urlImagen: urlImagen
        })
    });
}

/**
 * Actualiza una imagen
 * @param {number} imagenId
 * @param {string} urlImagen
 * @returns {Promise<Object>}
 */
async function actualizarImagenProducto(imagenId, urlImagen) {
    return await apiFetch(`/api/imagenes/admin/update/${imagenId}`, {
        method: 'PUT',
        body: JSON.stringify({ urlImagen })
    });
}

/**
 * Elimina una imagen
 * @param {number} imagenId
 * @returns {Promise<void>}
 */
async function eliminarImagenProducto(imagenId) {
    return await apiFetch(`/api/imagenes/admin/delete/${imagenId}`, {
        method: 'DELETE'
    });
}

// ===================================
// 5. GESTIÓN DE FACTURAS (YA IMPLEMENTADO)
// ===================================

/**
 * Obtiene todas las facturas
 * @returns {Promise<Array>}
 */
async function obtenerTodasLasFacturas() {
    return await apiFetch('/api/facturas/admin/todas');
}

/**
 * Obtiene facturas pendientes
 * @returns {Promise<Array>}
 */
async function obtenerFacturasPendientes() {
    return await apiFetch('/api/facturas/admin/pendientes');
}

/**
 * Obtiene facturas generadas
 * @returns {Promise<Array>}
 */
async function obtenerFacturasGeneradas() {
    return await apiFetch('/api/facturas/admin/generadas');
}

/**
 * Obtiene facturas enviadas
 * @returns {Promise<Array>}
 */
async function obtenerFacturasEnviadas() {
    return await apiFetch('/api/facturas/admin/enviadas');
}

/**
 * Marca una factura como generada
 * @param {number} facturaId
 * @returns {Promise<Object>}
 */
async function marcarFacturaComoGenerada(facturaId) {
    return await apiFetch(`/api/facturas/admin/${facturaId}/marcar-generada`, {
        method: 'PUT'
    });
}

/**
 * Marca una factura como enviada
 * @param {number} facturaId
 * @returns {Promise<Object>}
 */
async function marcarFacturaComoEnviada(facturaId) {
    return await apiFetch(`/api/facturas/admin/${facturaId}/marcar-enviada`, {
        method: 'PUT'
    });
}

// ===================================
// 6. UTILIDADES DE FORMATO
// ===================================

/**
 * Formatea un precio con 2 decimales
 * @param {number} precio
 * @returns {string}
 */
function formatearPrecio(precio) {
    if (!precio) return '0.00';
    return parseFloat(precio).toLocaleString('es-MX', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

/**
 * Formatea una fecha ISO a formato legible
 * @param {string} fechaISO
 * @returns {string}
 */
function formatearFecha(fechaISO) {
    if (!fechaISO) return 'N/A';
    const fecha = new Date(fechaISO);
    return fecha.toLocaleDateString('es-MX', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

/**
 * Valida si una URL de imagen es válida
 * @param {string} url
 * @returns {boolean}
 */
function validarUrlImagen(url) {
    const pattern = /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i;
    return pattern.test(url);
}

// ===================================
// EXPORTAR FUNCIONES (hacer globales)
// ===================================

// Hacer las funciones disponibles globalmente
window.API_ADMIN = {
    // Productos
    obtenerTodosLosProductos,
    obtenerProductosActivos,
    obtenerProductoPorId,
    crearProducto,
    actualizarProducto,
    desactivarProducto,
    activarProducto,

    // Categorías
    obtenerCategorias,
    obtenerCategoriaPorId,
    crearCategoria,
    actualizarCategoria,
    desactivarCategoria,
    activarCategoria,

    // Proveedores
    obtenerProveedores,
    obtenerTodosLosProveedores,
    obtenerProveedorPorId,
    crearProveedor,
    actualizarProveedor,
    desactivarProveedor,
    activarProveedor,

    // Imágenes
    obtenerImagenesProducto,
    agregarImagenProducto,
    actualizarImagenProducto,
    eliminarImagenProducto,

    // Facturas
    obtenerTodasLasFacturas,
    obtenerFacturasPendientes,
    obtenerFacturasGeneradas,
    obtenerFacturasEnviadas,
    marcarFacturaComoGenerada,
    marcarFacturaComoEnviada,

    // Utilidades
    formatearPrecio,
    formatearFecha,
    validarUrlImagen,

    // Configuración
    API_BASE_URL
};

console.log('✅ API Admin cargada correctamente');
console.log(`🔌 Backend: ${API_BASE_URL}`);
