


var ArrayUI = function(array, parentObject){
	//ObjectUI.call(this, array,  lib.default_(null, parentObject))
	ObjectUI.call(this, array,  parentObject)
	this.objectContainer.removeClass("objectContainer").addClass("arrayContainer")
}

ArrayUI.prototype = Object.create(ObjectUI.prototype)
ArrayUI.prototype.init = function(){
		this.loadElements()
		this.assemble()
		return this
	}

ArrayUI.prototype.loadElements = function(){
		$.each(this.object, (function(index, value){
			switch(DataLib.getType(value)){
				case "object" :
					this.fields.push(new ObjectUI(value, this).init())
					break;
				case "data" :
					this.fields.push(new LiteralUI(value, parentObject, this, "keyContainer"))
					break;
				default : 
					break;
			}
		}).bind(this))
	}

ArrayUI.prototype.enableFieldsEdit = function() {
	$.each(this.fields, function(index, field) {
		if (field instanceof ObjectUI) {
			field.showEditButton()
			field.showDeleteButton()
		}
	})
}

ArrayUI.prototype.disableFieldsEdit = function() {
	$.each(this.fields, function(index, field) {
		if (field instanceof ObjectUI) {
			field.hideEditButton()
			field.hideDeleteButton()
		}
	})
}

ArrayUI.prototype.resetEditContainerColor = function() {
	this.objectContainer.removeClass("objectContainerEdit").addClass(
			"arrayContainer")
}
