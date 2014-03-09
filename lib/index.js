var path = require('path');
var app = module.exports = require('flatiron').app;

app.config.file({ file: path.join(__dirname, '..' , 'config', 'config.json') });