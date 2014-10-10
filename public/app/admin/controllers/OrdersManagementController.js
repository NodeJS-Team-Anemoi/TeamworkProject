'use strict';

app.controller('OrdersManagementController', ['$scope', '$location', 'auth', 'ordersResource',
    function OrdersManagementController($scope, $location, auth, ordersResource) {

        $scope.page = 0;
        $scope.sortBy = 'userName';
        $scope.nextPage = nextPage;
        $scope.previousPage = previousPage;
        $scope.sortPage = getOrders;

        getOrders($scope.page, $scope.sortBy);
        function getOrders(page, sortBy) {
            ordersResource.getPagedOrders(page, sortBy)
                .then(function (orders) {
                    $scope.orders = orders;
                }, function (err) {
                    console.log(err);
                })
        }

        function nextPage() {
            $scope.page++;
            getOrders($scope.page, $scope.sortBy);
        }

        function previousPage() {
            if ($scope.page > 0) {
                $scope.page--;
                getOrders($scope.page, $scope.sortBy);
            }
        }
    }]);
