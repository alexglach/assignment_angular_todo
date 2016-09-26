app.filter("hideCompletedFilter", function() {
  return function(items, toggle) {
    var filteredCompleted = []
    if(!toggle) {
      return items
    }
    else {
      for(var i = 0; i < items.length; i++) {
        if (!items[i].completed) {
          filteredCompleted.push(items[i])
        }
      }
    return filteredCompleted;
    }
  }
  
})