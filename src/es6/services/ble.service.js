'use strict';
(function() {

    starter.services.factory('bleService', function($q) {
        return {
          initializeBLE: function() {
            if (window.cordova) {

              ble.isEnabled(function() {
                  console.log(Date.now() + 'Scanning.');
                  ble.startScan([], onDiscover);
                });
              }
           else {
            this.noCordova();
          }
        },
        onDiscover: function(data) {
            console.log(data);
          },
          noCordova: function() {
            console.log('cordova is not active');
          }
      };
    });
})();
