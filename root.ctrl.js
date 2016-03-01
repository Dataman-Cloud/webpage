(function () {
    'use strict';
    angular.module('webpage')
        .controller('RootCtrl', RootCtrl);

    RootCtrl.$inject = ['loginService', '$window', '$rootScope', '$location'];

    function RootCtrl(loginService, $window, $rootScope, $location) {
        var self = this;

        self.loginAsDemoUser = function () {
            loginService.login({'email': CONFIG.demoUser});
        };

        self.goBack = function() {
            $window.history.back();
        };

        $rootScope.$on('$stateChangeSuccess',function(){
            if (!$location.hash()) {
                $("html, body").animate({ scrollTop: 0 }, 100);
            }
        });

    }
})();