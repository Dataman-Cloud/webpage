(function (argument) {
    'use strict';

    angular.module('webpage')
      .controller('ActiveCtrl', ActiveCtrl);

    ActiveCtrl.$inject = ['$location', 'authBackend'];

    function ActiveCtrl($location, authBackend) {
        var self = this;
        self.activeSuccess = undefined;
        var urlParmas = $location.search();

        (function() {
            return authBackend.active(urlParmas.active)
                .then(function(data) {
                    self.activeSuccess = true;
                    // TODO
                    // active success tips
                }, function(res) {
                    self.activeSuccess = false;
                    // TODO
                    // active failed tips
                });
        })();

    }
})();