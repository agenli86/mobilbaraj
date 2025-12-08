import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa'; // PWA eklentisini içeri aldık

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        // BURASI YENİ: Service Worker üreten motoru ekledik
        VitePWA({
          registerType: 'autoUpdate',
          injectRegister: 'auto',
          // manifest: false yaptık çünkü senin zaten public klasöründe kendi manifest dosyan var, onu kullansın.
          manifest: false, 
          workbox: {
            globPatterns: ['**/*.{js,css,html,ico,png,svg}']
          },
          devOptions: {
            enabled: true
          }
        })
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
