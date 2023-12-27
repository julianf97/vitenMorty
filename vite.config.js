import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:5173',
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    historyApiFallback: {
      rewrites: [
        { from: /^\/api/, to: '/api' }, // Redirige las solicitudes a /api al servidor proxy
        { from: /./, to: '/' }, // Redirige cualquier otra solicitud a la raíz del sitio
      ],
    },
  },
});
