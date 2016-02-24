(function () {
    'use strict';
    angular.module('webpage')
        .controller('RootCtrl', RootCtrl);

    RootCtrl.$inject = [];

    function RootCtrl() {
        var self = this;
        console.log(123)
    }
})();