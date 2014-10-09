'use strict';

app.controller('OrdersController', ['$scope', '$location', 'auth', 'orderService',
    function AddBookController($scope, $location, auth, orderService) {
//        if (auth.isAuthorizedForRole('Admin')) {


        var orders = orderService.getAll();
        $scope.orders = function (book) {
            bookResource.create(book)
                .then(function () {
                    $location.path('/admin');
                });
        };
//        }
    }]);