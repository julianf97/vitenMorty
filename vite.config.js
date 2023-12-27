import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false,
    },
    // Configuración para manejar correctamente las rutas al recargar la página
    proxy: {
      '/api': {
        target: 'http://localhost:5173', // Ajusta esto según tu configuración del servidor de backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    historyApiFallback: true,
  },
});