'use strict';

app.controller('ShoppingCartController', ['$scope', '$localStorage', '$location', 'ordersResource', 'identity', 
    function ($scope, $localStorage, $location, ordersResource, identity) {
        var currentUserId = identity.getCurrentUser()._id;
        
        $scope.showOrderDetails = false;
        $scope.currentOrder = $localStorage.currentOrder;

//        ordersResource.getOrdersByUserId(currentUserId)
//            .then(function (orders) {
//                $scope.orders = orders;
//            });
//
//        ordersResource.getReadyToBeShipped(currentUserId)
//            .then(function (orders) {
//                $scope.readyOrders = orders;
//            });

        $scope.checkOut = function(order){
            var finalizedOrder = $localStorage.currentOrder;
            finalizedOrder.shippingAddress = order.shippingAddress;
            finalizedOrder.paymentMethod = order.paymentMethod;
            finalizedOrder.date = new Date();
            finalizedOrder.readyToBeShipped = true;
            
            var productsIds = [];
            
            for (var i = 0; i < finalizedOrder.products.length; i++) {
                productsIds.push(finalizedOrder.products[i]._id);
            }
            
            finalizedOrder.products = [];
            finalizedOrder.products = productsIds;
            
            // TODO: for each product in products countInStock--
            
            console.log(finalizedOrder);
            
            ordersResource.create(finalizedOrder).then(function () {
                console.log('Order created successfully!');
                $localStorage.currentOrder = {
                    userId: identity.getCurrentUser()._id,
                    userName: identity.getCurrentUser().local.username,
                    date: undefined,
                    shippingAddress: undefined,
                    paymentMethod: undefined,
                    products: [],
                    deleted: false,
                    readyToBeShipped: false
                }
                $location.path('/');
            });
        };
        
        $scope.deleteFromCurrentOrder = function (book) {
            var currentOrder = $localStorage.currentOrder;
            currentOrder.products.splice(currentOrder.products.indexOf(book), 1);
            $localStorage.currentOrder = currentOrder;
        };
    }]);