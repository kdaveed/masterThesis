

PageConfiguration["dataOperationDescription"] = {
		
	set : function(def){
		
		console.log(def)
		PageConfiguration.dataDescriptors[def.outputVar] 
			=  PageConfiguration["dataOperationDescription"][def.operation](def)
	},

	groupArray : function(def){
		
		console.log(def.dataKey)
		inputDescriptor = $.extend(true, {}, PageConfiguration.dataDescriptors[def.dataKey])
		DataLib.removeObjectFromArrayByKey(
				inputDescriptor.of.fields, "key", def.by)
		
		if(def.type = "groupToArray"){
			return {
				type : "object",
				of : {
					type : "array",
					of : inputDescriptor.of
				}
			}
		} else {
			return {
				type : "object",
				fields : inputDescriptor.of.fields
				}
		}
	},
	
	groupArrayOfObject : function(def){
		
		//Copy the objects
		inputDescriptor = $.extend(true, {}, PageConfiguration.dataDescriptors[def.dataKey])
		DataLib.removeObjectFromArrayByKey(
				inputDescriptor.of.of.fields, "key", def.by)
		if(def.type = "groupToArray"){
			return {
				type : "object",
				of : {
					type : "array",
					of : {
						type : "object",
						fields : inputDescriptor.of.of.fields
					}
				}
			}
		} else {
			return {
				type : "object",
				of : {
					object : "object",
					fields :  inputDescriptor.of.of.fields
					}
				}
		}
	}
}



var UIConfiguration = {
		
		dataTypes : [
	             { name : "Object", key : "object" },
	             { name : "Array", key : "array"},
	             { name : "Tree Structure", key : "treeStructure"},
	             { name : "Constant", key : "constant"},
	             { name : "Data" , key : "data"}
	         ],

		 dataOperationDescription : {
				treeStructureLevel : {
					params : [
					     { number : "1", type : "treeStructure"},
					     { number : "2", type : "data"}
					     ],
					ret : {
						type : "Array",
						of : "treeStructure"
					}
				}
			},
	}