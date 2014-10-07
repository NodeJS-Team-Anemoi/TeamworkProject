'use strict';

app.controller('MyOrdersController', ['$scope', '$location', 'auth', 'bookResource',
    function AddBookController($scope, $location, auth, bookResource) {
        if (auth.isAuthenticated()) {
            $scope.orders = function (book) {
                bookResource.create(book)
                    .then(function () {
                        $location.path('/admin');
                    });
        };
        }
    }]);