'use strict';
(function() {
  starter.controllers.controller('HwCtrl', function($stateParams, bleConfig, bleService) {
    this.a = [];
    for (let j = 0; j < 15; j++){
      this.a.push(j);
    }

    this.knobData = [
		{
			value: 30,
			options: {
				width: 100,
				displayInput: false
			}
		}
	];

    this.data = 20;
    this.options = {
        width: 225,
        fgColor: "#ffec03",
        skin: "tron",
        thickness: 0.5,
        displayPrevious: true,
        displayInput: true,
        min: 0,
        max: 360
    };

	this.formatOptions = function(data) {
		data.formattedOptions = JSON.stringify($scope.options).replace(/,/g,"\n");
    console.log(data);
		return data;
	};
    bleService.initializeBLE();


  });
})();
