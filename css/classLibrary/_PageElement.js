
var _ = cssLib
var pageElementcss = {
	
	".defaultContainer" : function(){
		return _.assembleStyle([ 
		        _.margin(3),
              ])
	},
	
	".defaultMsg" : function(){
		return _.assembleStyle([ 
		        _.margin(3),
		        _.padding(2)
              ])
	},
	
	".pageElementContainer" : function(){
		return _.assembleStyle([
		      _.padding(2), 
		      _.borderRad(2),
		      _.border(3),
		      _.borderC("white"),
		      _.background("#42a4ff"),
		      _.margin2(2,10),
		      _.minWidth(200),
		      _.table(),
		])
	},
	
	".pointer:hover" : function(){
		return _.assembleStyle([
        		     _.pointer()
        		])
	},
	
	
	".dataTypeContainer" : function(){
		return _.assembleStyle([
      		      _.padding(2), 
      		      _.border(1),
      		      _.margin(3)
      		])
	},
	
	".dataTypeContainer:hover" : function(){
		return _.assembleStyle([
      		   _.pointer()
      		])
	},
	
	".dataName" : function(){
		return _.assembleStyle([
		      _.padding(2), 
		      _.borderRad(2),
		      _.width(300),
		      _.inline(),
		])
	},
	".dataType" : function(){
		return _.assembleStyle([
		      _.padding(2), 
		      _.borderRad(2),
		      _.italic(),
		      _.inline(),
		])
	},
	
	".tableHeaer" : function(){
		return _.assembleStyle([
		         _.inline(),
		         _.padding(4),
		         _.border(1, "bottom"),
		         _.width(300),
		         _.center(),
		        ])
		
	},
	
	".tableCell" : function(){
		return _.assembleStyle([
		         _.inline(),
		         _.margin(4),
		         _.width(300),
		         _.center(),
		        ])
	},
	
	".headerContainer" : function(){
		return _.assembleStyle([
		       		         _.margin2(10, 15)
		       		        ])
		       		
		       	},
}

cssLib.modules.push(pageElementcss)

