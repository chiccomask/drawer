'use strict';

/**
 * @ngdoc function
 * @name drawerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the drawerApp
 */
angular.module('drawerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
