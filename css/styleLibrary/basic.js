var basic = {
	
	border : function(width, type, color) {
		width = lib.default_(1, width)
		color = lib.default_("black", color)
		if(type === undefined){
			return "border : "+ width + "px solid " + color + "; \n"
		} else {
			return "border-" + type + " : "+ width + "px solid " + color + "; \n"
		}
	},
	
	borderRad : function(width) {
		return "border-radius : " + width + "px; \n"
	},
	
	borderC : function(color) {
		return "border-color : " + color + "; \n"
	},
	
	italic : function(){
		return "font-style : italic; \n"
	},
	
	pointer : function(){
		return "cursor : pointer; \n"
	},
	
	padding : function(n, type) {
		n = lib.default_(1, n)
		return "padding : " + n + "px; \n"
		if(type === undefined){
			return "padding : " + n + "px; \n"
		} else {
			return "padding-" + type + " : "+ n + "px; \n"
		}
	},

	margin : function(n, type) { 
		n = lib.default_(1, n)
		if(type === undefined){
			return "margin : " + n + "px; \n"
		} else {
			return "margin-" + type + " : "+ n + "px; \n"
		}
	},

	margin2 : function(vertical, horizontal) { 
		return "margin : " + vertical + "px " + horizontal + "px; \n"
	},
	
	padding2 : function(vertical, horizontal) { 
		return "padding : " + vertical + "px " + horizontal + "px; \n"
	},
	
	inline : function(){
		return "display : inline-block;";
	},
	
	floatLeft : function(){
		return "float : left; \n";
	},

	floatRight : function(){
		return "float : right; \n";
	},
	
	background : function(color){
		color = lib.default_("white", color)
		return "background-color : " + color + "; \n" 
	},
	
	width : function(size){
		return "width : " + size + "px; \n" 
	},

	minWidth : function(size){
		return "min-width : " + size + "px; \n" 
	},
	
	table : function(){
		return "display : table; \n"
	},
	
	medium : function(){
		return "font-size : medium; \n";
	},
	
	large : function(){
		return "font-size : large; \n";
	},

	xlarge : function(){
		return "font-size : x-large; \n";
	},
	
	color : function(color){
		return "color : " + color + "; \n"
	} ,
	
	center : function(){
		return "text-align : center; \n"
	}
}

$.extend(cssLib, basic);
