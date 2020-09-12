sap.ui.define(["sap/ui/model/json/JSONModel",
               "sap/ui/model/resource/ResourceModel"],
    function(oJson,oResource){
    	return {
        createModel : function(){
        	var oModel = new oJson();
        	oModel.loadData("model/mockdata/fruits.json");
        	return oModel;
        },
       createI18n : function(){
       	   var oI18n = new oResource({
       	   	       bundleUrl : "i18n/i18n.properties"
       	   });
       	return oI18n;
       } 
    		
    	};
    	
    });