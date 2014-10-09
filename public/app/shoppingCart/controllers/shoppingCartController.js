'use strict';

app.controller('ShoppingCartController', ['$scope', 'orderService','identity', function ($scope, orderService, identity) {
    var currentUserId = identity.getCurrentUser()._id;

    orderService.getOrderByUserId().then(function (cart) {
        $scope.cart = cart;
    });
}]);