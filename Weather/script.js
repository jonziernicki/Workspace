function getYesterday(event){
    fetch("")
}


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

document.addEventListener("DOMContentLoaded", function() {
    loadTodayWeather()
  });
document.addEventListener("DOMContentLoaded", function() {
    loadYesterdayWeather()
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

  function loadTodayWeather(){
    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=44135,us&units=imperial&APPID=6695ee4afe2ca5a6f950397f981dd760`)
    .then((response)=> response.json())
   .then((json)=>{
    //Get today info
       let cityName = json.name;
       let todayTemp = json.main.temp;
       let todayWind = json.wind.speed;
       let weatherArray= json.weather[0];
       let todayDescription = weatherArray.description;
       let todayHigh = json.main.temp_max;
       let todayLow = json.main.temp_min;

    //Save today info
        document.getElementById("cityName").innerText = cityName;
       document.getElementById("todayTemp").innerText = todayTemp;
       document.getElementById("todayWind").innerText = todayWind;
       document.getElementById("todayDescription").innerText = todayDescription;
       document.getElementById("todayHigh").innerText = todayHigh;
       document.getElementById("todayLow").innerText = todayLow;

  })};

function loadYesterdayWeather() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=44135,us&units=imperial&APPID=6695ee4afe2ca5a6f950397f981dd760`)
    .then((response)=> response.json())
   .then((json)=>{
    //Get today info
       let yesterdayTemp = json.main.temp;
       let yesterdayWind = json.wind.speed;
       let weatherArray= json.weather[0];
       let yesterdayDescription = weatherArray.description;
        let yesterdayHigh = json.main.temp_max;
       let yesterdayLow = json.main.temp_min

    //get yesterday info
        let yeserdayTemp = 
    //Save today info
        document.getElementById("yesterdayTemp").innerText = yesterdayTemp;
       document.getElementById("yesterdayWind").innerText = yesterdayWind;
       document.getElementById("yesterdayDescription").innerText = yesterdayDecription;
       document.getElementById("yesterdayHigh").innerText = yesterdayHigh;
       document.getElementById("yesterdayLow").innerText = yesterdayLow;

  })};