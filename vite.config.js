import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(() =>(
  {
    esbuild:{
      loader:"jsx"
    },
    optimizeDeps:{
      esbuildOptions:{
        loader:{
          ".js":"jsx"
        }
      }
    }
  }
))