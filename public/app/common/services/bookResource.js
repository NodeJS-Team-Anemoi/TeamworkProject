'use strict';

app.factory('bookResource', ['$http', '$q', function ($http, $q) {
    var baseUrl = '/products';
    
    return {
        create: function (book) {
            var deferred = $q.defer();
            $http.post(baseUrl, book)
                .success(function () {
                    deferred.resolve();
                })
                .error(function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        },
        getAll: function() {
            var deferred = $q.defer();

            $http.get(baseUrl)
                .success(function(books) {
                deferred.resolve(books);
                })
                .error(function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }
    }
}]);
