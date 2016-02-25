(function (argument) {
    'use strict';

    angular.module('webpage')
      .controller('NeedActiveCtrl', NeedActiveCtrl);

    NeedActiveCtrl.$inject = ['$location', 'authBackend', '$state', 'emailService'];

    function NeedActiveCtrl($location, authBackend, $state, emailService) {
        var self = this;

        self.email = $state.current.data.email;
        self.emailHref = emailService.emailUrl(self.email);
        
        self.resendActiveMail = function() {
            return authBackend.sendActiveMail(self.email)
                .then(function () {
                    $state.get('sendActiveMailSuccess').data.email = self.email;
                    $state.go('sendActiveMailSuccess');
                }, function (res) {
                    if (res.code === MESSAGE_CODE.dataInvalid) {
                        self.errorMsg = res.data.email;
                    }
                });
        };
    }
})();