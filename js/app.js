"use strict";

// Store the min/max hourly customers, and the average cookies per customer, in object properties.

//array for hours
let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', 'Total'];


//SEATTLE


let seattleStoreContainer = document.getElementById("seattleList");

//information about seattleStore as an object
let seattleObj = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesSoldEachHourArray: [],
  dailyTotal: 0,
  generateRandomNumberOfCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
  },

  calculateCookiesPerHour: function() {
    for(let i = 0; i < hours.length; i++){
      let randomNumberOfCustomers = this.generateRandomNumberOfCustomers();
      let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
      this.cookiesSoldEachHourArray.push(cookiesSoldPerHour);// puishes it into the hours array to the end
      this.dailyTotal += cookiesSoldPerHour;
      console.log(randomNumberOfCustomers); //delete me        
    }
  },
  //this displays information onto site
  renderList: function(){
    for(let i = 0; i < hours.length - 1; i++){
        let li = document.createElement('li');//this creates an li tag in the html
        li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
        seattleStoreContainer.appendChild(li);//this is where to put it
    }
    //once we get to end of hours array it will display total
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal} cookies`;
    seattleStoreContainer.appendChild(li);
  }
}

seattleObj.calculateCookiesPerHour();
seattleObj.renderList();


//TOKYO


let tokyoContainer = document.getElementById("tokyoList");

let tokyoStore = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  cookiesSoldPerHourArray: [],
  dailyTotal: 0,
  generateRandomNumberOfC: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calculateCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let randomNumberOfCustomers = this.generateRandomNumberOfC();
      let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
      this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
      this.dailyTotal += cookiesSoldPerHour;
    }
  },
  renderList: function () {
    for (let i = 0; i < hours.length - 1; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      tokyoContainer.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal} cookies`;
    tokyoContainer.appendChild(li);
  }
}


tokyoStore.calculateCookiesPerHour();
tokyoStore.renderList();


// DUBAI 


let dubaiContainer = document.getElementById("dubaiList");

let dubaiStore = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  cookiesSoldPerHourArray: [],
  dailyTotal: 0,
  generateRandomNumberOfC: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calculateCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let randomNumberOfCustomers = this.generateRandomNumberOfC();
      let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
      this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
      this.dailyTotal += cookiesSoldPerHour;
    }
  },
  renderList: function () {
    for (let i = 0; i < hours.length - 1; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      dubaiContainer.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal} cookies`;
    dubaiContainer.appendChild(li);
  }
}


dubaiStore.calculateCookiesPerHour();
dubaiStore.renderList();


// PARIS 


let parisContainer = document.getElementById("parisList");

let parisStore = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  cookiesSoldPerHourArray: [],
  dailyTotal: 0,
  generateRandomNumberOfC: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calculateCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let randomNumberOfCustomers = this.generateRandomNumberOfC();
      let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
      this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
      this.dailyTotal += cookiesSoldPerHour;
    }
  },
  renderList: function () {
    for (let i = 0; i < hours.length - 1; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      parisContainer.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal} cookies`;
    parisContainer.appendChild(li);
  }
}


parisStore.calculateCookiesPerHour();
parisStore.renderList();


// LIMA


let limaContainer = document.getElementById("limaList");

let limaStore = {
  name: 'Lima',
  min: 20,
  max: 38,
  avg: 2.3,
  cookiesSoldPerHourArray: [],
  dailyTotal: 0,
  generateRandomNumberOfC: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calculateCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let randomNumberOfCustomers = this.generateRandomNumberOfC();
      let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
      this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
      this.dailyTotal += cookiesSoldPerHour;
    }
  },
  renderList: function () {
    for (let i = 0; i < hours.length - 1; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      limaContainer.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal} cookies`;
    limaContainer.appendChild(li);
  }
}


limaStore.calculateCookiesPerHour();
limaStore.renderList();