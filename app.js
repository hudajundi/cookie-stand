'use strict';
console.log('i am here');

//global var
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var container = document.getElementById('cookie');
var table = document.createElement('table');
container.appendChild(table);
// constructor

function City(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;

    this.hoursSalesArr = [];
    this.cookiesArr = [];
    this.cookiesSalesTotal = 0;
    this.assignRandomCookies();
    this.generateHourlySales();
}

// prototype tp add function
City.prototype.assignRandomCookies = function () {
    for (var i = 0; i <= hours.length; i++) {

        var randomCookies = Math.ceil(Math.random() * (this.max - this.min) + this.min);
        this.cookiesArr.push(randomCookies);
    }

}
City.prototype.generateHourlySales = function () {
    for (var i = 0; i < hours.length; i++) {
        var hourCookies = Math.ceil(this.cookiesArr[i] * this.avg);
        this.hoursSalesArr.push(hourCookies);
        this.cookiesSalesTotal += hourCookies;
    }
}


// do the table:
function headerRow() {

    var trHead = document.createElement('tr');
    table.appendChild(trHead);

    var thHead = document.createElement('th');
    trHead.appendChild(thHead);
    thHead.textContent = '***'

    for (var i = 0; i < hours.length; i++) {

        thHead = document.createElement('th');
        trHead.appendChild(thHead);
        thHead.textContent = hours[i];
    }

    thHead = document.createElement('th');
    trHead.appendChild(thHead);
    thHead.textContent = 'Daily Location Total';
};

City.prototype.render = function () {

    var trData = document.createElement('tr');
    table.appendChild(trData);

    var tdData = document.createElement('td');
    trData.appendChild(tdData);
    tdData.textContent = this.name;

    for (var i = 0; i < hours.length; i++) {
        tdData = document.createElement('td')
        trData.appendChild(tdData)
        tdData.textContent = this.hoursSalesArr[i];
    }

    tdData = document.createElement('td');
    trData.appendChild(tdData);
    tdData.textContent = this.cookiesSalesTotal;
};


function footerRow(table) {

    var trFoot = document.createElement('tr');

    table.appendChild(trFoot);

    var tdFoot = document.createElement('td')
    trFoot.appendChild(tdFoot);

    tdFoot.textContent = 'Total';

    var totalAll = 0;

    for (var index = 0; index < hours.length; index++) {

        tdFoot = document.createElement('td');
        trFoot.appendChild(tdFoot);

        var hourlyTotal = 0;

        for (var jndex = 0; jndex < locationStore.length; jndex++) {
            hourlyTotal += locationStore[jndex].hoursSalesArr[index];
        }

        tdFoot.textContent = hourlyTotal;

        totalAll += hourlyTotal;
    }

    tdFoot = document.createElement('td')
    trFoot.appendChild(tdFoot);
    tdFoot.textContent = totalAll;
};

var seattle = new City('Seattle', 23, 65, 6.3);
var Tokoy = new City('Tokyo', 3, 24, 1.2);
var Dubai = new City('Dubai', 11, 38, 3.7);
var Paris = new City('Paris', 20, 38, 2.8);
var Lima = new City('Lima', 2, 16, 4.6);
var locationStore = [seattle, Tokoy, Dubai, Paris, Lima];

headerRow(table);

for (let k = 0; k < locationStore.length; k++) {
   
    var towns = locationStore[k];
    towns.render();
    
}


footerRow(table);



function formNew(event) {
    event.preventDefault();
    
    var name = event.target.city.value;
    var min = event.target.minC.value;
    var max = event.target.maxC.value;
    var avg = event.target.avgS.value;

    
    var addCity = new City(name, min, max, avg);
    locationStore.push(addCity);

    headerRow(table);

for (let k = 0; k < locationStore.length; k++) {
   
    var towns = locationStore[k];
    towns.render();
    
}

footerRow(table);

    console.log('name',name);
}

var form = document.getElementById('addCity')
form.addEventListener('submit', formNew)