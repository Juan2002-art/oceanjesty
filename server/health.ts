import { Router } from "express";

export function registerHealthRoutes(router: Router) {
  // Health check endpoint para mantener el servidor activo
  router.get("/api/health", (_req, res) => {
    res.json({ 
      status: "ok", 
      timestamp: new Date().toISOString(),
      uptime: process.uptime()
    });
  });

  // Keep-alive endpoint
  router.get("/ping", (_req, res) => {
    res.send("pong");
  });
}
