'use strict';
let form = document.querySelector('form');
console.log('form');
let handleSubmit = function (event) {
  event.preventDefault();
  let name = event.target.storeName.value;
  let min = parseInt(event.target.minPerHour.value);
  let max = parseInt(event.target.maxPerHour.value);
  let avg = parseInt(event.target.avgPerHour.value);
  let newStore = new Store(name, min, max, avg);
  storeArray.push(newStore);
  newStore.tableRender();
  renderStoreTotal();
}
form.addEventListener('submit', handleSubmit);
let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']
const tableElement = document.getElementById('Table');
function Store(name, min, max, avg) {
  // ... the rest of the Store function remains the same
  this.tableRender = function () {
    this.calculateCookiesPerHour();
    let firstRow = document.createElement('tr');
    let footer = document.querySelector('tfoot');
    tableElement.insertBefore(firstRow, footer);
    let cityName = document.createElement('td');
    cityName.textContent = this.name;
    firstRow.appendChild(cityName);
    for (let i = 0; i < hours.length; i++) {
      let firstElem = document.createElement('td');
      firstElem.textContent = `${this.cookiesPerHourArray[i]}`;
      firstRow.appendChild(firstElem);
    }
    let total = document.createElement('td');
    total.textContent = this.dailyTotal;
    firstRow.appendChild(total);
  };
}
// ... the rest of the helper functions remain the same
function renderStoreTotal() {
  let footer = document.querySelector('tfoot');
  if (footer) {
    footer.remove();
  }
  footer = document.createElement('foot');
  tableElement.appendChild(footer);

  let timeTotal = document.createElement('td');
  timeTotal.textContent = 'Total';
  footer.appendChild(timeTotal);

  let hourly2 = 0;
  for (let i = 0; i < hours.length; i++) {
    let hourly = 0;
    for (let j = 0; j < storeArray.length; j++) {
      hourly += storeArray[j].cookiesPerHourArray[i];
      hourly2 += storeArray[j].cookiesPerHourArray[i];
    }
    let timeTotal2 = document.createElement('td');
    timeTotal2.textContent = `${hourly}`;
    footer.appendChild(timeTotal2);
  }
  let timeTotal3 = document.createElement('td');
  timeTotal3.textContent = `${hourly2}`;
  footer.appendChild(timeTotal3);
}

// ... the rest of the store declarations remain the same
let storeArray = [Seattle, Tokyo, Dubai, Paris, Lima];
renderHours();
Seattle.tableRender();
Tokyo.tableRender();
Dubai.tableRender();
Paris.tableRender();
Lima.tableRender();
renderStoreTotal();