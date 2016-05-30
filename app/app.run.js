(function () {
  'use strict';
  angular.module('webpage')
    .run(runBlock);

  runBlock.$inject = ['authBackend', '$rootScope'];

  function runBlock(authBackend, $rootScope) {

      checkOffline();
      fetchVersions();
      $rootScope.FRONTEND_URL = FRONTEND_URL;


      function checkOffline() {
          $rootScope.docAddress = CONFIG.is_offline ? DOCADDRESS.offline : DOCADDRESS.online;
      }

      function fetchVersions() {
          $rootScope.version = '';
          $rootScope.frontendVersion = '';
          angular.forEach(BACKEND_URL.version, function (value, key) {
              authBackend.fetchVersion(key).success(function (data) {
                  $rootScope.version += value + ':' + data + '\n';

                  if (key === 'frontend') {
                      $rootScope.frontendVersion = data;
                  }
              });
          });
      }
  }
})();