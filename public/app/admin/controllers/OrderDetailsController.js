'use strict';

app.controller('OrderDetailsController', ['$scope', '$location', '$routeParams', 'auth', 'ordersResource',
    function OrderDetailsController($scope, $location, $routeParams, auth, ordersResource) {

        getOrder();

        function getOrder(){
            ordersResource.getOrder($routeParams.id)
                .then(function(order) {
                    $scope.order = order;
                }, function(err){
                    console.log(err);
                })
        }

    }]);
