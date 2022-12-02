//time and days
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let todayTime = document.querySelector("#weather-time");
let tomorrow = days[now.getDay() + 1];
let dayAfterTomorrow = days[now.getDay() + 2];
let threeFromNow = days[now.getDay() + 3];
let fourFromNow = days[now.getDay() + 4];
let fiveFromNow = days[now.getDay() + 5];

if (tomorrow === undefined) {
  tomorrow = days[now.getDay() + 1 - 7];
}
if (dayAfterTomorrow === undefined) {
  dayAfterTomorrow = days[now.getDay() + 2 - 7];
}
if (threeFromNow === undefined) {
  threeFromNow = days[now.getDay() + 3 - 7];
}
if (fourFromNow === undefined) {
  fourFromNow = days[now.getDay() + 4 - 7];
}
if (fiveFromNow === undefined) {
  fiveFromNow = days[now.getDay() + 5 - 7];
}

let todayDay = document.querySelector("#today-day");
let dayOne = document.querySelector(".day1");
let dayTwo = document.querySelector(".day2");
let dayThree = document.querySelector(".day3");
let dayFour = document.querySelector(".day4");
let dayFive = document.querySelector(".day5");
todayDay.innerHTML = day;
dayOne.innerHTML = tomorrow;
dayTwo.innerHTML = dayAfterTomorrow;
dayThree.innerHTML = threeFromNow;
dayFour.innerHTML = fourFromNow;
dayFive.innerHTML = fiveFromNow;

//generic definitions
let nowTemp = document.querySelector("#today-temp");
let nowHigh = document.querySelector("#today-high");
let nowLow = document.querySelector("#today-low");
let nowPrecipitation = document.querySelector("#precipitation");
let nowHumidity = document.querySelector("#humidity");
let nowWind = document.querySelector("#wind");
let nowCondition = document.querySelector("#weather-condition");
let dayOneHigh = document.querySelector("#day-one-temp-high");
let dayOneLow = document.querySelector("#day-one-temp-low");
let dayTwoHigh = document.querySelector("#day-two-temp-high");
let dayTwoLow = document.querySelector("#day-two-temp-low");
let dayThreeHigh = document.querySelector("#day-three-temp-high");
let dayThreeLow = document.querySelector("#day-three-temp-low");
let dayFourHigh = document.querySelector("#day-four-temp-high");
let dayFourLow = document.querySelector("#day-four-temp-low");
let dayFiveHigh = document.querySelector("#day-five-temp-high");
let dayFiveLow = document.querySelector("#day-five-temp-low");
let celciusButton = document.querySelector("#celcius");
let fahrenheitButton = document.querySelector("#fahrenheit");

//initial page load
function initialTemperature(response) {
  console.log(response);
  let city = response.data.name;
  let country = response.data.sys.country;
  let h1 = document.querySelector(".city-header");
  let initalTemp = Math.round(response.data.main.temp);
  let initialHigh = Math.round(response.data.main.temp_max);
  let initialLow = Math.round(response.data.main.temp_min);
  let initialCondition = response.data.weather[0].description;
  let initialWind = Math.round(response.data.wind.speed);
  let initialHumidity = response.data.main.humidity;
  let initialTimestamp = new Date(response.data.dt * 1000);

  let hours = initialTimestamp.getHours();
  let minutes = ("0" + initialTimestamp.getMinutes()).slice(-2);
  if (hours > 12) {
    hours = hours - 12;
    todayTime.innerHTML = `${hours}:${minutes} pm`;
  } else {
    if (hours === 12) {
      todayTime.innerHTML = `${hours}:${minutes} pm`;
    } else {
      todayTime.innerHTML = `${hours}:${minutes} am`;
    }
  }

  h1.innerHTML = `${city}, ${country}`;
  nowTemp.innerHTML = `${initalTemp}°C`;
  nowHigh.innerHTML = `${initialHigh}°C`;
  nowLow.innerHTML = `${initialLow}°C`;
  nowCondition.innerHTML = initialCondition;
  nowWind.innerHTML = `${initialWind} km/h`;
  nowHumidity.innerHTML = `${initialHumidity}%`;
}

let apiKey = "7583101ef9342f2512018b4f45d651e6";
let units = "metric";
let city = "Edmonton";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(initialTemperature);
console.log(apiUrl);

//Search Bar Functionality
function searchBar(event) {
  function showTemp(response) {
    console.log(response);
    let searchLocationTemp = Math.round(response.data.main.temp);
    let searchLocationHigh = Math.round(response.data.main.temp_max);
    let searchLocationLow = Math.round(response.data.main.temp_min);
    //let currentLocationPrecipitation = Math.round(response.data.precipitation.value);
    let searchLocationHumidity = Math.round(response.data.main.humidity);
    let searchLocationWind = Math.round(response.data.wind.speed);
    let searchCity = response.data.name;
    let searchCountry = response.data.sys.country;
    let searchCondition = response.data.weather[0].description;
    let nowTimestamp = new Date(response.data.dt * 1000);

    let hours = nowTimestamp.getHours();
    let minutes = ("0" + nowTimestamp.getMinutes()).slice(-2);
    if (hours > 12) {
      hours = hours - 12;
      todayTime.innerHTML = `${hours}:${minutes} pm`;
    } else {
      if (hours === 12) {
        todayTime.innerHTML = `${hours}:${minutes} pm`;
      } else {
        todayTime.innerHTML = `${hours}:${minutes} am`;
      }
    }

    let h1 = document.querySelector("h1");
    h1.innerHTML = `${searchCity}, ${searchCountry}`;
    nowTemp.innerHTML = `${searchLocationTemp}°C`;
    nowHigh.innerHTML = `H: ${searchLocationHigh}°C`;
    nowLow.innerHTML = `L: ${searchLocationLow}°C`;
    //nowPrecipitation = `${currentLocationPrecipitation}%`;
    nowHumidity.innerHTML = `${searchLocationHumidity}%`;
    nowWind.innerHTML = `${searchLocationWind} km/h`;
    nowCondition.innerHTML = searchCondition;
  }
  event.preventDefault();
  let searchInput = document.querySelector("#city-search");
  let searchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=${units}`;
  let h1 = document.querySelector("h1");
  console.log(searchInput);
  axios.get(searchUrl).then(showTemp);

  if (searchInput.value) {
    h1.innerHTML = searchInput.value;
  } else {
    h1.innerHTML = null;
    alert("Please enter a city.");
  }
  console.log(apiUrl);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", searchBar);

//Current City Button
function cityClick() {
  function showTemp(response) {
    console.log(response);
    let currentLocationTemp = Math.round(response.data.main.temp);
    let currentLocationHigh = Math.round(response.data.main.temp_max);
    let currentLocationLow = Math.round(response.data.main.temp_min);
    //let currentLocationPrecipitation = Math.round(response.data.precipitation.value);
    let currentLocationHumidity = Math.round(response.data.main.humidity);
    let currentLocationWind = Math.round(response.data.wind.speed);
    let currentCity = response.data.name;
    let currentCountry = response.data.sys.country;
    let currentCondition = response.data.weather[0].description;
    let h1 = document.querySelector("h1");
    h1.innerHTML = `${currentCity}, ${currentCountry}`;
    nowTemp.innerHTML = `${currentLocationTemp}°C`;
    nowHigh.innerHTML = `H: ${currentLocationHigh}°C`;
    nowLow.innerHTML = `L: ${currentLocationLow}°C`;
    //nowPrecipitation = `${currentLocationPrecipitation}%`;
    nowHumidity.innerHTML = `${currentLocationHumidity}%`;
    nowWind.innerHTML = `${currentLocationWind} km/h`;
    nowCondition.innerHTML = currentCondition;
    let currentTimestamp = new Date(response.data.dt * 1000);

    let hours = currentTimestamp.getHours();
    let minutes = ("0" + currentTimestamp.getMinutes()).slice(-2);
    if (hours > 12) {
      hours = hours - 12;
      todayTime.innerHTML = `${hours}:${minutes} pm`;
    } else {
      if (hours === 12) {
        todayTime.innerHTML = `${hours}:${minutes} pm`;
      } else {
        todayTime.innerHTML = `${hours}:${minutes} am`;
      }
    }
  }

  function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    axios.get(currentUrl).then(showTemp);
  }
  navigator.geolocation.getCurrentPosition(showPosition);
}
let currentCityButton = document.querySelector("#current-city");
currentCityButton.addEventListener("click", cityClick);
