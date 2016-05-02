

var PageElement = function(pageData){
	
	this.data = pageData
	this.container = html.div("pageElementContainer")
	/*
	 * Data
	 */
	this.dataContainer = html.div("dataContainer")
	this.dataTitleContainer = html.div("title2").text("Local Data")
	this.data_s = html.div("data_s")
	/*
	 * Fields
	 */
	this.fieldContainer = html.div("fieldContianer")
	this.fieldTitle = html.div("title2").text("Fields")
	this.fields = html.div("fields")
	
	this.elements = []
	
	this.loadElements()
	this.appendElements()

	this.assemble()
}

PageElement.prototype = {

	assemble : function(){
		this.container
			.append(this.dataContainer
						.append(this.dataTitleContainer)
						.append(this.data_s)
			.append(this.fieldContainer
						.append(this.fieldTitle)
						.append(this.fields))
			.append(TypeSelector.getDataSelector(this)))
	},
	
	appendElements : function(){
		console.log(this)
		var arr = []
		var a = $.extend(true, {}, this)
		console.log(a)
		$.each(this.elements, function(index, element){
			console.log("appendElement")
			arr.push(element.container)
		})
		console.log(arr)
		this.fields.append(arr)
	},
	
	loadElements : function(data){
		if(this.data.elements != undefined){
			$.each(data.elements, (function(index, element){
				console.log("here")
				this.addElement(element)
			}).bind(this))
		}
	},
		
	addElement : function(data){
			
			switch(data.type){
				case "single" : this.elements.push(new SinglePageElement(data, this))
					break;
				case "multiple" : this.elements.push(new MultiplePageElement(data, this))
					console.log(this.elements)
					break;
			}
			//Append the new element to the object
			this.fields.append(this.elements[this.elements.length-1].container)
			console.log(this)
	},
	
	initUI : function(){
		var tmp = []
		$.each(this.inputs, function(index, input){
			tmp.push(input.container)
		})
		this.container.
			append(this.titleContainer).
			append(this.inputContainer.
				append(tmp)).
			append(this.saveButton)
	},
	/*
	saveElement : function(){
		
		if(this.checkReady){
			
		} else {
			alert("Field the compulsory input data")
		}
	},
	
	checkReady : function(){
		var ret = true
		$.each(this.inputs, function(index, input){
			if(input.compulsory && !input.set){
				ret = false
				return false
			}
		})
		return ret
	},
	*/
}
