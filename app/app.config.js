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

    $stateProvider
        .state("register", {
            url: '/user/register',
            views: {
                '': {
                    templateUrl: '/components/register/register.html',
                    controller: 'RegisterCtrl as registerCtrl'
                }
            }
        })
        .state("active", {
            url: '/user/active',
            views: {
                '': {
                    templateUrl: 'components/active/active.html'
                }
            }
        })
        .state('login', {
            url: '/user/login',
            views: {
                "": {
                    templateUrl: '/components/login/login.html'
                }
            }
        })
        .state('forgotpassword', {
            url: '/user/forgotpassword',
            views: {
                '': {
                    templateUrl: '/components/password/forgot-password.html'
                }
            }
        })
        .state('resetpassword', {
            url: '/user/resetpassword',
            views: {
                '': {
                    templateUrl: '/components/password/reset-password.html'
                }
            }
        })
        .state('error', {
            views: {
                '': {
                    templateUrl: '/common_views/error.html'
                }
            }
        });


    $locationProvider.html5Mode(true);
  }
})();