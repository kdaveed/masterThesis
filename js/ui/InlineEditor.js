
var InlineEditor = function(element){
	
	this.editButton = new ActionButtonText("Add new local data", "add", (element.addLocalData.bind(element)))

	this.container = html.div()
					.append(this.editButton)
					.append(this.editorContro)
	
}

InlineEditor.prototype = {
		
	addLocalData : function(){
		
	}
}

var DataEditor = function(){
	
}

DataEditor.prototype = Object.create(InlineEditor.prototye)

var dataEditorFunctions = {
	
}

$.extend(InlineEditor.prototype, dataEditorFunctions)