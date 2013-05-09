/* exported EventEmitter */

function EventEmitter() {
	var events = {};

	this.on = function(name, fn) {
		events[name] = events[name] || [];
		events[name].push(fn);
	};

	this.emit = function(name, args) {
		events[name] = events[name] || [];
		args = args || [];
		$.each(events[name], function(idx, fn) {
			fn.apply(this, args);
		});
	};
}
