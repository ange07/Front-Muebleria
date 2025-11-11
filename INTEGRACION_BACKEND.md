# 🔌 GUÍA DE INTEGRACIÓN BACKEND - MUEBLERÍA ESPAÑA

## 📋 TABLA DE CONTENIDOS
1. [Archivos Creados](#archivos-creados)
2. [Configuración Inicial](#configuración-inicial)
3. [Cómo Usar la API Admin](#cómo-usar-la-api-admin)
4. [Actualizar Scripts Existentes](#actualizar-scripts-existentes)
5. [Cargar Datos de Ejemplo](#cargar-datos-de-ejemplo)
6. [Solución de Problemas](#solución-de-problemas)

---

## 📁 ARCHIVOS CREADOS

### 1. `scripts/api-admin.js`
**Qué hace:** Centraliza TODAS las llamadas al backend para el panel de administración.

**Funciones disponibles:**
```javascript
// Productos
API_ADMIN.obtenerTodosLosProductos()
API_ADMIN.crearProducto(data)
API_ADMIN.actualizarProducto(id, data)
API_ADMIN.desactivarProducto(id)
API_ADMIN.activarProducto(id)

// Categorías
API_ADMIN.obtenerCategorias()
API_ADMIN.crearCategoria(data)
API_ADMIN.actualizarCategoria(id, data)

// Proveedores
API_ADMIN.obtenerTodosLosProveedores()
API_ADMIN.crearProveedor(data)
API_ADMIN.actualizarProveedor(id, data)

// Imágenes
API_ADMIN.obtenerImagenesProducto(productId)
API_ADMIN.agregarImagenProducto(productId, url)
API_ADMIN.eliminarImagenProducto(imagenId)

// Facturas (ya integrado)
API_ADMIN.obtenerTodasLasFacturas()
API_ADMIN.marcarFacturaComoGenerada(id)
API_ADMIN.marcarFacturaComoEnviada(id)
```

### 2. `sql/datos_ejemplo.sql`
**Qué hace:** Script SQL que inserta datos de prueba en la base de datos.

**Contiene:**
- ✅ 4 usuarios (1 admin, 3 clientes)
- ✅ 17 categorías (6 principales + 11 subcategorías)
- ✅ 5 proveedores
- ✅ 15 productos (salas, comedores, dormitorios, colchones, línea blanca, roperos)
- ✅ Imágenes de productos (URLs de ejemplo)
- ✅ Direcciones de envío

---

## ⚙️ CONFIGURACIÓN INICIAL

### Paso 1: Configurar URL del Backend

Abre `scripts/api-admin.js` y modifica la línea 15:

```javascript
// Cambiar según tu entorno
const API_BASE_URL = 'http://localhost:8080';  // ✅ Desarrollo local
// const API_BASE_URL = 'https://api.tudominio.com';  // 🚀 Producción
```

### Paso 2: Ejecutar el Script SQL

1. Abre MySQL Workbench o phpMyAdmin
2. Conecta a tu base de datos
3. Abre el archivo `sql/datos_ejemplo.sql`
4. Ejecuta el script completo

**IMPORTANTE:** Si ya tienes datos, el script NO los borrará (usa `ON DUPLICATE KEY UPDATE`).

Para limpiar todo y empezar de cero:
```sql
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE imagenes_producto;
TRUNCATE TABLE productos;
TRUNCATE TABLE proveedores;
TRUNCATE TABLE categorias;
TRUNCATE TABLE direcciones;
TRUNCATE TABLE usuarios;
TRUNCATE TABLE roles;
SET FOREIGN_KEY_CHECKS = 1;
```

### Paso 3: Verificar que el Backend esté corriendo

```bash
# En la terminal, navega a tu proyecto backend y ejecuta:
mvn spring-boot:run

# O si usas el IDE:
# Click derecho en el proyecto → Run As → Spring Boot App
```

Verifica que se haya iniciado correctamente (debería decir `Started Application in X seconds`).

### Paso 4: Probar la Conexión

1. Abre el navegador
2. Ve a `http://localhost:8080/api/productos`
3. Deberías ver un JSON con los productos

Si ves un JSON, ¡la conexión funciona! ✅

---

## 🎯 CÓMO USAR LA API ADMIN

### Ejemplo 1: Obtener Todos los Productos

```javascript
// En la consola del navegador o en tu script
async function probarAPI() {
    try {
        const productos = await API_ADMIN.obtenerTodosLosProductos();
        console.log('Productos obtenidos:', productos);
    } catch (error) {
        console.error('Error:', error);
    }
}

probarAPI();
```

### Ejemplo 2: Crear un Producto

```javascript
async function crearNuevoProducto() {
    const nuevoProducto = {
        producto: "Comedor Moderno 8 Sillas",
        descripcion: "Elegante comedor con mesa extensible",
        precioActual: 19999.99,
        stockDisponible: 3,
        activo: true,
        idCategoria: 2,  // Comedores
        idProveedor: 1   // Muebles del Norte
    };

    try {
        const resultado = await API_ADMIN.crearProducto(nuevoProducto);
        console.log('Producto creado:', resultado);
        alert('¡Producto creado exitosamente!');
    } catch (error) {
        console.error('Error:', error);
        alert('Error al crear producto: ' + error.message);
    }
}
```

### Ejemplo 3: Agregar Imágenes a un Producto

```javascript
async function agregarImagenes(productId) {
    const imagenes = [
        'https://i.imgur.com/ejemplo1.jpg',
        'https://i.imgur.com/ejemplo2.jpg'
    ];

    for (const url of imagenes) {
        try {
            await API_ADMIN.agregarImagenProducto(productId, url);
            console.log(`Imagen agregada: ${url}`);
        } catch (error) {
            console.error(`Error al agregar ${url}:`, error);
        }
    }
}

// Uso:
agregarImagenes(1); // Agregar a producto con ID 1
```

---

## 🔄 ACTUALIZAR SCRIPTS EXISTENTES

### Actualizar `admin.js` (Gestión de Productos)

**ANTES (localStorage):**
```javascript
function obtenerProductos() {
    return JSON.parse(localStorage.getItem('productos')) || [];
}

function guardarProducto(producto) {
    let productos = obtenerProductos();
    productos.push(producto);
    localStorage.setItem('productos', JSON.stringify(productos));
}
```

**DESPUÉS (Backend):**
```javascript
async function obtenerProductos() {
    try {
        return await API_ADMIN.obtenerTodosLosProductos();
    } catch (error) {
        console.error('Error al obtener productos:', error);
        mostrarAlerta('danger', 'Error al cargar productos');
        return [];
    }
}

async function guardarProducto(producto) {
    try {
        const resultado = await API_ADMIN.crearProducto(producto);
        mostrarAlerta('success', 'Producto guardado exitosamente');
        return resultado;
    } catch (error) {
        console.error('Error al guardar producto:', error);
        mostrarAlerta('danger', 'Error al guardar: ' + error.message);
        throw error;
    }
}
```

**CAMBIOS CLAVE:**
1. ✅ Todas las funciones ahora son `async`
2. ✅ Usan `await API_ADMIN.nombreFuncion()`
3. ✅ Tienen manejo de errores con `try-catch`
4. ✅ Muestran alertas al usuario

### Actualizar `proveedores.js` (Gestión de Proveedores)

**Estructura similar:**
```javascript
async function obtenerProveedores() {
    try {
        return await API_ADMIN.obtenerTodosLosProveedores();
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

async function guardarProveedor(proveedor) {
    try {
        if (proveedor.idProveedor) {
            // Actualizar
            return await API_ADMIN.actualizarProveedor(proveedor.idProveedor, proveedor);
        } else {
            // Crear
            return await API_ADMIN.crearProveedor(proveedor);
        }
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
```

---

## 📦 CARGAR DATOS DE EJEMPLO

### Opción A: Usar el Script SQL (Recomendado)

Ya cubierto en [Paso 2](#paso-2-ejecutar-el-script-sql).

### Opción B: Insertar Manualmente desde el Frontend

Si prefieres crear productos desde la interfaz:

1. Ve a `paginas/admin.html`
2. Llena el formulario con los datos del producto
3. Click en "Guardar Producto"
4. El producto se enviará al backend automáticamente

---

## ❗ SOLUCIÓN DE PROBLEMAS

### Problema 1: CORS Error
```
Access to fetch at 'http://localhost:8080/api/productos' from origin 'http://localhost:3000'
has been blocked by CORS policy
```

**Solución:**
Agregar configuración CORS en el backend:

```java
// En config/WebConfig.java o similar
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:3000", "http://127.0.0.1:3000", "http://localhost:5500")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
```

### Problema 2: Endpoints No Encontrados (404)
```
Error: Error HTTP: 404
```

**Causa:** El endpoint no existe en el backend o la URL está mal.

**Solución:**
1. Verifica que la URL sea correcta en `api-admin.js`
2. Verifica que el endpoint exista en tu `Controller`
3. Revisa los logs del backend para ver errores

### Problema 3: Error al Crear Producto (400 Bad Request)
```
Error: idCategoria or idProveedor not found
```

**Causa:** Los IDs de categoría o proveedor no existen en la BD.

**Solución:**
1. Ejecuta el script SQL de datos de ejemplo
2. O verifica que los IDs existan:
```sql
SELECT * FROM categorias;
SELECT * FROM proveedores;
```

### Problema 4: Las Imágenes No Se Muestran
```
Las URLs de las imágenes son de EJEMPLO
```

**Solución:**
1. Sube tus imágenes a Imgur, Cloudinary o ImgBB
2. Obtén las URLs reales
3. Actualiza la tabla `imagenes_producto`:
```sql
UPDATE imagenes_producto
SET url_imagen = 'https://i.imgur.com/tu-imagen-real.jpg'
WHERE id_imagen = 1;
```

### Problema 5: Backend No Responde
```
Error: Failed to fetch
```

**Soluciones:**
1. ✅ Verifica que el backend esté corriendo:
   ```bash
   curl http://localhost:8080/api/productos
   ```
2. ✅ Verifica el firewall/antivirus
3. ✅ Cambia el puerto si 8080 está ocupado

---

## ✅ CHECKLIST DE INTEGRACIÓN

### Backend
- [ ] Base de datos MySQL creada
- [ ] Tablas creadas (roles, usuarios, categorias, proveedores, productos, imagenes_producto)
- [ ] Script SQL de datos de ejemplo ejecutado
- [ ] Backend Spring Boot corriendo en `localhost:8080`
- [ ] CORS configurado
- [ ] Endpoints probados con Postman o navegador

### Frontend
- [ ] `scripts/api-admin.js` incluido en páginas admin
- [ ] URL del backend configurada en `api-admin.js`
- [ ] `admin.js` actualizado para usar API
- [ ] `proveedores.js` actualizado para usar API
- [ ] `facturas.js` ya usa API (listo ✅)
- [ ] Probado crear/editar/eliminar productos
- [ ] Probado crear/editar/eliminar proveedores

---

## 📞 SOPORTE

Si tienen problemas:

1. **Revisa la consola del navegador** (F12 → Console)
2. **Revisa los logs del backend** (terminal donde corre Spring Boot)
3. **Verifica la conectividad:**
   ```bash
   curl http://localhost:8080/api/productos
   ```
4. **Usa Postman** para probar los endpoints directamente

---

## 🎉 SIGUIENTE PASO

Una vez que todo esté funcionando:

1. ✅ Subir imágenes reales a Imgur/Cloudinary
2. ✅ Actualizar las URLs en la base de datos
3. ✅ Crear más productos desde la interfaz
4. ✅ Probar el flujo completo (crear, editar, desactivar)

---

**¡Éxito con la integración, equipo Code&Coffee! 🚀**

Si necesitan ayuda adicional, revisen el código de `api-admin.js` que está bien documentado.
