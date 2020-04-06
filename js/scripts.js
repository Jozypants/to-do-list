//Business Logic for List

function List() {
  this.items = [];
  this.currentId = 0;
}

List.prototype.addItem = function(item) {
  item.id = this.assignId ();
  this.items.push(item);
}

List.prototype.assignId = function () {
  this.currentId +=1;
  return this.currentId;
}

List.prototype.findItem = function (id) {
  for (var i = 0; i < this.items.length; i++) {
    if (this.items[i]) {
      if (this.items[i].id == id) {
        return this.contact[i];
      }
    }
  };
  return false;
}

List.prototype.deleteItem = function(id){
  for (var i = 0; i < this.items.length; i++){
    if (this.items[i].id == id) {
      if (this.items[i]) {
      delete this.items[i];
        return true;
      } 
    }
  };
  return false;
}
// Business Logic for Item
function Item(itemOne, itemTwo, itemThree) {
  this.itemOne = itemOne;
  this.itemTwo = itemTwo;
  this.itemThree = itemThree;
}



// UI Logic

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault()
    var itemOne = $('input#itemOne').val();
    console.log(itemOne);
    var itemTwo = $('input#itemTwo').val();
    console.log(itemTwo);
    var itemThree = $('input#itemThree').val();
    console.log(itemThree)

    $('#output').append('<li>' + item[0]'</li>' )
  });
});