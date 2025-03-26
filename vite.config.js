export default {
  root: '.',
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html',
        pag_ppal: './pag_ppal/pagina_ppal.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
} 