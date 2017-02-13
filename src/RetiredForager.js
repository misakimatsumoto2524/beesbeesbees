var RetiredForagerBee = function() {
  ForagerBee.call(this, this.food, this.eat, this.treasureChest);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);

RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
}

RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
}



RetiredForagerBee.prototype.constructor = RetiredForagerBee;