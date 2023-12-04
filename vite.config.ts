import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import generouted from '@generouted/react-router/plugin';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteCommonjs(), react(), tsconfigPaths(), generouted(), svgr()],
  server: { port: 3000 },
});
