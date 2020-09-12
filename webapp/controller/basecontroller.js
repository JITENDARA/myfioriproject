sap.ui.define(["sap/ui/core/mvc/Controller"],
function(oController){
	return oController.extend("hp.controller.basecontroller",{
		onInit : function(){
			
			
		},
	getAppObject : function(){
		return sap.ui.getCore().byId("idAppView--MyApp");
		// return this.getView().getParent();
	}	
	});
});