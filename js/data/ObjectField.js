var ObjectField = function(object, key, parentObject, index) {

	this.parentObject = parentObject
	this.index = index
	this.container = html.div("table")
	this.keyContainer = html.div("inline")
	this.valueContainer = html.div("inline")
	this.buttonContainer = html.div("inline")
	
	if (key != undefined) {
		this.keyField = new KeyUI(key, "keyContainer")
	} else {
		this.keyField = new NewLiteralUI("Key", [], this)
	}
	if (object[key] != undefined) {
		switch(DataLib.getType(object[key])){
		case "object" : this.valueField = new ObjectUI(object[key], this).init()
			break;
		case "array" : this.valueField = new ArrayUI(object[key], this).init()
			break;
		case "data" : 
			this.valueField = new LiteralUI(object, key, this, "valueContainer")
			break;
		}
	} else {
		this.valueField = new DataSelector(this.valueData)
	}
	this.assemble()
}

ObjectField.prototype = {

	assemble : function() {
		
		this.container
			.append(this.keyContainer.append(this.keyField.container))
			.append(this.valueContainer.append(this.valueField.container))
			.append(this.buttonContainer)
	},

	isLiteralEditEnabled : function(){
		
		if(this.parentObject.state == "editing"){
			return true
		} else {
			return false
		}
	},
	
	disableExit : function(){
		this.object.hideOkButton()
		_this = this
		$.each(this.object.fields, function(index, field){
			if(field.index != _this.index && field.valueField instanceof ObjectUI){
				field.valueField.hideEditButton()
				field.valueField.hideDeleteButton()
			}
		})
	},
	
	enableExit : function(){
		this.object.showOkButton()
		_this = this
		$.each(this.object.fields, function(index, field){
			if(field.index != _this.index && field.valueField instanceof ObjectUI){
				field.valueField.showEditButton()
				field.valueField.showDeleteButton()
			}
		})
	},
	
	enableFields : function(){
		this.object.showOkButton()
		_this = this
		$.each(this.object.fields, function(index, field){
			if(field.valueField instanceof ObjectUI){
				field.valueField.showEditButton()
				field.valueField.showDeleteButton()
			}
		})
	}
	
}