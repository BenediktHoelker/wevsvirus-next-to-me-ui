sap.ui.define([
  "sap/ui/test/Opa5"
], function(Opa5) {
  "use strict";

  return Opa5.extend("weVsVirus.next-to-me.test.integration.arrangements.Startup", {

    iStartMyApp: function () {
      this.iStartMyUIComponent({
        componentConfig: {
          name: "weVsVirus.next-to-me",
          async: true,
          manifest: true
        }
      });
    }

  });
});
