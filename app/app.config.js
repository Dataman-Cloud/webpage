(function() {
  'use strict';
  angular.module('webpage')
    .config(configure);

  configure.$inject = [
    '$urlRouterProvider',
    '$stateProvider',
    '$locationProvider',
    '$httpProvider'
  ];

  function configure(
    $urlRouterProvider,
    $stateProvider,
    $locationProvider,
    $httpProvider
  ) {
    // $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  }
})();