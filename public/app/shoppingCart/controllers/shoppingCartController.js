'use strict';

app.controller('ShoppingCartController', ['$scope', 'shoppingCartService','identity', function ($scope, shoppingCartService, identity) {
    var currentUserId = identity.getCurrentUser()._id;

    bookResource.getAll().then(function (carts) {
//        $scope.cart = carts.where(x => x.userId == currentUserId);
    });
}]);