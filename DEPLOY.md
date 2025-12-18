# Guía de Despliegue Continuo (CD)

¡Felicidades! Tu proyecto tiene una integración continua (CI) robusta. Ahora vamos a configurar el Despliegue Continuo (CD) para que tu portafolio se publique automáticamente cuando hagas cambios.

## Opción 1: Vercel (Recomendada y Easiest)

Vercel es la plataforma creada por los desarrolladores de Next.js y ofrece la mejor integración.

### Pasos:

1.  Crea una cuenta en [Vercel.com](https://vercel.com).
2.  Des de tu dashboard, haz clic en **"Add New..."** -> **"Project"**.
3.  Selecciona **"Import"** junto a tu repositorio de GitHub `my-portfolio-2026`.
4.  **Configuración del Proyecto:**
    *   **Framework Preset:** Next.js (se detectará automáticamente).
    *   **Root Directory:** `./` (por defecto).
    *   **Environment Variables:** Si usas variables (aunque este proyecto parece estático/frontend puros), agrégalas aquí.
5.  Haz clic en **"Deploy"**.

**¡Listo!** Vercel detectará automáticamente cada `git push` a `main`, ejecutará tu CI (build), y si todo sale bien, desplegará la nueva versión.

---

## Opción 2: Docker (Avanzado / VPS)

Si prefieres alojarlo en tu propio servidor (Digital Ocean, AWS EC2, Coolify), puedes usar Docker.

### 1. Crear Dockerfile

Crea un archivo `Dockerfile` en la raíz:

```dockerfile
FROM node:20-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm i --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm install -g pnpm
RUN pnpm build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

### 2. Actualizar next.config.ts

Asegúrate de activar el modo `standalone`:

```typescript
const nextConfig: NextConfig = {
  output: 'standalone',
  // ... resto de config
}
```

---

## Verificación Post-Despliegue

Una vez desplegado:
1.  Verifica que las imágenes carguen correctamente (especialmente las optimizadas con `next/image`).
2.  Prueba el cambio de idioma y tema.
3.  Verifica los puntajes de Lighthouse/Core Web Vitals.
