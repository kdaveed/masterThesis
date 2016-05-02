//Beforescripts

var js = "js"
var css = "css"

var path = {
	cssClassLib : css + "/classLibrary",
	cssStyleLib : css + "/styleLibrary",
	data : js + "/data",
	server : js + "/serverConfig",
	dataEditor : js + "/dataEditor",
	ui : js + "/ui",
	
	lib : js + "/lib",
	descriptors : js + "/descriptors",

	staticUI : js + "/staticUI",
	pageConfiguration : js + "/pageConfiguration",
	
}

var beforeScripts = [
       { fileName : "cssLib.js" , path : css},
       { fileName : "basic.js"  , path : path.cssStyleLib},
       { fileName : "_DataUI.js" , path : path.cssClassLib},     
       { fileName : "_PageElement.js" , path : path.cssClassLib},              
]

var afterScripts = [

     //Lib
     { fileName : "html.js" , path : path.lib},
     { fileName : "library.js" , path : path.lib},
     { fileName : "UI.js" , path : path.lib},
     { fileName : "DataLibrary.js" , path : path.lib},   
     
     //PageConfiguration
     { fileName : "DataOperations.js" , path : path.pageConfiguration},   
     { fileName : "Elements.js" , path : path.pageConfiguration},   
     { fileName : "Data.js" , path : path.pageConfiguration},   
     { fileName : "PageData.js" , path : path.pageConfiguration},   
     { fileName : "PageData2.js" , path : path.pageConfiguration},   

     //Data
     { fileName : "testData.js" , path : path.data},   
     { fileName : "DataOperations.js" , path : path.data},   
     { fileName : "ObjectField.js" , path : path.data},
     { fileName : "ObjectUI.js" , path : path.data},
     { fileName : "ArrayUI.js" , path : path.data},
     { fileName : "LiteralUI.js" , path : path.data},
     { fileName : "KeyUI.js" , path : path.data},
     { fileName : "PageGenerator.js" , path : path.data},

     
     //Descriptors
     { fileName : "DataOperationDescription.js" , path : path.descriptors},   

     //UI
     { fileName : "ActionButtonText.js" , path : path.ui},
     { fileName : "EntryListModule.js" , path : path.ui},
     { fileName : "ListModules.js" , path : path.ui},
     { fileName : "UIEditor.js" , path : path.ui},
     { fileName : "PageElement.js" , path : path.ui},
     { fileName : "MultiplePageElement.js" , path : path.ui},
     { fileName : "SingleElement.js" , path : path.ui},
     
     //StaticUI
     { fileName : "PageElementTypeSelector.js" , path : path.staticUI},
     { fileName : "VariableSelector.js" , path : path.staticUI},
     
     //Other
     { fileName : "loader.js" , path : js},
     { fileName : "Server.js" , path : path.server},
]

var PageConfiguration = new Object()
var PageData = new Object()

$(document).ready(function(){
	
	var nodeBuffer = []
	var head= document.getElementsByTagName('head')[0];
	$.each(beforeScripts, function(index, value){
		var script = document.createElement("script")
		script.setAttribute("type", "text/javascript")
		script.setAttribute("src", value.path + "/" + value.fileName)
		head.appendChild(script)
	})
	
	var afterScriptDiv = document.getElementById('afterScripts');
	$.each(afterScripts, function(index, value){
		var script = document.createElement("script")
		script.setAttribute("type", "text/javascript")
		script.setAttribute("src", value.path + "/" + value.fileName)
		afterScriptDiv.appendChild(script)
	})
})