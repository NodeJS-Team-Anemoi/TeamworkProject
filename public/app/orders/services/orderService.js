'use strict';

app.factory('orderService', ['$http', '$q', function ($http, $q) {
    var routeUrl = '/orders';

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
        getOrder: function(id){
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
        updateOrder: function(id){
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
        deleteOrder: function(id){
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
