'use strict';

app.controller('MainController', ['$scope', '$http', 'identity','bookResource',
      function ($scope, $http, identity, bookResource) {
          $scope.books = bookResource.getAll();
      }]);