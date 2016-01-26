'use strict';
(function() {
  starter.controllers.controller('ProfileCtrl', function($scope, $stateParams) {
    $scope.world = 'Profile Page';
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
    $scope.rangeVal = 44;

    $scope.options = ['clockwise', 'counterclockwise'];

    $scope.select = "Clockwise";
    $scope.clockwise = true;
    $scope.showSelectValue = function(select) {
      if (select != 'Clockwise') {
        $scope.clockwise = false;
      } else {
        $scope.clockwise = true;
      }
    };

    console.log('oooooppppppss');

    var gow = [];
    for (let t = 0; t < 10; t++) {
      gow.push(t);
    }
    $scope.gow = gow;
    console.log($scope.gow);
  });
})();
