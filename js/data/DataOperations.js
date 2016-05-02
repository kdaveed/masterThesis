

PageConfiguration["dataOperation"] = {

	getLeafNodes : function(object) {
		var returnArray = []
		var initial
		if (DataLibrary.isArray(object)) {
			initial = object
		} else {
			/*
			 * It right now I assume by the children dataset that is in the
			 * children field. We could program the application later that we
			 * create a new instance of the getLeadNodes class/function and we
			 * set the parameters to handle.
			 */
			initial = object.children
		}
		// We have to return the last objects. Depth first search
		$.each(initial, function(index, value) {
			console.log("children")
			dataOperations.helper1(value, returnArray)
		})
		console.log(returnArray)
		return returnArray
	},

	helper1 : function(object, returnArray, n, k) {
		if (object.children === undefined || object.children.length == 0) {
			returnArray.push(object)
		} else {
			$.each(object.children, function(index, value) {
				dataOperations.helper1(value, returnArray)
			})
		}
	},

	treeStructureLevel : function(treeStructure, n) {

		var returnArray = []
		var k = 1;
		// We have to return the last objects. Depth first search
		$.each(treeStructure.children, function(index, value) {
			console.log("children")
			dataOperations.helper2(value, returnArray, n, k)
		})
		return returnArray
	},

	helper2 : function(object, returnArray, n, k) {

		if (n == k) {
			returnArray.push(object)
		} else {
			k++
			if (object.children != undefined) {
				$.each(object.children, function(index, value) {
					dataOperations.helper2(value, returnArray, n, k)
				})
			}
			k--
		}
	},

	joinTables : {

		inputParameters : [ {
			name : "table1",
			type : "Object"
		}, {
			name : "table2",
			type : "Object"
		} ],

		code : function(table1, table2) {

			var results = new Object()
			$.each(table1, function(key, value) {
				if (key in table2) {
					results[key] = new Object()
					$.extend(results[key], table2[key])
					$.extend(results[key], value);
				}
			})
			return results
		},
	},

	groupToArray : function(def, data) {
		var toReturn = new Object()
		$.each(data, function(key, value) {
			if (!(value[def.by] in toReturn)) {
				toReturn[value[def.by]] = []
			}
			var obj = new Object()
			$.each(value, function(key, value) {
				if (key != def.by) {
					obj[key] = value
				}
			})
			toReturn[value[def.by]].push(obj)
		})
		return toReturn
	},
	
	groupToObject : function(def, array) {
		var toReturn = new Object()
		$.each(array, function(key, object) {
			toReturn[object[def.by]] = new Object()
			$.each(object, function(key, field) {
				if (key != def.by) {
					toReturn[object[def.by]][key] = field
				}
			})
		})
		return toReturn
	},
	
	groupArray : (function(def, value) {
		var toReturn = new Object()
		return PageConfiguration["dataOperation"][def.type](def, PageData[def.dataKey])
		
	}).bind(this),
	
	groupArrayOfObject : function(def){
		var toReturn = new Object()
		$.each(PageData[def.dataKey], function(key, array) {
			toReturn[key] = 
				PageConfiguration["dataOperation"][def.type](def, array)
		})
		return toReturn
	},
}




var getDataType = function(){
	
	if(DataLib.typeCheck(
		dataDescriptors.bonesOfSkeletalInvetoryByClass, ["listmap", "list"])){
	}
}



