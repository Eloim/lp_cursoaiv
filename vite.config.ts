import { defineConfig } from 'vite'
import react from '@vitejs/react-plugin-react' // ou o plugin que você usa
import path from 'path'

export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Mantenha o resto das suas configurações (server, etc)
})