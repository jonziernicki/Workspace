var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=6695ee4afe2ca5a6f950397f981dd760`)
    .then((response)=> response.json())
   .then((json)=>{
    //Get temp 
       let todaytemp = json.main.temp;
    //Save temp
       document.getElementById("todayTemp").innerText = todaytemp;
   });
}

//run loadWeather when page loaded
document.addEventListener("DOMContentLoaded", function() {
    loadWeather()
  });

  
var cityName;
var todayTemp;
var todayWind;
var todayDecription;
var todayHigh;
var todayLow;
var cityId;

var yeserdayTemp;
var yesterdayWind;
var yesterdayDescription;
var yesterdayHigh;
var yesterdayLow;
var testVar;




function loadWeather() {
        // todays date and yesterdays converted for api call
         let date = new Date;
         let yesterday = date;
         yesterday.setDate(yesterday.getDate()-1);
         date = date.toISOString().split('T')[0];
         yesterday =  yesterday.toISOString().split('T')[0];
         let today = new Date;
         today =  today.toISOString().split('T')[0];

         document.getElementById("yesterdayDay").innerText = today;
       
         //Get yesterday weather info api call
    fetch(`https://api.weatherbit.io/v2.0/history/daily?postal_code=44135&country=US&start_date=${yesterday}&end_date=${today}&units=I&lang=el&key=e1e7b7d46da0477aaa6ae46a3f9c6b68`)
    .then((response)=> response.json())
   .then((json)=>{
     
       let yesterdayArray= json.data[0];
       let yesterdayWind = yesterdayArray.wind_spd;
       let yesterdayTemp = yesterdayArray.temp;
        let yesterdayHigh = yesterdayArray.max_temp;
       let yesterdayLow = yesterdayArray.min_temp;
      let nowMinusDay = (Date.now()-86400000);
   

       
      
      
    //get yesterday info

    //Save yesterday info
       document.getElementById("yesterdayTemp").innerText = yesterdayTemp;
       document.getElementById("yesterdayHigh").innerText = yesterdayHigh;
       document.getElementById("yesterdayLow").innerText = yesterdayLow;
       document.getElementById("yesterdayWind").innerText = yesterdayWind;
       document.getElementById("yesterdayDay").innerText = date;



  })

    //Get today weather info api call
fetch(`https://api.weatherbit.io/v2.0/current?postal_code=44135&country=US&units=I&key=e1e7b7d46da0477aaa6ae46a3f9c6b68`) 
.then((response)=> response.json())
    .then((json)=>{
     //Get today info
        let todayArray= json.data[0];
        let todayTemp = todayArray.temp;
        var todayWind = todayArray.wind_spd;
        let cityName = todayArray.city_name;
        let  todayDescription = todayArray.weather.description;
       var  testVar = 11111111111;
     //Save today info
         document.getElementById("cityName").innerText = cityName;
        document.getElementById("todayTemp").innerText = todayTemp;
       // document.getElementById("todayWind").innerText = testVar;
        document.getElementById("todayDescription").innerText = todayDescription;
 
   })

   document.getElementById("todayWind").innerText = testVar;

};