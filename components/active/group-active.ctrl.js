(function (argument) {
    'use strict';

    angular.module('webpage')
      .controller('GroupActiveCtrl', GroupActiveCtrl);

    GroupActiveCtrl.$inject = ['$location', 'authBackend'];

    function GroupActiveCtrl($location, authBackend) {
        var self = this;
        self.activeSuccess = undefined;
        var urlParmas = $location.search();

        (function() {
            return authBackend.groupActive(urlParmas.invite)
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