'use strict';

// Declare app level module
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);