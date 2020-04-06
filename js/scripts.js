function List() {
  this.items = [];
}

List.prototype.addItem = function(item) {
  this.items.push(item);
}

function Item(itemOne, itemTwo, itemThree) {
  this.itemOne = itemOne;
  this.itemTwo = itemTwo;
  this.itemThree = itemThree;
}