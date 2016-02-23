(function (argument) {
    'use strict';

    angular.module('webpage')
      .controller('ResetPasswordCtrl', ResetPasswordCtrl);

    ResetPasswordCtrl.$inject = ['$location', 'authBackend'];

    function ResetPasswordCtrl($location, authBackend) {
        var self = this;
        self.resetSuccess = false;
        var urlParmas = $location.search();

        (function() {
            return authBackend.resetPassword(urlParmas.reset)
                .then(function(data) {
                    self.resetSuccess = true;
                    // TODO
                    // reset password success
                }, function(code, data) {
                    // TODO
                    // reset password failed tips
                });
        })();

    }
})();