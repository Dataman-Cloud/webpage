(function () {
    'use strict';
    angular.module('webpage')
        .controller('RootCtrl', RootCtrl);

    RootCtrl.$inject = ['loginService'];

    function RootCtrl(loginService) {
        var self = this;

        self.loginAsDemoUser = function () {
            loginService.login({'email': CONFIG.demoUser});
        };
    }
})();