// script.js
const fs = require('fs');
const path = require('path');

// Lee el contenido de src/assets/config.json
const configPath = 'config.json';
const configContent = fs.readFileSync(configPath, 'utf-8');
const config = JSON.parse(configContent);

// Obtiene la nueva versión desde src/assets/config.json
const newVersion = config.version;

// Calcula la ruta a package.json subiendo un nivel desde src/assets/
const packageJsonPath = path.resolve('../../package.json');
const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf-8');
const updatedPackageJson = packageJsonContent.replace(/"version": "(\d+\.\d+\.\d+)"/, `"version": "${newVersion}"`);

// Escribe el contenido actualizado de package.json
fs.writeFileSync(packageJsonPath, updatedPackageJson);

console.log(`La versión en package.json ha sido actualizada a: ${newVersion}`);
