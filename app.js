'use strict ';

var cookies = document.getElementById('cookie'); /// This is global
var hours = [ ["6am: ",], ["7am: ",], ["8am: ",], ["8am: ",], ["9am: ",], ["10am: ",], ["11am: ",], ["12pm: ",],  [" 1pm: ",], [" 2pm: ",], ["3pm: ",], ["4pm: ",], [" 5pm: ",], ["6pm: ",], [" 7pm: ",], ["Total: ",] ];

// Objects:
/// city 1:

var seattle = {
    city: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,

    // method:

    perHour : function(min,max){
        var range = max - min ;
        var randomNumder= Math.ceil(( Math.random() * range) + min) ;
        return (randomNumder);

    },

    cookiesPurchased: function () {
        var hoursSum = 0;
        for (var i = 0; i < hours.length ; i++) {
            var cookiesPerHour = this.perHour(this.min, this.max) * seattle.avg;
            hours[i][1] = Math.ceil(cookiesPerHour);
            hoursSum = hoursSum + hours[i][1];
            hours[15][1] = hoursSum;
    }

return hours;
    },


//we should render the function

render: function(){
    var h2 = document.createElement('h2');
    cookies.appendChild(h2)
    h2.textContent = this.city;

    var ul = document.createElement('ul');
    cookies.appendChild(ul);

    var hours = this.cookiesPurchased();
    
    for (var i = 0; i < hours.length; i++) {
        var li = document.createElement('li');
        ul.appendChild(li);

        var salesList =  hours[i][0] + hours[i][1] +  ' cookies';
        li.textContent = salesList;
    }
     
}
    

}

// city 2:

var Tokyo = {
    city: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,

    // method:

    perHour : function(min,max){
        var range = max - min ;
        var randomNumder= Math.ceil(( Math.random() * range) + min) ;
        return (randomNumder);

    },

    cookiesPurchased: function () {
        var hoursSum = 0;
        for (var i = 0; i < hours.length ; i++) {
            var cookiesPerHour = this.perHour(this.min, this.max) * Tokyo.avg;
            hours[i][1] = Math.ceil(cookiesPerHour);
            hoursSum = hoursSum + hours[i][1];
            hours[15][1] = hoursSum;
    }

return hours;
    },


//we should render the function

render: function(){
    var h2 = document.createElement('h2');
    cookies.appendChild(h2)
    h2.textContent = this.city;

    var ul = document.createElement('ul');
    cookies.appendChild(ul);

    var hours = this.cookiesPurchased();
    
    for (var i = 0; i < hours.length; i++) {
        var li = document.createElement('li');
        ul.appendChild(li);

        var salesList =  hours[i][0] + hours[i][1] +  ' cookies';
        li.textContent = salesList;
    }
     
}
    

}



//city 3
var Dubai = {
    city: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,

    // method:

    perHour : function(min,max){
        var range = max - min ;
        var randomNumder= Math.ceil(( Math.random() * range) + min) ;
        return (randomNumder);

    },

    cookiesPurchased: function () {
        var hoursSum = 0;
        for (var i = 0; i < hours.length ; i++) {
            var cookiesPerHour = this.perHour(this.min, this.max) * Dubai.avg;
            hours[i][1] = Math.ceil(cookiesPerHour);
            hoursSum = hoursSum + hours[i][1];
            hours[15][1] = hoursSum;
    }

return hours;
    },


//we should render the function

render: function(){
    var h2 = document.createElement('h2');
    cookies.appendChild(h2)
    h2.textContent = this.city;

    var ul = document.createElement('ul');
    cookies.appendChild(ul);

    var hours = this.cookiesPurchased();
    
    for (var i = 0; i < hours.length; i++) {
        var li = document.createElement('li');
        ul.appendChild(li);

        var salesList =  hours[i][0] + hours[i][1] +  ' cookies';
        li.textContent = salesList;
    }
     
}
    

}



//city 4
var Paris = {
    city: 'Paris',
    min: 20,
    max: 38,
    avg: 2.3,

    // method:

    perHour : function(min,max){
        var range = max - min ;
        var randomNumder= Math.ceil(( Math.random() * range) + min) ;
        return (randomNumder);

    },

    cookiesPurchased: function () {
        var hoursSum = 0;
        for (var i = 0; i < hours.length ; i++) {
            var cookiesPerHour = this.perHour(this.min, this.max) * Paris.avg;
            hours[i][1] = Math.ceil(cookiesPerHour);
            hoursSum = hoursSum + hours[i][1];
            hours[15][1] = hoursSum;
    }

return hours;
    },


//we should render the function

render: function(){
    var h2 = document.createElement('h2');
    cookies.appendChild(h2)
    h2.textContent = this.city;

    var ul = document.createElement('ul');
    cookies.appendChild(ul);

    var hours = this.cookiesPurchased();
    
    for (var i = 0; i < hours.length; i++) {
        var li = document.createElement('li');
        ul.appendChild(li);

        var salesList =  hours[i][0] + hours[i][1] +  ' cookies';
        li.textContent = salesList;
    }
     
}
    

}




//city 5
var Lima = {
    city: 'Lima',
    min: 23,
    max: 65,
    avg: 6.3,

    // method:

    perHour : function(min,max){
        var range = max - min ;
        var randomNumder= Math.ceil(( Math.random() * range) + min) ;
        return (randomNumder);

    },

    cookiesPurchased: function () {
        var hoursSum = 0;
        for (var i = 0; i < hours.length ; i++) {
            var cookiesPerHour = this.perHour(this.min, this.max) * Lima.avg;
            hours[i][1] = Math.ceil(cookiesPerHour);
            hoursSum = hoursSum + hours[i][1];
            hours[15][1] = hoursSum;
    }

return hours;
    },


//we should render the function

render: function(){
    var h2 = document.createElement('h2');
    cookies.appendChild(h2)
    h2.textContent = this.city;

    var ul = document.createElement('ul');
    cookies.appendChild(ul);

    var hours = this.cookiesPurchased();
    
    for (var i = 0; i < hours.length; i++) {
        var li = document.createElement('li');
        ul.appendChild(li);

        var salesList =  hours[i][0] + hours[i][1] +  ' cookies';
        li.textContent = salesList;
    }
     
}
    

}


// call the functions :
seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();
