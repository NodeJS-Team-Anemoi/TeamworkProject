'use strict';

app.controller('AddBookController', ['$scope', '$location', 'auth', 'bookResource',
    function AddBookController($scope, $location, auth, bookResource) {
//        if (auth.isAuthorizedForRole('Admin')) {
            $scope.createBook = function (book) {
                bookResource.create(book)
                    .then(function () {
                        $location.path('/admin');
                    });
            };
//        }
    }]);