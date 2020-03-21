/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
  "use strict";

  sap.ui.require([
    "weVsVirus/next-to-me/test/integration/AllJourneys"
  ], function() {
    QUnit.start();
  });
});
