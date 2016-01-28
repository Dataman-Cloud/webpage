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
        .state('index', {
            url: '/',
            views: {
              templateUrl: 'index.html',
              controller: 'RootCtrl as rootCtrl'
            }
      })

    $locationProvider.html5Mode(true);
  }
})();