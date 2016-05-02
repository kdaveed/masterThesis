

var cssLib = {
	
	assembleStyle : function(styles){
		var rules = "";
		$.each(styles, function(index, value){
			rules += value
		})
		return rules
	},
	
	createClass : function(name,rules){

		var style = document.getElementsByTagName('style')[0]
	    if(!(style.sheet||{}).insertRule) {
	        (style.styleSheet || style.sheet).addRule(name, rules);
	    } else {
	        style.sheet.insertRule(name+"{"+rules+"}",0);
	    }
	},
	
	modules : []
}

var lib = {
		default_  : function(defaultValue, value){
		if(value === undefined){
			value = defaultValue
		}
		return value
	}
}
