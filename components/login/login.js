/**
 * Created by my9074 on 16/2/23.
 */
(function () {
    'use strict';
    angular.module('webpage')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['loginService'];

    function LoginCtrl(loginService) {
        var self = this;

        self.login = function () {
            loginService.login(self.loginData);
        };
    }
})();