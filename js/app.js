"use strict";

let form = document.querySelector('form');

console.log(form);

let handleSubmit = function(event){
  event.preventDefault();
  let name = event.target.storeName.value;
  let min = parseInt(event.target.minPerHour.value);
  let max = parseInt(event.target.maxPerHour.value);
  let avg = parseInt(event.target.avgPerHour.value);
  let newStore = new Store(
    name, 
    min, 
    max, 
    avg,
    );

  console.log(newStore);
  newStore.tableRender();
  storeArray.push(newStore);
}

form.addEventListener('submit', handleSubmit);

// Store the min/max hourly customers, and the average cookies per customer, in object properties.

//array for hours
let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']

const tableElement = document.getElementById("Table");

function Store(name, min, max, avg) {
    this.name = name,
    this.min = min,
    this.max = max,
    this.avg = avg,
    this.cookiesPerHourArray = [],
    this.dailyTotal = 0,
    this.generateRandomNumberOfC = function () {
      return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
    this.calculateCookiesPerHour = function () {
      for (let i = 0; i < hours.length; i++) {
        let randomNumberOfCustomers = this.generateRandomNumberOfC();
        let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
        this.cookiesPerHourArray.push(cookiesSoldPerHour);
        //this is adding to dailytotal and staying in dailytotal
        this.dailyTotal += cookiesSoldPerHour;
      }
    },
    
    this.tableRender = function(){
      this.calculateCookiesPerHour();
      let firstRow = document.createElement("tr");
      tableElement.appendChild(firstRow);
      let cityName = document.createElement('td');
      cityName.textContent = this.name;
      firstRow.appendChild(cityName);

      for(let i = 0; i < hours.length; i++){
        let firstElem = document.createElement('td');
        firstElem.textContent = `${this.cookiesPerHourArray[i]}`
        // console.log(this.cookiesPerHourArray[i]);
        // this.dailyTotal += this.cookiesPerHourArray[i];
        firstRow.appendChild(firstElem);
      }
      // console.log("total: ", this.dailyTotal);
      let total = document.createElement('td');
      total.textContent = this.dailyTotal;
      firstRow.appendChild(total);
    }
  }

//the renderhours function renders the hours at the top of the table
function renderHours(){
  let tdElem = document.createElement('td');
  tableElement.appendChild(tdElem);
  for(let i = 0; i < hours.length; i++){
    let tdElem = document.createElement('td');
    tdElem.textContent = `${hours[i]}`
    tableElement.appendChild(tdElem);
  }
  //only makes total head off to the right
  let total = document.createElement('td');
  total.textContent = "Daily Location Total"
  tableElement.appendChild(total)
}

//this will calculate the number of cookies for each hour
function storeTotal(){
  let footer = document.querySelector('tfoot');
  if (footer){
    footer.removeChild();
  }
  footer = document.createElement('tfoot');
  tableElement.appendChild(footer);

  let timeTotal = document.createElement('td');
  timeTotal.textContent = "Total";
  footer.appendChild(timeTotal);
  
  let totalOfTotals = 0;
  for(let i = 0; i < hours.length; i++){
    let hourly = 0;
    for(let j = 0; j < storeArray.length; j++){
      hourly += storeArray[j].cookiesPerHourArray[i];
      totalOfTotals += storeArray[j].cookiesPerHourArray[i];
    }
    let timeTotal2 = document.createElement('td');
    timeTotal2.textContent = `${hourly}`;
    footer.appendChild(timeTotal2);
  }
    let timeTotal3 = document.createElement('td');
    timeTotal3.textContent = `${totalOfTotals}`;
    footer.appendChild(timeTotal3);
}

let Seattle = new Store('Seattle', 23, 65, 6.3);
let Tokyo = new Store('Tokyo', 3, 24, 1.2);
let Dubai = new Store('Dubai', 11, 38, 3.7);
let Paris = new Store('Paris', 20, 38, 2.3);
let Lima = new Store('Lima', 2, 16, 4.6);

let storeArray = [Seattle, Tokyo, Dubai, Paris, Lima];
renderHours();
Seattle.tableRender();
Tokyo.tableRender();
Dubai.tableRender();
Paris.tableRender();
Lima.tableRender();
storeTotal();
// console.log(Seattle);
// console.log(Tokyo);

//SEATTLE

// let seattleStoreContainer = document.getElementById("seattleList");

// //information about seattleStore as an object
// let seattleObj = {
//   name: 'Seattle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   cookiesSoldEachHourArray: [],
//   dailyTotal: 0,
//   generateRandomNumberOfCustomers: function() {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
//   },

//   calculateCookiesPerHour: function() {
//     for(let i = 0; i < hours.length; i++){
//       let randomNumberOfCustomers = this.generateRandomNumberOfCustomers();
//       let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
//       this.cookiesSoldEachHourArray.push(cookiesSoldPerHour);// puishes it into the hours array to the end
//       this.dailyTotal += cookiesSoldPerHour;
//       console.log(randomNumberOfCustomers); //delete me        
//     }
//   },
//   //this displays information onto site
//   renderList: function(){
//     for(let i = 0; i < hours.length - 1; i++){
//         let li = document.createElement('li');//this creates an li tag in the html
//         li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
//         seattleStoreContainer.appendChild(li);//this is where to put it
//     }
//     //once we get to end of hours array it will display total
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal} cookies`;
//     seattleStoreContainer.appendChild(li);
//   }
// }

// seattleObj.calculateCookiesPerHour();
// seattleObj.renderList();

// //TOKYO

// let tokyoContainer = document.getElementById("tokyoList");

// let tokyoStore = {
//   name: 'Tokyo',
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   cookiesSoldPerHourArray: [],
//   dailyTotal: 0,
//   generateRandomNumberOfC: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNumberOfCustomers = this.generateRandomNumberOfC();
//       let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
//       this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
//       this.dailyTotal += cookiesSoldPerHour;
//     }
//   },
//   renderList: function () {
//     for (let i = 0; i < hours.length - 1; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//       tokyoContainer.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal} cookies`;
//     tokyoContainer.appendChild(li);
//   }
// }


// tokyoStore.calculateCookiesPerHour();
// tokyoStore.renderList();


// // DUBAI 


// let dubaiContainer = document.getElementById("dubaiList");

// let dubaiStore = {
//   name: 'Dubai',
//   min: 11,
//   max: 38,
//   avg: 3.7,
//   cookiesSoldPerHourArray: [],
//   dailyTotal: 0,
//   generateRandomNumberOfC: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNumberOfCustomers = this.generateRandomNumberOfC();
//       let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
//       this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
//       this.dailyTotal += cookiesSoldPerHour;
//     }
//   },
//   renderList: function () {
//     for (let i = 0; i < hours.length - 1; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//       dubaiContainer.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal} cookies`;
//     dubaiContainer.appendChild(li);
//   }
// }

// dubaiStore.calculateCookiesPerHour();
// dubaiStore.renderList();

// // PARIS 

// let parisContainer = document.getElementById("parisList");

// let parisStore = {
//   name: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   cookiesSoldPerHourArray: [],
//   dailyTotal: 0,
//   generateRandomNumberOfC: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNumberOfCustomers = this.generateRandomNumberOfC();
//       let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
//       this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
//       this.dailyTotal += cookiesSoldPerHour;
//     }
//   },
//   renderList: function () {
//     for (let i = 0; i < hours.length - 1; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//       parisContainer.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal} cookies`;
//     parisContainer.appendChild(li);
//   }
// }


// parisStore.calculateCookiesPerHour();
// parisStore.renderList();


// // LIMA

// let limaContainer = document.getElementById("limaList");

// let limaStore = {
//   name: 'Lima',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   cookiesSoldPerHourArray: [],
//   dailyTotal: 0,
//   generateRandomNumberOfC: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let randomNumberOfCustomers = this.generateRandomNumberOfC();
//       let cookiesSoldPerHour = Math.round(randomNumberOfCustomers * this.avg);
//       this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
//       this.dailyTotal += cookiesSoldPerHour;
//     }
//   },
//   renderList: function () {
//     for (let i = 0; i < hours.length - 1; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//       limaContainer.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal} cookies`;
//     limaContainer.appendChild(li);
//   }
// }

// limaStore.calculateCookiesPerHour();
// limaStore.renderList();