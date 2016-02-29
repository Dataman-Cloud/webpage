(function () {
    'use strict';
    angular.module('webpage')
        .directive('updateMeta', updateMeta);

    updateMeta.$inject = ['$rootScope', '$timeout'];

    function updateMeta($rootScope, $timeout) {
        return {
            link: function (scope, ele, attrs) {
                var defaultMeta = METADATA.home;

                var listener = function(event, toState) {
                    $timeout(function() {
                        if (toState.meta) {
                            $rootScope.metaTitle = toState.meta.title;
                            $rootScope.metaDescription = toState.meta.description;
                            $rootScope.metaKeywords =toState.meta.keywords;
                        } else {
                            $rootScope.metaTitle = defaultMeta.title;
                            $rootScope.metaDescription = defaultMeta.description;
                            $rootScope.metaKeywords = defaultMeta.keywords;
                        }
                     });
                }
                $rootScope.$on('$stateChangeSuccess', listener);
            }
        };
    }
})();