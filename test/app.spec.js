'use strict';

describe('Initialization test', () => {
    var $controller = void 0;

    beforeEach(angular.mock.module('shenmaApp'));

    beforeEach(angular.mock.inject((_$controller_) => {
        $controller = _$controller_;
    }));

    it('It should be exsit - appMainController', () => {
        const _c = $controller('appMainController', { $scope: {} });
        expect(_c).toBeDefined();
    });

    it('It should be exsit - ordersListController', () => {
        const _c = $controller('appMainController', { $scope: {} });
        expect(_c).toBeDefined();
    });
});
