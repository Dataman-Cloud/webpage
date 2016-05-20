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

        $rootScope.useLDAP = USE_LDAP;
        $rootScope.transLDAP = function (source) {
            if(USE_LDAP){
                return LDAP_TRANS_STRINGS[source] || source;
            } else{
                return source;
            }
        };

        $rootScope.$on('$stateChangeSuccess',function(){
            if (!$location.hash()) {
                $("html, body").animate({ scrollTop: 0 }, 100);
            }
        });

    }
})();