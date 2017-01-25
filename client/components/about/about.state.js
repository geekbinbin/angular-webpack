'use strict';

const angular = require('angular');

import './style.less';
import templateUrl from './about.template.html';

angular.module('shenmaApp')
    .config(($stateProvider) => {
        $stateProvider
            .state('about', {
                url: '/about',
                views: {
                    'content': {
                        templateUrl: templateUrl
                    }
                }
            });
    });
