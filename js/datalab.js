angular.module('datalab', ['ngResource']).
    factory('User', function($resource) {
      var User = $resource('https://api.mongolab.com/api/1/databases' +
          '/angularjs/collections/projects/:id',
          { apiKey: '4f847ad3e4b08a2eed5f3b54' }, {
            update: { method: 'PUT' }
          }
      );
 
      User.prototype.update = function(cb) {
        return User.update({id: this._id.$oid},
            angular.extend({}, this, {_id:undefined}), cb);
      };
 
      User.prototype.destroy = function(cb) {
        return User.remove({id: this._id.$oid}, cb);
      };
 
      return User;
    }
);