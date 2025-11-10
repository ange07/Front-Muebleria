/**
 * MUEBLERÍA ESPAÑA - SCRIPT DE GESTIÓN DE FACTURAS
 *
 * Funcionalidades:
 * ✅ Integración con backend usando Fetch API
 * ✅ Filtrado por estado (PENDIENTE, GENERADA, ENVIADA)
 * ✅ Cambio de estado de facturas
 * ✅ Sistema de alertas usando Bootstrap
 * ✅ Modal de confirmación para acciones
 * ✅ Modal de detalles de factura
 * ✅ Cálculo automático de IVA desde el backend
 */

// ===================================
// 1. CONFIGURACIÓN DEL BACKEND
// ===================================
/**
 * IMPORTANTE: Configura aquí la URL base de tu backend
 * Ejemplo en desarrollo: 'http://localhost:8080'
 * Ejemplo en producción: 'https://api.muebleria.com'
 */
const API_BASE_URL = 'http://localhost:8080'; // 👈 CAMBIAR SEGÚN TU CONFIGURACIÓN

// ===================================
// 2. ELEMENTOS DEL DOM
// ===================================
const alertContainer = document.getElementById('alertContainer');
const loadingState = document.getElementById('loadingState');
const emptyState = document.getElementById('emptyState');
const tablaContainer = document.getElementById('tablaContainer');
const facturasTableBody = document.getElementById('facturasTableBody');
const contadorFacturas = document.getElementById('contadorFacturas');
const btnRecargar = document.getElementById('btnRecargar');

// Filtros
const filtroTodas = document.getElementById('filtroTodas');
const filtroPendientes = document.getElementById('filtroPendientes');
const filtroGeneradas = document.getElementById('filtroGeneradas');
const filtroEnviadas = document.getElementById('filtroEnviadas');

// Modal de confirmación
const confirmModalElement = document.getElementById('confirmModal');
const confirmModal = new bootstrap.Modal(confirmModalElement);
const confirmModalBody = document.getElementById('confirmModalBody');
const btnConfirmarModal = document.getElementById('btnConfirmarModal');

// Modal de detalles
const detallesModalElement = document.getElementById('detallesModal');
const detallesModal = new bootstrap.Modal(detallesModalElement);
const detallesModalBody = document.getElementById('detallesModalBody');

// Variables de control
let facturaActual = null;
let accionActual = null;
let facturasCache = []; // Cache de facturas cargadas
let filtroActivo = 'todas';

// ===================================
// 3. SISTEMA DE ALERTAS
// ===================================
/**
 * Muestra una alerta usando Bootstrap Alert Component
 * @param {string} tipo - 'success', 'danger', 'warning', 'info'
 * @param {string} mensaje - Texto a mostrar
 */
function mostrarAlerta(tipo, mensaje) {
    // Limpiar alertas previas
    alertContainer.innerHTML = '';

    // Crear la alerta de Bootstrap
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${tipo} alert-dismissible fade show`;
    alertDiv.setAttribute('role', 'alert');

    // Crear icono según el tipo
    let icono = '';
    let titulo = '';

    if (tipo === 'success') {
        icono = '<i class="bi bi-check-circle-fill me-2"></i>';
        titulo = '¡Éxito!';
    } else if (tipo === 'danger') {
        icono = '<i class="bi bi-exclamation-triangle-fill me-2"></i>';
        titulo = 'Error:';
    } else if (tipo === 'warning') {
        icono = '<i class="bi bi-exclamation-circle-fill me-2"></i>';
        titulo = 'Advertencia:';
    } else if (tipo === 'info') {
        icono = '<i class="bi bi-info-circle-fill me-2"></i>';
        titulo = 'Información:';
    }

    // Contenido de la alerta
    alertDiv.innerHTML = `
        ${icono}
        <strong>${titulo}</strong> ${mensaje}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    // Insertar en el contenedor
    alertContainer.appendChild(alertDiv);
    alertContainer.style.display = 'block';

    // Hacer scroll hasta la alerta
    alertContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Auto-ocultar después de 5 segundos
    setTimeout(() => {
        const bsAlert = new bootstrap.Alert(alertDiv);
        bsAlert.close();

        // Ocultar contenedor si no hay más alertas
        setTimeout(() => {
            if (alertContainer.children.length === 0) {
                alertContainer.style.display = 'none';
            }
        }, 150);
    }, 5000);
}

// ===================================
// 4. FUNCIONES DE INTEGRACIÓN CON BACKEND
// ===================================

/**
 * Carga facturas desde el backend según el filtro
 * @param {string} filtro - 'todas', 'PENDIENTE', 'GENERADA', 'ENVIADA'
 */
async function cargarFacturas(filtro = 'todas') {
    try {
        // Mostrar loader
        mostrarLoader();

        // Determinar endpoint según filtro
        let endpoint = '';
        if (filtro === 'todas') {
            endpoint = '/api/facturas/admin/todas';
        } else if (filtro === 'PENDIENTE') {
            endpoint = '/api/facturas/admin/pendientes';
        } else if (filtro === 'GENERADA') {
            endpoint = '/api/facturas/admin/generadas';
        } else if (filtro === 'ENVIADA') {
            endpoint = '/api/facturas/admin/enviadas';
        }

        // Hacer petición al backend
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const facturas = await response.json();

        // Guardar en cache
        facturasCache = facturas;
        filtroActivo = filtro;

        // Renderizar tabla
        renderizarTabla(facturas);

    } catch (error) {
        console.error('Error al cargar facturas:', error);
        mostrarAlerta('danger', `No se pudieron cargar las facturas. ${error.message}`);
        mostrarEstadoVacio();
    }
}

/**
 * Cambia el estado de una factura
 * @param {number} idFactura - ID de la factura
 * @param {string} nuevoEstado - 'GENERADA' o 'ENVIADA'
 */
async function cambiarEstadoFactura(idFactura, nuevoEstado) {
    try {
        // Determinar endpoint según el nuevo estado
        let endpoint = '';
        if (nuevoEstado === 'GENERADA') {
            endpoint = `/api/facturas/admin/${idFactura}/marcar-generada`;
        } else if (nuevoEstado === 'ENVIADA') {
            endpoint = `/api/facturas/admin/${idFactura}/marcar-enviada`;
        }

        // Hacer petición PUT
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const facturaActualizada = await response.json();

        // Mostrar alerta de éxito
        mostrarAlerta('success', `Factura #${idFactura} marcada como ${nuevoEstado}.`);

        // Recargar facturas con el filtro activo
        await cargarFacturas(filtroActivo);

    } catch (error) {
        console.error('Error al cambiar estado:', error);
        mostrarAlerta('danger', `No se pudo cambiar el estado de la factura. ${error.message}`);
    }
}

// ===================================
// 5. RENDERIZADO DE LA TABLA
// ===================================

/**
 * Renderiza la tabla de facturas
 * @param {Array} facturas - Array de objetos factura
 */
function renderizarTabla(facturas) {
    // Ocultar loader y estado vacío
    loadingState.style.display = 'none';
    emptyState.style.display = 'none';

    // Si no hay facturas, mostrar estado vacío
    if (!facturas || facturas.length === 0) {
        mostrarEstadoVacio();
        return;
    }

    // Mostrar tabla
    tablaContainer.style.display = 'block';

    // Limpiar tbody
    facturasTableBody.innerHTML = '';

    // Renderizar cada factura
    facturas.forEach(factura => {
        const fila = crearFilaFactura(factura);
        facturasTableBody.appendChild(fila);
    });

    // Actualizar contador
    actualizarContador(facturas.length);
}

/**
 * Crea una fila de la tabla para una factura
 * @param {Object} factura - Objeto factura
 * @returns {HTMLElement} - Elemento <tr>
 */
function crearFilaFactura(factura) {
    const tr = document.createElement('tr');

    // Badge de estado
    const badgeEstado = obtenerBadgeEstado(factura.estadoFactura);

    // Formatear fecha
    const fechaFormateada = formatearFecha(factura.fechaEmision);

    // Botones de acción según el estado
    const botonesAccion = crearBotonesAccion(factura);

    tr.innerHTML = `
        <td><strong>#${factura.idFactura}</strong></td>
        <td>Pedido #${factura.idPedido || 'N/A'}</td>
        <td><code>${factura.rfc}</code></td>
        <td>${factura.razonSocial}</td>
        <td>$${formatearPrecio(factura.subtotal)}</td>
        <td>$${formatearPrecio(factura.iva)}</td>
        <td><strong>$${formatearPrecio(factura.total)}</strong></td>
        <td>${badgeEstado}</td>
        <td><small>${fechaFormateada}</small></td>
        <td>
            <div class="btn-group btn-group-sm" role="group">
                <button type="button" class="btn btn-outline-info" onclick="verDetalles(${factura.idFactura})" title="Ver detalles">
                    <i class="bi bi-eye"></i>
                </button>
                ${botonesAccion}
            </div>
        </td>
    `;

    return tr;
}

/**
 * Obtiene el badge de Bootstrap según el estado
 * @param {string} estado - Estado de la factura
 * @returns {string} - HTML del badge
 */
function obtenerBadgeEstado(estado) {
    if (estado === 'PENDIENTE') {
        return '<span class="badge bg-warning text-dark"><i class="bi bi-clock-history me-1"></i>Pendiente</span>';
    } else if (estado === 'GENERADA') {
        return '<span class="badge bg-info"><i class="bi bi-check-circle me-1"></i>Generada</span>';
    } else if (estado === 'ENVIADA') {
        return '<span class="badge bg-success"><i class="bi bi-send-check me-1"></i>Enviada</span>';
    }
    return '<span class="badge bg-secondary">Desconocido</span>';
}

/**
 * Crea los botones de acción según el estado de la factura
 * @param {Object} factura - Objeto factura
 * @returns {string} - HTML de los botones
 */
function crearBotonesAccion(factura) {
    const id = factura.idFactura;
    const estado = factura.estadoFactura;

    if (estado === 'PENDIENTE') {
        // Solo puede marcar como GENERADA
        return `
            <button type="button" class="btn btn-outline-primary" onclick="confirmarCambioEstado(${id}, 'GENERADA')" title="Marcar como generada">
                <i class="bi bi-check-circle"></i> Generada
            </button>
        `;
    } else if (estado === 'GENERADA') {
        // Solo puede marcar como ENVIADA
        return `
            <button type="button" class="btn btn-outline-success" onclick="confirmarCambioEstado(${id}, 'ENVIADA')" title="Marcar como enviada">
                <i class="bi bi-send-check"></i> Enviada
            </button>
        `;
    } else if (estado === 'ENVIADA') {
        // Ya no puede cambiar de estado
        return `
            <button type="button" class="btn btn-outline-secondary" disabled title="Factura completada">
                <i class="bi bi-check-all"></i> Completada
            </button>
        `;
    }
    return '';
}

/**
 * Formatea un precio con 2 decimales y separadores de miles
 * @param {number} precio - Precio a formatear
 * @returns {string} - Precio formateado
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
 * @param {string} fechaISO - Fecha en formato ISO
 * @returns {string} - Fecha formateada
 */
function formatearFecha(fechaISO) {
    if (!fechaISO) return 'N/A';

    const fecha = new Date(fechaISO);
    const opciones = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };

    return fecha.toLocaleDateString('es-MX', opciones);
}

/**
 * Actualiza el contador de facturas
 * @param {number} cantidad - Número de facturas
 */
function actualizarContador(cantidad) {
    contadorFacturas.innerHTML = `
        <i class="bi bi-receipt me-1"></i>
        Mostrando <strong>${cantidad}</strong> factura${cantidad !== 1 ? 's' : ''}
    `;
}

// ===================================
// 6. ESTADOS DE LA INTERFAZ
// ===================================

/**
 * Muestra el loader de carga
 */
function mostrarLoader() {
    loadingState.style.display = 'block';
    emptyState.style.display = 'none';
    tablaContainer.style.display = 'none';
}

/**
 * Muestra el estado vacío (sin facturas)
 */
function mostrarEstadoVacio() {
    loadingState.style.display = 'none';
    emptyState.style.display = 'block';
    tablaContainer.style.display = 'none';
    actualizarContador(0);
}

// ===================================
// 7. MODAL DE CONFIRMACIÓN
// ===================================

/**
 * Abre el modal de confirmación para cambiar el estado
 * @param {number} idFactura - ID de la factura
 * @param {string} nuevoEstado - Nuevo estado ('GENERADA' o 'ENVIADA')
 */
function confirmarCambioEstado(idFactura, nuevoEstado) {
    facturaActual = idFactura;
    accionActual = nuevoEstado;

    // Personalizar mensaje según el estado
    let mensaje = '';
    if (nuevoEstado === 'GENERADA') {
        mensaje = `¿Confirmas que la factura #${idFactura} ha sido <strong>generada en el SAT</strong>?`;
    } else if (nuevoEstado === 'ENVIADA') {
        mensaje = `¿Confirmas que la factura #${idFactura} ha sido <strong>enviada al cliente</strong> (PDF/XML por email)?`;
    }

    confirmModalBody.innerHTML = mensaje;
    confirmModal.show();
}

/**
 * Ejecuta el cambio de estado confirmado
 */
function ejecutarCambioEstado() {
    if (facturaActual && accionActual) {
        cambiarEstadoFactura(facturaActual, accionActual);
        confirmModal.hide();

        // Resetear variables
        facturaActual = null;
        accionActual = null;
    }
}

// ===================================
// 8. MODAL DE DETALLES
// ===================================

/**
 * Muestra los detalles completos de una factura
 * @param {number} idFactura - ID de la factura
 */
function verDetalles(idFactura) {
    // Buscar la factura en el cache
    const factura = facturasCache.find(f => f.idFactura === idFactura);

    if (!factura) {
        mostrarAlerta('warning', 'No se encontraron los detalles de la factura.');
        return;
    }

    // Construir HTML de detalles
    const detallesHTML = `
        <div class="row g-3">
            <div class="col-md-6">
                <h6 class="text-muted mb-2">Información General</h6>
                <table class="table table-sm table-borderless">
                    <tr>
                        <td><strong>ID Factura:</strong></td>
                        <td>#${factura.idFactura}</td>
                    </tr>
                    <tr>
                        <td><strong>ID Pedido:</strong></td>
                        <td>#${factura.idPedido || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td><strong>Estado:</strong></td>
                        <td>${obtenerBadgeEstado(factura.estadoFactura)}</td>
                    </tr>
                    <tr>
                        <td><strong>Fecha Emisión:</strong></td>
                        <td>${formatearFecha(factura.fechaEmision)}</td>
                    </tr>
                    ${factura.fechaActualizacion ? `
                    <tr>
                        <td><strong>Última Actualización:</strong></td>
                        <td>${formatearFecha(factura.fechaActualizacion)}</td>
                    </tr>
                    ` : ''}
                </table>
            </div>
            <div class="col-md-6">
                <h6 class="text-muted mb-2">Datos Fiscales</h6>
                <table class="table table-sm table-borderless">
                    <tr>
                        <td><strong>RFC:</strong></td>
                        <td><code>${factura.rfc}</code></td>
                    </tr>
                    <tr>
                        <td><strong>Razón Social:</strong></td>
                        <td>${factura.razonSocial}</td>
                    </tr>
                </table>
            </div>
            <div class="col-12">
                <hr>
                <h6 class="text-muted mb-2">Desglose Financiero</h6>
                <table class="table table-sm">
                    <tr>
                        <td><strong>Subtotal:</strong></td>
                        <td class="text-end">$${formatearPrecio(factura.subtotal)} MXN</td>
                    </tr>
                    <tr>
                        <td><strong>IVA (16%):</strong></td>
                        <td class="text-end">$${formatearPrecio(factura.iva)} MXN</td>
                    </tr>
                    <tr class="table-active">
                        <td><strong>TOTAL:</strong></td>
                        <td class="text-end"><h5 class="mb-0">$${formatearPrecio(factura.total)} MXN</h5></td>
                    </tr>
                </table>
            </div>
            ${factura.idUsuario ? `
            <div class="col-12">
                <hr>
                <h6 class="text-muted mb-2">Información Adicional</h6>
                <p class="mb-0"><strong>ID Usuario:</strong> #${factura.idUsuario}</p>
            </div>
            ` : ''}
        </div>
    `;

    detallesModalBody.innerHTML = detallesHTML;
    detallesModal.show();
}

// ===================================
// 9. EVENT LISTENERS
// ===================================

// Filtros de estado
document.querySelectorAll('input[name="filtroEstado"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        const filtro = e.target.value;
        cargarFacturas(filtro);
    });
});

// Botón recargar
btnRecargar.addEventListener('click', () => {
    cargarFacturas(filtroActivo);
    mostrarAlerta('info', 'Facturas recargadas desde el servidor.');
});

// Botón confirmar del modal
btnConfirmarModal.addEventListener('click', ejecutarCambioEstado);

// ===================================
// 10. INICIALIZACIÓN
// ===================================

/**
 * Inicializa la aplicación al cargar la página
 */
function inicializar() {
    console.log('📋 Sistema de Gestión de Facturas iniciado');
    console.log(`🔌 Backend: ${API_BASE_URL}`);

    // Cargar todas las facturas por defecto
    cargarFacturas('todas');
}

// Ejecutar al cargar el DOM
document.addEventListener('DOMContentLoaded', inicializar);
