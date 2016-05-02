
var DataSelector = {
	
 	get : function(returnFunction){
		var container = html.div()
		var selector = html.getSelectorField()
		html.setSelectorOptions(UIConfiguration.dataTypes, "key", "name", selector)
		var addBut = html.getNewDiv("addButton")
						.text("Add")
						.click(returnFunction(selector.val()))
		return container.append(selector).append(addBut)
	},
}
