import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react'; // agar aap React use kar rahe ho

export default defineConfig({
  plugins: [
    react(),       
    tailwindcss(), 
  ],
});
