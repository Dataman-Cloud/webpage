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

        function register(postParams) {
            return webHttp.Resource('user.register').post(postParams);
        }

        function active(url, urlParams) {
            return webHttp.Resource(url, urlParams).put();
        }


    }
})();