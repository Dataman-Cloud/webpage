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
        self.sendEmail = sendEmail;
        self.formErrorMsg = {
            email: {
                required: "请输入邮箱地址",
                email: "邮箱格式有误"
            }
        }
        
        
        function sendEmail() {
            authBackend.forgotPassword(self.forgot, $scope.staticForm.$dmSetErrors).then(function (data) {
                $state.get('forgotSuccess').data.email = self.forgot.email;
                $state.go('forgotSuccess');
            }, function (res) {
                //TO DO
            });
        }

    }
})();