var MultiplePageElement = function(data, parent) {

	/***************************************************************************
	 * Configuration
	 **************************************************************************/
	console.log(this.config)
	this.data = data
	this.parent = parent
	this.container = html.div("pageElementContainer")
		
	this.elements = new Object()
	this.elements["baseList"] = new BaseList(this.data, "baseList")
	this.elements["localData"] = new LocalDataListModule(this.data,"localData")
	this.elements["elments"] = new ElementsListmodules()
	
	var tmp = []
	$.each(this.elements, function(index, value) {
		tmp.push(value.container)
	})
	this.container.append(tmp)
}

/*******************************************************************************
 * UI
 ******************************************************************************/

MultiplePageElement.prototype.refreshLocalVariables = function(variableName) {

	this.data_s.empty()
	var tmp = []
	$.each(this.data.localVars, function(index, localVar) {
		tmp.push(html.div("dataTypeContainer").append(
				html.div("dataName").text(localVar.key)).append(
				html.div("dataType").text(localVar.type)))
	})
	this.data_s.append(tmp)
	this.dataContainer.show()
}

MultiplePageElement.prototype.setLocalBaseList = function(variableName) {
	// Here we have to search
	$.each(this.parent.localVars, function(index, localVar) {
		if (localVar.name == variableName) {
			this.localVars.push(localVar)
		}
	})
}
