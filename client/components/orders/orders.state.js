'use strict';

const angular = require('angular');

import listTemplateUrl from './orders.list.template.html';

angular.module('shenmaApp')
    .config(($stateProvider) => {
        $stateProvider
            .state('orders', {
                abstract: true,
                url: '/orders'
            })
            .state('ordersList', {
                parent: 'orders',
                url: '/list',
                data: { roles: ['USER'] },
                views: {
                    'content@': {
                        templateUrl: listTemplateUrl,
                        controller: 'ordersListController'
                    }
                }
            });
    });
