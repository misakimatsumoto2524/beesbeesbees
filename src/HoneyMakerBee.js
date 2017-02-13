var HoneyMakerBee = function() {
  Bee.call(this, this.color, this.food, this.eat);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot += 1;
  return this.honeyPot;
};

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot -= 1;
  return this.honeyPot;
};

HoneyMakerBee.prototype.constructor = HoneyMakerBee;



