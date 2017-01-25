'use strict';

const angular = require('angular');

angular.module('shenmaApp')
    .controller('appMainController', ($scope, principal) => {
        $scope.principal = principal;
    });
