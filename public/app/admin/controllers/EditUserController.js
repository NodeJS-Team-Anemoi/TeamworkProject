'use strict';

app.controller('EditUserController', ['$scope', '$location', '$routeParams', 'auth', 'userResource',
    function EditUserController($scope, $location, $routeParams, auth, userResource) {

        getUser();

        function getUser() {
            userResource.getUser($routeParams.id)
                .then(function (user) {
                    $scope.currentUser = user;
                }, function (err) {
                    console.log(err);
                })
        }

        $scope.editUser = function (user) {
            console.log(user);
            userResource.updateUser($routeParams.id, user)
                .then(function () {
                    $location.path('/admin');
                });
        };
    }]);
