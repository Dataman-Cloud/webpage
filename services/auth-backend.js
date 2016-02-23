(function () {
    'use strict';

    angular.module('webpage').factory('authBackend', authBackend);

    authBackend.$inject = ['webHttp'];

    function authBackend(webHttp) {

        return {
            register: register,
            active: active
        };

        //////////

        function register(params) {
            return webHttp.Resource('user.register').post(params);
        }

        function active(activeCode) {
            return webHttp.Resource('user.active', {active_code: activeCode}).put();
        }


    }
})();