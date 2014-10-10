'use strict';

app.controller('DeleteUserController', ['$scope', '$location', '$routeParams', 'auth', 'userResource',
    function DeleteUserController($scope, $location, $routeParams, auth, userResource) {

        getUser();

        function getUser(){
            userResource.getUser($routeParams.id)
                .then(function(user) {
                    $scope.user = user;
                }, function(err){
                    console.log(err);
                })
        }

        $scope.deleteUser = function () {
            userResource.deleteUser($routeParams.id)
                .then(function () {
                    $location.path('/admin/users');
                });
        };
    }]);
