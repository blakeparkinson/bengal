'use strict';
(function() {

  starter.controllers.controller('ChatsCtrl', function($localStorage) {

     $localStorage.set('name', 'Max');
    this.data = {
      text : 'hello world'

    };

    $localStorage.setObject('post', {
    name: 'Thoughts',
    text: 'Today was a good day'
  });

  var post = $localStorage.getObject('post');

  console.log(post);

  });
})();
