var randomString = function (length, nonAlpha) {
	var text = '';
	var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	if (nonAlpha) {
		possible += '_+-!@#$%^*()/*`~={}|\][;:,./?';
	}

	for (var i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}