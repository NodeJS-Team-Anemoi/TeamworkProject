'use strict';

app.controller('EditOrderController', ['$scope', '$location', '$routeParams', 'auth', 'ordersResource',
    function EditOrderController($scope, $location, $routeParams, auth, ordersResource) {

        getOrder();

        function getOrder(){
            ordersResource.getOrder($routeParams.id)
                .then(function(order) {
                    $scope.currentOrder = order;
                }, function(err){
                    console.log(err);
                })
        }

        $scope.editOrder = function (order) {
            console.log(order);
            ordersResource.updateOrder($routeParams.id, order)
                .then(function () {
                    $location.path('/admin');
                });
        };
    }]);
