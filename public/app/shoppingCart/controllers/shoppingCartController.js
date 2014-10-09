'use strict';

app.controller('ShoppingCartController', ['$scope', 'ordersResource','identity', 
    function ($scope, ordersResource, identity) {
        var currentUserId = identity.getCurrentUser()._id;

        ordersResource.getOrdersByUserId()
            .then(function (orders) {
                $scope.orders = orders;
            });
    }]);