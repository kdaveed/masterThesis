

var UIEditor = function(){
	
	
	
}

UIEditor.prototype = {
		
	
	getDataSelector : function(){
		var fields = [
		    { text : "Single Element", value : "single"},
		    { text : "Multiple Elements" , value : "multiple"}
		]
		this.selectorContainer = html.div("table")
		this.div = html.div("inline")
		this.selector = html.getSelectorFieldWith(fields)
		this.ok = UI.getActionImg("add", "inline")
			.click((function(){
				this.addElement(this.selector.val())
			}).bind(this))
		
		return this.div.append(this.selector).append(this.ok)
	},

	addElements : function(value){
	
		switch(value){
		
		case "single" :
			this.singleElement.push(new SingleElement())
			break;
		}
	}

}