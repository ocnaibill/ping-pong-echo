// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // A raiz do nosso código front-end está na pasta 'client'
  root: 'client',
  plugins: [react()],
  // Configurações do servidor de desenvolvimento
  server: {
    // A porta em que o Vite vai rodar
    port: 5173,
    // Impede o Vite de limpar o console, para vermos os logs do Electron
    clearScreen: false,
  },
  // Configurações para quando formos "buildar" o projeto para produção
  build: {
    // Onde os arquivos finais serão salvos
    outDir: '../../dist',
  },
});