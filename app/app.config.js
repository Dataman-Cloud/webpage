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
                    },
                    'nav': {
                        templateUrl: '/common_views/nav.html'
                    },
                    'footer': {
                        templateUrl: '/common_views/footer.html'
                    }
                }
            })
            .state('register', {
                url: '/user/register',
                views: {
                    '': {
                        templateUrl: '/components/register/register.html',
                        controller: 'RegisterCtrl as registerCtrl'
                    },
                    'nav': {
                        templateUrl: '/common_views/nav.html'
                    },
                    'footer': {
                        templateUrl: '/common_views/copye_right_footer.html'
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
                    },
                    'footer': {
                        templateUrl: '/common_views/copye_right_footer.html'
                    }
                }
            })
            .state('forgotpassword', {
                url: '/user/forgotpassword',
                views: {
                    '': {
                        templateUrl: '/components/password/forgot-password.html',
                        controller: 'ForgotPasswordCtrl as forgotPasswordCtrl'
                    },
                    'footer': {
                        templateUrl: '/common_views/copye_right_footer.html'
                    }
                }
            })
            .state('resetpassword', {
                url: '/user/resetpassword',
                views: {
                    '': {
                        templateUrl: '/components/password/reset-password.html',
                        controller: 'ResetPasswordCtrl as resetPasswordCtrl'
                    },
                    'footer': {
                        templateUrl: '/common_views/copye_right_footer.html'
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