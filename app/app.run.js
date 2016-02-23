(function () {
  'use strict';
  angular.module('webpage')
    .run(runBlock);

  runBlock.$inject = ['authBackend', '$rootScope'];

  function runBlock(authBackend, $rootScope) {

      getNotice();
      checkOffline();

      function getNotice() {
          authBackend.getNotice()
              .then(function(data) {
                  // notice alert
          });
      }

      function checkOffline() {
          $rootScope.docAddress = CONFIG.is_offline ? DOCADDRESS.offline : DOCADDRESS.online;
      }

  }
})();