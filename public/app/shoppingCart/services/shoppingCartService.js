'use strict';

app.factory('shoppingCartService', ['$http', '$q', function ($http, $q) {
    var routeUrl = '/shoppingCart';

    return {
        getAll: function () {
            var deferred = $q.defer();
            $http.get(routeUrl)
                .success(function (orders) {
                    deferred.resolve(orders);
                })
                .error(function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        },
        getShoppingCart: function(id){
            var deferred = $q.defer();
            $http.get(routeUrl + '/' + id)
                .success(function (order) {
                    deferred.resolve(order);
                })
                .error(function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        },
        updateShoppingCart: function(id){
            var deferred = $q.defer();
            $http.post(routeUrl + '/' + id)
                .success(function (order) {
                    deferred.resolve(order);
                })
                .error(function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        },
        deleteShoppingCart: function(id){
            var deferred = $q.defer();
            $http.delete(routeUrl + '/' + id)
                .success(function () {
                    deferred.resolve();
                })
                .error(function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }
    }
}]);
