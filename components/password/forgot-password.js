/**
 * Created by my9074 on 16/2/23.
 */
(function (argument) {
    'use strict';

    angular.module('webpage')
        .controller('ForgotPasswordCtrl', ForgotPasswordCtrl);

    ForgotPasswordCtrl.$inject = ['authBackend', '$scope', '$state'];

    function ForgotPasswordCtrl(authBackend, $scope, $state) {
        var self = this;
        self.sendEmail = function () {
            authBackend.forgotPassword(self.forgot, $scope.staticForm).then(function (data) {
                $state.get('forgotSuccess').data.email = self.forgot.email;
                $state.go('forgotSuccess');
            }, function (res) {
                //TO DO
            });
        }

    }
})();