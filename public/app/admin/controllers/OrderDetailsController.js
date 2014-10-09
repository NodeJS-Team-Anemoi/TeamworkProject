'use strict';

app.controller('OrderDetailsController', ['$scope', '$location', '$routeParams', 'auth', 'orderService',
    function OrderDetailsController($scope, $location, $routeParams, auth, orderService) {

        getOrder();

        function getOrder(){
            orderService.getOrder($routeParams.id)
                .then(function(order) {
                    $scope.order = order;
                }, function(err){
                    console.log(err);
                })
        }

    }]);
