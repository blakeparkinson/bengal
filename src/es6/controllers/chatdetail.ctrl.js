'use strict';

(function() {
  starter.controllers.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    this.chat = Chats.get($stateParams.chatId);
  });
})();
