"use strict";

// Store the min/max hourly customers, and the average cookies per customer, in object properties.

let hours = ['6 am: ', '7 am: ', '8 am: ', '9 am: ', '10 am: ', '11 am: ', '12 pm: ', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', 'Total: '];

let seattleObj = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesSoldEachHourArray: [],
  dailyTotal: 0,
  // Use a method of that object to generate a random number of customers per hour.
  generateRandomNumberOfCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); // The maximum is inclusive and the minimum is inclusive
  },
  // Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
  calculateCookiesPerHour: function() {
    let randomNumberOfCustomers = this.generateRandomNumberOfCustomers();
    console.log(randomNumberOfCustomers);
    //
  }
}

// console.log(seattleObj.generateRandomNumberOfCustomers());
seattleObj.calculateCookiesPerHour();