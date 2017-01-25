'use strict';

describe('Route test', () => {
    var state, rootScope, location;

    beforeEach(angular.mock.module('shenmaApp'));

    beforeEach(angular.mock.inject(($state, $rootScope, $location) => {
        state = $state;
        rootScope = $rootScope;
        location = $location;
    }));

    it('Path root should be exist', () => {
        rootScope.$apply(() => {
            state.go('app');
        });

        expect(state.current.url).toEqual('/');
        expect(state.current.name).toEqual('app');
        expect(state.current.views['content@'].controller).toEqual('appMainController');
    });

    it('Should be redirected to root path when route did not exist', () => {
        location.path('NotExistPath');
        rootScope.$digest();

        expect(state.current.url).toEqual('/');
    });
});
