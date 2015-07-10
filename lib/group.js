var proto = Group.prototype;

function Group(options) {
	if (!(this instanceof Group)) return new Group(options);
	this.groupId 	= options.groupId;
	this.groupName 	= options.groupName;
	this.users 		= options.users || [];
}

module.exports = Group;