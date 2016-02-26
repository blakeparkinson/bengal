(function() {
  'use strict';
  pulse.services.factory('BLE', function($rootScope, $q, $localStorage, $timeout) {

  var status = 'sss';

  var bleITems =  {

  status: status,


  scanBLE: function(){
      var that = this;
      var deferred = $q.defer();
      if (window.cordova) {

        //that.devices.length = 0;

        if (connected) {
          var id = connected.id;
          ble.disconnect(connected.id, function() {
            console.log("Disconnected " + id);
          });
          connected = null;
        }

        ble.startScan([], /* scan for all services */
          function(peripheral) {
            if (peripheral) {
              that.devices.push(peripheral);
              deferred.resolve();
            }
          },
          function(error) {
            deferred.reject(error);
          });

        // stop scan after 5 seconds
        setTimeout(ble.stopScan, 5000,
          function() {
            deferred.resolve();
          },
          function() {
            console.log("stopScan failed");
            deferred.reject("Error stopping scan");
          }
        );
      } else {
        deferred.resolve(bleITems.noCordova());
      }

      return deferred.promise;
    },

    initBLE: function(){
      status = {'icon': 'ion-camera', 'status': 'scanning', 'fff': 'moo'};
      console.log(status);
      bleITems.scanBLE().then((data) => {
        //success callback
        if (this.devices.length) {
          _.forEach(this.devices, (device) => {
            if (device.name == 'Pulse') {

              bleITems.connectBLE(device.id).then((connectedDevice) => {
                //status = {'icon': 'ion-video', 'status': 'connected'};
                console.log('successfully added device');
              }, (error) => {
                //status = 'deviceFound';
                console.log(error);
              });
            }

          });
        }
      }, (error) => {
        //failure callback
        //status = {'icon': 'ion-camera', 'status': 'noDeviceFound'};
        console.log(error);
      });
    },

    connectBLE: function(){
      var deferred = $q.defer();

      ble.connect(deviceId,
        function(peripheral) {
          connected = peripheral;
          $localStorage.setObject('pulse', peripheral);
          deferred.resolve(peripheral);
        },
        function(error) {
          deferred.reject(error);
        }
      );

      return deferred.promise;
    },

    noCordova: function() {
      var deferred = $q.defer();
      deferred.reject('cordova is not active');
      return deferred.promise;
    }
  };

    return {


      devices: [],

      status: bleITems.status,

      scan: function() {
        bleITems.scanBLE();
      },
      connect: function(deviceId) {
        bleITems.connectBLE();
      },

      /**
       * function scanAndConnect - scans BLE devices and connects to the one named Pulse
       * @return {promise}
       */
      scanAndConnect: function() {
        bleITems.initBLE();
      }

    };
  });
})();
