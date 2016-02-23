/**
 * Created by my9074 on 16/2/23.
 */
(function () {
    'use strict';
    angular.module('webpage')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['authBackend'];

    function LoginCtrl(authBackend) {
        var self = this;
        self.login = function () {
            authBackend.login(self.loginData).then(function (data) {
                console.log("login success");
                //TO DO
            }, function (code, data) {
                console.log("login error");
                //TO DO
            })
        }
    }
})();