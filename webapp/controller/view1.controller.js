sap.ui.define(["hp/controller/basecontroller"],
    function(oController){
    return oController.extend("hp.controller.view1",{
    onInit : function(){
 	
    },
    onPress : function(oEvent){
    var oListitem = oEvent.getParameter("listItem");
    var oPath = oListitem.getBindingContext().sPath;
    var oView = this.getAppObject();
    var oView2 = oView.getDetailPages()[1];
    oView2.bindElement(oPath);
    oView.to("idView2");
    },
    onSearch : function(oEvent){
    var oName = oEvent.getParameter("query");
    var oFilter1 = new sap.ui.model.Filter("name",sap.ui.model.FilterOperator.Contains,oName);	
    var oFilter2 = new sap.ui.model.Filter("benefit",sap.ui.model.FilterOperator.Contains,oName);
    var aFilter = new sap.ui.model.Filter({
    	filters : [oFilter1,oFilter2],
    	and     : false
    });	
    var bFilter = [aFilter];
    var oList = this.getView().byId("idList");
    oList.getBinding("items").filter(bFilter);
    },
   onLive : function(oEvent){
   	var oNewValue = oEvent.getParameter("newValue");
   	var oFilter1 = new sap.ui.model.Filter("name",sap.ui.model.FilterOperator.Contains,oNewValue);
   	var oFilter2 = new sap.ui.model.Filter("benefit",sap.ui.model.FilterOperator.Contains,oNewValue);
   	var mainFilter = new sap.ui.model.Filter({
   		filters : [oFilter1,oFilter2],
   		and  : false
   	});
   	var aFilter = [mainFilter];
   	var oList = this.getView().byId("idList");
   	oList.getBinding("items").filter(aFilter);
   	
   } 
    });	
    });