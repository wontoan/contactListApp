var myApp = angular.module('myApp', []);

myApp.controller('AppController', ['$scope', '$http', function($scope, $http) {

  $http.get('/contactlist').success(function(response){
    $scope.contactlist = response;
  });

}]);
