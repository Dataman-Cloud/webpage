(function (argument) {
    'use strict';

    angular.module('webpage')
      .controller('ForgotPasswordSuccessCtrl', ForgotPasswordSuccessCtrl);

    ForgotPasswordSuccessCtrl.$inject = ['$state', 'emailService'];

    function ForgotPasswordSuccessCtrl($state, emailService) {
        var self = this;

        self.email = $state.current.data.email;
        self.emailHref = emailService.emailUrl(self.email);
    }
})();
