'use strict';

app.controller('ShoppingCartController', ['$scope', 'orderService','identity', function ($scope, orderService, identity) {
    var currentUserId = identity.getCurrentUser()._id;

    orderService.getAll().then(function (carts) {
//        $scope.cart = carts.where(x => x.userId == currentUserId);
    });
}]);