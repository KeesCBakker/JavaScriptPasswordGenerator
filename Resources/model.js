var Model = function () {

	var _this = this;
	this.userName = ko.observable('');
	this.password = ko.observable('');
	this.roles = ko.observable('');

	this.salt = ko.computed(function () {
		//generate new salt on password/username update
		var u = _this.userName();
		var p = _this.password();
		return randomString(24, true);
	});

	this.hash = ko.computed(function () {
		var h = _this.salt() + _this.password();
		return CryptoJS.SHA256(h);
	});

	this.xml = ko.computed(function () {

		var xml = $('<user />');
		xml.attr('name', _this.userName());
		xml.attr('roles', _this.roles());
		xml.attr('salt', _this.salt());
		xml.attr('hash', _this.hash());

		return xml.wrap('<div/>').parent().html();
	});

	//generate a new alpha-numeric password
	this.generateNewPassword = function () {
		var password = randomString(16, false);
		_this.password(password);
	};

	this.generateNewPassword();
}