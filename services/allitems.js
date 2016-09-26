app.factory("Item", [function() {

  var _items = [{ text: "Get groceries from the store",
                dueDate: new Date(),
                completed: false }]
  return {
    allItems: function(){
      return _items
    },
    create: function(item) {
      item.completed = false;
      _items.push(item);
    },
    deleteItem: function(item) {
      var index = _items.indexOf(item);
      _items.splice(index,1);
    },
    clearCompleted: function() {
      var allItems = this.allItems()
      var toBeDeleted = allItems.filter(function(item){
        return item.completed;
      });
      for (var i = 0; i < toBeDeleted.length; i++) {
        this.deleteItem(toBeDeleted[i]);
      }
    }
  }

}])