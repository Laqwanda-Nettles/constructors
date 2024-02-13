function Television(power = false, currentChannel) {
  this.power = power;
  this.currentChannel = currentChannel;
}

Television.prototype.turnOn = function () {
  this.power = true;
  console.log("The TV is now on!");
};

Television.prototype.turnOff = function () {
  this.power = false;
  console.log("The TV is now off!");
};

Television.prototype.changeChannel = function (newChannel) {
  if (this.power) {
    this.currentChannel = newChannel;
    console.log("Changed to channel " + newChannel);
  } else {
    console.log("Please turn on the TV first!");
  }
};

Television.prototype.getState = function () {
  if (this.power) {
    console.log("The TV is on, current channel is " + this.currentChannel);
  } else {
    console.log("The TV is off.");
  }
};

const myTv = new Television(false, 2);
const myTv2 = new Television(true, 6);
const myTv3 = new Television(false, 11);

// Current state of each TV
myTv.getState();
myTv2.getState();
myTv3.getState();

// Changing the State of TV 1
console.log("Changing the state of TV 1!");
myTv.turnOn();
myTv.changeChannel(7);
myTv.getState();
myTv.turnOff();

// Changing the State of TV 2
console.log("Changing the state of TV 2!");
myTv.turnOn();
myTv.changeChannel(15);
myTv.getState();
myTv.turnOff();

// Changing the State of TV 3
console.log("Changing the state of TV 3!");
myTv.turnOn();
myTv.changeChannel(9);
myTv.getState();
myTv.turnOff();
