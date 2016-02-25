(function (argument) {
    'use strict';

    angular.module('webpage')
        .controller('ResetPasswordCtrl', ResetPasswordCtrl);

    ResetPasswordCtrl.$inject = ['$location', 'authBackend', '$state'];

    function ResetPasswordCtrl($location, authBackend, $state) {
        var self = this;
        var urlParmas = $location.search();

        validResetCode();

        //发送新密码
        self.sendPassword = function () {
            authBackend.sendNewPassword(urlParmas.reset, self.resetData)
                .then(function (data) {
                    $state.go('resetPasswordSuccess');
                }, function (res) {
                    $state.go('resetPasswordFailed');
                });
        }

        function validResetCode() {
            return authBackend.resetPassword(urlParmas.reset)
                .then(function () {
                    self.valid = true;
                }, function () {
                    self.valid = false;
                });
        }

    }
})();