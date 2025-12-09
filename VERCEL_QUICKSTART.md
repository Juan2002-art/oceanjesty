# 🚀 Guía Rápida de Despliegue en Vercel

## ✅ Tu Proyecto Está Listo

Tu proyecto **OceanJesty** está **100% configurado** para desplegarse en Vercel. Todos los archivos necesarios ya están creados y optimizados.

---

## 🎯 Opción 1: Despliegue Automático (Más Fácil)

### Usando el Script Incluido

```bash
# Despliegue de prueba (preview)
npm run deploy

# Despliegue a producción
npm run deploy:prod
```

**Esto hará automáticamente**:
1. ✅ Verificar e instalar Vercel CLI si es necesario
2. ✅ Instalar dependencias si faltan
3. ✅ Generar el build de producción
4. ✅ Desplegar en Vercel

---

## 🎯 Opción 2: Despliegue Manual con Vercel CLI

### Paso 1: Instalar Vercel CLI

```bash
npm install -g vercel
```

### Paso 2: Login en Vercel

```bash
vercel login
```

### Paso 3: Desplegar

```bash
# Preview deployment
vercel

# Production deployment
vercel --prod
```

---

## 🎯 Opción 3: Despliegue desde GitHub (Recomendado para Producción)

### Paso 1: Subir a GitHub

```bash
git init
git add .
git commit -m "Ready for Vercel deployment"
git remote add origin https://github.com/TU_USUARIO/oceanjesty.git
git push -u origin main
```

### Paso 2: Importar en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Click en "Add New..." → "Project"
3. Selecciona tu repositorio de GitHub
4. Click en "Deploy"

**¡Listo!** Vercel detecta automáticamente la configuración.

---

## 📋 Archivos de Configuración Incluidos

Tu proyecto ya incluye:

✅ **`vercel.json`** - Configuración de Vercel
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [...]
}
```

✅ **`vite.config.vercel.ts`** - Configuración de Vite para Vercel

✅ **`.vercelignore`** - Archivos a ignorar en el despliegue

✅ **`deploy-vercel.mjs`** - Script automatizado de despliegue

---

## 🌐 Después del Despliegue

Obtendrás una URL como:
```
https://oceanjesty.vercel.app
https://oceanjesty-tu-usuario.vercel.app
```

### Comandos Útiles Post-Despliegue

```bash
# Ver todos tus despliegues
vercel ls

# Ver logs en tiempo real
vercel logs

# Abrir el dashboard de Vercel
vercel open

# Ver información del proyecto
vercel inspect
```

---

## ⚙️ Variables de Entorno (Opcional)

Si necesitas configurar variables de entorno:

### En Vercel Dashboard:
1. Ve a tu proyecto → Settings → Environment Variables
2. Agrega tus variables:
   ```
   VITE_APP_URL=https://tu-dominio.vercel.app
   ```

### Localmente:
```bash
cp .env.example .env
# Edita .env con tus valores
```

---

## 🔄 Actualizaciones Automáticas

Si desplegaste desde GitHub:

```bash
# Haz cambios en tu código
git add .
git commit -m "Update: descripción"
git push
```

**Vercel desplegará automáticamente** cada vez que hagas push a `main`.

---

## 📊 Monitoreo

### Ver Build Logs

1. Ve a [vercel.com/dashboard](https://vercel.com/dashboard)
2. Selecciona tu proyecto
3. Click en "Deployments"
4. Selecciona un deployment → "View Build Logs"

### Analytics (Opcional)

Vercel ofrece analytics gratuitos. Actívalos en:
Settings → Analytics → Enable

---

## 🐛 Solución de Problemas

### Error: "Build failed"

```bash
# Prueba el build localmente
npm run build

# Si funciona, el problema puede ser:
# - Variables de entorno faltantes en Vercel
# - Dependencias mal configuradas
```

### Error: "404 en rutas"

Ya está solucionado en `vercel.json` con:
```json
"rewrites": [
  {
    "source": "/(.*)",
    "destination": "/index.html"
  }
]
```

### Error: "Vercel CLI not found"

```bash
npm install -g vercel
```

---

## 🎯 Checklist Pre-Despliegue

Antes de desplegar, verifica:

- [x] ✅ `npm run build` funciona sin errores
- [x] ✅ `npm run preview` muestra el sitio correctamente
- [x] ✅ `vercel.json` configurado (ya incluido)
- [x] ✅ `.vercelignore` configurado (ya incluido)
- [ ] Variables de entorno configuradas (si aplica)
- [ ] Imágenes optimizadas
- [ ] README actualizado con URL de producción

---

## 📚 Documentación Completa

Para más detalles, consulta:
- **[VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)** - Guía completa de despliegue
- **[README.md](./README.md)** - Documentación del proyecto
- **[CHANGELOG.md](./CHANGELOG.md)** - Registro de cambios

---

## 🚀 Comandos de Resumen

```bash
# Desarrollo local
npm run dev

# Build local
npm run build

# Preview local
npm run preview

# Desplegar en Vercel (preview)
npm run deploy

# Desplegar en Vercel (producción)
npm run deploy:prod
```

---

## 🎊 ¡Todo Listo!

Tu proyecto está **completamente preparado** para Vercel. Solo tienes que:

1. Elegir tu método de despliegue preferido
2. Ejecutar el comando correspondiente
3. ¡Disfrutar tu sitio en producción! 🌊

---

**¿Necesitas ayuda?** Consulta [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) para instrucciones paso a paso.
