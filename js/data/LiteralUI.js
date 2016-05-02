var LiteralUI = function(object, key, parentField, divClass) {
	this.key = key
	this.object = object
	this.value = object[key]
	this.parentField = parentField
	this.container = html.div("inline")

	this.div = html.getNewDiv(divClass).text(this.value).click((function() {
		this.modifyButton()
	}).bind(this))
	
	this.textBox = UI.getTextBoxContainerClass("keyContainer", this.value).keydown((function(e) {
		this.textBoxEventListener(e)
	}).bind(this))
	
	this.assemble()
}

LiteralUI.prototype = {

	assemble : function() {
		this.container.append(this.div).append(this.textBox.hide())
	},

	modifyButton : function() {
		if(this.parentField.isLiteralEditEnabled()){
			this.parentField.parentObject.literalEdit()
			this.div.hide()
			this.textBox.show()	
		}
	},

	textBoxEventListener : function(e) {
		if (e.keyCode === 13) {
			this.saveValue()
		}
	},

	saveValue : function() {
		var ok = true
		_this = this
		/*
		if (this.object.uniqueKeyChecker(this.textBox.val())) {
			ok = false
		}
		*/
		console.log(ok)
		
		if (ok) {
			this.value = this.textBox.children().first().val()
			this.object[this.key] = this.value
			console.log(PageData["presentationData"].skeletalInventoryPage.elements)
			this.div.text(this.value)
			this.textBox.hide()
			this.div.show()
			this.parentField.parentObject.literalFinished()
		}
	}
}

var ExistingLiteralUI = function(value, validators, parentField, divClass) {
	LiteralUI.call(this, value, validators, parentField, divClass)
}

var NewLiteralUI = function(object) {

	LiteralUI.call(this, object)
}
