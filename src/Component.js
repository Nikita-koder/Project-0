sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/JSON/JSONModel",
    "sap/ui/model/resource/ResourceModel"

], function (UIComponent, JSONModel, ResourceModel) {
    "use strict";
    return UIComponent.extend("project0.src.Component", {
        metadata : {
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
      }, 
        init: function () {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);
            // set data model
            const oData = {
                recipient : {
                    name: "World"
                }
                
            };
            const oMedel = new JSONModel(oData);
            this.setModel(oMedel);

            //set i18n model
            let i18nModel = new ResourceModel({
                bundleName: "project0.src.i18n.i18n"
            });
            this.setModel(i18nModel, "i18n");
        }

    });
});