'use strict';

app.factory('UsersResource', function($resource) {
    var UsersResource = $resource('/api/users/:id', {_id:'@id'}, 
      { update: {method: 'PUT', isArray: false}});

    UsersResource.prototype.isAdmin = function() {
        return this.local.role && this.local.role === 'Admin';
    };

    return UsersResource;
});