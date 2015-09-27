$(document).ready(function () {
	var model = new Model();
	ko.applyBindings(model);
});

$(document).on('click', 'code', function () {

	if (this.select) {
		this.select();
	}
	else if (document.selection) {
		var range = document.body.createTextRange();
		range.moveToElementText(this);
		range.select();
	} else if (window.getSelection) {
		var range = document.createRange();
		range.selectNode(this);
		window.getSelection().addRange(range);
	}
});