/**
 * EmulatorController
 *
 * @description :: Server-side logic for managing emulators
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get: function() {
		var sys = require('sys');
		var exec = require('child_process').exec;

		function puts(error, stdout, stderr) { sys.puts(stdout) }
		exec('firefox', puts);
	}
};
