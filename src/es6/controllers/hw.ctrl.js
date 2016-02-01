'use strict';
(function() {
  starter.controllers.controller('HwCtrl', function($scope, $stateParams, bleConfig, bleService) {
    $scope.a = [];
    for (let j = 0; j < 15; j++){
      $scope.a.push(j);
    }

    $scope.knobData = [
		{
			value: 30,
			options: {
				width: 100,
				displayInput: false
			}
		}
	];

    $scope.data = 20;
    $scope.options = {
        width: 75,
        fgColor: "#ffec03",
        skin: "tron",
        thickness: 0.2,
        displayPrevious: true
    };

	$scope.formatOptions = function(data) {
		data.formattedOptions = JSON.stringify(data.options).replace(/,/g,"\n");
		return data;
	};
    //bleService.initializeBLE();


  });
})();
