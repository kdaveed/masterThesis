VariableSelector = function(returnFunction){
	
	this.returnFunction = returnFunction
	this.globalVars = []
	this.localVars = []
	
	this.fullScreen = html.div("fullscreen")
	this.container = html.div("fullScreenContainer")
	this.globalVariables = html.div("variableContainer")
	this.globalContainer = html.div()
		.append(html.div("title").text("Global Variables"))
		.append(this.globalVariables)
	
	//This has to be refreshed every time	
	this.localVariables = html.div("variableContainer")
		this.localContainer = html.div()
			.append(html.div("title").text("Local Variables"))
			.append(this.localVariables)
	this.fullScreen
		.append(this.container
			.append(this.globalContainer)
			.append(this.localContainer))
		.hide().appendTo($("#pageContainer"))

	this.showGlobalVars()
	this.showLocalVars()
	this.fullScreen.show()
}
	
VariableSelector.prototype = {
	
	showGlobalVars : function(){

		$.each(PageConfiguration.dataDescriptors, (function(key, data){
			l(data.type)
			if(DataLib.or(data.type, this.typeArray)){
				this.globalVars.push(key)
			}
		}).bind(this))
		var glob = []
		$.each(this.globalVars, (function(name, value){
			glob.push(
					this.dataEntry(PageConfiguration.dataDescriptors[value], "global"))
		}).bind(this))
		this.globalVariables.empty()
		this.globalVariables.append(glob)
	},
	
	dataEntry : function(name, type){
		return html.div("arrayContainer")
			.append(html.div("dataName").text(name))
			.append(html.div("dataType").text(type))
			.click((function(){
				response(name, type)
			}).bind(this))
	},

	response : function(name, type){
		this.fullScreen.hide()
		this.returnFunction(name, type)
	}
	
}

