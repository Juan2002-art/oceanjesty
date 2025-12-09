# OceanJesty

Proyecto web completamente independiente y optimizado para desarrollo local.

## 🚀 Requisitos Previos

- **Node.js** (versión 20 o superior)
- **npm** (viene con Node.js)
- **Live Server** (extensión de VS Code) - opcional, para servir la carpeta dist

## 📦 Instalación

1. Clona o descarga este repositorio
2. Abre una terminal en la carpeta del proyecto
3. Instala las dependencias:

```bash
npm install
```

## 🛠️ Comandos Disponibles

### Desarrollo

Inicia el servidor de desarrollo con hot-reload:

```bash
npm run dev
```

El proyecto estará disponible en:
- **Local**: http://localhost:5000
- **Network**: http://[tu-ip]:5000

### Build de Producción

Genera la carpeta `dist` optimizada para producción:

```bash
npm run build
```

Los archivos compilados se generarán en la carpeta `dist/`.

### Preview de Producción

Previsualiza la build de producción localmente:

```bash
npm run preview
```

Esto sirve la carpeta `dist` en http://localhost:5000

### Live Server (Alternativa)

Si prefieres usar Live Server de VS Code:

1. Ejecuta `npm run build` para generar la carpeta `dist`
2. Haz clic derecho en `dist/index.html`
3. Selecciona "Open with Live Server"

## 📁 Estructura del Proyecto

```
OceanJesty-1-main/
├── client/              # Código fuente del cliente
│   ├── src/            # Componentes React y lógica
│   └── public/         # Archivos estáticos
├── server/             # Código del servidor (si aplica)
├── shared/             # Código compartido
├── dist/               # Build de producción (generado)
├── package.json        # Dependencias y scripts
├── vite.config.ts      # Configuración de Vite
└── tsconfig.json       # Configuración de TypeScript
```

## 🔧 Configuración

### Variables de Entorno (Opcional)

Si necesitas configurar una URL personalizada para producción, crea un archivo `.env` en la raíz del proyecto:

```env
VITE_APP_URL=https://tu-dominio.com
```

## ✨ Características

- ✅ **Sin dependencias de Replit** - Funciona en cualquier entorno local
- ✅ **Vite 7** - Build ultra rápido
- ✅ **React 19** - Última versión de React
- ✅ **TypeScript** - Tipado estático
- ✅ **Tailwind CSS 4** - Estilos modernos
- ✅ **Hot Module Replacement** - Recarga instantánea en desarrollo

## 🐛 Solución de Problemas

### El puerto 5000 está ocupado

Si el puerto 5000 ya está en uso, puedes cambiarlo en `vite.config.ts`:

```typescript
server: {
  port: 3000, // Cambia a cualquier puerto disponible
  host: true,
  open: true,
},
```

### Errores de TypeScript

Ejecuta el verificador de tipos:

```bash
npm run check
```

## 📝 Notas

- Este proyecto ha sido completamente limpiado de dependencias de Replit
- Todos los scripts están optimizados para desarrollo local
- La carpeta `dist` es compatible con cualquier servidor estático (Live Server, Nginx, Apache, etc.)

## 🎯 Scripts Adicionales

- `npm run dev:server` - Inicia solo el servidor backend (si aplica)
- `npm run build:server` - Compila el servidor
- `npm run check` - Verifica errores de TypeScript
- `npm run db:push` - Sincroniza la base de datos (si aplica)

## 🌐 Despliegue en Producción

### Vercel (Recomendado)

Este proyecto está **completamente configurado** para desplegarse en Vercel:

```bash
# Opción 1: Despliegue con Vercel CLI
npm install -g vercel
vercel

# Opción 2: Despliegue desde GitHub
# 1. Sube tu proyecto a GitHub
# 2. Importa en vercel.com
# 3. ¡Listo! Vercel detecta automáticamente la configuración
```

**📖 Guía Completa**: Ver [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) para instrucciones detalladas.

### Otras Plataformas

El proyecto también es compatible con:
- **Netlify**: Usa `npm run build` y despliega la carpeta `dist`
- **GitHub Pages**: Configura el workflow de GitHub Actions
- **Servidor Propio**: Sube la carpeta `dist` a tu servidor web


---

**¡Listo para desarrollar! 🎉**
