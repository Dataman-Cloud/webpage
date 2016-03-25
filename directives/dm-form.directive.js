(function () {
    'use strict';
    angular.module('webpage')
        .directive('dmForm', dmForm);

    dmForm.$inject = [];

    function dmForm() {
        return {
            restrict: 'A',
            require: 'form',
            scope: {
                errorMsg: "="
            },
            link: link
        }
                
        function link(scope, el, attrs, ngFormCtrl) {
            ngFormCtrl.$dmErrors = {};
            ngFormCtrl.$dmSetErrors = function (errors) {
                ngFormCtrl.$dmErrors = errors;
            }

            angular.forEach(ngFormCtrl, function(formAttr, formAttrName){
                if(formAttrName[0] != "$") {
                    reBuildRunValidators(formAttrName, formAttr);
                }
            })
            
            function reBuildRunValidators(moduleName, module) {
                var oldRunValidators = module.$$runValidators;
                module.$$runValidators = function (modelValue, viewValue, doneCallback) {
                    oldRunValidators(modelValue, viewValue, doneCallback);
                    if (module.$dirty) {
                        delete ngFormCtrl.$dmErrors[moduleName]
                        angular.forEach(module.$error, function (invalidate, errortype) {
                            if (invalidate) {
                                if (!ngFormCtrl.$dmErrors[moduleName]) {
                                    ngFormCtrl.$dmErrors[moduleName] = getErrorMsg(moduleName, errortype);
                                }
                            }
                        })
                        
                    }
                }
            }
            
            function getErrorMsg(moduleName, valtype) {
                if (!scope.errorMsg[moduleName] || 
                        (!scope.errorMsg[moduleName][valtype] && !scope.errorMsg[moduleName].default)) {
                    return scope.errorMsg.default
                } else if (!scope.errorMsg[moduleName][valtype]) {
                    return scope.errorMsg[moduleName].default
                } else {
                    return scope.errorMsg[moduleName][valtype];
                }
            }
        }
    }
})();