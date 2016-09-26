var app = angular.module("toDoApp",[])

app.controller("TodoCtrl", ["$scope",function($scope) {
  $scope.item = { text: "Get groceries from the store",
                dueDate: new Date(),
                completed: false }
}])