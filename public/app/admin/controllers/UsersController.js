'use strict';

app.controller('UsersController', ['$scope', '$location', 'auth', 'userResource',
    function UsersController($scope, $location, auth, userResource) {
//        if (auth.isAuthorizedForRole('Admin')) {
            getUsers();
            function getUsers(){
                userResource.getAllUsers()
                    .then(function(users) {
                        $scope.users = users;
                    }, function(err){
                        console.log(err);
                    })
            }
//        }
    }]);