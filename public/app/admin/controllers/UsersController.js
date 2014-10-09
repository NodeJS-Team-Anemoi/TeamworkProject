'use strict';

app.controller('UsersController', ['$scope', '$location', 'auth', 'userResource',
    function UsersController($scope, $location, auth, userResource) {

        $scope.page = 0;
        $scope.sortBy = 'username';
        $scope.nextPage = nextPage;
        $scope.previousPage = previousPage;
        $scope.sortPage = getUsers;

        getUsers($scope.page, $scope.sortBy);
        function getUsers(page, sortBy) {
            userResource.getPagedUsers(page, sortBy)
                .then(function (users) {
                    $scope.users = users;
                }, function (err) {
                    console.log(err);
                })
        }

        function nextPage() {
            $scope.page++;
            getUsers($scope.page, $scope.sortBy);
        }

        function previousPage() {
            if ($scope.page > 0) {
                $scope.page--;
                getUsers($scope.page, $scope.sortBy);
            }
        }
    }]);