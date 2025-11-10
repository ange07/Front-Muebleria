# 📊 DIAPOSITIVAS SUGERIDAS PARA LA PRESENTACIÓN
## Mueblería España E-Commerce - 12 minutos

---

## 🎨 DISEÑO GENERAL
- **Colores del proyecto:** Verde Nórdico (#73917A) y Terracota (#CB997E)
- **Fuentes:** Playfair Display (títulos) y Poppins (texto)
- **Logo:** Incluir en todas las diapositivas (esquina superior)
- **Numeración:** Diapositiva X de Y (esquina inferior)

---

## DIAPOSITIVA 1: PORTADA
**Título:** MUEBLERÍA ESPAÑA E-COMMERCE
**Subtítulo:** Plataforma Completa de Comercio Electrónico

**Contenido:**
- Logo de Mueblería España
- Nombres del equipo:
  - Angelica
  - Emmanuel
  - Alan
  - Alberto
  - Lety
  - Humberto
- Fecha de presentación
- Institución/Curso

**Imagen de fondo:** Screenshot atractivo de la página principal

---

## DIAPOSITIVA 2: CONTEXTO DEL PROYECTO
**Título:** ¿Qué es Mueblería España?

**Contenido:**
- 🏠 **Empresa familiar** con 30+ años de experiencia
- 📍 **Ubicación:** San Felipe del Progreso, Estado de México
- 🛋️ **Productos:** Muebles y electrodomésticos
- 🎯 **Objetivo:** Transformación digital completa

**Imágenes:**
- Logo de la empresa
- Foto de la tienda física (si tienen)
- Mapa de ubicación

---

## DIAPOSITIVA 3: PROBLEMÁTICA Y SOLUCIÓN
**Título:** El Desafío

**Dos columnas:**

**ANTES (Problemática):**
- ❌ Sin presencia digital
- ❌ Alcance limitado a clientes locales
- ❌ Gestión manual de inventario
- ❌ No hay catálogo en línea
- ❌ Proceso de venta presencial únicamente

**DESPUÉS (Solución):**
- ✅ Tienda en línea 24/7
- ✅ Alcance nacional
- ✅ Gestión automatizada
- ✅ Catálogo digital completo
- ✅ Compras desde cualquier lugar

---

## DIAPOSITIVA 4: STACK TECNOLÓGICO
**Título:** Tecnologías Utilizadas

**Diagrama con 3 columnas:**

**FRONTEND**
- HTML5
- CSS3
- JavaScript (Vanilla)
- Bootstrap 5
- Bootstrap Icons

**BACKEND**
- Java 17
- Spring Boot
- Spring Security
- JWT Auth
- Maven

**BASE DE DATOS**
- MySQL 8.0
- JPA/Hibernate

**Extras:**
- Git & GitHub
- LocalStorage API
- Fetch API
- BCrypt

---

## DIAPOSITIVA 5: ARQUITECTURA DEL SISTEMA
**Título:** Arquitectura General

**Diagrama de flujo:**

```
┌─────────────────┐
│   NAVEGADOR     │
│   (Cliente)     │
└────────┬────────┘
         │ HTTP/HTTPS
         ↓
┌─────────────────┐
│   FRONTEND      │
│  HTML/CSS/JS    │
│   Bootstrap     │
└────────┬────────┘
         │ Fetch API
         │ REST
         ↓
┌─────────────────┐
│   BACKEND       │
│  Spring Boot    │
│  (Puerto 8080)  │
└────────┬────────┘
         │ JDBC
         ↓
┌─────────────────┐
│   BASE DATOS    │
│     MySQL       │
└─────────────────┘
```

---

## DIAPOSITIVA 6: FUNCIONALIDADES - CLIENTE
**Título:** Módulo de Cliente

**Grid de 6 features con iconos:**

1. 🏠 **Navegación intuitiva**
   - Menú por categorías
   - Búsqueda de productos

2. 🛒 **Carrito de compras**
   - Agregar/eliminar productos
   - Persistencia de datos

3. 👤 **Autenticación**
   - Registro de usuarios
   - Login seguro

4. 📦 **Catálogo completo**
   - 6 categorías
   - Imágenes y detalles

5. 💳 **Proceso de checkout**
   - Resumen de pedido
   - Cálculo de totales

6. 📱 **Diseño responsivo**
   - Adaptable a móviles
   - Touch-friendly

---

## DIAPOSITIVA 7: FUNCIONALIDADES - ADMIN
**Título:** Panel de Administración

**3 módulos principales con iconos:**

1. 📦 **GESTIÓN DE PRODUCTOS**
   - Crear, editar, eliminar
   - Control de stock
   - SKU únicos
   - Categorización

2. 🏭 **GESTIÓN DE PROVEEDORES**
   - Registro de proveedores
   - Datos de contacto
   - Estado activo/inactivo

3. 📄 **SISTEMA DE FACTURAS**
   - Generación automática
   - Control de estados
   - Cálculo de IVA
   - Integración con backend

---

## DIAPOSITIVA 8: MODELO DE DATOS
**Título:** Estructura de la Base de Datos

**Diagrama ERD simplificado:**

```
┌──────────┐       ┌──────────┐       ┌──────────────┐
│ USUARIO  │       │  PEDIDO  │       │ DETALLE_     │
├──────────┤       ├──────────┤       │ PEDIDO       │
│ id (PK)  │───────│id (PK)   │───────│id (PK)       │
│ nombre   │   1:N │id_usuario│   1:N │id_pedido     │
│ correo   │       │fecha     │       │id_producto   │
│ telefono │       │total     │       │cantidad      │
│ password │       │estado    │       │precio_unit   │
└──────────┘       └────┬─────┘       └──────────────┘
                        │
                        │ 1:1
                        ↓
                   ┌──────────┐
                   │ FACTURA  │
                   ├──────────┤
                   │ id (PK)  │
                   │id_pedido │
                   │ folio    │
                   │ subtotal │
                   │ iva      │
                   │ total    │
                   │ estado   │
                   └──────────┘

┌──────────┐       ┌──────────────┐
│ PRODUCTO │       │ PROVEEDOR    │
├──────────┤       ├──────────────┤
│ id (PK)  │       │ id (PK)      │
│ sku      │       │nombre_empresa│
│ nombre   │       │ contacto     │
│ precio   │       │ telefono     │
│ stock    │       │ email        │
│ categoria│       │ activo       │
└──────────┘       └──────────────┘
```

---

## DIAPOSITIVA 9: API REST ENDPOINTS
**Título:** Endpoints del Backend

**Tabla organizada:**

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| **AUTENTICACIÓN** |
| POST | `/api/auth/register` | Registrar usuario | No |
| POST | `/api/auth/login` | Iniciar sesión | No |
| **PRODUCTOS** |
| GET | `/api/productos` | Listar todos | No |
| POST | `/api/productos` | Crear producto | Admin |
| PUT | `/api/productos/{id}` | Actualizar | Admin |
| DELETE | `/api/productos/{id}` | Eliminar | Admin |
| **PEDIDOS** |
| POST | `/api/pedidos` | Crear pedido | User |
| GET | `/api/pedidos/usuario/{id}` | Mis pedidos | User |
| **FACTURAS** |
| GET | `/api/facturas/admin/todas` | Listar facturas | Admin |
| PUT | `/api/facturas/{id}/estado` | Cambiar estado | Admin |

---

## DIAPOSITIVA 10: SEGURIDAD
**Título:** Características de Seguridad

**6 puntos con iconos:**

1. 🔐 **BCrypt Hashing**
   - Contraseñas hasheadas
   - No se guarda texto plano

2. 🎫 **JWT Tokens**
   - Autenticación stateless
   - Tokens con expiración

3. 🛡️ **Validaciones**
   - Frontend y backend
   - Prevención de datos inválidos

4. 🚫 **SQL Injection**
   - Prepared statements
   - JPA/Hibernate protección

5. 🔒 **CORS Configurado**
   - Solo frontend autorizado
   - Peticiones controladas

6. 👮 **Control de Roles**
   - USER vs ADMIN
   - Endpoints protegidos

---

## DIAPOSITIVA 11: DISEÑO RESPONSIVO
**Título:** Adaptable a Todos los Dispositivos

**3 mockups lado a lado:**

1. **Desktop** (≥992px)
   - Screenshot del sitio en desktop
   - Menú completo
   - Grid de 4 productos

2. **Tablet** (≥768px)
   - Screenshot en tablet
   - Menú adaptado
   - Grid de 2 productos

3. **Mobile** (<768px)
   - Screenshot en móvil
   - Hamburger menu
   - Productos apilados

**Texto:**
"Diseño Mobile-First con Bootstrap 5"

---

## DIAPOSITIVA 12: INTEGRACIÓN FRONTEND-BACKEND
**Título:** Comunicación Frontend ↔ Backend

**Diagrama de secuencia:**

```
Usuario          Frontend         Backend          Base Datos
  │                │                │                 │
  │─Click─────────>│                │                 │
  │                │                │                 │
  │                │─Fetch API────>│                 │
  │                │  GET /api     │                 │
  │                │                │                 │
  │                │                │─Query SQL────>│
  │                │                │                 │
  │                │                │<─Resultados────│
  │                │                │                 │
  │                │<─JSON──────────│                 │
  │                │  200 OK        │                 │
  │                │                │                 │
  │<─Actualiza DOM─│                │                 │
```

**Ejemplo de código:**
```javascript
fetch('http://localhost:8080/api/productos')
  .then(res => res.json())
  .then(data => mostrarProductos(data))
```

---

## DIAPOSITIVA 13: ESTADÍSTICAS DEL PROYECTO
**Título:** Trabajo Realizado

**Grid con números grandes:**

- 📄 **23** Páginas HTML
- 💻 **5,300+** Líneas de JavaScript
- 🎨 **13** Archivos CSS
- 📦 **6** Categorías de productos
- 🔧 **3** Módulos de admin
- 🌐 **15+** API Endpoints
- 📊 **7** Modelos de datos
- 👥 **6** Desarrolladores

---

## DIAPOSITIVA 14: DEMO - SCREENSHOTS
**Título:** Vista Previa del Sistema

**Grid de 6 screenshots:**

1. Página principal (Hero)
2. Catálogo de productos
3. Carrito de compras
4. Perfil de usuario
5. Panel de admin - Productos
6. Sistema de facturas

*(Esta diapositiva es backup por si falla la demo en vivo)*

---

## DIAPOSITIVA 15: RETOS Y APRENDIZAJES
**Título:** Lo Que Superamos

**Dos columnas:**

**RETOS TÉCNICOS:**
- ⚡ Validaciones complejas en tiempo real
- 🔄 Sincronización de estado
- 🎨 Diseño consistente en 23 páginas
- 🔌 Integración asíncrona con API
- 📱 Responsividad perfecta
- 🐛 Debugging de errores complejos

**APRENDIZAJES:**
- ✨ Trabajo en equipo efectivo
- 📚 Nuevas tecnologías (Spring Boot)
- 🏗️ Arquitectura escalable
- 🔐 Mejores prácticas de seguridad
- 🎯 Gestión de tiempo
- 💡 Resolución de problemas

---

## DIAPOSITIVA 16: FUNCIONALIDADES IMPLEMENTADAS
**Título:** ¿Qué Funciona Hoy?

**Checklist con checkmarks:**

✅ **Completamente funcional:**
- Navegación y catálogo
- Carrito de compras persistente
- Registro y login de usuarios
- Perfil de cliente editable
- CRUD completo de productos (Admin)
- CRUD completo de proveedores (Admin)
- Gestión de facturas con API
- Diseño responsive 100%
- Validaciones en todos los formularios

🚧 **En desarrollo:**
- Pasarela de pago
- Envío de emails
- Generación de PDF

---

## DIAPOSITIVA 17: PRÓXIMOS PASOS
**Título:** Roadmap Futuro

**Timeline o lista numerada:**

**FASE 1 (2 semanas):**
1. Integrar Stripe/PayPal
2. Migrar data a MySQL completamente
3. Implementar envío de emails

**FASE 2 (1 mes):**
4. Generación de PDFs de facturas
5. Sistema de notificaciones push
6. Búsqueda y filtros avanzados

**FASE 3 (2 meses):**
7. Reviews y ratings de productos
8. Sistema de recomendaciones
9. Panel de analytics

**FASE 4 (Producción):**
10. Deployment a AWS/Azure
11. Certificado SSL/HTTPS
12. Optimización SEO
13. Testing completo (Unit + E2E)

---

## DIAPOSITIVA 18: TECNOLOGÍA ESCALABLE
**Título:** Preparados Para Crecer

**4 pilares:**

1. 📈 **ESCALABILIDAD**
   - Arquitectura modular
   - API RESTful stateless
   - Base de datos relacional

2. 🔧 **MANTENIBILIDAD**
   - Código limpio y documentado
   - Separación de concerns
   - Git version control

3. 🛡️ **SEGURIDAD**
   - Authentication/Authorization
   - Encriptación de passwords
   - Validaciones múltiples

4. ⚡ **PERFORMANCE**
   - Lazy loading
   - Cache en LocalStorage
   - Queries optimizadas

---

## DIAPOSITIVA 19: IMPACTO DEL NEGOCIO
**Título:** Valor Para Mueblería España

**Métricas y beneficios:**

**BENEFICIOS INMEDIATOS:**
- 🌐 Presencia en línea profesional
- 📈 Alcance a nuevos clientes
- ⏰ Atención 24/7
- 📊 Métricas de ventas digitalizadas

**BENEFICIOS A MEDIANO PLAZO:**
- 💰 Aumento potencial de ventas
- 📉 Reducción de costos operativos
- 🚀 Competitividad en el mercado
- 📱 Captación de clientes jóvenes

**ROI ESTIMADO:**
- Ahorro de X horas/semana en gestión manual
- Potencial de Y% más ventas
- Z nuevos clientes online

---

## DIAPOSITIVA 20: COMPARACIÓN CON COMPETENCIA
**Título:** Ventajas Competitivas

**Tabla comparativa:**

| Feature | Nuestra Solución | Competencia |
|---------|------------------|-------------|
| Panel de Admin | ✅ Completo | ⚠️ Básico |
| Gestión de Proveedores | ✅ | ❌ |
| Sistema de Facturas | ✅ Automatizado | ⚠️ Manual |
| Responsive Design | ✅ 100% | ⚠️ Parcial |
| API REST | ✅ Documentada | ❌ |
| Seguridad JWT | ✅ | ❌ |
| Multitienda | ✅ | ❌ |
| Código escalable | ✅ | ⚠️ |

---

## DIAPOSITIVA 21: EQUIPO DE DESARROLLO
**Título:** Nuestro Equipo

**6 perfiles con fotos (opcional) y roles:**

1. **Angelica** - Project Manager & Full Stack
2. **Emmanuel** - Frontend Developer (UX)
3. **Alan** - Frontend Developer (Auth)
4. **Alberto** - Backend Developer
5. **Lety** - Frontend Developer (Admin)
6. **Humberto** - Full Stack Integrator

**Texto adicional:**
"6 personas | X semanas | 5,300+ líneas de código | Infinita dedicación"

---

## DIAPOSITIVA 22: REPOSITORIO Y RECURSOS
**Título:** Recursos del Proyecto

**Links y QR codes:**

📁 **GitHub Repository:**
- URL del repositorio
- QR code para acceso rápido

📖 **Documentación:**
- README.md
- Guía de instalación
- API documentation

🎥 **Demo en Línea:**
- URL del deploy (si tienen)
- Credenciales de prueba

📧 **Contacto:**
- Emails del equipo

---

## DIAPOSITIVA 23: AGRADECIMIENTOS
**Título:** Gracias

**Contenido centrado:**

**Agradecimientos a:**
- 👨‍🏫 Profesor/a [Nombre]
- 🏫 [Institución]
- 👥 Nuestro equipo
- 🏠 Mueblería España por confiar en nosotros

**Logo institucional**

---

## DIAPOSITIVA 24: PREGUNTAS
**Título:** ¿Preguntas?

**Visual atractivo:**
- Icono grande de pregunta (?)
- Emails de contacto
- Disponibilidad para explicaciones adicionales

**Texto:**
"Estamos listos para responder sus dudas"

---

## DIAPOSITIVA 25: DEMO EN VIVO
**Título:** DEMO EN VIVO

**Solo texto grande:**
"Ahora veamos el sistema en acción..."

*(Esta diapositiva se muestra mientras cambian a la demo en vivo)*

---

## 🎨 NOTAS DE DISEÑO

### **Paleta de Colores Consistente:**
- Primario: #73917A (Verde Nórdico)
- Secundario: #CB997E (Terracota)
- Fondo: #F5F4EF (Claro)
- Texto: #686763 (Oscuro)

### **Tipografía:**
- Títulos: Playfair Display (serif), bold, 36-48pt
- Subtítulos: Poppins, semibold, 24-28pt
- Texto: Poppins, regular, 16-18pt
- Código: Fira Code o Consolas, 14pt

### **Iconos:**
- Usar Bootstrap Icons consistentemente
- Tamaño: 48x48px para features principales
- Color: Verde Nórdico o Terracota

### **Imágenes:**
- Alta resolución (mínimo 1920x1080)
- Optimizadas para carga rápida
- Screenshots con sombras sutiles
- Mockups profesionales

---

## 📝 CONSEJOS DE DISEÑO

1. **Menos es más:** No saturar las diapositivas
2. **Regla 6x6:** Máximo 6 bullets con 6 palabras cada uno
3. **Contraste:** Texto oscuro en fondo claro
4. **Alineación:** Todo alineado a la izquierda o centrado, consistente
5. **Espaciado:** Padding generoso entre elementos
6. **Animaciones:** Usar con moderación (fade in suave)
7. **Transiciones:** Suaves y rápidas (0.3s)

---

## 🔧 HERRAMIENTAS RECOMENDADAS

- **Google Slides** - Colaboración en línea
- **PowerPoint** - Más control de diseño
- **Canva** - Templates profesionales
- **Figma** - Para mockups y diagramas
- **Draw.io** - Para diagramas técnicos

---

## ✅ CHECKLIST PRE-PRESENTACIÓN

- [ ] Todas las imágenes cargadas y visible
- [ ] Links funcionando (si los hay)
- [ ] Texto sin errores ortográficos
- [ ] Diseño consistente en todas las slides
- [ ] Modo presentador configurado
- [ ] Notas del presentador agregadas
- [ ] Backup en USB y en la nube
- [ ] Probado en el proyector real

---

**Nota Final:** Estas diapositivas son el **soporte visual**. La presentación real la hacen USTEDES con su explicación y demo en vivo. Las slides solo complementan, no reemplazan su conocimiento.

¡Éxito! 🚀
