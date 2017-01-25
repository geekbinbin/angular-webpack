'use strict';

const angular = require('angular');

angular.module('shenmaApp')
    .controller('ordersListController', ($scope, ordersResource) => {
        ordersResource.query((result) => {
            $scope.ordersList = [];

            if (result.data.length) {
                $scope.ordersList = result.data;
            }
        });
    });
