(function (argument) {
    'use strict';

    angular.module('webpage')
      .controller('ActiveCtrl', ActiveCtrl);

    ActiveCtrl.$inject = ['webHttp', '$location', 'dataservice'];

    function ActiveCtrl(webHttp, $location, dataservice) {
        var self = this;
        self.activeSuccess = false;

        (function() {
            dataservice.active('user.active', {active_code: urlParmas.active})
                .then(function(data) {
                    self.activeSuccess = true;
                    // TODO
                    // active success tips
                }, function(code, data) {
                    // TODO
                    // active failed tips
                });
        })();
    }
})();