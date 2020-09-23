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







// // // Objects:
// // /// city 1:

// var seattle = {
//     city: 'Seattle',
//     min: 23,
//     max: 65,
//     avg: 6.3,

//     // method:

//     perHour : function(min,max){
//         var range = max - min ;
//         var randomNumder= Math.ceil(( Math.random() * range) + min) ;
//         return (randomNumder);

//     },

//     cookiesPurchased: function () {
//         var hoursSum = 0;
//         for (var i = 0; i < hours.length ; i++) {
//             var cookiesPerHour = this.perHour(this.min, this.max) * seattle.avg;
//             hours[i][1] = Math.ceil(cookiesPerHour);
//             hoursSum = hoursSum + hours[i][1];
//             hours[15][1] = hoursSum;
//     }

// return hours;
//     },


// //we should render the function

// render: function(){
//     var h2 = document.createElement('h2');
//     cookies.appendChild(h2)
//     h2.textContent = this.city;

//     var ul = document.createElement('ul');
//     cookies.appendChild(ul);

//     var hours = this.cookiesPurchased();
    
//     for (var i = 0; i < hours.length; i++) {
//         var li = document.createElement('li');
//         ul.appendChild(li);

//         var salesList =  hours[i][0] + hours[i][1] +  ' cookies';
//         li.textContent = salesList;
//     }
     
// }
    

// }

// // city 2:

// var Tokyo = {
//     city: 'Tokyo',
//     min: 3,
//     max: 24,
//     avg: 1.2,

//     // method:

//     perHour : function(min,max){
//         var range = max - min ;
//         var randomNumder= Math.ceil(( Math.random() * range) + min) ;
//         return (randomNumder);

//     },

//     cookiesPurchased: function () {
//         var hoursSum = 0;
//         for (var i = 0; i < hours.length ; i++) {
//             var cookiesPerHour = this.perHour(this.min, this.max) * Tokyo.avg;
//             hours[i][1] = Math.ceil(cookiesPerHour);
//             hoursSum = hoursSum + hours[i][1];
//             hours[15][1] = hoursSum;
//     }

// return hours;
//     },


// //we should render the function

// render: function(){
//     var h2 = document.createElement('h2');
//     cookies.appendChild(h2)
//     h2.textContent = this.city;

//     var ul = document.createElement('ul');
//     cookies.appendChild(ul);

//     var hours = this.cookiesPurchased();
    
//     for (var i = 0; i < hours.length; i++) {
//         var li = document.createElement('li');
//         ul.appendChild(li);

//         var salesList =  hours[i][0] + hours[i][1] +  ' cookies';
//         li.textContent = salesList;
//     }
     
// }
    

// }



// //city 3
// var Dubai = {
//     city: 'Dubai',
//     min: 11,
//     max: 38,
//     avg: 3.7,

//     // method:

//     perHour : function(min,max){
//         var range = max - min ;
//         var randomNumder= Math.ceil(( Math.random() * range) + min) ;
//         return (randomNumder);

//     },

//     cookiesPurchased: function () {
//         var hoursSum = 0;
//         for (var i = 0; i < hours.length ; i++) {
//             var cookiesPerHour = this.perHour(this.min, this.max) * Dubai.avg;
//             hours[i][1] = Math.ceil(cookiesPerHour);
//             hoursSum = hoursSum + hours[i][1];
//             hours[15][1] = hoursSum;
//     }

// return hours;
//     },


// //we should render the function

// render: function(){
//     var h2 = document.createElement('h2');
//     cookies.appendChild(h2)
//     h2.textContent = this.city;

//     var ul = document.createElement('ul');
//     cookies.appendChild(ul);

//     var hours = this.cookiesPurchased();
    
//     for (var i = 0; i < hours.length; i++) {
//         var li = document.createElement('li');
//         ul.appendChild(li);

//         var salesList =  hours[i][0] + hours[i][1] +  ' cookies';
//         li.textContent = salesList;
//     }
     
// }
    

// }



// //city 4
// var Paris = {
//     city: 'Paris',
//     min: 20,
//     max: 38,
//     avg: 2.3,

//     // method:

//     perHour : function(min,max){
//         var range = max - min ;
//         var randomNumder= Math.ceil(( Math.random() * range) + min) ;
//         return (randomNumder);

//     },

//     cookiesPurchased: function () {
//         var hoursSum = 0;
//         for (var i = 0; i < hours.length ; i++) {
//             var cookiesPerHour = this.perHour(this.min, this.max) * Paris.avg;
//             hours[i][1] = Math.ceil(cookiesPerHour);
//             hoursSum = hoursSum + hours[i][1];
//             hours[15][1] = hoursSum;
//     }

// return hours;
//     },


// //we should render the function

// render: function(){
//     var h2 = document.createElement('h2');
//     cookies.appendChild(h2)
//     h2.textContent = this.city;

//     var ul = document.createElement('ul');
//     cookies.appendChild(ul);

//     var hours = this.cookiesPurchased();
    
//     for (var i = 0; i < hours.length; i++) {
//         var li = document.createElement('li');
//         ul.appendChild(li);

//         var salesList =  hours[i][0] + hours[i][1] +  ' cookies';
//         li.textContent = salesList;
//     }
     
// }
    

// }




// //city 5
// var Lima = {
//     city: 'Lima',
//     min: 23,
//     max: 65,
//     avg: 6.3,

//     // method:

//     perHour : function(min,max){
//         var range = max - min ;
//         var randomNumder= Math.ceil(( Math.random() * range) + min) ;
//         return (randomNumder);

//     },

//     cookiesPurchased: function () {
//         var hoursSum = 0;
//         for (var i = 0; i < hours.length ; i++) {
//             var cookiesPerHour = this.perHour(this.min, this.max) * Lima.avg;
//             hours[i][1] = Math.ceil(cookiesPerHour);
//             hoursSum = hoursSum + hours[i][1];
//             hours[15][1] = hoursSum;
//     }

// return hours;
//     },


// //we should render the function

// render: function(){
//     var h2 = document.createElement('h2');
//     cookies.appendChild(h2)
//     h2.textContent = this.city;

//     var ul = document.createElement('ul');
//     cookies.appendChild(ul);

//     var hours = this.cookiesPurchased();
    
//     for (var i = 0; i < hours.length; i++) {
//         var li = document.createElement('li');
//         ul.appendChild(li);

//         var salesList =  hours[i][0] + hours[i][1] +  ' cookies';
//         li.textContent = salesList;
//     }
     
// }
    

// }


// // call the functions :
// seattle.render();
// Tokyo.render();
// Dubai.render();
// Paris.render();
// Lima.render();
