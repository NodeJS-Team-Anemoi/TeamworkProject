'use strict';

app.factory('bookResource', ['$http', '$q', function ($http, $q) {

    return {
        create: function (book) {
            var deferred = $q.defer();
            $http.post('/products', book)
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
