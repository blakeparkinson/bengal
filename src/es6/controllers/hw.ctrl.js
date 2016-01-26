'use strict';
(function() {
  starter.controllers.controller('HwCtrl', function($scope, $stateParams) {
    $scope.a = [];
    for (let j = 0; j < 15; j++){
      $scope.a.push(j);
    }
    console.log($scope.a);
  });
})();
