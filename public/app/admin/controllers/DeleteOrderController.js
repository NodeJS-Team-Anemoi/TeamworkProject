'use strict';

app.controller('DeleteOrderController', ['$scope', '$location', '$routeParams', 'auth', 'orderService',
    function DeleteUserController($scope, $location, $routeParams, auth, orderService) {
//        if (auth.isAuthorizedForRole('Admin')) {
        getOrder();
        function getOrder(){
            orderService.getOrder($routeParams.id)
                .then(function(order) {
                    $scope.order = order;
                }, function(err){
                    console.log(err);
                })
        }

        $scope.deleteOrder = function () {
            orderService.deleteOrder($routeParams.id)
                .then(function () {
                    $location.path('/admin/orders');
                });
        };

//        }
    }]);