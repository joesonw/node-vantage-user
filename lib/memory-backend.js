var Group 	= require('./group');
var User 	= require('./user');
var proto 	= MemoryBackend.prototype;
function MemoryBackend() {
	if (!(this instanceof MemoryBackend)) return MemoryBackend;
	this.cache			= {};
}

proto.save = function save(id,data,cb) {
	if (id in this.cache) {
		return cb(new Error('Id:' + id + 'exists'));
	}
	this.cache[id] = data;
	cb(null);
};

proto.get = function get(id,cb) {
	if (!(id in this.cache)) {
		return cb(new Error('Id:' + id + ' does not exist'));
	}
	cb(null,this.cache[id]);
};

proto.set = function(id,data,cb) {
	if (!(id in this.cache)) {
		return cb(new Error('Id:' + id + ' does not exist'));
	}
	this.cache[id] = data;
	cb(null,data);
};

proto.del = function(id,cb) {
	if (!(id in this.cache)) {
		// default error?
	}
	delete this.cache[id];
	cb(null,data);
}



/*
proto.addUser = function addUser(username,password,cb) {
	if (userId in this.users) {
		return callback(new Error('User with userId:' + userId + ' already exists'));
	}
	var user 	= new User({
		userId: this.userIdCounter++,
		username:username,
		password:password
	});
	this.users[user.userId] 	= user;
	this.usersByName[username] 	= user;
	this.addGroup(username,cb);
};

proto.addGroup = function addGroup(groupName,cb) {
	for (var key in this.groups) {
		if (this.groups[key] == groupName)	 {
			return cb(new Error('Group with name:' + groupName + ' already exists'));
		}
	}
	var group = new Group({
		groupName:groupName,
		groupId:this.groupIdCounter++
	});
	this.groups[group.groupId] 	= group;
	this.groupsByName[groupName]= group;

};*/


/*proto.login = function login(refId,username,password,cb) {
	if (refId in this.loggedUsers) {
		return cb(null);
	}
	if (!(username in this.usersByName)) {
		return cb(new Error('Username with username:' + username + 'does not exist'));
	}
	var self = this;
	this.usersByName[username].login(username,password,function(err) {
		if (err) {
			return callback(err);
		}
		self.loggedUsers
	});
};

proto.logout = function login*/



module.exports = MemoryBackend;
