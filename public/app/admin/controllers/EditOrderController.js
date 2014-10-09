'use strict';

app.controller('EditOrderController', ['$scope', '$location', '$routeParams', 'auth', 'orderService',
    function EditOrderController($scope, $location, $routeParams, auth, orderService) {
//        if (auth.isAuthorizedForRole('Admin')) {
        getOrder();
        function getOrder(){
            orderService.getOrder($routeParams.id)
                .then(function(order) {
                    $scope.currentOrder = order;
                }, function(err){
                    console.log(err);
                })
        }

        $scope.editOrder = function (order) {
            console.log(order);
            orderService.updateOrder($routeParams.id, order)
                .then(function () {
                    $location.path('/admin');
                });
        };

//        }
    }]);
