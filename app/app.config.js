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
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('landing', {
            url: '/',
            views: {
              '': {
                templateUrl: 'landing/landing.html',
                controller: 'LandingController as landingCtrl'
              }
            }
        });

    $locationProvider.html5Mode(true);
  }
})();