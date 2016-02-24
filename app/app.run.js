(function () {
  'use strict';
  angular.module('webpage')
    .run(runBlock);

  runBlock.$inject = ['authBackend', '$rootScope'];

  function runBlock(authBackend, $rootScope) {

      getNotice();
      checkOffline();
      fetchVersions();

      function getNotice() {
          authBackend.getNotice()
              .then(function(data) {
                  // notice alert
          });
      }

      function checkOffline() {
          $rootScope.docAddress = CONFIG.is_offline ? DOCADDRESS.offline : DOCADDRESS.online;
      }

      function fetchVersions() {
          var versions = authBackend.fetchVersions();
          var version = '';
          angular.forEach(versions, function(value, key) {
              version += key + ':' + value + '\n';
              if (key === BACKEND_URL.version.frontend) {
                  $rootScope.frontendVersion = value;
              }
          });
           
          $rootScope.version = version;
      }

  }
})();