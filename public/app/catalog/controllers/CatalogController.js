'use strict';

app.controller('CatalogController', ['$scope', 'bookResource',
     function ($scope, bookResource) {
         $scope.page = 0;
         $scope.nextPage = nextPage;
         $scope.previousPage = previousPage;

         getBooks($scope.page);

         function getBooks(page) {
             bookResource.getPagedBooks(page)
                 .then(function (books) {
                     $scope.books = books;
                 }, function (err) {
                     console.log(err);
                 })
         }

         function nextPage() {
             $scope.page++;
             getBooks($scope.page);
         }

         function previousPage() {
             if ($scope.page > 0) {
                 $scope.page--;
                 getBooks($scope.page);
             }
         }
     }]);