(function (argument) {
    'use strict';

    angular.module('webpage')
      .controller('ActiveCtrl', ActiveCtrl);

    ActiveCtrl.$inject = ['$location', 'authBackend'];

    function ActiveCtrl($location, authBackend) {
        var self = this;
        self.activeSuccess = false;
        var urlParmas = $location.search();

        (function() {
            return authBackend.active(urlParmas.active)
                .then(function(data) {
                    self.activeSuccess = true;
                    // TODO
                    // active success tips
                }, function(res) {
                    // TODO
                    // active failed tips
                });
        })();

    }
})();