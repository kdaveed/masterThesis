

var BaseListSelector = function(pageData, returnFunction){
	this.pageData = pageData
	this.returnFunction = returnFunction
	this.typeArray = ["array", "listmap"]
	VariableSelector.call(this, returnFunction)
}

BaseListSelector.prototype = Object.create(VariableSelector.prototype)

var baseListSelectorFunctions = {
	
	showLocalVars : function(){
		if(pageElement.parent != undefined){
			if(pageElement.parent.localVarDescriptions != undefined){
				$.each(pageElement.parent.data.localVars, (function(index, variable){
					//ArrayList typeArray
					console.log(this)
					if(DataLib.or(data.type, this.typeArray)){
						this.localVars.push(data.key)
					}
				}).bind(this))				
			}
		}
		
		if(this.localVars.length == 0){
			this.localContainer.hide()
		} else {
			this.localVarsContainer.empty()
			var tmp = []
			$.each(this.localVars, (function(){
				tmp.push(this.dataEntry(pageData.parent.data.localVars))
			}).bind(this))
			this.localVarsContainer.append(tmp)
			this.response()
		}
	}
}

$.extend(BaseListSelector.prototype, baseListSelectorFunctions)