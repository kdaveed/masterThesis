/***
* This file is just a JS representation of the server configuration triples.
* It is important because the configuration of the page functionality is 
* dependent of this setting. Thus it has to be used on the page config interface,
* especially by data operation setting.
**/

var serverConfig = {
		
	"dataSets" : {
		
		"coherent" : {
			type : "Object",
			fields : [
			    { name : "classUri", type : "Data" },
			    { name : "boneUri", type : "Data" },
			    { name : "completeness", type : "Data" },
			    { name : "label", type : "Data" },
			    { name : "description", type : "Data" },
			    { name : "label", type : "Data" },
			    { name : "systemicParts", type : "Array" }
			]
		},
		
		"coherent" : {
			type : "Object",
			fields : [
			    { name : "classUri", type : "Data" },
			    { name : "boneUri", type : "Data" },
			    { name : "completeness", type : "Data" },
			    { name : "label", type : "Data" },
			    { name : "description", type : "Data" },
			    { name : "label", type : "Data" }
			]
		},
	},
}

