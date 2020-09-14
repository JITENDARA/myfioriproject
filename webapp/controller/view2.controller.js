sap.ui.define(["hp/controller/basecontroller"],
        function(oController){
        return oController.extend("hp.controller.view2",{
        oInput:null,
        oValue:null,
        onInit : function(){
        	
        },
       onHelpRequest : function(oEvent){
       	this.oValue = oEvent.getSource().getId();
       	if(this.oInput === null){
       	 this.oInput = new sap.ui.xmlfragment("hp.fragments.Value",this);
       	this.getView().addDependent(this.oInput);
       	}
       	this.oInput.open();
       	
       },
       onConfirm : function(oEvent){
       	var oConfirm  = oEvent.getParameter("selectedItem");
       	var oInpId = this.oValue;
       	this.getView().byId(this.oValue).setValue(oConfirm.getTitle());
       	// var oVal = sap.ui.getCore().byId(oInpId);
       	// oVal.setValue(oConfirm.setTitle());
       	
       }
        });	
        });