'use strict';

app.controller('OrdersController', ['$scope', '$location', 'auth', 'ordersResource',
    function OrdersController($scope, $location, auth, ordersResource, $localStorage) {
        ordersResource.getOrdersByUserId()
            .then(function (users) {
                $scope.users = users;
            });
    }]);