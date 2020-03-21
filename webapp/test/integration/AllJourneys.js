sap.ui.define([
  "sap/ui/test/Opa5",
  "weVsVirus/next-to-me/test/integration/arrangements/Startup",
  "weVsVirus/next-to-me/test/integration/BasicJourney"
], function(Opa5, Startup) {
  "use strict";

  Opa5.extendConfig({
    arrangements: new Startup(),
    pollingInterval: 1
  });

});
