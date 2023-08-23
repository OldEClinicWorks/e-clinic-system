import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// import { defineConfig } from 'vite'
import { defineConfig } from 'vitest/config';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy(),
    svgLoader()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom'
  },
   // prevent vite from obscuring rust errors
   clearScreen: false,
   // Tauri expects a fixed port, fail if that port is not available
   server: {
     strictPort: true,
   },
   // to make use of `TAURI_PLATFORM`, `TAURI_ARCH`, `TAURI_FAMILY`,
   // `TAURI_PLATFORM_VERSION`, `TAURI_PLATFORM_TYPE` and `TAURI_DEBUG`
   // env variables
   envPrefix: ['VITE_', 'TAURI_'],
   build: {
     // Tauri uses Chromium on Windows and WebKit on macOS and Linux
     target: process.env.TAURI_PLATFORM == 'windows' ? 'chrome105' : 'safari13',
     // don't minify for debug builds
     minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
     // produce sourcemaps for debug builds
     sourcemap: !!process.env.TAURI_DEBUG,
   },
   css: {
    postcss: {
      plugins: [
        postcss(),
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
})
