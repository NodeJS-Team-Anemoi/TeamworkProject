'use strict';

app.controller('AddUserController', ['$scope', '$location', 'auth', 'userResource',
    function AddUserController($scope, $location, auth, userResource) {

        $scope.createUser = function (user) {
            userResource.create(user)
                .then(function () {
                    $location.path('/admin');
                });
        };
    }]);
