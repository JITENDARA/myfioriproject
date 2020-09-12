sap.ui.define(["hp/controller/basecontroller","hp/model/model"],
        function(oController,oJson){
        	return oController.extend("hp.controller.appview",{
        onInit: function(){
        	
       var oModel = oJson.createModel("model/mockdate/fruits.json");
        this.getView().setModel(oModel);
        var i18nModel = oJson.createI18n();
        this.getView().setModel(i18nModel,"i18n");
        
       var oApp = this.getView().byId("MyApp"); 	
       var oView1 = new sap.ui.view({
       	id : "idView1",
       	viewName : "hp.view.view1",
       	type : "XML"
       }); 	
        var oView2 = new sap.ui.view({
         id : "idView2",	
        viewName : "hp.view.view2",
        type : "XML"
        });	
        var oEmpty = new sap.ui.view({
        	id : "idEmpty",
        	viewName : "hp.view.empty",
        	type  : "XML"
        });
       oApp.addMasterPage(oView1);
       oApp.addDetailPage(oEmpty);
       oApp.addDetailPage(oView2);
       
       oApp.setInitialDetail(oEmpty);
        }	
        	})  ;      	
        	
        });