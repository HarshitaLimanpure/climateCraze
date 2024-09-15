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
      
      console.log(new Date(data.sys.sunrise * 1000));
      let rise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
      let set = new Date(data.sys.sunset * 1000).toLocaleTimeString();
      let day = new Date(data.sys.sunset * 1000).toDateString();
      const now = new Date();

      console.log();

      console.log(data);
      $("#day").html(day);
      $("#rise").html("Sunrise - " + rise);
      $("#set").html("Sunset -   " + set);

      $("#outPut").html(data.weather[0].description);
      $("#name").html(data.name);
      $("#code").html(data.sys.country);
      $("#temp").html(data.main.temp);
      $("#humidity").html("Humidity : " + data.main.humidity);
      $("#min_temp").html("Min Temprature : " + data.main.temp_min);
      $("#max_temp").html("Max Temprature : " + data.main.temp_max);
      $("#visibility").html("Visibility : " + data.visibility / 1000);
      $("#wspeed").html("Wind Speed : " + data.wind.speed);
      $("#feels").html("Feels Like : " + data.main.feels_like);

      if (data.weather[0].main == "Clouds") {
        $(".image").attr("src", "images/clouds.png");
      } else if (data.weather[0].main == "Mist") {
        $(".image").attr("src", "images/mist.png");
      } else if (data.weather[0].main == "Clear") {
        $(".image").attr("src", "images/clear.png");
      } else if (data.weather[0].main == "Wind") {
        $(".image").attr("src", "images/Wind.png");
      } else if (data.weather[0].main == "Haze") {
        $(".image").attr("src", "images/haze.png");
      } else if (data.weather[0].main == "Humidity") {
        $(".image").attr("src", "images/humidity.png");
      } else if (data.weather[0].main == "Drizzle") {
        $(".image").attr("src", "images/drizzle.png");
      } else if (data.weather[0].main == "Snow") {
        $(".image").attr("src", "images/snow.png");
      } else if (data.weather[0].main == "Rain") {
        $(".image").attr("src", "images/rain.png");
      }
    }
  );
});
