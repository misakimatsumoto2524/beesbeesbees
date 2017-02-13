var ForagerBee = function() {
  Bee.call(this, this.color, this.food, this.eat);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};

ForagerBee.prototype.constructor = ForagerBee;