(function () {
    'use strict';
    angular.module('webpage')
        .controller('RootCtrl', RootCtrl);

    RootCtrl.$inject = ['loginService', '$window'];

    function RootCtrl(loginService, $window) {
        var self = this;

        self.loginAsDemoUser = function () {
            loginService.login({'email': CONFIG.demoUser});
        };

        self.goBack = function() {
            $window.history.back();
        };

    }
})();