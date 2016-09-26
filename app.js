var app = angular.module("toDoApp",[])

app.controller("TodoCtrl", ["$scope", "$window", "Item", function($scope, $window, Item) {
 
  $scope.items = Item.allItems();

  $scope.submitForm = function(){
    var newItem = {};
    newItem.text = $scope.formData.name;
    newItem.dueDate = $scope.formData.dueDate;
    Item.create(newItem)
    $scope.formData = {};
  };

  $scope.setFiler = "None";

  $scope.deleteItem = function(item){
    Item.deleteItem(item)
  };

  $scope.clearCompleted = function(){
    Item.clearCompleted();
  };

  $scope.hideCompleted = false;

  $scope.toggleHideCompleted = function() {
    $scope.hideCompleted = !$scope.hideCompleted
  };

  $scope.oneCompleted = function(){
    for (var i = 0; i < $scope.items.length; i++) {
      if ($scope.items[i].completed === true) {
        return true;
      }
    }
    return false;
  }

}])