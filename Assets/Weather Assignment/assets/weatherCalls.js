let locationsArray = ["London", "Paris", "New York"];
document.addEventListener("load", generatebuttons());
    function generatebuttons(){
        $("#masterBar").empty();
        for (let i=0; i<locationsArray.length; i++){
            let parentListing = $("<li>").attr("class", "nav-item");
            let locationName = $("<a>")
            locationName.attr("class", "nav-link");
            locationName.text(locationsArray[i]);
            parentListing.append(locationName);
            $("#masterBar").append(parentListing);
        }
    }
$("#submit").on("click",
function findData(){
  let locationRequested = $("#UserWeatherInput").val();
  console.log(locationRequested);

  let lon= [];
  let lat= [];

  let WeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q="+locationRequested+"&appid=5eb3252bbfc0fe69ca69262ccbc4431d";
  $.ajax({
    url:WeatherUrl,
    method:"GET"
  }).then(function(response){
    console.log(response);
      $("#locationTitle").text(response.name);
      $("#tempature").text("Tempature "+ (Math.floor((((response.main.temp-273.15)*1.8)+32)))+" F");
      $("#humidity").text("Humidity "+response.main.humidity + "%");
      $("#windSpeed").text("Wind Speed "+response.wind.speed + " mph");
      $("#mainImage").attr("src", "http://openweathermap.org/img/wn/"+response.weather[0].icon+"@2x.png")
      lon.push(response.coord.lon);
      lat.push(response.coord.lat);
      getUVIndex();
  });

function getUVIndex(){
  let UVUrl = "https://api.openweathermap.org/data/2.5/uvi?lat="+lat[0]+"&lon="+lon[0]+"&appid=5eb3252bbfc0fe69ca69262ccbc4431d";
  $.ajax({
    url:UVUrl,
    method:"GET"
  }).then(function(response){
    console.log(response)
    $("#uvIndex").text("UV Index "+response.value);
    lon.pop();
    lat.pop();
  });
}

  let forecastUrl = "http://api.openweathermap.org/data/2.5/forecast?q="+locationRequested+"&appid=5eb3252bbfc0fe69ca69262ccbc4431d";
  $.ajax({
    url:forecastUrl,
    method:"GET"
  }).then(function(response){
      console.log(response);
      for(let i=0; i < 6; i++){
          let dayDivider= ((i*8)-i);
        $("#CityName"+i).text(response.city.name);
          let tempHigh = (((Math.floor(response.list[dayDivider].main.temp_max-273.15)*1.8)+32))+" F";
          let tempLow = (((Math.floor(response.list[dayDivider].main.temp_min-273.15)*1.8)+32))+" F";
        $("#tempature"+i+"High").text("High "+tempHigh);
        $("#tempature"+i+"Low").text("Low "+tempLow);
          let rawDate = response.list[dayDivider].dt;
          let readableDate = new Date(rawDate*1000);
          let day = readableDate.getDate();
          let month = readableDate.getMonth()+1;
          let date = month + "/" + day;
        $("#Date"+i).text("Date"+date);        
          let iconlink = "http://openweathermap.org/img/wn/"+response.list[dayDivider].weather[0].icon+"@2x.png"
        $("#image"+i).attr("src", iconlink);
        $("#Humidity"+i).text("Humidity "+response.list[dayDivider].main.humidity+"%");


    };
  });

    if ($("#UserWeatherInput")!==undefined){
    locationsArray.push($("#UserWeatherInput").val());
    generatebuttons();
    };
});

$(".nav-item").on("click",
function findButtonData(){
  let locationRequested = $(this).text();
  console.log(locationRequested);

  let lon= [];
  let lat= [];

  let WeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q="+locationRequested+"&appid=5eb3252bbfc0fe69ca69262ccbc4431d";
  $.ajax({
    url:WeatherUrl,
    method:"GET"
  }).then(function(response){
    console.log(response);
      $("#locationTitle").text(response.name);
      $("#tempature").text("Tempature "+ (Math.floor((((response.main.temp-273.15)*1.8)+32)))+" F");
      $("#humidity").text("Humidity "+response.main.humidity + "%");
      $("#windSpeed").text("Wind Speed "+response.wind.speed + " mph");
      $("#mainImage").attr("src", "http://openweathermap.org/img/wn/"+response.weather[0].icon+"@2x.png")
      lon.push(response.coord.lon);
      lat.push(response.coord.lat);
      getUVIndex();
  });

function getUVIndex(){
  let UVUrl = "https://api.openweathermap.org/data/2.5/uvi?lat="+lat[0]+"&lon="+lon[0]+"&appid=5eb3252bbfc0fe69ca69262ccbc4431d";
  $.ajax({
    url:UVUrl,
    method:"GET"
  }).then(function(response){
    console.log(response)
    $("#uvIndex").text("UV Index "+response.value);
    lon.pop();
    lat.pop();
  });
}

  let forecastUrl = "http://api.openweathermap.org/data/2.5/forecast?q="+locationRequested+"&appid=5eb3252bbfc0fe69ca69262ccbc4431d";
  $.ajax({
    url:forecastUrl,
    method:"GET"
  }).then(function(response){
      console.log(response);
      for(let i=0; i < 6; i++){
          let dayDivider= ((i*8)-i);
        $("#CityName"+i).text(response.city.name);
          let tempHigh = (((Math.floor(response.list[dayDivider].main.temp_max-273.15)*1.8)+32))+" F";
          let tempLow = (((Math.floor(response.list[dayDivider].main.temp_min-273.15)*1.8)+32))+" F";
        $("#tempature"+i+"High").text("High "+tempHigh);
        $("#tempature"+i+"Low").text("Low "+tempLow);
          let rawDate = response.list[dayDivider].dt;
          let readableDate = new Date(rawDate*1000);
          let day = readableDate.getDate();
          let month = readableDate.getMonth()+1;
          let date = month + "/" + day;
        $("#Date"+i).text("Date"+date);        
          let iconlink = "http://openweathermap.org/img/wn/"+response.list[dayDivider].weather[0].icon+"@2x.png"
        $("#image"+i).attr("src", iconlink);
        $("#Humidity"+i).text("Humidity "+response.list[dayDivider].main.humidity+"%");


    };
  });

    if ($("#UserWeatherInput")!==undefined){
    locationsArray.push($("#UserWeatherInput").val());
    generatebuttons();
    };
  });