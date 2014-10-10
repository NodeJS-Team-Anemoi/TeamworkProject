'use strict';

app.controller('DeleteOrderController', ['$scope', '$location', '$routeParams', 'auth', 'ordersResource',
    function DeleteUserController($scope, $location, $routeParams, auth, ordersResource) {

        getOrder();

        function getOrder() {
            ordersResource.getOrder($routeParams.id)
                .then(function (order) {
                    $scope.order = order;
                }, function (err) {
                    console.log(err);
                })
        }

        $scope.deleteOrder = function () {
            ordersResource.deleteOrder($routeParams.id)
                .then(function () {
                    $location.path('/admin/orders');
                });
        };

    }]);