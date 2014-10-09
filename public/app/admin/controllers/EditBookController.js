'use strict';

app.controller('EditBookController', ['$scope', '$location', '$routeParams', 'auth', 'bookResource',
    function EditBookController($scope, $location, $routeParams, auth, bookResource) {

        getBook();

        function getBook() {
            bookResource.getBook($routeParams.id)
                .then(function (book) {
                    $scope.currentBook = book;
                    $scope.currentBookAuthors = book.authors.join(', ');
                    $scope.currentBookCategories = book.categories.join(', ');
                }, function (err) {
                    console.log(err);
                })
        }

        $scope.editBook = function (book) {
            bookResource.updateBook($routeParams.id, book)
                .then(function () {
                    $location.path('/');
                });
        };
    }]);