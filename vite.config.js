import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/", // **Portfolio को GitHub repo के नाम से मैच करो**
});
