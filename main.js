const API_KEY = "123cedf472ea7d740a81046892916adb";
const WEATHER_BASIC_API = "https://api.openweathermap.org/data/2.5/";
const theDiv = document.getElementById("my_div");

async function getTheWeather() {
  try {
    return await fetch(
      `${WEATHER_BASIC_API}weather?q=${cityName}&appid=${API_KEY}`
    ).then((res) => res.json());
  } catch (err) {
    alert(err);
  } finally {
  }
}

let cityName = cityNameSelect.value;
function printWeather() {
  getTheWeather(cityName).then((result) => {
    for (let item in result) {
      for(let key in result[item]){
        // theDiv.innerHTML += `<p>${}`
        theDiv.innerHTML += `<p>${key}: ${result[item]}</p>`;
      }
    }
  });
}
