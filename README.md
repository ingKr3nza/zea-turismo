# 📘 Zea Turismo - Documentación del Proyecto

## 🏔️ Descripción General

**Zea Turismo** es una plataforma web desarrollada para promover el turismo en el municipio **Zea**, ubicado en el estado Mérida, Venezuela, conocido como el *"Rinconcito Encantado de los Andes"*.

El sitio web ofrece información detallada sobre:
- Historia y cultura del municipio
- Atractivos turísticos naturales y culturales
- Rutas de acceso y opciones de transporte
- Servicio de guías turísticos locales

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Next.js** | 15.1.7 | Framework principal (App Router) |
| **React** | 19.0.0 | Biblioteca de UI |
| **TypeScript** | 5.x | Tipado estático |
| **Tailwind CSS** | 3.4.1 | Utilidades CSS |
| **CSS Modules** | - | Estilos por componente |
| **React Icons** | - | Iconografía |
| **Next/Font** | - | Optimización de fuentes |
| **Next/Image** | - | Optimización de imágenes |

---

## 📁 Estructura del Proyecto

```
zea-turismo/
├── app/                         # App Router de Next.js
│   ├── fonts/                   # Carpeta de fuentes
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Página de inicio
│   ├── conoce-zea/              # Página "Conoce a Zea"
│   ├── como-llegar/             # Página "Cómo llegar"
│   └── solicita-guia/           # Página "Solicita un guía"
│
├── components/                  # Componentes reutilizables
│   ├── ui/                      # UI components (botones, modales)
│   ├── cards/                   # Tarjetas (Feature, Attraction, Transport)
│   ├── Navbar.tsx               # Barra de navegación
│   ├── Footer.tsx               # Pie de página
│   ├── Hero.tsx                 # Hero principal
│   ├── GuideForm.tsx            # Formulario de guías
│   └── VerticalImageSlider.tsx  # Slider vertical de imágenes
│
├── styles/                      # Estilos CSS Modules
│   ├── globals.css              # Estilos globales + variables CSS
│   ├── pages/                   # Estilos por página
│   └── components/              # Estilos por componente
│
├── public/                      # Archivos estáticos
│   ├── images/                  # Imágenes del sitio
│   ├── icon/                    # Iconos SVG personalizados
│   └── fonts/                   # Fuentes locales
│
├── lib/                         # Utilidades y configuraciones
│   ├── types/                   # Definiciones TypeScript
│   ├── functions/               # Funciones auxiliares
│
└── hooks/                       # Custom hooks de React
```

---

## 🎨 Sistema de Diseño

### Colores

```css
:root {
  --color-primary: #ecc9bd;   /* Beige - Fondo claro */
  --color-secondary: #394a34;  /* Verde oscuro - Textos principales */
  --color-accent1: #dea080;    /* Terracota - Acentos */
  --color-accent2: #db4b4e;    /* Rojo - Botones destacados */
  --color-accent3: #e6a36a;    /* Naranja - Hover y detalles */
}
```

### Tipografía

| Fuente | Uso | CSS Variable |
|--------|-----|---------------|
| **Space Grotesk** | Títulos principales | `var(--font-space-grotesk)` |
| **Montserrat** | Cuerpo de texto | `var(--font-montserrat)` |
| **Asap** | Textos destacados y botones | `var(--font-asap)` |

---

## 📄 Páginas del Sitio

### 1. Inicio (`/`)

**Secciones:**
- **Hero**: Video de fondo, título animado, CTA principal
- **¿Por qué visitar Zea?**: 3 tarjetas interactivas con iconos SVG
- **Estadísticas**: Animación de conteo (visitantes, guías, rutas, años)
- **El Rinconcito Encantado**: Historia de Zea + galería de imágenes
- **Atracciones destacadas**: Tarjetas de lugares turísticos

**Componentes clave:**
```tsx
<Hero />
<FeatureCard />
<AttractionCard />
<Button />
```

---

### 2. Conoce a Zea (`/conoce-zea`)

**Secciones:**
- **Hero**: Imagen de fondo, badge, título destacado
- **Historia y Orígenes**: Texto detallado + datos clave
- **Características Geográficas**: Zona alta, media, baja
- **Atractivos Turísticos**: Grid de lugares
- **Símbolos Municipales**: Bandera, Escudo, Himno
- **Cultura y Tradiciones**: 4 características culturales
- **Slider vertical**: Galería de 7 imágenes culturales
- **Call to Action**: "Visita Zea" con botones

**Componentes clave:**
```tsx
<VerticalImageSlider />
<AttractionCard />
```

---

### 3. Cómo llegar (`/como-llegar`)

**Secciones:**
- **Hero**: Imagen de fondo, badge, botones CTA
- **Quick Info**: Estadísticas rápidas
- **Rutas de Acceso**: Tarjetas interactivas (Mérida / El Vigía)
- **Opciones de Transporte**: 3 tarjetas con detalles expandibles
- **Recomendaciones**: 6 tips con iconos
- **Planificador de rutas**: Input + Google Maps
- **Mapa**: Mapa embebido de Zea

**Componentes clave:**
```tsx
<TransportCard />
```

---

### 4. Solicita un Guía (`/solicita-guia`)

**Secciones:**
- **Hero**: Imagen de fondo, badge, botones CTA
- **Panel de información**:
  - Beneficios (4 tarjetas)
  - Selección de lugares turísticos (2 columnas, 10 lugares)
  - Guías destacados
  - Tarjeta de precios
  - Contacto de emergencia
  - FAQ con acordeón
  - Sellos de confianza
- **Formulario de solicitud**: Validación + mensaje de éxito

**Componentes clave:**
```tsx
<GuideForm />
```

---

## 🧩 Componentes Principales

### Navbar
- Fijo en la parte superior
- Cambia de estilo al hacer scroll
- Menú responsive (hamburguesa en móvil)
- Enlaces: Inicio, Conoce a Zea, Cómo llegar, Solicita un guía

### Footer
- Información de marca y contacto
- Enlaces rápidos
- Newsletter (suscripción por email)
- Redes sociales
- Botón "Volver arriba"
- Año dinámico

### FeatureCard
```tsx
<FeatureCard
  title="Paisajes Andinos"
  description="..."
  iconSrc="/icon/park.svg"
  iconAlt="Paisajes"
  accent={false}
/>
```

### AttractionCard
```tsx
<AttractionCard
  name="Pozo Azul"
  location="Aldea Los Giros"
  imageUrl="/pozo_azul.jpg"
  badgeText="Imperdible"
  price="Entrada: $5"
  duration="Todo el día"
  maxPeople={15}
/>
```

### TransportCard
```tsx
<TransportCard
  title="Transporte Público"
  description="..."
  icon={<FiBus />}
  accent={false}
  details={[...]}
/>
```

### GuideForm
- Validación de campos
- Integración con lugares seleccionados
- Mensaje de éxito
- Campos: nombre, email, teléfono, fecha, número de personas, comentarios

---

## 🚀 Instalación y Ejecución

### Requisitos previos
- Node.js 18+
- npm o yarn

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/ingKr3nza/zea-turismo.git

# 2. Entrar al directorio
cd zea-turismo

# 3. Instalar dependencias
npm install

# 4. Ejecutar en desarrollo
npm run dev

# 5. Construir para producción
npm run build

# 6. Iniciar en producción
npm start
```


## 📱 Responsive Breakpoints

| Breakpoint | Dispositivo |
|------------|-------------|
| < 640px | Móvil |
| 640px - 768px | Móvil grande |
| 768px - 1024px | Tablet |
| ≥ 1024px | Desktop |

---

## 🎯 Mejoras Futuras Sugeridas

- [ ] Integración con backend para envío real de solicitudes
- [ ] Blog de experiencias de viajeros
- [ ] Galería de fotos interactiva
- [ ] Sistema de reseñas y calificaciones
- [ ] Versión en inglés del sitio
- [ ] Integración con WhatsApp para contacto directo
- [ ] Mapa interactivo con todos los puntos turísticos
- [ ] Calendario de eventos y festividades

---

## 👥 Créditos

**Desarrollador:** [ingKr3nza](https://github.com/ingKr3nza)

**Inspiración:** Template Chisfis para diseño de booking

**Contenido histórico:** Investigación documental del municipio Zea

---

## 📄 Licencia

Este proyecto es de uso educativo y promocional para el municipio Zea, Estado Mérida, Venezuela.

---