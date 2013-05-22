define(function(require, exports, module){
	var hello = require('share/js/hello/hello'),
		world = require('share/js/world/world');
	
	return hello + ' ' + world + ' !!!';
});