(function () {
  'use strict';
  angular.module('webpage')
    .run(runBlock);

  runBlock.$inject = ['$window', '$state'];

  function runBlock($window, $state) {
    var pathname = $window.location.pathname;
    if(pathname === '/') {
      $state.go('landing', null, {reload: true});
    }
  }
})();