'use strict';

app.controller('EditUserController', ['$scope', '$location', '$routeParams', 'auth', 'userResource',
    function EditUserController($scope, $location, $routeParams, auth, userResource) {
//        if (auth.isAuthorizedForRole('Admin')) {
        getUser();
        function getUser(){
            userResource.getUser($routeParams.id)
                .then(function(user) {
                    $scope.user = user;
                }, function(err){
                    console.log(err);
                })
        }

        $scope.editUser = function () {
            userResource.updateUser($routeParams.id)
                .then(function () {
                    $location.path('/admin');
                });
        };

//        }
    }]);
