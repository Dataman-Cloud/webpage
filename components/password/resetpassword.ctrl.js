(function (argument) {
    'use strict';

    angular.module('webpage')
        .controller('ResetPasswordCtrl', ResetPasswordCtrl);

    ResetPasswordCtrl.$inject = ['$location', 'authBackend', '$rootScope'];

    function ResetPasswordCtrl($location, authBackend, $rootScope) {
        $rootScope.contentFlag = false;

        var self = this;
        self.resetSuccess = false;
        var urlParmas = $location.search();

        (function () {
            return authBackend.resetPassword(urlParmas.reset)
                .then(function (data) {
                    self.resetSuccess = true;
                    // TODO
                    // reset password success
                }, function (res) {
                    // TODO
                    // reset password failed tips
                });
        })();

        //发送新密码
        self.sendPassword = function () {
            authBackend.sendNewPassword(urlParmas.reset, self.resetData)
                .then(function (data) {
                    // TODO

                }, function (res) {
                    // TODO
                })
        }

    }
})();