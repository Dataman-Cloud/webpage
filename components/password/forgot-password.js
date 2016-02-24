/**
 * Created by my9074 on 16/2/23.
 */
(function (argument) {
    'use strict';

    angular.module('webpage')
        .controller('ForgotPasswordCtrl', ForgotPasswordCtrl);

    ForgotPasswordCtrl.$inject = ['authBackend', '$rootScope'];

    function ForgotPasswordCtrl(authBackend, $rootScope) {
        $rootScope.contentFlag = false;

        var self = this;
        self.sendEmail = function () {
            authBackend.forgotPassword(self.forgot).then(function (data) {
                //TO DO
            }, function (res) {
                //TO DO
            });
        }

    }
})();