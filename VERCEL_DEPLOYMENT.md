# 🚀 Guía de Despliegue en Vercel - OceanJesty

## 📋 Requisitos Previos

- ✅ Cuenta en [Vercel](https://vercel.com) (gratis)
- ✅ Cuenta en [GitHub](https://github.com) (opcional pero recomendado)
- ✅ [Vercel CLI](https://vercel.com/docs/cli) instalado (opcional)

---

## 🎯 Método 1: Despliegue desde GitHub (Recomendado)

### Paso 1: Subir el Proyecto a GitHub

1. **Inicializa Git en tu proyecto** (si no lo has hecho):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - OceanJesty ready for Vercel"
   ```

2. **Crea un repositorio en GitHub**:
   - Ve a https://github.com/new
   - Nombra tu repositorio (ej: `oceanjesty`)
   - NO inicialices con README (ya tienes uno)
   - Crea el repositorio

3. **Conecta tu proyecto local con GitHub**:
   ```bash
   git remote add origin https://github.com/TU_USUARIO/oceanjesty.git
   git branch -M main
   git push -u origin main
   ```

### Paso 2: Desplegar en Vercel

1. **Ve a [Vercel](https://vercel.com)** e inicia sesión

2. **Importa tu proyecto**:
   - Click en "Add New..." → "Project"
   - Selecciona "Import Git Repository"
   - Autoriza a Vercel a acceder a GitHub
   - Selecciona tu repositorio `oceanjesty`

3. **Configura el proyecto**:
   - **Framework Preset**: Vite (se detecta automáticamente)
   - **Root Directory**: `./` (raíz del proyecto)
   - **Build Command**: `npm run build` (ya configurado en vercel.json)
   - **Output Directory**: `dist` (ya configurado en vercel.json)
   - **Install Command**: `npm install`

4. **Variables de Entorno** (opcional):
   Si necesitas configurar variables de entorno:
   - Click en "Environment Variables"
   - Agrega las variables necesarias (ej: `VITE_APP_URL`)

5. **Deploy**:
   - Click en "Deploy"
   - Espera 2-3 minutos mientras Vercel construye tu proyecto
   - ¡Listo! 🎉

### Paso 3: Configurar Dominio (Opcional)

1. En el dashboard de Vercel, ve a tu proyecto
2. Click en "Settings" → "Domains"
3. Agrega tu dominio personalizado
4. Sigue las instrucciones para configurar DNS

---

## 🎯 Método 2: Despliegue con Vercel CLI

### Paso 1: Instalar Vercel CLI

```bash
npm install -g vercel
```

### Paso 2: Login en Vercel

```bash
vercel login
```

### Paso 3: Desplegar

Desde la raíz de tu proyecto:

```bash
vercel
```

Responde las preguntas:
- **Set up and deploy?** → Yes
- **Which scope?** → Tu cuenta
- **Link to existing project?** → No
- **Project name?** → oceanjesty (o el que prefieras)
- **Directory?** → `./`
- **Override settings?** → No (usa vercel.json)

### Paso 4: Desplegar a Producción

```bash
vercel --prod
```

---

## 🎯 Método 3: Despliegue Manual (Sin Git)

### Paso 1: Generar Build

```bash
npm run build
```

### Paso 2: Subir a Vercel

1. Ve a [Vercel Dashboard](https://vercel.com/dashboard)
2. Click en "Add New..." → "Project"
3. Selecciona "Deploy from a template" o "Import from..."
4. Arrastra la carpeta `dist` a la zona de drop
5. Click en "Deploy"

**Nota**: Este método no permite actualizaciones automáticas.

---

## ⚙️ Configuración Avanzada

### Variables de Entorno en Vercel

Si necesitas configurar variables de entorno:

1. **En el Dashboard de Vercel**:
   - Ve a tu proyecto → Settings → Environment Variables
   - Agrega las variables:
     ```
     VITE_APP_URL=https://tu-dominio.vercel.app
     ```

2. **Localmente** (para desarrollo):
   - Copia `.env.example` a `.env`
   - Configura tus variables locales

### Redirecciones y Rewrites

El archivo `vercel.json` ya está configurado con:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Esto asegura que todas las rutas de tu SPA funcionen correctamente.

### Headers Personalizados (Opcional)

Si necesitas agregar headers de seguridad, edita `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

---

## 🔄 Actualizaciones Automáticas

Si desplegaste desde GitHub:

1. **Haz cambios en tu código local**
2. **Commit y push**:
   ```bash
   git add .
   git commit -m "Update: descripción de cambios"
   git push
   ```
3. **Vercel desplegará automáticamente** 🚀

---

## 📊 Monitoreo y Analytics

### Ver Logs de Despliegue

1. Ve a tu proyecto en Vercel
2. Click en "Deployments"
3. Selecciona un despliegue
4. Click en "View Build Logs"

### Analytics (Opcional)

Vercel ofrece analytics gratuitos:
1. Ve a tu proyecto → Analytics
2. Activa Vercel Analytics
3. Agrega el script a tu proyecto (opcional)

---

## 🐛 Solución de Problemas

### Error: "Build failed"

**Solución**:
```bash
# Limpia y reconstruye localmente
rm -rf dist node_modules
npm install
npm run build
```

Si funciona localmente, el problema puede ser:
- Variables de entorno faltantes
- Dependencias en `devDependencies` que deberían estar en `dependencies`

### Error: "404 en rutas"

**Solución**: Asegúrate de que `vercel.json` tenga la configuración de rewrites:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Error: "Module not found"

**Solución**: Verifica que todas las dependencias estén en `package.json`:
```bash
npm install --save [paquete-faltante]
```

### Build muy lento

**Solución**: Vercel tiene límites de tiempo. Si tu build es muy lento:
- Optimiza las imágenes antes de subirlas
- Considera usar `vercel.json` para excluir archivos innecesarios

---

## 📱 Dominios y URLs

### URL Automática de Vercel

Después del despliegue, obtendrás una URL como:
```
https://oceanjesty.vercel.app
https://oceanjesty-tu-usuario.vercel.app
```

### Dominio Personalizado

1. Compra un dominio (Namecheap, GoDaddy, etc.)
2. En Vercel: Settings → Domains → Add Domain
3. Configura los DNS según las instrucciones de Vercel

---

## 🎯 Checklist de Despliegue

Antes de desplegar, asegúrate de:

- [ ] `npm run build` funciona sin errores
- [ ] `npm run preview` muestra el sitio correctamente
- [ ] Variables de entorno configuradas (si aplica)
- [ ] `.gitignore` actualizado (no subir `node_modules`, `.env`)
- [ ] `vercel.json` configurado correctamente
- [ ] Imágenes optimizadas
- [ ] README.md actualizado con la URL de producción

---

## 🚀 Comandos Rápidos

```bash
# Despliegue inicial
vercel

# Despliegue a producción
vercel --prod

# Ver logs en tiempo real
vercel logs

# Listar despliegues
vercel ls

# Eliminar un despliegue
vercel rm [deployment-url]
```

---

## 📚 Recursos Adicionales

- [Documentación de Vercel](https://vercel.com/docs)
- [Vercel CLI Reference](https://vercel.com/docs/cli)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#vercel)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

---

## 🎊 ¡Listo para Desplegar!

Tu proyecto **OceanJesty** está completamente configurado y listo para desplegarse en Vercel.

**Próximos pasos**:
1. Elige el método de despliegue (recomiendo GitHub)
2. Sigue los pasos de la guía
3. ¡Disfruta tu sitio en producción! 🌊

---

**¿Necesitas ayuda?** Revisa la sección de "Solución de Problemas" o consulta la documentación oficial de Vercel.
