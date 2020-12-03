const fs = require('fs');
const path = require('path');
const env = process.env.NODE_ENV || 'development';
const pathToConfigFile = path.join(__dirname, `${env}.json`)

module.exports = JSON.parse(fs.readFileSync(pathToConfigFile, 'utf8'));