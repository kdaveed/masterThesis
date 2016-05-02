PageConfiguration["initSteps"] = [ 
	  {
		operation : "groupArray",
		type : "groupToArray",
		dataKey : "systemicParts",
		by : "boneClass",
		outputVar : "groupedBones"
	}, {
		operation : "groupArrayOfObject",
		type : "groupToObject",
		dataKey : "groupedBones",
		by : "systemicPart",
		outputVar : "groupedBones2",
	} 
]