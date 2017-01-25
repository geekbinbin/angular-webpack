'use strict';

const angular = require('angular');

angular.module('shenmaApp')
    .factory('Auth', ($rootScope, $state, principal) => {
        return {
            authorize: () => (principal.identity().then(() => {
                const isAuthenticated = principal.isAuthenticated();
                const stateDataRoles = $rootScope.toState.data.roles;

                if (stateDataRoles && stateDataRoles.length && principal.isInAnyRole(stateDataRoles)) {
                    if (isAuthenticated) {
                        //TODO: User already is authenricated and sign in . 

                    } else {
                        //TODO: User is not authenricated, stow the state. 
                        $rootScope.returnState = $rootScope.toState;
                        $rootScope.returnParams= $rootScope.toStateParams;

                        //$state.go('/beginning point/');
                    }
                } 
            }))
        };
    });
