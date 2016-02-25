/**
 * Created by my9074 on 16/2/23.
 */
(function () {
    'use strict';
    angular.module('webpage')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['loginService', '$location', '$scope'];

    function LoginCtrl(loginService, $location, $scope) {
        var self = this;
        var returnTo = $location.search()['return_to'];
        self.login = function () {
            loginService.login(self.loginData, returnTo, $scope.staticForm);
        };
    }
})();