app.directive("toDoItem", function(){
  return {
    templateUrl: "templates/todolist.html",
    restrict: "A",
    scope: {
      item: "=",
      deleteItem: "&"
    }
  }

})