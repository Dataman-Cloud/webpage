(function () {
    'use strict';
    angular.module('webpage')
        .controller('RootCtrl', RootCtrl);

    RootCtrl.$inject = ['authBackend'];

    function RootCtrl(authBackend) {
        var self = this;

        self.loginAsDemoUser = function () {
            authBackend.login({'email': CONFIG.demoUser}).then(function (data) {
                // TODO
            }, function (res) {
                // TODO
            });
        };
        
    }
})();