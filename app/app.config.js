(function() {
  'use strict';
  angular.module('webpage')
    .config(configure);

  configure.$inject = [
    '$urlRouterProvider',
    '$stateProvider',
    '$locationProvider'
  ];

  function configure(
    $urlRouterProvider,
    $stateProvider,
    $locationProvider
  ) {

    $locationProvider.html5Mode(true);
  }
})();