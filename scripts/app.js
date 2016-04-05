angular.module("todoListApp", [])
.controller("mainCtrl", function($scope){
  $scope.helloWorld = function(){
    console.log("Hello there!");
  };

  $scope.todos = [
    {"name": "clean the house"},
    {"name": "water the dog"},
    {"name": "feed the lawn"},
    {"name": "pay the bills"},
    {"name": "run"},
    {"name": "swim"}
  ]



});