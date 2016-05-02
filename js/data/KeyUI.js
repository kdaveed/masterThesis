var KeyUI = function(key, divClass) {
	
	this.container = html.div("inline")

	this.div = html.getNewDiv(divClass).text(key).click((function() {
	}).bind(this))
	this.assemble()
}

KeyUI.prototype = {

	assemble : function() {
		this.container.append(this.div).append()
	},
}

