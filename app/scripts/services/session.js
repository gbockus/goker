'use strict';

angular.module('gokerFullstackApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
