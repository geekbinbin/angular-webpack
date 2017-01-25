'use strict';

const angular = require('angular');

angular.module('shenmaApp')
    .factory('principal', ($q, $http, $timeout) => {
        let _identity, _authenticated = false;

        const principal = {
            isIdentityResolved: () => angular.isDefined(_identity),
            isAuthenticated: () => _authenticated,

            isInRole: (role) => (!_authenticated || !_identity.roles) ? false : _identity.roles.indexOf(role) != -1,
            isInAnyRole: (roles) => {
                if (!_authenticated || !_identity.roles) {
                    return false;
                }

                for (let i = 0, l = roles.length; i < l; i++) {
                    if (principal.isInRole( roles[i] )) {
                        return true;
                    }
                }

                return false;
            },

            authenricate: (identity) => {
                _identity = identity;
                _authenticated = identity != null;
            },

            identity: (forceToidentity) => {
                const deferred = $q.defer();

                if (forceToidentity) {
                    _identity = false;
                }

                if (angular.isDefined(_identity)) {
                    deferred.resolve(_identity);
                    return deferred.promise();
                }

                //FIXME: Here should be request from server api by $http.
                $timeout(() => {
                    principal.authenricate(null);
                    deferred.resolve(_identity);
                }, 1000);

                return deferred.promise;
            }
        };

        return principal;
    });
