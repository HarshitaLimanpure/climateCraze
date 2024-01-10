$("#getWeather").click((a) => {
  $.get(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${$(
      "#cityName"
    ).val()}&temp=${$(
      "#outPut"
    ).html()} &appid=fc709bd47a4e2cb9bbdedd53f5ab9314`,
    function (data, status, temp) {
      console.log(data.weather[0].description);
      console.log(status);

      console.log(data);

      $("#outPut").html(data.weather[0].description);
      $("#name").html(data.name);
      $("#temp").html("Temprature : "+data.main.temp + "°C");
      $("#humidity").html("Humidity :"+data.main.humidity);

      if (data.weather[0].main == "Clouds") {
        $(".image").attr("src", "images/clouds.png");
      } else if (data.weather[0].main == "Mist") {
        $(".image").attr("src", "images/mist.png");
      } else if (data.weather[0].main == "Clear") {
        $(".image").attr("src", "images/clear.png");
      }else if(data.weather[0].main == "Wind"){
        $(".image").attr("src", "images/Wind.png");
      }else if(data.weather[0].main == "Haze"){
        $(".image").attr("src", "images/haze.png");
      }
      else if(data.weather[0].main == "Humidity"){
        $(".image").attr("src", "images/humidity.png");
      }
      else if(data.weather[0].main == "Drizzle"){
        $(".image").attr("src", "images/drizzle.png");
      }
       else if (data.weather[0].main == "Snow") {
        $(".image").attr("src", "images/snow.png");
      } else if (data.weather[0].main == "Rain") {
        $(".image").attr("src", "images/rain.png");
      }
    }
  );
});
