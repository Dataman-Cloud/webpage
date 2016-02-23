(function () {
  'use strict';
  angular.module('webpage')
    .run(runBlock);

  runBlock.$inject = ['authBackend'];

  function runBlock(authBackend) {

      (function() {
          return authBackend.getNotice()
            .then(function(data) {
                // notice alert
            });
      })();

  }
})();