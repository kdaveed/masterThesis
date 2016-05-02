
var _ = cssLib
var dataUIcss = {
		
	titleBase : function(){
		return _.assembleStyle([
		      _.padding(2), 
		      _.border(1, "bottom"),
		      _.margin(3),
		      _.inline()
		])
	},
	
	".title1" : function(){
		console.log(dataUIcss)
		return _.assembleStyle([
      		      dataUIcss.titleBase(),
      		      _.large(),
      		])
	},

	".title2" : function(){
		return _.assembleStyle([
		      dataUIcss.titleBase(),
		      _.medium(),
		])
	},
	
	".title3" : function(){
		return _.assembleStyle([
		        dataUIcss.titleBase(),
		      _.xlarge(),
		])
	},
	
	
	".addButton" : function(){
		return _.assembleStyle([
  		      _.padding(2),
  		      _.margin(4, "left"),
  		      _.border(),
  		      _.inline(),
  		      _.background("grey")
  		])
	},
	
	".presentation" : function(){
		return _.assembleStyle([
		      _.padding(6),
  		      _.margin(7),
  		      _.color("white")
  		])
	},
}

cssLib.modules.push(dataUIcss)


var objectUIcss = {
		
		objectBase : function(){
			return _.assembleStyle([
  			      _.padding2(4,2), 
  			      _.border(2),
  			      _.borderRad(3),
  			      _.margin(2)
  			])
		},
		
		".objectContainer" : function(){
			return _.assembleStyle([
			      objectUIcss.objectBase(),
			      _.background("#ff4d4d"),
			      _.inline(),
			      _.minWidth(250)
			])
		},
		
		".objectContainerEdit" : function(){
			return _.assembleStyle([
			      objectUIcss[".objectContainer"](),
			      _.background("#FFFFFF")
			])
		},
		
		".keyContainer" : function(){
			return _.assembleStyle([
			      objectUIcss.objectBase(),
			      _.background("#3399FF"),
			      _.inline(),
			      _.minWidth(150)
			])
		},
		
		".valueContainer" : function(){
			return _.assembleStyle([
  			      objectUIcss.objectBase(),
  			      _.background("#DAA520"),
  			      _.minWidth(150)
  			])
		}, 
		
		".arrayContainer" : function(){
			return _.assembleStyle([
			      objectUIcss.objectBase(),
			      _.inline(),
			      _.padding2(6, 2),
			      _.background("#AEA5BC"),
			      _.minWidth(150)
			])
		},
		
		".editImg" : function(){
			return _.assembleStyle([
			      _.inline(),
			      _.margin(5),
			])
		},
		
		".multipleContainer" : function(){
			return _.assembleStyle([
	      			      _.margin2(5, 15),
	      			])
		},
	}

cssLib.modules.push(objectUIcss)

