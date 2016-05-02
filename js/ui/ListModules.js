

var BaseList = function(pageElement){
	
	this.pageElement = pageElement
	EntryListModule.call(this)
	//Override
	this.title = "Base List"
	this.addNew = new ActionButtonText("Add base list", "jump", (this.SelectBaseList).bind(this)).container
}

BaseList.prototype = Object.create(EntryListModule.prototype)

var baseListFunctions = {
	
	SelectBaseList : function(){
		new BaseListSelector(this.pageElement, (this.returnFunction).bind(this))
	},
	
	returnFunction : function(name, type){
		this.addNew.hide()
		var descpritor
		switch (type) {
		case "global":
			descriptor = PageConfiguration.dataDescriptors
			break;
		case "local":
			descriptor = this.pageData.parent.data.localVars
			break;
		}
		this.setBaseList(descriptor[varName])
	},
	
	setBaseList : function(descriptor) {
		// We have create the local variables in the elements
		if (descriptor.type == "listmap") {
			$.each(descriptor.fields, (function(index, field) {
				var newField = $.extend(true, {}, field)
				newField["source"] = {
					type : "baseList"
				}
			}).bind(this))
		} else { // array
			$.each(descriptor.of.fields, (function(
					index, field) {
				var newField = $.extend(true, {}, field)
				newField["source"] = {
					type : "baseList"
				}
			}).bind(this))
		}
		this.data.localVars.push(newField)
	},
}

$.extend(BaseList.prototype, baseListFunctions)