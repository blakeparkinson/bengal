'use strict';

(function () {

  starter.services.factory('bleService', function ($q) {
    return {
      initializeBLE: function initializeBLE() {
        var defer = $q.defer();
        if (window.cordova) {
          console.log('ble time');
          ble.isEnabled(function () {
            console.log(Date.now() + 'Scanning.');
            ble.startScan([], function(data){
              defer.resolve(data);
            });
          }, function () {
            defer.resolve('wah3');
          });
        } else {
           defer.resolve(this.noCordova());
        }
        return defer.promise;
      },
      onDiscover: function onDiscover(data) {
        console.log(data);
        return data;
      },
      noCordova: function noCordova() {
        console.log('cordova is not active');
        return 'wah2';
      }
    };
  });
})();
