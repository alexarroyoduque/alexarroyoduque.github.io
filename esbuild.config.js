const esbuild = require('esbuild');
const fs = require('fs-extra');
const path = require('path');

// Configuración de esbuild
esbuild.build({
  entryPoints: ['src/po-main.js'], // Punto de entrada principal
  bundle: true, // Hacer bundle de todos los módulos
  outdir: 'dist', // Directorio de salida
  minify: true, // Opcional: Minimizar el código para producción
  sourcemap: true, // Opcional: Generar mapas de fuente
  loader: {
    '.js': 'jsx', // Puedes ajustar esto si usas JSX
    '.css': 'text', // Cargar archivos CSS como texto
    '.html': 'text', // Cargar archivos HTML como texto
  },
}).catch(() => process.exit(1));

// Copiar archivos estáticos a la carpeta de salida
fs.copySync('src/konami.js', 'dist/konami.js');
fs.copySync('src/manifest', 'dist/manifest');
fs.copySync('src/manifest.json', 'dist/manifest.json');
fs.copySync('src/fonts', 'dist/fonts'); // Copia la carpeta de fuentes
fs.copySync('src/images', 'dist/images'); // Copia la carpeta de imágenes
fs.copySync('src/modals', 'dist/modals'); // Copia la carpeta de modales
fs.copySync('src/styles', 'dist/styles'); // Copia la carpeta de estilos
fs.copySync('node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js', 'dist/node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js'); // Copia la carpeta de estilos

// Ajustar rutas en index.html
const indexHtmlPath = 'src/index.html';
const distIndexHtmlPath = 'index.html';

// Lee el contenido del archivo index.html
const htmlContent = fs.readFileSync(indexHtmlPath, 'utf8');

// Reemplaza las rutas relativas para los recursos
let adjustedHtmlContent = htmlContent
  .replace(/src="\./g, 'src="./dist')  // Reemplaza src="./ por src="./dist
  .replace(/href="\./g, 'href="./dist')  // Reemplaza href="./ por href="./dist
  .replace(/url\("\./g, 'url("./dist')  // Reemplaza url("./ por url("./dist')
  .replace(/import\s+'\.\/po-main\.js';/g, 'import \'./dist/po-main.js\';')  // Ajusta importación JS

// Escribe el contenido ajustado en el archivo index.html en la raíz
fs.writeFileSync(distIndexHtmlPath, adjustedHtmlContent);

// Ajustar rutas en los archivos JS generados
const adjustJsFile = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const adjustedFileContent = fileContent
    .replace(/\.\/images\//g, './dist/images/')
    .replace(/\.\/fonts\//g, './dist/fonts/')
    .replace(/\.\/modals\//g, './dist/modals/');
  fs.writeFileSync(filePath, adjustedFileContent);
};

// Ajustar rutas en el archivo JS principal generado
adjustJsFile('dist/po-main.js');

console.log('Build completed.');
