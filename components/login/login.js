/**
 * Created by my9074 on 16/2/23.
 */
(function () {
    'use strict';
    angular.module('webpage')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['authBackend', '$rootScope'];

    function LoginCtrl(authBackend, $rootScope) {
        $rootScope.contentFlag = false;

        var self = this;
        self.login = function () {
            authBackend.login(self.loginData).then(function (data) {
                console.log("login success");
                //TO DO
            }, function (res) {
                console.log("login error");
                //TO DO
            })
        }
    }
})();