(function () {
    'use strict';
    angular.module('webpage')
        .controller('RootCtrl', RootCtrl);

    RootCtrl.$inject = ['loginService', '$window', '$rootScope'];

    function RootCtrl(loginService, $window, $rootScope) {
        var self = this;

        self.loginAsDemoUser = function () {
            loginService.login({'email': CONFIG.demoUser});
        };

        self.goBack = function() {
            $window.history.back();
        };

        $rootScope.$on('$stateChangeSuccess',function(){
            $("html, body").animate({ scrollTop: 0 }, 200);
        });

    }
})();