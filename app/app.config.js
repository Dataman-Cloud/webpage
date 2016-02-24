(function () {
    'use strict';
    angular.module('webpage')
        .config(configure);

    configure.$inject = [
        '$urlRouterProvider',
        '$stateProvider',
        '$locationProvider',
        '$interpolateProvider'
    ];

    function configure($urlRouterProvider,
                       $stateProvider,
                       $locationProvider, $interpolateProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    '': {
                        templateUrl: 'components/home/home.html'
                    }
                }
            })
            .state('register', {
                url: '/user/register',
                views: {
                    '': {
                        templateUrl: '/components/register/register.html',
                        controller: 'RegisterCtrl as registerCtrl'
                    }
                }
            })
            .state('register_success', {
                url: '/user/register_success',
                views: {
                    '': {
                        templateUrl: '/components/register/register-succes-notice.html'
                    }
                }
            })
            .state('active', {
                url: '/user/active',
                views: {
                    '': {
                        templateUrl: 'components/active/active.html',
                        controller: 'ActiveCtrl as activeCtrl'
                    }
                }
            })
            .state('login', {
                url: '/user/login',
                views: {
                    '': {
                        templateUrl: '/components/login/login.html',
                        controller: 'LoginCtrl as loginCtrl'
                    }
                }
            })
            .state('forgotpassword', {
                url: '/user/forgotpassword',
                views: {
                    '': {
                        templateUrl: '/components/password/forgot-password.html',
                        controller: 'ForgotPasswordCtrl as forgotPasswordCtrl'
                    }
                }
            })
            .state('resetpassword', {
                url: '/user/resetpassword',
                views: {
                    '': {
                        templateUrl: '/components/password/reset-password.html',
                        controller: 'ResetPasswordCtrl as resetPasswordCtrl'
                    }
                }
            })
            .state('http_error', {
                url: '/user/http_error',
                views: {
                    '': {
                        templateUrl: '/common_views/http-error-notice.html'
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
        $interpolateProvider.startSymbol('{/');
        $interpolateProvider.endSymbol('/}');
    }
})();