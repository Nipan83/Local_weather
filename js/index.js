
document.getElementById("demo").innerHTML = Date();

function getDetails(){
  

  $.getJSON("https://ipinfo.io/json", function(json) {
    $("#city").html("Weather App | "+json.city);
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + json.city + "&units=metric&appid=d157f03ac73a8116bb482b1ebe3ceb1f", function (weather) {
     $("#get").html(weather.weather[0].description);
    $("#temp").html(weather.main.temp);
    $("#humidity").html("humidity: "+ weather.main.humidity);
    $("#pressure").html("pressure:"+ weather.main.pressure);
    $("#wind").html("wind speed: "+weather.wind.speed);

   
 
    
  });
  })
 
}
$(document).ready(function(){
  getDetails();
});