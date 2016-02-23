(function (argument) {
    'use strict';

    angular.module('webpage')
      .controller('ActiveCtrl', ActiveCtrl);

    ActiveCtrl.$inject = ['webHttp', '$location'];

    function ActiveCtrl(webHttp, $location) {
        var self = this;
        self.activeSuccess = false;
        var urlParmas = $location.search();

        (function() {
            return webHttp.Resource('user.active', {active_code: urlParmas.active}).put()
                .then(function(data) {
                    self.activeSuccess = true;
                    // TODO
                    // active success tips
                }, function(code, data) {
                    // TODO
                    // active failed tips
                })
        })();
    }
})();