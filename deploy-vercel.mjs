#!/usr/bin/env node

/**
 * Script de Despliegue Rápido en Vercel
 * 
 * Este script automatiza el proceso de despliegue en Vercel
 * Uso: node deploy-vercel.mjs [--prod]
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';

const isProd = process.argv.includes('--prod');

console.log('🚀 Iniciando despliegue en Vercel...\n');

// Verificar que Vercel CLI esté instalado
try {
    execSync('vercel --version', { stdio: 'ignore' });
} catch (error) {
    console.log('❌ Vercel CLI no está instalado.');
    console.log('📦 Instalando Vercel CLI globalmente...\n');
    try {
        execSync('npm install -g vercel', { stdio: 'inherit' });
        console.log('\n✅ Vercel CLI instalado correctamente.\n');
    } catch (installError) {
        console.error('❌ Error al instalar Vercel CLI.');
        console.error('Por favor, instálalo manualmente: npm install -g vercel');
        process.exit(1);
    }
}

// Verificar que node_modules exista
if (!existsSync('node_modules')) {
    console.log('📦 Instalando dependencias...\n');
    try {
        execSync('npm install', { stdio: 'inherit' });
        console.log('\n✅ Dependencias instaladas.\n');
    } catch (error) {
        console.error('❌ Error al instalar dependencias.');
        process.exit(1);
    }
}

// Generar build
console.log('🔨 Generando build de producción...\n');
try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('\n✅ Build generado correctamente.\n');
} catch (error) {
    console.error('❌ Error al generar el build.');
    process.exit(1);
}

// Verificar que dist exista
if (!existsSync('dist')) {
    console.error('❌ La carpeta dist no fue generada.');
    process.exit(1);
}

// Desplegar en Vercel
console.log(`🚀 Desplegando en Vercel ${isProd ? '(PRODUCCIÓN)' : '(PREVIEW)'}...\n`);
try {
    const deployCommand = isProd ? 'vercel --prod' : 'vercel';
    execSync(deployCommand, { stdio: 'inherit' });
    console.log('\n✅ ¡Despliegue completado exitosamente! 🎉\n');
} catch (error) {
    console.error('❌ Error al desplegar en Vercel.');
    console.error('Verifica que hayas iniciado sesión: vercel login');
    process.exit(1);
}

console.log('📝 Comandos útiles:');
console.log('  - Ver despliegues: vercel ls');
console.log('  - Ver logs: vercel logs');
console.log('  - Abrir dashboard: vercel open');
console.log('');
