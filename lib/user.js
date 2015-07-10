var proto = User.prototype;

function User(options) {
	if (!(this instanceof User)) return new User(options);
	this.userId 	= options.userId;
	this.username	= options.username;
	this.password	= options.password;
}

proto.login = function login(username,password,cb) {
	if (password !== this.password) {
		return cb(new Error('Password is incorrect'));
	}
	return cb(null);
};

module.exports = User;