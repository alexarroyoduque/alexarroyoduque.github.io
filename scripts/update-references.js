const fs = require('fs');
const path = require('path');

// Ruta al archivo index.html en la raíz del proyecto
const indexFilePath = path.join(__dirname, '../index.html');

// Lee el contenido del archivo index.html
fs.readFile(indexFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error leyendo index.html:', err);
    process.exit(1);
  }

  // Reemplaza las referencias de "src/*" y "node_modules/*" con "default/src/*" y "default/node_modules/*"
  let updatedData = data.replace(/src\/([^"]*)/g, 'default/src/$1');
  updatedData = updatedData.replace(/node_modules\/([^"]*)/g, 'default/node_modules/$1');

  // Escribe el contenido actualizado de vuelta al archivo index.html
  fs.writeFile(indexFilePath, updatedData, 'utf8', (err) => {
    if (err) {
      console.error('Error escribiendo index.html:', err);
      process.exit(1);
    }

    console.log('Referencias actualizadas en index.html.');
  });
});
