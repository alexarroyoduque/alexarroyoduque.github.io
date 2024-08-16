const { fromRollup } = require('@web/dev-server-rollup');
const rollupNodeResolve = require('@rollup/plugin-node-resolve');

module.exports = {
  port: 8000,
  open: true, // Abrir el navegador automáticamente
  watch: true,
  rootDir: 'src', // Carpeta raíz del proyecto
  appIndex: 'index.html', // Archivo de inicio
  nodeResolve: true,
  mimeTypes: {
    '.js': 'application/javascript',
    '.html': 'text/html',
    '.css': 'text/css',
    '.ttf': 'font/ttf',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
  },
  // Usa una función para servir archivos estáticos desde node_modules
  staticDirs: [
    {
      path: './node_modules',
      url: './node_modules',
    },
  ],
};
