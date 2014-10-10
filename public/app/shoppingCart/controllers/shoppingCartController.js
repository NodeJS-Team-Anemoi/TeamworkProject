'use strict';

app.controller('ShoppingCartController', ['$scope', 'ordersResource','identity', '$localStorage', 
    function ($scope, ordersResource, identity, $localStorage) {
        var currentUserId = identity.getCurrentUser()._id;
        
        
        $scope.currentOrder = $localStorage.currentOrder;

        ordersResource.getOrdersByUserId(currentUserId)
            .then(function (orders) {
                $scope.orders = orders;
            });

        ordersResource.getReadyToBeShipped(currentUserId)
            .then(function (orders) {
                $scope.readyOrders = orders;
            });

        $scope.checkOut = function(){
            console.log($localStorage.currentOrder);
        }
    }]);