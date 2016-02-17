'use strict';
(function() {
  starter.controllers.controller('ProfileCtrl', function($stateParams) {
    this.world = 'Profile Page';
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
    this.rangeVal = 44;

    this.options = ['clockwise', 'counterclockwise'];

    this.select = "Clockwise";
    this.clockwise = true;
    this.showSelectValue = function(select) {
      if (select != 'Clockwise') {
        this.clockwise = false;
      } else {
        this.clockwise = true;
      }
    };

    var gow = [];
    for (let t = 0; t < 10; t++) {
      gow.push(t);
    }
    this.gow = gow;
  });
})();
