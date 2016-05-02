setTimeout(function() {
}, 400);

/*******************************************************************************
 * CSS
 ******************************************************************************/

$.each(cssLib.modules, function(index, classes) {
	$.each(classes, function(className, style) {
		cssLib.createClass(className, style())
	})
})

/*
$("#pageContainer").append(html.div().text("Initial Data"))

$.each(PageConfiguration.initSteps, function(index, step) {
	PageData[step.outputVar] = PageConfiguration.dataOperation[step.operation](step)
	console.log(index)
	PageConfiguration.dataOperationDescription.set(step)
})
*/
//$("#pageContainer").append(new ObjectUI(PageData).init().container)
//$("#pageContainer").append(new ObjectUI(PageConfiguration.dataDescriptors).init().container)
//$("#pageContainer").append(new PageElement(PageConfiguration.elements).container)

//$("#presentationData").append(new ObjectUI(PageData["presentationData"]).init().container)


/*
 * 
$.each(testPageData, function(key, value) {
	console.log(key)
	switch (DataLib.getType(value)) {
		case "object":
			$("#pageContainer").append(new ObjectUI(value).init().container)
			break;
		case "array":
			$("#pageContainer").append(new ArrayUI(value).init().container)
			break;
	}
})
*/

loadPage()