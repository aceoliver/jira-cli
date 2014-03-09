
var path = require('path');
var flatiron = require('flatiron');
var app = module.exports = require('./index');
var error = console.error;

app.use(flatiron.plugins.cli, {
  usage: [
    'JIRA CLI.',
    '',
    'jira log -i [issue] -d [date] -t [time spent] -c [comment]'
  ],
  source: path.join(__dirname, 'commands'),
  argv: require('./params')
});

app.use(require('flatiron-cli-config'));

var commands = require('./commands');

app.cmd(/version/, commands.version);
app.cmd('log', commands.log);

/**
 * Handles exceptions.
 */
process.on('uncaughtException', function(err) {
  error(err.message);
  process.exit(1);
});