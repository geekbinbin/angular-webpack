'use strict';

const angular = require('angular');

import templateUrl from './app.template.html';

angular.module('shenmaApp')
    .config(($stateProvider, $urlRouterProvider) => {
        // Once unmatched url, redirect to root path /.
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('app', {
                url: '/',
                data: { roles: ['USER'] },
                views: {
                    'content@': {
                        controller: 'appMainController',
                        templateUrl
                    }
                },
                onEnter: function () {
    
                }
            });

    });
