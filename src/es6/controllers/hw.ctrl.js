'use strict';
(function() {
  starter.controllers.controller('HwCtrl', function($scope, $stateParams, bleConfig) {
    $scope.a = [];
    for (let j = 0; j < 15; j++){
      $scope.a.push(j);
    }
    console.log(ble);
    console.log('hi');

    ble.startScan([], function(){
      console.log('hi');
    });

  });
})();
