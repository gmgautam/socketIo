import { defineConfig } from 'vite'
import { createRequire } from 'module'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const require = createRequire(import.meta.url)
export default defineConfig({
  plugins: [react()],
});
