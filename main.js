const API_KEY = "123cedf472ea7d740a81046892916adb";
const WEATHER_BASIC_API = "https://api.openweathermap.org/data/2.5/";
const theDiv = document.getElementById("my_div");

async function getTheWeather() {

  try {
    return await fetch(
      `${WEATHER_BASIC_API}weather?q=${cityName.value}&appid=${API_KEY}`
    ).then((res) => res.json());
  } catch (err) {
    alert(err);
  } finally {
  }
  
}

function printWeather() {
  getTheWeather(cityName).then((result) => {
    for (let item in result) {
      for (let key in result[item]) {
        for (let res in item[key]) {
          theDiv.innerHTML += `<p>${item}:${key}</p>`;
        }
      }
    }
  });
}
