# 🎯 GUÍA DE PRESENTACIÓN - MUEBLERÍA ESPAÑA E-COMMERCE
## Presentación de 12 minutos para 6 personas

---

## 📋 TABLA DE CONTENIDOS
1. [Distribución del Tiempo](#distribución-del-tiempo)
2. [Asignación de Roles](#asignación-de-roles)
3. [Estructura de la Presentación](#estructura-de-la-presentación)
4. [Guión Detallado por Sección](#guión-detallado-por-sección)
5. [Puntos Clave a Destacar](#puntos-clave-a-destacar)
6. [Preparación Técnica](#preparación-técnica)
7. [Consejos para una Presentación Exitosa](#consejos-para-una-presentación-exitosa)

---

## ⏱️ DISTRIBUCIÓN DEL TIEMPO

| Sección | Tiempo | Responsable(s) |
|---------|--------|----------------|
| 1. Introducción del Proyecto | 1.5 min | Angelica |
| 2. Demostración del Frontend - Cliente | 3 min | Emmanuel + Alan |
| 3. Demostración del Frontend - Admin | 2.5 min | Lety |
| 4. Explicación del Backend | 2.5 min | Alberto |
| 5. Integración Frontend-Backend | 1.5 min | Humberto |
| 6. Conclusiones y Siguientes Pasos | 1 min | Angelica |
| **TOTAL** | **12 min** | |

---

## 👥 ASIGNACIÓN DE ROLES

### **Angelica - Líder del Proyecto**
- **Responsabilidades:**
  - Introducción del proyecto (contexto, objetivos)
  - Conclusiones finales
  - Moderación del tiempo
- **Habilidades requeridas:** Comunicación clara, visión general

### **Emmanuel - Frontend Especialista (Experiencia de Usuario)**
- **Responsabilidades:**
  - Navegación del sitio web
  - Catálogo de productos
  - Carrito de compras
  - Proceso de checkout
- **Habilidades requeridas:** Demo fluida, conocimiento de UX

### **Alan - Frontend Especialista (Autenticación y Perfil)**
- **Responsabilidades:**
  - Sistema de registro/login
  - Perfil de usuario
  - Diseño responsivo
- **Habilidades requeridas:** Explicación técnica clara

### **Lety - Frontend Admin Panel**
- **Responsabilidades:**
  - Panel de administración completo
  - Gestión de productos
  - Gestión de proveedores
  - Sistema de facturas
- **Habilidades requeridas:** Manejo de datos, CRUD operations

### **Alberto - Backend Specialist**
- **Responsabilidades:**
  - Arquitectura del backend (Spring Boot)
  - Modelos de datos y base de datos
  - API REST endpoints
  - Seguridad y validaciones
- **Habilidades requeridas:** Conocimiento técnico profundo

### **Humberto - Full Stack Integrator**
- **Responsabilidades:**
  - Cómo se comunican frontend y backend
  - Ejemplo de integración (facturas)
  - Flujo de datos
  - LocalStorage vs Base de Datos
- **Habilidades requeridas:** Visión completa del stack

---

## 📊 ESTRUCTURA DE LA PRESENTACIÓN

```
PRESENTACIÓN (12 min)
│
├── 1. INTRODUCCIÓN (1.5 min) - Angelica
│   ├── ¿Qué es el proyecto?
│   ├── ¿Para quién?
│   ├── Stack tecnológico
│   └── Demo overview
│
├── 2. FRONTEND - CLIENTE (3 min) - Emmanuel + Alan
│   ├── Navegación y catálogo (Emmanuel - 1.5 min)
│   │   ├── Página principal
│   │   ├── Categorías de productos
│   │   ├── Carrito de compras
│   │   └── Checkout
│   │
│   └── Autenticación y perfil (Alan - 1.5 min)
│       ├── Registro de usuario
│       ├── Login
│       ├── Perfil de cliente
│       └── Diseño responsivo
│
├── 3. FRONTEND - ADMIN (2.5 min) - Lety
│   ├── Gestión de productos (1 min)
│   ├── Gestión de proveedores (0.75 min)
│   └── Sistema de facturas (0.75 min)
│
├── 4. BACKEND (2.5 min) - Alberto
│   ├── Arquitectura Spring Boot (0.5 min)
│   ├── Modelos de datos (1 min)
│   ├── API REST endpoints (0.75 min)
│   └── Base de datos MySQL (0.25 min)
│
├── 5. INTEGRACIÓN (1.5 min) - Humberto
│   ├── Frontend ↔ Backend communication
│   ├── Ejemplo: Sistema de facturas
│   └── Flujo completo de datos
│
└── 6. CONCLUSIÓN (1 min) - Angelica
    ├── Logros del proyecto
    ├── Retos superados
    └── Próximos pasos
```

---

## 🎬 GUIÓN DETALLADO POR SECCIÓN

### **1. INTRODUCCIÓN (1.5 min) - Angelica**

**QUÉ DECIR:**

> "Buenos días/tardes. Les vamos a presentar nuestro proyecto: **Mueblería España E-Commerce**, una plataforma completa de comercio electrónico para una empresa familiar con más de 30 años de experiencia en San Felipe del Progreso, Estado de México.

> **El objetivo:** Digitalizar completamente su negocio de muebles y electrodomésticos, permitiéndoles llegar a más clientes a través de una tienda en línea moderna y funcional.

> **Stack tecnológico:**
> - Frontend: HTML5, CSS3, JavaScript vanilla, Bootstrap 5
> - Backend: Java con Spring Boot
> - Base de datos: MySQL
> - Almacenamiento: LocalStorage y API REST

> La presentación está dividida en 5 partes: Frontend para clientes, Frontend para administradores, Backend, Integración, y Conclusiones. Comencemos con la demostración del sitio web."

**DIAPOSITIVA/VISUAL:**
- Logo del proyecto
- Esquema del stack tecnológico
- Captura de pantalla de la página principal

---

### **2. FRONTEND - EXPERIENCIA DEL CLIENTE (3 min) - Emmanuel + Alan**

#### **2A. Navegación y Compras (1.5 min) - Emmanuel**

**QUÉ MOSTRAR (EN VIVO):**
1. **Página principal (index.html)** - 15 seg
   - Navbar con logo y menú
   - Hero section
   - Categorías destacadas

2. **Catálogo de productos** - 30 seg
   - Abrir "Salas" o "Comedores"
   - Mostrar tarjetas de productos con:
     - Imagen
     - Nombre y precio
     - Badge "Nuevo"
     - Estrellas de rating
     - Botón "Agregar al carrito"

3. **Carrito de compras (carrito.html)** - 30 seg
   - Agregar 2-3 productos
   - Mostrar badge del carrito actualizándose
   - Entrar a la página del carrito
   - Incrementar/decrementar cantidad
   - Eliminar un producto
   - Mostrar cálculo de subtotal

4. **Checkout (checkout.html)** - 15 seg
   - Resumen del pedido
   - Listado de productos
   - Total a pagar

**QUÉ DECIR:**

> "Ahora veamos la experiencia del cliente. En la página principal tenemos un diseño limpio con nuestra paleta de colores verde nórdico y terracota cálido.

> El catálogo está organizado por categorías: Salas, Comedores, Dormitorios, Roperos, Colchones y Línea Blanca. Cada producto muestra información clara y un botón para agregar al carrito.

> El carrito es completamente funcional: pueden agregar productos, cambiar cantidades, eliminar items, y todo se guarda en LocalStorage, así que persiste aunque refresquen la página. El badge del carrito se actualiza en tiempo real.

> Finalmente, en checkout ven el resumen completo de su pedido con el total a pagar."

**PUNTOS TÉCNICOS A MENCIONAR:**
- LocalStorage para persistencia del carrito
- JavaScript vanilla para interactividad
- Actualización dinámica del DOM
- Diseño responsivo con Bootstrap

---

#### **2B. Autenticación y Perfil (1.5 min) - Alan**

**QUÉ MOSTRAR (EN VIVO):**
1. **Registro (registro.html)** - 30 seg
   - Abrir modal de registro
   - Mostrar validaciones en tiempo real:
     - Email inválido
     - Contraseña corta
     - Contraseñas no coinciden
   - Registrar un usuario exitosamente
   - Mostrar alerta de éxito

2. **Login (login.html)** - 20 seg
   - Abrir modal de login
   - Ingresar credenciales
   - Login exitoso
   - Mostrar mensaje de bienvenida

3. **Perfil de usuario (perfil.html)** - 30 seg
   - Información del usuario
   - Opciones para editar perfil
   - Ver historial de pedidos
   - Cerrar sesión

4. **Diseño responsivo** - 10 seg
   - Redimensionar ventana o usar DevTools
   - Mostrar hamburger menu en móvil
   - Mostrar adaptación de productos

**QUÉ DECIR:**

> "El sistema de autenticación permite a los usuarios registrarse e iniciar sesión. Implementamos validaciones en tiempo real: el email debe tener formato válido, la contraseña mínimo 8 caracteres, y verificamos que las contraseñas coincidan.

> Cuando el usuario se registra, sus datos se almacenan en LocalStorage usando un modelo de clase JavaScript. Al hacer login, creamos una sesión activa que persiste entre páginas.

> En el perfil, los usuarios pueden ver y editar su información, cambiar contraseña, ver su historial de pedidos y facturas.

> El diseño es completamente responsivo: en móvil el menú se convierte en hamburger, los productos se apilan en una columna, y los botones son touch-friendly."

**PUNTOS TÉCNICOS A MENCIONAR:**
- Validación de formularios en tiempo real
- Modelo de datos UsuarioModel (clase JavaScript)
- SessionStorage para sesión activa
- LocalStorage para usuarios registrados
- Media queries y Bootstrap grid system
- Prevención de duplicados (email único)

---

### **3. FRONTEND - PANEL DE ADMINISTRACIÓN (2.5 min) - Lety**

**QUÉ MOSTRAR (EN VIVO):**

1. **Gestión de Productos (admin.html)** - 1 min
   - Abrir panel de admin
   - Mostrar tabla de productos existentes
   - **Crear nuevo producto:**
     - Llenar formulario (SKU, nombre, categoría, precio, etc.)
     - Mostrar validación de SKU duplicado
     - Guardar producto exitosamente
   - **Editar producto:**
     - Clic en botón editar
     - Modificar precio o stock
     - Guardar cambios
   - **Eliminar producto:**
     - Clic en eliminar
     - Modal de confirmación
     - Producto eliminado

2. **Gestión de Proveedores (proveedores.html)** - 0.75 min
   - Mostrar tabla de proveedores
   - Agregar nuevo proveedor (nombre, contacto, teléfono, email)
   - Validación de email y teléfono
   - Estado activo/inactivo

3. **Sistema de Facturas (facturas.html)** - 0.75 min
   - Filtros por estado (Pendiente, Generada, Enviada)
   - Tabla de facturas con datos
   - Cambiar estado de una factura
   - Modal de detalles de factura

**QUÉ DECIR:**

> "El panel de administración es el corazón de la gestión del negocio. Tiene tres módulos principales:

> **Gestión de Productos:** CRUD completo - Crear, Leer, Actualizar y Eliminar productos. Cada producto tiene SKU único (validamos duplicados), categoría, precio, stock, dimensiones y materiales. Todo se valida antes de guardar y los cambios son inmediatos.

> **Gestión de Proveedores:** Registramos nombre de la empresa, contacto, teléfono, email y dirección. Validamos formatos de email y teléfono, y podemos marcar proveedores como activos o inactivos.

> **Sistema de Facturas:** Aquí es donde conectamos con el backend. Podemos filtrar facturas por estado, ver detalles completos, y cambiar el estado de Pendiente → Generada → Enviada. El cálculo de IVA lo hace el backend automáticamente."

**PUNTOS TÉCNICOS A MENCIONAR:**
- CRUD operations completas
- Validaciones robustas (SKU único, email format, required fields)
- Modales de Bootstrap para confirmaciones
- Sistema de alertas con auto-hide
- LocalStorage para productos y proveedores
- API REST integration para facturas
- Manejo de estados asíncronos (loading, success, error)

---

### **4. BACKEND (2.5 min) - Alberto**

**QUÉ MOSTRAR:**
- Diagrama de arquitectura (si lo tienen)
- Código fuente del backend (abierto en IDE)
- Diagrama de base de datos

**QUÉ EXPLICAR:**

#### **A. Arquitectura Spring Boot (0.5 min)**

> "El backend está construido con **Spring Boot**, que es un framework de Java para crear APIs REST robustas y escalables.

> Usamos una arquitectura en capas:
> - **Controllers:** Reciben las peticiones HTTP
> - **Services:** Contienen la lógica de negocio
> - **Repositories:** Interactúan con la base de datos
> - **Models/Entities:** Representan las tablas de la BD

> Spring Boot nos da características como inyección de dependencias, manejo automático de transacciones, y validaciones integradas."

#### **B. Modelos de Datos (1 min)**

> "Tenemos varios modelos principales en la base de datos MySQL:

**1. Usuario:**
```
- id (Primary Key)
- nombre
- correo (único)
- telefono
- contraseña (hasheada con BCrypt)
- fecha_registro
- activo (boolean)
```

**2. Producto:**
```
- id (Primary Key)
- sku (único)
- nombre
- descripcion
- categoria
- subcategoria
- precio
- stock
- materiales (JSON o tabla relacionada)
- dimensiones (alto, ancho, profundidad)
- imagen_url
- activo
```

**3. Pedido:**
```
- id (Primary Key)
- id_usuario (Foreign Key → Usuario)
- fecha_pedido
- total
- estado (PENDIENTE, PROCESADO, ENVIADO, ENTREGADO)
```

**4. DetallePedido:**
```
- id (Primary Key)
- id_pedido (Foreign Key → Pedido)
- id_producto (Foreign Key → Producto)
- cantidad
- precio_unitario
- subtotal
```

**5. Factura:**
```
- id (Primary Key)
- id_pedido (Foreign Key → Pedido)
- folio (único)
- fecha_emision
- subtotal
- iva (16%)
- total
- estado (PENDIENTE, GENERADA, ENVIADA)
```

**6. Proveedor:**
```
- id (Primary Key)
- nombre_empresa
- nombre_contacto
- telefono
- email
- direccion
- activo
- fecha_creacion
```

> Estas tablas tienen relaciones: Un Usuario puede tener muchos Pedidos, un Pedido tiene muchos DetallesPedido, cada Pedido tiene una Factura."

#### **C. API REST Endpoints (0.75 min)**

> "Exponemos varios endpoints REST:

**Autenticación:**
```
POST /api/auth/register    - Registrar usuario
POST /api/auth/login       - Iniciar sesión (retorna JWT token)
POST /api/auth/logout      - Cerrar sesión
```

**Productos:**
```
GET    /api/productos           - Listar todos
GET    /api/productos/{id}      - Obtener uno
POST   /api/productos           - Crear (admin)
PUT    /api/productos/{id}      - Actualizar (admin)
DELETE /api/productos/{id}      - Eliminar (admin)
GET    /api/productos/categoria/{cat} - Filtrar por categoría
```

**Pedidos:**
```
POST   /api/pedidos            - Crear pedido
GET    /api/pedidos/usuario/{id} - Pedidos del usuario
GET    /api/pedidos/{id}       - Detalle de pedido
PUT    /api/pedidos/{id}/estado - Actualizar estado (admin)
```

**Facturas:**
```
GET    /api/facturas/admin/todas      - Todas las facturas
GET    /api/facturas/admin/pendientes - Facturas pendientes
POST   /api/facturas/{id}/estado      - Cambiar estado
GET    /api/facturas/{id}/pdf         - Generar PDF
```

**Proveedores:**
```
GET    /api/proveedores     - Listar todos
POST   /api/proveedores     - Crear
PUT    /api/proveedores/{id} - Actualizar
DELETE /api/proveedores/{id} - Eliminar
```

> Todos los endpoints están protegidos con autenticación JWT excepto los públicos como login y registro."

#### **D. Base de Datos y Seguridad (0.25 min)**

> "Usamos **MySQL** como base de datos relacional.

> **Seguridad implementada:**
> - Contraseñas hasheadas con BCrypt (no se guardan en texto plano)
> - JWT tokens para autenticación stateless
> - Validaciones en el backend (no solo frontend)
> - Prepared statements para prevenir SQL injection
> - CORS configurado para permitir solo el frontend
> - Validación de roles (USER vs ADMIN)"

---

### **5. INTEGRACIÓN FRONTEND-BACKEND (1.5 min) - Humberto**

**QUÉ MOSTRAR:**
- Código de facturas.js abierto
- Network tab del navegador
- Diagrama de flujo de datos

**QUÉ EXPLICAR:**

#### **A. Comunicación Frontend ↔ Backend (0.5 min)**

> "El frontend se comunica con el backend a través de peticiones HTTP usando la Fetch API de JavaScript.

**Ejemplo en código (facturas.js):**
```javascript
const API_BASE_URL = 'http://localhost:8080';

// GET request
fetch(`${API_BASE_URL}/api/facturas/admin/todas`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}` // JWT token
  }
})
.then(response => response.json())
.then(data => {
  // Actualizar el DOM con los datos
  mostrarFacturas(data);
})
.catch(error => {
  console.error('Error:', error);
  mostrarAlerta('error', 'No se pudieron cargar las facturas');
});
```

> En production, el `API_BASE_URL` apuntaría a nuestro servidor en la nube (ej: https://api.muebleriaespana.com)."

#### **B. Ejemplo Completo: Sistema de Facturas (0.75 min)**

**MOSTRAR EN VIVO (Network Tab):**

> "Veamos el flujo completo del sistema de facturas:

**1. Usuario (Admin) abre facturas.html**
   - Frontend: `document.addEventListener('DOMContentLoaded', cargarFacturas)`

**2. Frontend hace petición GET al backend**
   - Request: `GET /api/facturas/admin/todas`
   - Headers: Authorization con JWT token

**3. Backend (Spring Boot) procesa:**
   - Controller recibe petición
   - Valida JWT token y rol de admin
   - Service consulta la base de datos
   - Repository ejecuta query SQL
   - MySQL retorna resultados

**4. Backend responde con JSON:**
```json
[
  {
    "id": 1,
    "folio": "FAC-2024-001",
    "fecha_emision": "2024-11-10",
    "subtotal": 15000.00,
    "iva": 2400.00,
    "total": 17400.00,
    "estado": "GENERADA"
  },
  ...
]
```

**5. Frontend recibe y renderiza:**
   - Parsea el JSON
   - Crea filas de tabla dinámicamente
   - Muestra en pantalla

**6. Admin cambia estado a 'ENVIADA':**
   - Frontend: `PUT /api/facturas/1/estado` con body `{estado: 'ENVIADA'}`
   - Backend: Actualiza en MySQL
   - Frontend: Actualiza UI sin recargar página (SPA behavior)"

#### **C. LocalStorage vs Base de Datos (0.25 min)**

> "Actualmente tenemos un sistema híbrido:

**LocalStorage (Temporal):**
- Carrito de compras
- Sesión activa del usuario
- Productos (antes de integrar backend)
- Proveedores (antes de integrar backend)

**Base de Datos MySQL (Persistente):**
- Usuarios registrados
- Pedidos confirmados
- Facturas
- Inventario real de productos

> En la siguiente fase, migraremos todo a la base de datos y LocalStorage solo se usará como caché para mejorar performance."

---

### **6. CONCLUSIONES Y SIGUIENTES PASOS (1 min) - Angelica**

**QUÉ DECIR:**

> "Para concluir, hemos desarrollado una plataforma e-commerce completa con:

**Logros:**
- Frontend moderno y responsivo con 23 páginas HTML
- Sistema completo de autenticación de usuarios
- Carrito de compras funcional
- Panel de administración con 3 módulos (Productos, Proveedores, Facturas)
- Backend robusto con Spring Boot y MySQL
- Integración frontend-backend mediante API REST
- Más de 5,300 líneas de código JavaScript

**Retos superados:**
- Validaciones complejas en tiempo real
- Manejo de estado con LocalStorage
- Diseño responsivo para todos los dispositivos
- Integración asíncrona con el backend
- Sistema de alertas y confirmaciones

**Próximos pasos:**
1. Integrar pasarela de pago (Stripe, PayPal, Mercado Pago)
2. Migrar toda la data de LocalStorage a MySQL
3. Implementar envío de emails automáticos
4. Generar PDFs de facturas
5. Sistema de notificaciones push
6. Implementar búsqueda y filtros avanzados
7. Agregar reviews y ratings de productos
8. Deployment a producción (AWS, Azure, o Heroku)
9. Certificado SSL para HTTPS
10. Optimización SEO

> Gracias por su atención. ¿Tienen alguna pregunta?"

---

## 🎯 PUNTOS CLAVE A DESTACAR

### **Para Evaluadores Técnicos:**
1. **Arquitectura escalable:** Separación frontend/backend
2. **API RESTful:** Endpoints bien estructurados
3. **Validaciones dobles:** Frontend y backend
4. **Seguridad:** JWT, BCrypt, prepared statements
5. **Responsive design:** Mobile-first approach
6. **Estado persistente:** LocalStorage + Base de datos
7. **Código limpio:** Modularización en archivos JS separados

### **Para Evaluadores de Negocio:**
1. **Solución completa:** No solo un prototipo, sino sistema funcional
2. **Gestión integral:** Desde catálogo hasta facturas
3. **Experiencia de usuario:** Interfaz intuitiva y moderna
4. **Administración eficiente:** Panel de control completo
5. **Escalabilidad:** Preparado para crecer
6. **Multitienda:** Soporte para múltiples ubicaciones
7. **ROI:** Ahorro de tiempo en gestión manual

---

## 🛠️ PREPARACIÓN TÉCNICA

### **ANTES DE LA PRESENTACIÓN (1 día antes):**

#### **1. Preparar el Entorno:**
- [ ] Frontend corriendo en `http://localhost:5500` (Live Server)
- [ ] Backend corriendo en `http://localhost:8080`
- [ ] Base de datos MySQL iniciada con datos de prueba
- [ ] Navegador con extensión de developer tools
- [ ] Pantalla duplicada/proyector configurado

#### **2. Datos de Prueba:**
- [ ] 10-15 productos en diferentes categorías
- [ ] 2-3 usuarios de prueba registrados
- [ ] 3-5 pedidos de ejemplo
- [ ] 5-7 facturas con diferentes estados
- [ ] 4-6 proveedores activos

**Usuario de prueba sugerido:**
```
Email: demo@muebleriaespana.com
Password: Demo2024!
```

**Admin de prueba:**
```
Email: admin@muebleriaespana.com
Password: Admin2024!
```

#### **3. Pestañas Pre-abiertas (en orden):**
1. `index.html` - Página principal
2. `paginas/salas.html` - Catálogo
3. `paginas/carrito.html` - Carrito
4. `paginas/checkout.html` - Checkout
5. `paginas/registro.html` - Registro
6. `paginas/perfil.html` - Perfil
7. `paginas/admin.html` - Admin productos
8. `paginas/proveedores.html` - Proveedores
9. `paginas/facturas.html` - Facturas
10. IDE con backend abierto
11. DevTools Network tab

#### **4. Recursos Visuales:**
- [ ] Diapositivas de apoyo (PowerPoint/Google Slides)
- [ ] Diagrama de arquitectura
- [ ] Diagrama de base de datos (ERD)
- [ ] Diagrama de flujo de datos
- [ ] Screenshots de backup (por si falla la demo en vivo)

#### **5. Plan B (Si falla la tecnología):**
- [ ] Video grabado de la demo (4-5 min)
- [ ] Screenshots impresos
- [ ] Presentación en PDF con capturas
- [ ] Versión en servidor en la nube (backup)

---

## 💡 CONSEJOS PARA UNA PRESENTACIÓN EXITOSA

### **Comunicación:**
1. **Hablar claro y pausado:** No correr por los nervios
2. **Volumen adecuado:** Que todos escuchen
3. **Evitar muletillas:** "ehhh", "osea", "pues"
4. **Mantener contacto visual:** Con la audiencia, no solo la pantalla
5. **Entusiasmo:** Muestren pasión por su proyecto

### **Coordinación del Equipo:**
1. **Transiciones suaves:** "Ahora le paso la palabra a Emmanuel..."
2. **Respeto al tiempo:** Usar cronómetro discreto
3. **Apoyarse mutuamente:** Si alguien olvida algo, el otro puede ayudar
4. **Responder juntos:** Si hay preguntas, pueden complementarse

### **Manejo de la Demo en Vivo:**
1. **Practicar 3-5 veces:** Hasta que fluya naturalmente
2. **Tener ventanas organizadas:** No buscar archivos en vivo
3. **Zoom al código:** Si muestran código, hacer zoom
4. **Narrar mientras hacen:** "Ahora voy a agregar este producto al carrito..."
5. **Plan B listo:** Si falla, tener screenshots

### **Responder Preguntas:**
1. **Escuchar completa:** No interrumpir
2. **Parafrasear:** "Si entiendo bien, preguntas sobre..."
3. **Ser honestos:** Si no saben algo, decir "No lo implementamos aún"
4. **Brevedad:** Respuestas de 30-60 segundos máximo
5. **Volver al tema:** No desviarse demasiado

### **Lenguaje Corporal:**
1. **Postura abierta:** No cruzar brazos
2. **Gestos naturales:** Usar manos para enfatizar
3. **Sonreír:** Proyecta confianza
4. **Evitar movimientos nerviosos:** No jugar con plumas, celular

---

## 📝 CHECKLIST FINAL (30 MIN ANTES)

### **Tecnología:**
- [ ] Laptop cargada 100%
- [ ] Cargador conectado
- [ ] WiFi funcionando (o trabajar offline)
- [ ] Backend iniciado y respondiendo
- [ ] Frontend corriendo
- [ ] Base de datos con datos
- [ ] Extensión ad-blocker desactivada
- [ ] Notificaciones del sistema apagadas
- [ ] Modo "No molestar" activado

### **Equipo:**
- [ ] Todos presentes 15 min antes
- [ ] Roles claros asignados
- [ ] Orden de participación confirmado
- [ ] Cronómetro listo
- [ ] Agua disponible para todos

### **Materiales:**
- [ ] Diapositivas cargadas
- [ ] Backup en USB
- [ ] Screenshots impresos (opcional)
- [ ] Notas de apoyo (tarjetas pequeñas)

### **Mental:**
- [ ] Respirar profundo 3 veces
- [ ] Repasar mentalmente el flujo
- [ ] Recordar: Ustedes son los expertos del proyecto
- [ ] Actitud positiva

---

## 🎭 SIMULACIÓN DE PREGUNTAS FRECUENTES

### **Pregunta 1:** "¿Por qué no usaron un framework como React o Angular?"
**Respuesta sugerida:**
> "Decidimos usar JavaScript vanilla para demostrar dominio de los fundamentos del lenguaje. Sin embargo, en un proyecto a mayor escala, definitivamente consideraríamos un framework como React para mejor gestión del estado y componentes reutilizables."

### **Pregunta 2:** "¿Cómo manejan la seguridad de las contraseñas?"
**Respuesta sugerida:**
> "En el frontend, actualmente usamos LocalStorage para prototipado rápido. Pero en el backend, las contraseñas se hashean con BCrypt antes de guardarlas en la base de datos, y usamos JWT tokens para autenticación stateless. Nunca guardamos contraseñas en texto plano en producción."

### **Pregunta 3:** "¿El sistema está listo para producción?"
**Respuesta sugerida:**
> "Tenemos un MVP completamente funcional. Para producción necesitamos: integrar pasarela de pago, implementar SSL/HTTPS, migrar completamente a base de datos, y optimizar para SEO. Estimamos 2-3 semanas adicionales."

### **Pregunta 4:** "¿Cuánto tiempo les tomó desarrollar esto?"
**Respuesta sugerida:**
> "El desarrollo tomó aproximadamente [X semanas/meses], trabajando [X horas por semana]. Incluye más de 5,300 líneas de código JavaScript, 23 páginas HTML, y un backend completo con Spring Boot."

### **Pregunta 5:** "¿Cómo escalaría si tienen miles de productos?"
**Respuesta sugerida:**
> "Implementaríamos paginación en el backend (ej: 20 productos por página), lazy loading en el frontend, cache con Redis, e índices en la base de datos. También consideraríamos CDN para las imágenes de productos."

### **Pregunta 6:** "¿Por qué eligieron Spring Boot para el backend?"
**Respuesta sugerida:**
> "Spring Boot es un framework maduro y ampliamente usado en la industria, con excelente documentación, gran comunidad, y características integradas como seguridad, manejo de transacciones, y validaciones. Además, Java es robusto para aplicaciones empresariales."

---

## ⏰ PRÁCTICA CRONOMETRADA

### **Ensayo Recomendado:**
1. **Ensayo 1 (Completo):** Medir tiempo real de cada sección
2. **Ensayo 2 (Ajustes):** Corregir partes que se pasaron de tiempo
3. **Ensayo 3 (Pulido):** Afinar transiciones y fluidez
4. **Ensayo 4 (Con cronómetro):** Simular presión de tiempo real
5. **Ensayo 5 (Con preguntas):** Uno del equipo hace preguntas difíciles

### **Señales de Tiempo (discretas):**
- **2 min restantes:** Angelica levanta 2 dedos
- **1 min restante:** Angelica levanta 1 dedo
- **30 seg:** Angelica hace señal de "wrap up"

---

## 🌟 MENSAJES CLAVE PARA RECORDAR

1. **"Es un sistema completo, no solo un demo"**
2. **"Arquitectura profesional con separación de capas"**
3. **"Diseñado pensando en escalabilidad"**
4. **"Seguridad desde el diseño"**
5. **"UX moderna y responsive"**
6. **"Gestión integral del negocio"**

---

## 🎊 DESPUÉS DE LA PRESENTACIÓN

- [ ] Agradecer a la audiencia
- [ ] Quedarse para preguntas adicionales
- [ ] Recoger feedback
- [ ] Compartir link del repositorio si aplica
- [ ] Celebrar el trabajo en equipo

---

## 📞 CONTACTOS DE EMERGENCIA

**Soporte técnico durante presentación:**
- Angelica: [coordinación general]
- Alberto: [backend y BD]
- Emmanuel: [frontend y demo]

---

# ¡MUCHO ÉXITO EN SU PRESENTACIÓN! 🚀

**Recuerden:** Han construido algo impresionante. Muéstrenlo con orgullo y confianza.

---

**Última actualización:** 10 de Noviembre, 2024
**Versión:** 1.0
**Creado por:** Equipo Mueblería España E-Commerce
