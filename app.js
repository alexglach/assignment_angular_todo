var app = angular.module("toDoApp",[])

app.controller("TodoCtrl", ["$scope", "$window",function($scope, $window) {
 

  $scope.items = [{ text: "Get groceries from the store",
                dueDate: new Date(),
                completed: false }]

  $scope.submitForm = function(){
    var newItem = {};
    newItem.text = $scope.formData.name;
    newItem.dueDate = $scope.formData.dueDate;
    newItem.completed = false;
    $scope.items.push(newItem);
    $scope.formData = {};
  };

  $scope.deleteItem = function(item){
    var index = $scope.items.indexOf(item);
    $scope.items.splice(index, 1);
  }

  $scope.clearCompleted = function(){
    var toBeDeleted = $scope.items.filter(function(item){
      return item.completed;
    });
    for (var i = 0; i < toBeDeleted.length; i++) {
      $scope.deleteItem(toBeDeleted[i]);
    }
  }

  $scope.filterText = "Hide Completed"

  $scope.hideCompleted = false;

  $scope.toggleHideCompleted = function() {
    $scope.hideCompleted = !$scope.hideCompleted
  }

}])