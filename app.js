var app = angular.module("toDoApp",[])

app.controller("TodoCtrl", ["$scope", "$window", "Item", function($scope, $window, Item) {
 
  $scope.items = function() {
    console.log("DSADS")
  }

  $scope.submitForm = function(){
    var newItem = {};
    newItem.text = $scope.formData.name;
    newItem.dueDate = $scope.formData.dueDate;
    Item.create(newItem)
    $scope.formData = {};
  };

  $scope.deleteItem = function(item){
    Item.deleteItem(item)
  }

  $scope.clearCompleted = function(){
    Item.clearCompleted();
  }

  $scope.filterText = "Hide Completed"

  $scope.hideCompleted = false;

  $scope.toggleHideCompleted = function() {
    $scope.hideCompleted = !$scope.hideCompleted
  }

}])