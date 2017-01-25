'use strict';

import 'bootstrap/dist/css/bootstrap.css';
import 'normalize.css';

const appName = 'shenmaApp';

const angular = require('angular');
const uiAngular = require('angular-ui-bootstrap');
const uiRouter = require('angular-ui-router');
const ngAnimate = require('angular-animate');
const ngResource = require('angular-resource');

angular.module(appName, [uiAngular, uiRouter, ngAnimate, ngResource])
    .run(($rootScope, $state, $stateParams, Auth, principal) => {
        $rootScope.$on('$stateChangeStart', (event, toState, toStateParams) => {
            $rootScope.toState = toState;
            $rootScope.toStateParams = toStateParams;

            if (!principal.isIdentityResolved()) {
                Auth.authorize();
            }
        });
    });

/*
 *Angular@1 is not good choice to build by webpack via babel es6.
 *Cause the angular.module must ready when it used.
 *It's a module already, runtime scope and all angular@1 code need in one script.
 */

//App initialization.
require('./app.state.js');
require('./app.controller.js');

//Component and service
require('./components');
require('./service');
