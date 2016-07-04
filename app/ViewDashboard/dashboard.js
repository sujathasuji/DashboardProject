'use strict';

angular.module('myApp.Dashboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ViewDashboard', {
    templateUrl: 'ViewDashboard/dashboard.html',
    controller: 'View1DashCtrl'
  });
}])

.controller('View1DashCtrl', [function() {

}]);