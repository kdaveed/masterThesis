

//How do we define what has to be displayed

//Exampe



var classes = {

	"Data" : {
		domainPredicates : ["name"],
		superClass : [],
		subClasses : ["Constant", "ResultOfOperation"],
	},
	
	"Array" : {
		domainPredicates : ["of"],
		superClass : "Data",
		subClasses : [],
	},
	
	"Object" : {
		domainPredicates : ["hasField"],
		superClass : "Data",
		subClasses : [],
	},
	
	"Literal" : {
		domainPredicate : "value",
		superClass : "Data",
		subClasses : [],
	},
	
	"Constant" : {
		domainPredicates : [],
		superClass : "Data",
		subClasses : [],
	},
	
	"ResultOfOperation" : {
		domainPredicates : [],
		superClass : "Data",
		subClasses : [],
	},
	
	"Field" : {
		domainPredicates : "fieldOf",
		superClass : null,
		subClassess : []
	}
}

var predicates = {
		
		name : {
			domain : "Data",
			range : "Literal"
		},
		
		hasField : {
			minCardinality : 1,
			inverse : "fieldOf",
			domain : "object",
			range : "Field",
		},
		
		of : {
			minCardinality : 1,
			domain : "array",
			range : "Data",
		},
		
		hasData : {
			inverse : "elementOf",
			domain : "PageElement",
			range : "PageElement",
			addNew : true,
		},
		
		contains : {
			inverse : "elementOf",
			domain : "PageElement",
			range : "PageElement",
			addNew : true,
		},
		
		by : {
			cardinality : 1,
			inverse : "arrayOfGroup",
			domain : "GroupArray",
			range : "ArrayOfObject",
			selectExisting : {
				type : "definedSet",
				constraint : [
				   { subject : "domainObject" , predicate : "inputArray", object : "array"},
				   { subject : "array" , predicate : "of", object : "object"},
				   { subject : "object" , predicate : "hasField", object : "field"},
			   ]
			}
		},
		
		by : {
			cardinality : 1,
			inverse : "grouping",
			domain : "GroupArray",
			range : "Field",
			selectExisting : {
				type : "definedSet",
				constraint : [
				   [
					   { subject : "domainObject" , predicate : "dataOf", object : "pageElement"},
					   { subject : "pageElement" , predicate : "hasData", object : "field"}           
				   ]
				]
				
			}
		}
		
}

var queryProcess = function(domainObject, contraints){
	
	var resultObject = new Object()
	var toReturn
	$.each(constraints, function(index, triple){
		if(index == 0 && triple.subject != "domainObject"){
			alert("Error")
		} else {
			resultObject[triple.subject] = domainObject
		}
		resultObject[triple.object] = []
		$.each(resultObject[triple.object], function(index, subject){
			resultObject[triple.object].push(
					triplesByPredicate[triple.predicate][subject])
		})
	})
	return resultObject[
	             constrains[contraints.length].object]
	            	 
}

