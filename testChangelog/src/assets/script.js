// script.js
// Access to file system
const fs = require('fs');
// Path of file
const path = require('path');

// Read the content of src/assets/config.json
const configPath = 'config.json';
const configContent = fs.readFileSync(configPath, 'utf-8');
// Converts a JavaScript Object Notation (JSON) string into an object.
const config = JSON.parse(configContent);
// Get the new version from src/assets/config.json
const newVersion = config.version;

// The path of package.json
const packageJsonPath = path.resolve('../../../package.json');
console.log(packageJsonPath);
const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf-8');
// Here we change the version of package.json to the new version of config file.
const updatedPackageJson = packageJsonContent.replace(/"version": "(\d+\.\d+\.\d+)"/, `"version": "${newVersion}"`);
// Here we can see all the text of the file
console.log(updatedPackageJson);
// Write the updated content to package.json
// File (dodne se vuelca) y data(los datos que se volcaran)
fs.writeFileSync(packageJsonPath, updatedPackageJson);

console.log(`The version in package.json has been updated to: ${newVersion}`);