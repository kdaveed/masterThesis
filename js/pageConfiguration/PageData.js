

var PageConfig = new Object()

PageConfig["pageEditor"] = {
	
	mainObject : PageData,
	editFields : [ 
	  {  
		  predicate : "contains",  
		  title : "Elements",
		  typeSelector : "onlyLast",
	  },        
	  {   predicate : "hasData", 
		  title : "Data",
		  typeSelector : "onlyLast"
	  },
	]
}

PageData["testObject"] = {

		"a" : {
			"aa1" : "123",
			"bb1" : "456",
		},

		"b" : {
			"aa" : "123",
			"bb" : "456",
		}
	}

PageData["testObject2"] = {

		"a" : {
			"aa2" : "123",
			"bb2" : "456",
		}
	}

PageData["systemicParts"] = [ 
    
    {	
    	boneClass : "1",
		systemicPart : "11",
		systemicPartLabel : "11Label"
	}, {
		boneClass : "1",
		systemicPart : "12",
		systemicPartLabel : "12label"
	},{
		boneClass : "2",
		systemicPart : "21",
		systemicPartLabel : "21label"
	},{
		boneClass : "2",
		systemicPart : "22",
		systemicPartLabel : "22label"
	} 
]

PageData["queries"]  = {
	
	skullDivisions : {
		inputs : [],
		queryText : "SELECT ?class ?label " +
			"WHERE" +
			"{" +
			    "?class rdfs:subClassOf <http://purl.obolibrary.org/obo/FMA_54964> ." +
				"?class rdfs:label ?label . " +
			"}" 
	},
	
	systemicParts : {
		inputs : ["bone"],
		queryText : 
			"SELECT ?subBoneLabel " +
			"	WHERE " +
			"	{ " +
			"	 ?subBone rdfs:label  ?subBoneLabel . " +
			"	 ?subBone rdfs:subClassOf  ?restriction . " +
			"	 ?restriction  owl:onProperty  <http://purl.obolibrary.org/obo/fma#systemic_part_of> . " +
			"	 ?restriction  owl:someValuesFrom ?bone . " +
			"	}"
	},
	
	bones : {
		 inputs : ["skeletalInventor"],
		 queryText : "SELECT  ?boneUri ?classUri ?completeness ?label ?description ?systemicPart ?systemicPartLabel ?systemicPartClassUri"
	        + " WHERE { \n"
	        + "    ?completeness    obo:BFO_0000050   ?skeletalInventory ."
	        + "    ?completeness    obo:IAO_0000136   ?boneUri . "
	        + "    ?boneUri  rdfs:label  ?label  . "
	        + "    ?boneUri  vitro:mostSpecificType  ?classUri ."  
	        + "    OPTIONAL { ?boneUri  rdfbones:description  ?description  . } "
	}
},


PageData["elements"] = [
  
   {
	  type  : "single",
	  elementType : "title1",
	  value : "Add Coherent Bone Regions",
   }, {
	type : "multiple",
	elementType : "container",
	based_on : {
		parentLevel : -1,
		key : "skullDivisions",
	},
	elements : [
	    {
	    	type : "single",
	    	elementType : "addButtonText",
	    	text : {
	    		parentLevel : 1,
	    		key : "label",
	    	},
	    	input : {
	    		parentLevel : 1,
	    		key : "uri",
	    	}
	    }
	  ]
   },{
		  type  : "single",
		  elementType : "title1",
		  value : "Existing Bone Regions",
   },{
		  type : "multiple", 
		  elementType : "container",
		  based_on : {
			  parentLevel : -1,
			  key :"skullDivisions",
		  },
		  localData : [
			  {
				 name : "bonesOfClass",
				 operation : {
					type : "filter",
					subject : {
						parentLevel : -1,
						key :"bonesOfSkeletalInventory",
					},
					by : "classUri",
					filterValue : {
						parentLevel : 0,
						key :"uri",	
							}
					}
			  }
		  ],

		  elements : [
		    { 
		    	type : "single",
		    	elementType : "title2",
		    	value : {
		    		parentLevel : 1,
		    		key : "label",
		    	}
		    }, {
				type : "single",
				elementType : "tableHeader",
				titles : ["Label", "Description"],
			}, {
				type : "multiple",
				elementType : "tableRow",
				based_on : {
					parentLevel : 1,
					key :"bonesOfClass",
				},
				elements : [
				  {  type : "single",
					 elementType : "literalCell",
					 value : {
					 parentLevel : 1,
					 key : "label"
					 },
				  },
				  { 
					type : "single",
					elementType : "literalCell",  
					value : {
						 parentLevel : 1,
						 key : "description"
						 },				  
				  }
				]
			}
		  ]
	  } 
]



PageData["presentationData"] = {
	
	skeletalInventoryPage : {
		elements : [
		    { color : "red",  text : "First Element"},
		    { color : "blue",  text : "Second Element"},
		    { color : "green",  text : "Third Element"},
		    { color : "black",  text : "Fourth Element"},
		 ]
	}                        
}

$("#refreshPage").click(function(){
	console.log("dd")
	$("#presentationPage").empty()
	$.each(PageData["presentationData"].skeletalInventoryPage.elements, function(index, element){
		$("#presentationPage").append(
				html.div("table presentation").css("background-color", element.color).text(element.text))
	})
})


