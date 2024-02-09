const { uuidv4 } = require('./uuid.plugin')
const { getAge } = require('./get-age.plugin')
const { httpClientPlugin } = require('./http-client.plugin');
const buildLogger = require('./logger.plugin');

// archivo de barril para que lo unico que se llame sea la carpeta

module.exports = {
    uuidv4,
    getAge,
    httpClientPlugin,
    buildLogger
}