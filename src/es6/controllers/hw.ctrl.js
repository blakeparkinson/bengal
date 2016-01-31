'use strict';
(function() {
  starter.controllers.controller('HwCtrl', function($scope, $stateParams, bleConfig, bleService) {
    $scope.a = [];
    for (let j = 0; j < 15; j++){
      $scope.a.push(j);
    }
    bleService.initializeBLE();


  });
})();
