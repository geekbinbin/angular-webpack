'use strict';

const angular = require('angular');

angular.module('shenmaApp')
    .factory('ordersResource', ($resource) => {
        return $resource('/orders', {}, {
            query: {
                method: 'GET',
                isArray: false
            }
        });
    });
