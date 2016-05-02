

var ActionButtonText = function(text, type, variable){
	
	this.variable = variable
	this.container = html.div("")
			.append(html.div("inline defaultContainer").text(text))
			.append(this.getImg(type))
			console.log(this.img)
	this.enabled = true
}

ActionButtonText.prototype = {
	
	getImg : function(type){
		
		return UI.getInlineActionImg(type)
			.click((function(){
			if(this.enabled){
				alert(this.variable)
				//this.returnFunction()
			}
		}).bind(this))
	},
	
	setImgPointer : function(){
		this.img.addClass("pointer")
	},
	
	resetImgPointer : function(){
		this.img.removeClass("pointer")
	},

	disableEvent : function(){
		this.enabled = false
	},
	
	enableEvent : function(){
		this.enabled = true
	}
}