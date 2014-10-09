'use strict';

app.controller('CatalogController', ['$scope', 'bookResource',
     function ($scope, bookResource) {
         bookResource.getAll().then(function (books) {
             $scope.books = books;
         });
     }]);