(function() {
    'use strict';
    
    angular.module('webpage').factory('authBackend', authBackend);

    authBackend.$inject = ['webHttp'];

    function authBackend(webHttp) {
        
        return {
            register: register,
            active: active
        };

        //////////

        function register() {
            
        }

        function active(activeCode) {
            return webHttp.Resource('user.active', {active_code: activeCode}).put();
        }
        
        
    }
})();