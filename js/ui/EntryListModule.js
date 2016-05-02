

var EntryListModule = function(configData){
	
	this.containerClass = "defaultContainer"
	this.titleClass = "title2"
	this.tile = "Title"
	this.dataContainerClass = "defaultContainer"
	this,noResultClass = "defaultMsg"
	this.noResultMsg = "There is no data"
	this.addNewElement = html.div()
			.click((function(){
				alert("Implement add new")
			}).bind(this))
}

EntryListModule.prototype = {
		
		setElements : function() {
			(this.container = html.div(this.containerClass))
					.append(this.dataTitleContainer = html.div(this.titleClass).text(this.title))
					.append(this.dataContainer = html.div(this.dataContainerClass))
					.append(this.addNewContainer = this.addNew.container)
			this.noResult = html.div(this.noResultClass).text(this.noResultMsg)
		},
		
		appendNoResult : function(){
			this.dataContainer.append(this.noResult)
		},
}

var LocalDataListModule = function(data, key){
	
	/*
	 * This function is completely aware of the ontology.
	 * How can we build an interface that adopts to the 
	 * the ontology.
	 * So this class is 
	 */
	this.data = data.key
	//This is just a configuration entry
	this.noResult = "There is no list element"
	this.title = "Local Data"
	this.addNew = new DataEditor(data)
	EntryListModule.call(this)
}

LocalDataListModule.prototye = Object.create(EntryListModule.prototype) 

LocalDataListModule.prototype = {

	/*
	 * Here the data editor appears in the newElementContainer
	 */
	addLocalData : function(){
		
	}
}


