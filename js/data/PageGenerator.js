

var loadPage = function(){
	
	var globalContainer = html.div()
	var localData = null
	$.each(PageData["elements"], function(index, element){
		appendElement(globalContainer, element, localData)
	})
	console.log(globalContainer)
	$("#pageContainer").append(globalContainer)
}


var appendElement = function(parentContainer, element, parentData){

	var localData = new Object()
	localData["parentData"] = parentData
	var container 

	switch(element.type){
	
	case "single" : 
		switch(element.elementType){
			case "title1" :
				container = html.div("title1").text(getValue(element.value, localData))
				break;
			case "title2":
				container = html.div("title2").text(getValue(element.value, localData))
				break;
			case  "tableHeader" : 
				container = html.div("headerContainer")
				$.each(element.titles, function(index, title){
					console.log(title)
					container.append(html.div("tableHeaer").text(title))
				})
				break;
			case "literalCell" :
				container = html.div("tableCell").text(getValue(element.value, localData))
				break;
			case "addButtonText" :

				container = new ActionButtonText(getValue(element.text, localData), "add",
									getValue(element.input, localData)).container
				break;
		}

		parentContainer.append(container)
		if(element.elements != undefined){
			$.each(element.elements, function(index, subElement){
				appendElement(container, subElement, localData)
			})
		}
		break;
		
	case "multiple" :

		var loopArray = getValue(element.based_on, localData)
		console.log(loopArray)
		$.each(loopArray, function(index, loopObject){
			
			switch(element.elementType){
				case "container" :
					container = html.div("multipleContainer")
					break;
				case "tableRow" :
					container = html.div("")
					break;
			}
			parentContainer.append(container)
			$.extend(localData, loopObject)
			if(element.localData != undefined){
				$.each(element.localData, function(index, data){
					localData[data.name] = getOperationResult(
							data.operation, localData)
				})
			}
			$.each(element.elements, function(index, subElement){
				appendElement(container, subElement, localData)
			})
		})
		break;
	}
}

var getOperationResult = function(operationDef, localData){

	var toReturn 
	switch(operationDef.type){
	case "filter" : 
		var subject = getValue(operationDef.subject, localData)
		//console.log(subject)
		//console.log(localData)
		var filterValue = getValue(operationDef.filterValue, localData)
		//console.log(filterValue)
		var returnArray = []
		$.each(subject, function(index, element){
			if(element[operationDef.by] === filterValue){
				//console.log("push")
				returnArray.push(element)
			}
		})
		//console.log(returnArray)
		toReturn = returnArray
		break;
	}
	return toReturn
}


var getValue = function(variable, localData){

	if(DataLib.getType(variable) == "data"){
		//console.log(variable)
		return variable
	} else {
		if(variable.parentLevel == -1){
			return PageData[variable["key"]]
		} else {
			var parentObject = localData
			//console.log(variable.parentLevel)
			for(var i = 0; i < variable.parentLevel; i++){
				//console.log("dsddsds")
				parentObject = parentObject["parentData"]
			}
			return parentObject[variable["key"]]
		}
	}
}