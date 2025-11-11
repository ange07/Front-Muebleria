-- =====================================================
-- SCRIPT SQL: DATOS DE EJEMPLO - MUEBLERÍA ESPAÑA
-- =====================================================
-- Este script inserta datos de prueba para el sistema
-- EJECUTAR DESPUÉS de crear las tablas principales
-- =====================================================

USE muebleria_db;

-- =====================================================
-- 1. ROLES
-- =====================================================
INSERT INTO roles (nombre_rol) VALUES
('ADMINISTRADOR'),
('CLIENTE')
ON DUPLICATE KEY UPDATE nombre_rol = VALUES(nombre_rol);

-- =====================================================
-- 2. USUARIOS DE PRUEBA
-- =====================================================
-- Contraseña para todos: "password123" (encriptada con BCrypt)
-- NOTA: El backend encripta automáticamente, estos son ejemplos
INSERT INTO usuarios (nombre, apellidos, correo, password_has, telefono, activo, id_rol) VALUES
('Admin', 'Sistema', 'admin@ecommerce.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', '7221234567', 1, 1),
('Juan', 'Pérez García', 'juan.perez@email.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', '7229876543', 1, 2),
('María', 'López Hernández', 'maria.lopez@email.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', '7225551234', 1, 2),
('Carlos', 'Ramírez Torres', 'carlos.ramirez@email.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', '7228889999', 1, 2)
ON DUPLICATE KEY UPDATE correo = VALUES(correo);

-- =====================================================
-- 3. CATEGORÍAS
-- =====================================================
INSERT INTO categorias (nombre_categoria, activo, id_categoria_padre) VALUES
-- Categorías principales (padre = NULL)
('Salas', 1, NULL),
('Comedores', 1, NULL),
('Dormitorios', 1, NULL),
('Roperos', 1, NULL),
('Colchones', 1, NULL),
('Línea Blanca', 1, NULL),

-- Subcategorías de Salas
('Salas Modulares', 1, 1),
('Salas Reclinables', 1, 1),
('Salas de Piel', 1, 1),

-- Subcategorías de Comedores
('Comedores 4 Sillas', 1, 2),
('Comedores 6 Sillas', 1, 2),
('Comedores 8 Sillas', 1, 2),

-- Subcategorías de Dormitorios
('Recámaras Matrimoniales', 1, 3),
('Recámaras Individuales', 1, 3),

-- Subcategorías de Línea Blanca
('Refrigeradores', 1, 6),
('Estufas', 1, 6),
('Lavadoras', 1, 6)
ON DUPLICATE KEY UPDATE nombre_categoria = VALUES(nombre_categoria);

-- =====================================================
-- 4. PROVEEDORES
-- =====================================================
INSERT INTO proveedores (nombre_empresa, nombre, telefono, correo, direccion, activo) VALUES
('Muebles del Norte S.A. de C.V.', 'Carlos Martínez López', '7221234567', 'ventas@mueblesnorte.com', 'Av. Industrial 123, Parque Industrial, Pachuca, Hidalgo, CP 42080', 1),
('Maderas Finas México', 'Ana García Rodríguez', '7229876543', 'contacto@maderasfinas.com', 'Blvd. Felipe Ángeles 456, Zona Centro, Pachuca, Hidalgo, CP 42000', 1),
('Electrodomésticos Global', 'Roberto Sánchez Pérez', '7225551234', 'ventas@electronicaglobal.com', 'Carretera México-Pachuca Km 84.5, Real del Monte, Hidalgo, CP 42100', 1),
('Tapicería y Diseño', 'Laura Fernández Gómez', '7228889999', 'info@tapiceriadiseno.com', 'Calle Morelos 789, Col. Centro, Pachuca, Hidalgo, CP 42000', 1),
('Distribuidora de Colchones Premium', 'Miguel Ángel Torres', '7223334444', 'ventas@colchonespremium.com', 'Av. Revolución 321, Col. Morelos, Pachuca, Hidalgo, CP 42040', 1)
ON DUPLICATE KEY UPDATE nombre_empresa = VALUES(nombre_empresa);

-- =====================================================
-- 5. PRODUCTOS
-- =====================================================

-- SALAS
INSERT INTO productos (producto, descripcion, precio_actual, stock_disponible, activo, activo_por_dependencia, id_categoria, id_proveedor) VALUES
('Sala Modular 5 Piezas Gris Oxford', 'Elegante sala modular de 5 piezas en tela premium color gris Oxford. Incluye: 2 sillones de 1 plaza, 1 sofá de 3 plazas, 1 otomana y 1 mesa de centro. Estructura de madera de pino reforzada. Cojines de alta densidad para mayor confort.', 15999.99, 8, 1, 0, 7, 1),
('Sala Reclinable 3 Piezas Café', 'Sala reclinable de 3 piezas en tela microfibra color café. Sistema de reclinación manual. Incluye: 2 sillones reclinables individuales y 1 sofá reclinable de 2 plazas. Ideal para salas de estar y home theater.', 18500.00, 5, 1, 0, 8, 1),
('Sala de Piel Genuina 3-2-1 Negra', 'Lujosa sala de piel genuina color negro. Configuración 3-2-1 (sofá de 3 plazas, loveseat de 2 plazas, sillón individual). Patas cromadas. Estructura reforzada de madera maciza. Garantía de 5 años.', 32999.00, 3, 1, 0, 9, 1),

-- COMEDORES
('Comedor 6 Sillas Madera Caoba', 'Comedor elegante de madera de caoba. Mesa rectangular de 1.80m x 1.00m. 6 sillas tapizadas en tela beige con respaldo alto. Acabado en barniz semi-mate. Perfecto para espacios amplios.', 12999.99, 6, 1, 0, 11, 2),
('Comedor 4 Sillas Moderno Blanco', 'Comedor moderno con mesa de cristal templado de 8mm y base de acero inoxidable. 4 sillas con asiento acolchado en vinil color blanco. Ideal para espacios pequeños y cocinas integrales.', 7999.00, 10, 1, 0, 10, 2),
('Comedor 8 Sillas Madera Nogal', 'Comedor de lujo en madera de nogal. Mesa extensible de 2.00m (se extiende hasta 2.60m). 8 sillas tapizadas en terciopelo color vino. Ideal para comedores formales y cenas familiares.', 24999.99, 2, 1, 0, 12, 2),

-- DORMITORIOS
('Recámara Matrimonial 5 Piezas Contemporánea', 'Recámara matrimonial completa estilo contemporáneo. Incluye: cama king size con cabecera tapizada, 2 burós con 2 cajones cada uno, cómoda de 6 cajones y espejo. Color nogal con detalles cromados.', 19999.00, 4, 1, 0, 13, 1),
('Recámara Individual Juvenil Azul', 'Recámara juvenil en color azul cielo con blanco. Incluye: cama individual con cabecera, buró de 2 cajones y escritorio con cajonera. Perfecta para dormitorios juveniles.', 8500.00, 7, 1, 0, 14, 1),

-- COLCHONES
('Colchón Matrimonial Memory Foam Ortopédico', 'Colchón matrimonial (1.90m x 1.40m) con capa de memory foam de 5cm. Sistema de resortes independientes. Firmeza media-alta. Hipoalergénico. Garantía de 10 años. Incluye protector impermeable.', 9999.99, 15, 1, 0, 5, 5),
('Colchón King Size Pillow Top Premium', 'Colchón king size (2.00m x 2.00m) con tecnología Pillow Top. Doble capa de espuma viscoelástica. Sistema de ventilación avanzado. Garantía de 15 años.', 18999.00, 8, 1, 0, 5, 5),

-- LÍNEA BLANCA
('Refrigerador Samsung 18 pies³ Acero Inoxidable', 'Refrigerador de 18 pies cúbicos en acero inoxidable. Tecnología No Frost. Dispensador de agua y hielo. Compresor digital inverter. Eficiencia energética A+. Garantía de 2 años.', 14999.99, 6, 1, 0, 15, 3),
('Estufa Mabe 6 Quemadores Gas', 'Estufa de 6 quemadores con horno eléctrico. Parrillas de hierro fundido. Encendido automático. Cubierta de acero porcelanizado. Color negro. Incluye instalación básica.', 8499.00, 10, 1, 0, 16, 3),
('Lavadora LG 22 Kg Carga Frontal', 'Lavadora de carga frontal con capacidad de 22 kg. Tecnología TurboWash. 14 programas de lavado. Función vapor. Eficiencia energética A+++. Color plateado. Garantía de 3 años.', 12999.99, 5, 1, 0, 17, 3),

-- ROPEROS
('Ropero 3 Puertas con Espejo Blanco', 'Ropero de 3 puertas con espejo central. Interior con 2 entrepaños y tubo para colgar. Cajón inferior. Color blanco mate. Dimensiones: 1.80m alto x 1.50m ancho x 0.60m profundidad.', 7999.00, 8, 1, 0, 4, 2),
('Closet Walk-in Modular Nogal', 'Sistema modular para walk-in closet en color nogal. Incluye: 4 entrepaños, 2 tubos para colgar, 6 cajones y zapatera. Se adapta a espacios de 2.5m x 2.5m. Instalación incluida.', 15999.99, 3, 1, 0, 4, 2)
ON DUPLICATE KEY UPDATE producto = VALUES(producto);

-- =====================================================
-- 6. IMÁGENES DE PRODUCTOS
-- =====================================================
-- NOTA: Estas son URLs de ejemplo. Deben reemplazarse con URLs reales de Imgur, Cloudinary, etc.

INSERT INTO imagenes_producto (url_imagen, id_producto) VALUES
-- Sala Modular Gris (ID: 1)
('https://i.imgur.com/sala-modular-1.jpg', 1),
('https://i.imgur.com/sala-modular-2.jpg', 1),

-- Sala Reclinable Café (ID: 2)
('https://i.imgur.com/sala-reclinable-1.jpg', 2),
('https://i.imgur.com/sala-reclinable-2.jpg', 2),

-- Sala de Piel Negra (ID: 3)
('https://i.imgur.com/sala-piel-1.jpg', 3),

-- Comedor 6 Sillas (ID: 4)
('https://i.imgur.com/comedor-6-sillas-1.jpg', 4),
('https://i.imgur.com/comedor-6-sillas-2.jpg', 4),

-- Comedor 4 Sillas Moderno (ID: 5)
('https://i.imgur.com/comedor-4-sillas-1.jpg', 5),

-- Comedor 8 Sillas (ID: 6)
('https://i.imgur.com/comedor-8-sillas-1.jpg', 6),

-- Recámara Matrimonial (ID: 7)
('https://i.imgur.com/recamara-matrimonial-1.jpg', 7),
('https://i.imgur.com/recamara-matrimonial-2.jpg', 7),

-- Recámara Juvenil (ID: 8)
('https://i.imgur.com/recamara-juvenil-1.jpg', 8),

-- Colchón Memory Foam (ID: 9)
('https://i.imgur.com/colchon-memory-foam-1.jpg', 9),

-- Colchón King Size (ID: 10)
('https://i.imgur.com/colchon-king-1.jpg', 10),

-- Refrigerador Samsung (ID: 11)
('https://i.imgur.com/refrigerador-samsung-1.jpg', 11),
('https://i.imgur.com/refrigerador-samsung-2.jpg', 11),

-- Estufa Mabe (ID: 12)
('https://i.imgur.com/estufa-mabe-1.jpg', 12),

-- Lavadora LG (ID: 13)
('https://i.imgur.com/lavadora-lg-1.jpg', 13),

-- Ropero 3 Puertas (ID: 14)
('https://i.imgur.com/ropero-3-puertas-1.jpg', 14),

-- Closet Walk-in (ID: 15)
('https://i.imgur.com/closet-walkin-1.jpg', 15),
('https://i.imgur.com/closet-walkin-2.jpg', 15)
ON DUPLICATE KEY UPDATE url_imagen = VALUES(url_imagen);

-- =====================================================
-- 7. DIRECCIONES DE EJEMPLO
-- =====================================================
INSERT INTO direcciones (tipo_direccion, alias, direccion, ciudad, estado, municipio, codigo_postal, es_predeterminada, id_usuario) VALUES
('ENVIO', 'Casa', 'Calle Morelos 123, Col. Centro', 'Pachuca', 'Hidalgo', 'Pachuca de Soto', '42000', 1, 2),
('ENVIO_Y_FACTURACION', 'Trabajo', 'Blvd. Luis Donaldo Colosio 456, Col. Venta Prieta', 'Pachuca', 'Hidalgo', 'Pachuca de Soto', '42080', 0, 2),
('ENVIO', 'Casa', 'Av. Juárez 789, Col. Periodistas', 'Pachuca', 'Hidalgo', 'Pachuca de Soto', '42060', 1, 3),
('ENVIO', 'Casa', 'Privada de la Luna 321, Fracc. Arboledas', 'Pachuca', 'Hidalgo', 'Pachuca de Soto', '42094', 1, 4)
ON DUPLICATE KEY UPDATE alias = VALUES(alias);

-- =====================================================
-- 8. VERIFICAR DATOS INSERTADOS
-- =====================================================
SELECT 'RESUMEN DE DATOS INSERTADOS:' AS '';
SELECT COUNT(*) AS 'Total Usuarios' FROM usuarios;
SELECT COUNT(*) AS 'Total Roles' FROM roles;
SELECT COUNT(*) AS 'Total Categorías' FROM categorias;
SELECT COUNT(*) AS 'Total Proveedores' FROM proveedores;
SELECT COUNT(*) AS 'Total Productos' FROM productos;
SELECT COUNT(*) AS 'Total Imágenes' FROM imagenes_producto;
SELECT COUNT(*) AS 'Total Direcciones' FROM direcciones;

-- =====================================================
-- NOTAS IMPORTANTES:
-- =====================================================
-- 1. Las URLs de las imágenes son de EJEMPLO. Debes reemplazarlas con URLs reales.
--    Opciones para subir imágenes:
--    - Imgur: https://imgur.com (gratuito, fácil)
--    - Cloudinary: https://cloudinary.com (plan gratuito disponible)
--    - ImgBB: https://imgbb.com (gratuito)
--
-- 2. Las contraseñas están encriptadas con BCrypt.
--    Contraseña para todos los usuarios: "password123"
--
-- 3. El usuario admin@ecommerce.com tiene rol ADMINISTRADOR automáticamente.
--
-- 4. Los IDs pueden variar según el orden de inserción. Ajusta las FK si es necesario.
--
-- 5. Para limpiar la base de datos antes de ejecutar este script:
--    SET FOREIGN_KEY_CHECKS = 0;
--    TRUNCATE TABLE imagenes_producto;
--    TRUNCATE TABLE productos;
--    TRUNCATE TABLE proveedores;
--    TRUNCATE TABLE categorias;
--    TRUNCATE TABLE direcciones;
--    TRUNCATE TABLE usuarios;
--    TRUNCATE TABLE roles;
--    SET FOREIGN_KEY_CHECKS = 1;
-- =====================================================
