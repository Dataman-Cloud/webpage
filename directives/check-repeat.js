/**
 * Created by my9074 on 16/2/23.
 */
(function () {
    'use strict';
    angular.module('webpage')
        .directive('checkRepeat', checkRepeat);

    function checkRepeat() {
        return {
            restrict: "A",
            require: 'ngModel',
            scope: {
                checking: '=checkData'
            },
            link: function (scope, ele, attrs, ngModelController) {
                ngModelController.$validators.checkrepeat = function(modelValue, viewValue) {
                    if (ngModelController.$isEmpty(modelValue)) {
                        // consider empty models to be valid
                        return true;
                    }

                    if (angular.equals(scope.checking, modelValue)) {
                        // it is valid
                        return true;
                    }

                    // it is invalid
                    return false;
                };
            }
        };
    }
})();