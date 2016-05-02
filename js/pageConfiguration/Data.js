

PageConfiguration["dataDescriptors"] = {
	
	systemicParts : {
		name : "systemicParts",
		type : "array",
		of : {
			type : "object",
			fields : [
				{
					key : "boneClass",
					type : "Data",
				}, {
					key : "systemicPart",
					type : "Data",
				}, {
					key : "systemicPartLabel",
					type : "Data",
				}            
			] 
		}
	},
	/*
	bonesOfSkeletalInvetoryByClass : {
		type : "listmap",
		of : {
			type : "list",
			of : {
				type : "object",
				fields : [
				   { name : "boneUri" , type : "data"},
				   { name : "label" , type : "data"},
				   { name : "description" , type : "data"},
				]
			}
		}
	}
	*/
}

