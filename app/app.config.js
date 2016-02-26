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
            .state('registerSuccess', {
                url: '/user/register/success',
                views: {
                    '': {
                        templateUrl: '/components/register/register-success-notice.html'
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
            .state('needActive', {
                url: '/user/active/needed',
                data: {email: ''},
                views: {
                    '': {
                        templateUrl: 'components/active/need-active.html',
                        controller: 'NeedActiveCtrl as needActiveCtrl'
                    }
                }
            })
            .state('sendActiveMailSuccess', {
                url: '/user/active/sendmailsuccess',
                data: {email: ''},
                views: {
                    '': {
                        templateUrl: 'components/active/send-active-mail-success.html',
                        controller: 'SendActiveMailSuccessCtrl as sendActiveMailSuccessCtrl'
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
            .state('forgotPassword', {
                url: '/user/forgotpassword',
                views: {
                    '': {
                        templateUrl: '/components/password/forgot-password.html',
                        controller: 'ForgotPasswordCtrl as forgotPasswordCtrl'
                    }
                }
            })
            .state('forgotSuccess', {
                url: '/user/forgotpassword/success',
                views: {
                    '': {
                        templateUrl: '/components/password/forgot-success-notice.html'
                    }
                }
            })
            .state('resetPassword', {
                url: '/user/resetpassword',
                views: {
                    '': {
                        templateUrl: '/components/password/reset-password.html',
                        controller: 'ResetPasswordCtrl as resetPasswordCtrl'
                    }
                }
            })
            .state('resetPasswordSuccess', {
                url: '/user/resetpassword/success',
                views: {
                    '': {
                        templateUrl: '/components/password/reset-password-success.html',
                    }
                }
            })
            .state('resetPasswordFailed', {
                url: '/user/resetpassword/failed',
                views: {
                    '': {
                        templateUrl: '/components/password/reset-password-failed.html'
                    }
                }
            })
            .state('resError', {
                url: '/user/error',
                views: {
                    '': {
                        templateUrl: '/common_views/http-error-notice.html'
                    }
                }
            })
            .state('404', {
                views: {
                    '': {
                        templateUrl: '/common_views/http-error-notice.html'
                    }
                }
            })
            .state('solution', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: '/static_views/solution/solution.html'
                    }
                }
            })
            .state('solution.bioinfo', {
                url: '/solution-bioinfo',
                views: {
                    'solution': {
                        templateUrl: '/static_views/solution/solution-bioinfo.html'
                    }
                }
            })
            .state('solution.finance', {
                url: '/solution-finance',
                views: {
                    'solution': {
                        templateUrl: '/static_views/solution/solution-finance.html'
                    }
                }
            })
            .state('solution.internet', {
                url: '/solution-internet',
                views: {
                    'solution': {
                        templateUrl: '/static_views/solution/solution-internet.html'
                    }
                }
            })
            .state('solution.o2o', {
                url: '/solution-o2o',
                views: {
                    'solution': {
                        templateUrl: '/static_views/solution/solution-o2o.html'
                    }
                }
            })
            .state('solution.operator', {
                url: '/solution-operator',
                views: {
                    'solution': {
                        templateUrl: '/static_views/solution/solution-operator.html'
                    }
                }
            })
            .state('solution.tradition', {
                url: '/solution-tradition',
                views: {
                    'solution': {
                        templateUrl: '/static_views/solution/solution-tradition.html'
                    }
                }
            })
            .state('price', {
                url: '/price',
                views: {
                    '': {
                        templateUrl: '/static_views/price.html'
                    }
                }
            });


        $locationProvider.html5Mode(true);
        $interpolateProvider.startSymbol('{/');
        $interpolateProvider.endSymbol('/}');
    }
})();