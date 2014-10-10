'use strict';

app.factory('ordersResource', ['$http', '$q',
    function ($http, $q) {
        var routeUrl = '/orders';

        return {
            create: function (order) {
                var deferred = $q.defer();
                $http.post(routeUrl, order)
                    .success(function (order) {
                        deferred.resolve(order);
                    })
                    .error(function (error) {
                        deferred.reject(error);
                    });

                return deferred.promise;
            },
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
            getOrder: function (id) {
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
            updateOrder: function (id, order) {
                var deferred = $q.defer();
                $http.put(routeUrl + '/' + id, order)
                    .success(function (order) {
                        deferred.resolve(order);
                    })
                    .error(function (error) {
                        deferred.reject(error);
                    });

                return deferred.promise;
            },
            deleteOrder: function (id) {
                var deferred = $q.defer();
                $http.delete(routeUrl + '/' + id)
                    .success(function () {
                        deferred.resolve();
                    })
                    .error(function (error) {
                        deferred.reject(error);
                    });

                return deferred.promise;
            },
            getPagedOrders: function (page, sortBy) {
                var deferred = $q.defer();
                $http.get(routeUrl + '/' + page + '/' + sortBy)
                    .success(function (orders) {
                        deferred.resolve(orders);
                    })
                    .error(function (error) {
                        deferred.reject(error);
                    });

                return deferred.promise;
            },
            getOrdersByUserId: function (id) {
                var deferred = $q.defer();
                $http.get(routeUrl + '/user/' + id)
                    .success(function (orders) {
                        deferred.resolve(orders);
                    })
                    .error(function (error) {
                        deferred.reject(error);
                    });

                return deferred.promise;
            },
            getReadyToBeShipped: function (id) {
                var deferred = $q.defer();
                $http.get(routeUrl + '/user/' + id + '/ready')
                    .success(function (orders) {
                        deferred.resolve(orders);
                    })
                    .error(function (error) {
                        deferred.reject(error);
                    });

                return deferred.promise;
            }
        }
}]);