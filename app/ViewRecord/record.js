/**
 * Created by sujatha on 30/06/16.
 */

'use strict';

angular.module('myApp.Record', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/ViewRecord', {
            templateUrl: 'ViewRecord/record.html',
            controller: 'RecordCtrl'
        });
    }])

    .controller('RecordCtrl', [function() {

    }]);