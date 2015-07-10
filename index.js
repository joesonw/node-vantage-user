var memoryBackend = require('./lib/memory-backend');

var proto = Module.prototype;

function Module() {
	if (!(this instanceof Module)) return new Module();
	this.backend = new memoryBackend();

}

proto.useBackend = function useBackend(backend) {
	this.backend = backend;
};

proto._use = function(vantage,options,command,description,options) {
	var action = "_";
	var actionArr = command.split(' ');
	var actionStrArr = [];
	for (var i = 0;i < actionArr;i++) {
		var s = actionArr[i];
		if (s.charAt(0) !== '[' && s.charAt(0) !== '<') {
			actionStrArr.push(s);
		}
	}
	action += actionStrArr.join('_');

	if (!Array.isArray(options[0])) {
		options = [options];
	}
	vantage = vantage
		.command(command,description);

	for (var i = 0;i < options.length;i++) {
		vantage = vantage
				.option(options[i][0],options[i][1]);
	}

	var actionFn = this[action];

	vantage
		.action(actionFn.call(this,options));

}

proto.login = function login(vantage,options) {
	this._use(vantage,options || {},'login','login',{});
};

proto._login = function(options) {
	return function(args,cb) {

	};
};







module.exports = Module;
