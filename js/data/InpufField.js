


DataField = function(data){

	/*
	 * Here the main elements are intialized
	 */
	
	this.selecConst = html.div("addButton").text("Constant")
	.click((function(){
		this.selectConstant()
	}).bind(this))
	
	this.selecVar= html.div("addButton").text("Constant")
		.click((function(){
			this.selectData(data.type)
		}).bind(this))

	
	this.constantOrVar = html.getNewDiv("decision")
					.append(this.selectConst)
					.append(this.selectVar).hide()
		
	//ConstantTextBoxEvent
	this.constantTextField = UI.getTextBoxContainerClass("keyContainer", value).keydown((function(e) {
		this.textBoxEventListener(e)
	}).bind(this))
	
		
	this.container = html.div()
	this.container.append(this.getConstantOrVar)
}

DataField.prototype = {
		
	getConstantOrVar : function(){
		this.constantOrVar = html.div().append(
				this.getSelectConst()).append(
				this.getSelectVariable)
	},
	
	getSelectConst : function(){
						
	},
	
	
	textBoxEventListener : function(e) {
		if (e.keyCode === 13) {
			this.saveValue()
		}
	},
	
	saveValue : function(){

	}
	
}


