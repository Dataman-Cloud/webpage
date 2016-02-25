(function (argument) {
    'use strict';

    angular.module('webpage')
      .controller('NeedActiveCtrl', NeedActiveCtrl);

    NeedActiveCtrl.$inject = ['$location', 'authBackend', '$state'];

    function NeedActiveCtrl($location, authBackend, $state) {
        var self = this;

        self.email = $state.current.data.email;

        self.resendActiveMail = function () {
            return authBackend.sendActiveMail(self.email)
                .catch(function (res) {
                    if (res.code === MESSAGE_CODE.dataInvalid) {
                        self.errorMsg = res.data.email;
                    }
                });
        };

    }
})();