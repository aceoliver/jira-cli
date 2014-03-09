var app = require('./index');
var prompt = require('prompt');
var log = console.log;
var restler = require('restler');

var commands = module.exports;

commands.version = function() {
  log(require('../package.json').version);
};

commands.log = function() {
	var options = {};

	var url = 'https://' + app.config.get('host') +
		'/rest/api/2/issue/{issueIdOrKey}/worklog?newEstimate'.replace('{issueIdOrKey}', app.argv.i);

	var data = JSON.stringify({
		'started': app.argv.d + 'T12:00:00.000+0800',
		'timeSpent': app.argv.t,
		'comment': app.argv.c
	});

	console.log(options);

	options.headers = {
		'Content-Type': 'application/json',
		'Content-Length': data.length
	};
	options.username = app.config.get('username');
	options.password = app.config.get('password');
	options.data = data;

	restler.post(url, options)
		.on('complete', function(result) {
			console.log(result)
		});
};