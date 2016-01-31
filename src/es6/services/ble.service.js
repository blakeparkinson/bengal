'use strict';
(function() {

    starter.services.factory('bleService', function() {
        return {
          initializeBLE: function() {
            ble.isEnabled(function() {
                console.log(Date.now() + 'Scanning.');
                ble.startScan([], onDiscover);
              })
            },
            onDiscover: function(data){
              console.log(data);
            }
          };
        });
    })();
