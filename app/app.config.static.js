(function () {
    'use strict';
    angular.module('webpage')
        .config(configure4Static);

    configure4Static.$inject = [
        '$urlRouterProvider',
        '$stateProvider',
        '$locationProvider',
        '$interpolateProvider'
    ];

    function configure4Static($urlRouterProvider,
                              $stateProvider,
                              $locationProvider, $interpolateProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
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
            .state('scene', {
                abstract: true,
                views: {
                    '': {
                        templateUrl: '/static_views/scene/scene.html'
                    }
                }
            })
            .state('scene.bigdata', {
                url: '/scene-bigdata',
                views: {
                    'scene': {
                        templateUrl: '/static_views/scene/scene-bigdata.html'
                    }
                }
            })
            .state('scene.cicd', {
                url: '/scene-cicd',
                views: {
                    'scene': {
                        templateUrl: '/static_views/scene/scene-cicd.html'
                    }
                }
            })
            .state('scene.containercloud', {
                url: '/scene-containercloud',
                views: {
                    'scene': {
                        templateUrl: '/static_views/scene/scene-containercloud.html'
                    }
                }
            })
            .state('scene.seckill', {
                url: '/scene-seckill',
                views: {
                    'scene': {
                        templateUrl: '/static_views/scene/scene-seckill.html'
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
            })
            .state('service-item', {
                url: '/service-item',
                views: {
                    '': {
                        templateUrl: '/common_views/service-item.html'
                    }
                }
            })
            .state('aboutus', {
                url: '/aboutus',
                views: {
                    '': {
                        templateUrl: '/static_views/aboutus.html'
                    }
                }
            })
            .state('product', {
                url: '/product',
                views: {
                    '': {
                        templateUrl: '/static_views/product-index.html'
                    }
                }
            });
    }
})();