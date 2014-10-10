'use strict';

app.controller('CatalogController', ['$scope', 'bookResource', '$localStorage', 'identity',
     function ($scope, bookResource, $localStorage, identity) {
         $scope.page = 0;
         $scope.nextPage = nextPage;
         $scope.previousPage = previousPage;
         $scope.showFilters = false;
         $scope.identity = identity;

         getBooks($scope.page);

         function getBooks(page) {
             bookResource.getPagedBooks(page)
                 .then(function (books) {
                     $scope.books = books;
                 }, function (err) {
                     console.log(err);
                 })
         }
         
         $scope.buyBook = function (book) {
             var currentOrder = $localStorage.currentOrder || {
                userId: identity.getCurrentUser()._id,
                userName: identity.getCurrentUser().local.username,
                date: undefined,
                shippingAddress: undefined,
                paymentMethod: undefined,
                products: [],
                deleted: false,
                readyToBeShipped: false
             };
             
             currentOrder.products.push(book);
             $localStorage.currentOrder = currentOrder;
         };

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