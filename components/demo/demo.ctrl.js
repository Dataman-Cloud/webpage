(function (argument) {
    'use strict';

    angular.module('webpage')
        .controller('DemoCtrl', DemoCtrl);

    DemoCtrl.$inject = ['authBackend'];

    function DemoCtrl(authBackend) {
        var self = this;
        loginAsDemo();

        function loginAsDemo() {
            authBackend.login({'email': CONFIG.demoUser}).then(function (data) {
                //TO DO
            }, function (res) {
                //TO DO
            });
        }

    }
})();