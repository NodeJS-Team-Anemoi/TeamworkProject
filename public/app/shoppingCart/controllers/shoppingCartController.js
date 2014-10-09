'use strict';

app.controller('ShoppingCartController', ['$scope', 'ordersResource','identity', 
    function ($scope, ordersResource, identity) {
        var currentUserId = identity.getCurrentUser()._id;

        ordersResource.getOrdersByUserId(currentUserId)
            .then(function (orders) {
                $scope.orders = orders;
            });

        ordersResource.getReadyToBeShipped(currentUserId)
            .then(function (orders) {
                $scope.readyOrders = orders;
            });

        $scope.checkOut = function(){
            // open a new window to ask for credit card and shipping date
        }
    }]);