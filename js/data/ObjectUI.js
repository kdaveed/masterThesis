/*
 * This is the one which cannot be modified in itself. Just its fields
 */

var ObjectUI = function(object, parentField) {
	this.state = null
	this.object = object

	this.fields = []
	this.parentField = lib.default_(null, parentField)
	this.container = html.div("table")
	this.objectContainer = html.div("objectContainer")
	this.buttonContainer = html.div("inline")
	this.editButton = UI.getActionImg("edit", "editImg").click((function() {
				this.editEvent()
			}).bind(this))

	this.okButton = UI.getActionImg("ok", "editImg").click((function() {
				this.okEvent()
			}).bind(this)).hide()

	this.deleteButton = UI.getActionImg("del", "editImg").click((function() {
		this.deleteEvent()
	}).bind(this))

	if (parentField != undefined) {
		/*
		 * So if it has parent then its
		 * hide and edit button will be diplayes
		 * if we edit its pare
		 */
		this.editButton.hide()
		this.deleteButton.hide()
	}
}

ObjectUI.prototype = {

	init : function(){
		this.loadElements()
		this.assemble()
		return this
	},
	
	loadElements : function() {
		var _this = this
		var n = 0
		console.log(this.object)
		$.each(this.object, (function(key, value) {
			this.fields.push(new ObjectField(this.object, key, _this, n))
			n++
		}).bind(this))
	},
	
	assemble : function() {
		
		var tmp = []
		$.each(this.fields, function(index, field) {
			tmp.push(field.container)
		})
		this.objectContainer.append(tmp)
		this.container.append(this.objectContainer).append(
				this.buttonContainer.append(this.okButton).append(
						this.editButton).append(this.deleteButton))
	},
	
	editEvent : function() {
		this.state = "editing"
		this.setEditContainerColor()
		this.showOkButton()
		this.hideDeleteButton()
		this.hideEditButton()
		
		this.enableFieldsEdit()
		/*
		 * We have to remove the parentField edit button
		 */
		this.disableSiblings()
	},

	disableSiblings : function(){
		if (this.parentField != undefined) {
			if(this.parentField instanceof ArrayUI){
				this.parentField.state = null
				this.parentField.hideOkButton()
				this.parentField.disableFieldsEdit()
				this.parentField.resetEditContainerColor()	
			} else {
				this.parentField.parentObject.state = null
				this.parentField.parentObject.hideOkButton()
				this.parentField.parentObject.disableFieldsEdit()
				this.parentField.parentObject.resetEditContainerColor()	
			}

		}
	},
	
	okEvent : function() {

		/*
		 * Setting itself
		 */
		this.hideOkButton()
		this.resetEditContainerColor()

		/*
		 * Setting of its fields
		 */

		// The its literal fields and key cannot be modified
		this.state = null
		// Hide each buttons in children if they are object
		this.disableFieldsEdit()


		/*
		 * Tell the parent object through the ObjectField object that the
		 * editing process is finished
		 */
		this.enableSiblings()
	},
	
	enableSiblings : function(){
		if (this.parentField != undefined) {
			if(this.parentField instanceof ArrayUI){
				this.parentField.state = "editing"
				this.parentField.showOkButton()
				this.parentField.enableFieldsEdit()
				this.parentField.setEditContainerColor()
			} else {
				this.parentField.parentObject.state = "editing"
				this.parentField.parentObject.showOkButton()
				this.parentField.parentObject.enableFieldsEdit()
				this.parentField.parentObject.setEditContainerColor()
			}
		} else {
			this.showEditButton()
		}
	},
	
	literalEdit : function() {
		this.state = null
		this.hideOkButton()
		this.disableFieldsEdit()

	},

	literalFinished : function() {
		this.state = "editing"
		this.showOkButton()
		this.enableFieldsEdit()
	},

	disableFieldsEdit : function() {
		$.each(this.fields, function(index, field) {
			if (field.valueField instanceof ObjectUI) {
				field.valueField.hideEditButton()
				field.valueField.hideDeleteButton()
			}
		})
	},

	enableFieldsEdit : function() {
		$.each(this.fields, function(index, field) {
			if (field.valueField instanceof ObjectUI) {
				field.valueField.showEditButton()
				field.valueField.showDeleteButton()
			}
		})
	},

	deleteEvent : function() {
		this.container.remove()
	},

	setEditContainerColor : function() {
		this.objectContainer.removeClass("objectContainer").addClass(
				"objectContainerEdit")
	},

	resetEditContainerColor : function() {
		this.objectContainer.removeClass("objectContainerEdit").addClass(
				"objectContainer")
	},

	showEditButton : function() {
		UI.showInline(this.editButton)
	},

	hideEditButton : function() {
		this.editButton.hide()
	},

	showOkButton : function() {
		UI.showInline(this.okButton)
	},

	hideOkButton : function() {
		this.okButton.hide()
	},

	showDeleteButton : function() {
		UI.showInline(this.deleteButton)
	},

	hideDeleteButton : function() {
		this.deleteButton.hide()
	},

	uniqueKeyChecker : function(key) {
		var a = false
		console.log(this)
		$.each(this.fields, function(index, value) {
			if (key == value.key) {
				a = true
				alert("The keys must be unique!")
			}
		})
		return a
	},

	addFieldButton : function() {
		this.addField = UI.getFieldWithAddButton("Add field",
				this.addFieldEvent)
		return this.addField
	},

	addFieldEvent : function() {
		this.addField.hide()
		var objectField = new ObjectField()
		this.container.append(objectField.container)
		this.fields.push(objectField)
	},
}
