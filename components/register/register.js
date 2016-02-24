/**
 * Created by my9074 on 16/2/23.
 */
(function () {
    'use strict';
    angular.module('webpage')
        .controller('RegisterCtrl', RegisterCtrl);

    RegisterCtrl.$inject = ['authBackend', '$state', '$rootScope', 'emailService'];

    function RegisterCtrl(authBackend, $state, $rootScope, emailService) {
        var self = this;
        self.registerDataMan = function () {
            authBackend.register(self.register).then(function (data) {
                $rootScope.emailHref = emailService.emailUrl(self.register.email);
                $state.go('register_success');
            }, function (res) {
                $state.go('http_error');
            })
        }
    }
})();