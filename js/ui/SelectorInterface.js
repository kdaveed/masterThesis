

var SelectorInterface = function(){
	
	this.container.append()
	this.selectorContainer = html.div("table")
	this.div = html.div("inline")
	this.selector = UI.getSelectorField(this.option)
	this.ok = UI.getActionImg("add", "inline")
		.click((function(){
			this.selectAction(this.selector.val())
		}).bind(this))
}

var DataCreationInterface = function(){
	
	this.options = [
	 { text : "Constant", value : "constant"},
	 { text : "Global" , value : "global"},
	 { text : "From Operation" , value : "operaton"},
	]
	
	this.optionMapping = {
		"global" : "" 
	},
	
	this.selectAction = function(){
		
	}
}
	
	