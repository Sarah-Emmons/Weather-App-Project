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
let sixFromNow = days[now.getDay() + 6];

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
if (sixFromNow === undefined) {
  sixFromNow = days[now.getDay() + 6 - 7];
}

let todayDay = document.querySelector("#today-day");
let dayOne = document.querySelector(".day1");
let dayTwo = document.querySelector(".day2");
let dayThree = document.querySelector(".day3");
let dayFour = document.querySelector(".day4");
let dayFive = document.querySelector(".day5");
let daySix = document.querySelector(".day6");
todayDay.innerHTML = day;
dayOne.innerHTML = tomorrow;
dayTwo.innerHTML = dayAfterTomorrow;
dayThree.innerHTML = threeFromNow;
dayFour.innerHTML = fourFromNow;
dayFive.innerHTML = fiveFromNow;
daySix.innerHTML = sixFromNow;

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
let dayOneIcon = document.querySelector(".card-body-1");
let dayTwoHigh = document.querySelector("#day-two-temp-high");
let dayTwoLow = document.querySelector("#day-two-temp-low");
let dayTwoIcon = document.querySelector(".card-body-2");
let dayThreeHigh = document.querySelector("#day-three-temp-high");
let dayThreeLow = document.querySelector("#day-three-temp-low");
let dayThreeIcon = document.querySelector(".card-body-3");
let dayFourHigh = document.querySelector("#day-four-temp-high");
let dayFourLow = document.querySelector("#day-four-temp-low");
let dayFourIcon = document.querySelector(".card-body-4");
let dayFiveHigh = document.querySelector("#day-five-temp-high");
let dayFiveLow = document.querySelector("#day-five-temp-low");
let dayFiveIcon = document.querySelector(".card-body-5");
let daySixHigh = document.querySelector("#day-six-temp-high");
let daySixLow = document.querySelector("#day-six-temp-low");
let daySixIcon = document.querySelector(".card-body-6");
let celciusButton = document.querySelector("#celcius");
let fahrenheitButton = document.querySelector("#fahrenheit");
let nowIcon = document.querySelector("#current-icon");

//initial page load
function initialForecast(response) {
  console.log(response);
  let city = response.data.city;
  let country = response.data.country;
  let h1 = document.querySelector(".city-header");
  let initalTemp = Math.round(response.data.daily[0].temperature.day);
  let initialHigh = Math.round(response.data.daily[0].temperature.maximum);
  let initialLow = Math.round(response.data.daily[0].temperature.minimum);
  let initialCondition = response.data.daily[0].condition.description;
  let initialWind = Math.round(response.data.daily[0].wind.speed);
  let initialHumidity = Math.round(response.data.daily[0].temperature.humidity);
  let initialIcon = response.data.daily[0].condition.icon_url;
  let d1High = Math.round(response.data.daily[1].temperature.maximum);
  let d1Low = Math.round(response.data.daily[1].temperature.minimum);
  let d1Icon = response.data.daily[1].condition.icon_url;
  let d2High = Math.round(response.data.daily[2].temperature.maximum);
  let d2Low = Math.round(response.data.daily[2].temperature.minimum);
  let d2Icon = response.data.daily[2].condition.icon_url;
  let d3High = Math.round(response.data.daily[3].temperature.maximum);
  let d3Low = Math.round(response.data.daily[3].temperature.minimum);
  let d3Icon = response.data.daily[3].condition.icon_url;
  let d4High = Math.round(response.data.daily[4].temperature.maximum);
  let d4Low = Math.round(response.data.daily[4].temperature.minimum);
  let d4Icon = response.data.daily[4].condition.icon_url;
  let d5High = Math.round(response.data.daily[5].temperature.maximum);
  let d5Low = Math.round(response.data.daily[5].temperature.minimum);
  let d5Icon = response.data.daily[5].condition.icon_url;
  let d6High = Math.round(response.data.daily[6].temperature.maximum);
  let d6Low = Math.round(response.data.daily[6].temperature.minimum);
  let d6Icon = response.data.daily[6].condition.icon_url;

  celciusTemp = initalTemp;
  celciusHigh = initialHigh;
  celciusLow = initialLow;
  metricWind = initialWind;
  celciusD1High = d1High;
  celciusD2High = d2High;
  celciusD3High = d3High;
  celciusD4High = d4High;
  celciusD5High = d5High;
  celciusD6High = d6High;
  celciusD1Low = d1Low;
  celciusD2Low = d2Low;
  celciusD3Low = d3Low;
  celciusD4Low = d4Low;
  celciusD5Low = d5Low;
  celciusD6Low = d6Low;

  h1.innerHTML = `${city}, ${country}`;
  nowTemp.innerHTML = `${initalTemp}°C`;
  nowHigh.innerHTML = `H: ${initialHigh}°C`;
  nowLow.innerHTML = `L: ${initialLow}°C`;
  nowCondition.innerHTML = initialCondition;
  nowWind.innerHTML = `${initialWind} km/h`;
  nowHumidity.innerHTML = `${initialHumidity}%`;
  nowIcon.setAttribute("src", initialIcon);
  dayOneHigh.innerHTML = `${d1High}°C`;
  dayOneLow.innerHTML = `${d1Low}°C`;
  dayOneIcon.setAttribute("style", `background-image: url(${d1Icon})`);
  dayTwoHigh.innerHTML = `${d2High}°C`;
  dayTwoLow.innerHTML = `${d2Low}°C`;
  dayTwoIcon.setAttribute("style", `background-image: url(${d2Icon})`);
  dayThreeHigh.innerHTML = `${d3High}°C`;
  dayThreeLow.innerHTML = `${d3Low}°C`;
  dayThreeIcon.setAttribute("style", `background-image: url(${d3Icon})`);
  dayFourHigh.innerHTML = `${d4High}°C`;
  dayFourLow.innerHTML = `${d4Low}°C`;
  dayFourIcon.setAttribute("style", `background-image: url(${d4Icon})`);
  dayFiveHigh.innerHTML = `${d5High}°C`;
  dayFiveLow.innerHTML = `${d5Low}°C`;
  dayFiveIcon.setAttribute("style", `background-image: url(${d5Icon})`);
  daySixHigh.innerHTML = `${d6High}°C`;
  daySixLow.innerHTML = `${d6Low}°C`;
  daySixIcon.setAttribute("style", `background-image: url(${d6Icon})`);

  function timestamp(response) {
    let time = new Date(response.data.time * 1000);
    let hours = time.getHours();
    let minutes = ("0" + time.getMinutes()).slice(-2);
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

  let timeUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${forecastKey}`;
  axios.get(timeUrl).then(timestamp);
}

let units = "metric";
let city = "Edmonton";
let forecastKey = "3a40dbd3f099ea4205eb9b6fb6f44ot3";
let forecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${forecastKey}`;
axios.get(forecastUrl).then(initialForecast);
//console.log(forecastUrl);

//Search Bar Functionality
function searchBar(event) {
  function searchForecast(response) {
    let searchLocationTemp = Math.round(response.data.daily[0].temperature.day);
    let searchLocationHigh = Math.round(
      response.data.daily[0].temperature.maximum
    );
    let searchLocationLow = Math.round(
      response.data.daily[0].temperature.minimum
    );
    let searchLocationHumidity = Math.round(
      response.data.daily[0].temperature.humidity
    );
    let searchLocationWind = Math.round(response.data.daily[0].wind.speed);
    let searchCity = response.data.city;
    let searchCountry = response.data.country;
    let searchCondition = response.data.daily[0].condition.description;
    let searchIcon = response.data.daily[0].condition.icon_url;
    let d1High = Math.round(response.data.daily[1].temperature.maximum);
    let d1Low = Math.round(response.data.daily[1].temperature.minimum);
    let d1Icon = response.data.daily[1].condition.icon_url;
    let d2High = Math.round(response.data.daily[2].temperature.maximum);
    let d2Low = Math.round(response.data.daily[2].temperature.minimum);
    let d2Icon = response.data.daily[2].condition.icon_url;
    let d3High = Math.round(response.data.daily[3].temperature.maximum);
    let d3Low = Math.round(response.data.daily[3].temperature.minimum);
    let d3Icon = response.data.daily[3].condition.icon_url;
    let d4High = Math.round(response.data.daily[4].temperature.maximum);
    let d4Low = Math.round(response.data.daily[4].temperature.minimum);
    let d4Icon = response.data.daily[4].condition.icon_url;
    let d5High = Math.round(response.data.daily[5].temperature.maximum);
    let d5Low = Math.round(response.data.daily[5].temperature.minimum);
    let d5Icon = response.data.daily[5].condition.icon_url;
    let d6High = Math.round(response.data.daily[6].temperature.maximum);
    let d6Low = Math.round(response.data.daily[6].temperature.minimum);
    let d6Icon = response.data.daily[6].condition.icon_url;

    celciusTemp = searchLocationTemp;
    celciusHigh = searchLocationHigh;
    celciusLow = searchLocationLow;
    metricWind = searchLocationWind;
    celciusD1High = d1High;
    celciusD2High = d2High;
    celciusD3High = d3High;
    celciusD4High = d4High;
    celciusD5High = d5High;
    celciusD6High = d6High;
    celciusD1Low = d1Low;
    celciusD2Low = d2Low;
    celciusD3Low = d3Low;
    celciusD4Low = d4Low;
    celciusD5Low = d5Low;
    celciusD6Low = d6Low;

    let h1 = document.querySelector("h1");
    h1.innerHTML = `${searchCity}, ${searchCountry}`;
    nowTemp.innerHTML = `${searchLocationTemp}°C`;
    nowHigh.innerHTML = `H: ${searchLocationHigh}°C`;
    nowLow.innerHTML = `L: ${searchLocationLow}°C`;
    nowHumidity.innerHTML = `${searchLocationHumidity}%`;
    nowWind.innerHTML = `${searchLocationWind} km/h`;
    nowCondition.innerHTML = searchCondition;
    nowIcon.setAttribute("src", searchIcon);
    dayOneHigh.innerHTML = `${d1High}°C`;
    dayOneLow.innerHTML = `${d1Low}°C`;
    dayOneIcon.setAttribute("style", `background-image: url(${d1Icon})`);
    dayTwoHigh.innerHTML = `${d2High}°C`;
    dayTwoLow.innerHTML = `${d2Low}°C`;
    dayTwoIcon.setAttribute("style", `background-image: url(${d2Icon})`);
    dayThreeHigh.innerHTML = `${d3High}°C`;
    dayThreeLow.innerHTML = `${d3Low}°C`;
    dayThreeIcon.setAttribute("style", `background-image: url(${d3Icon})`);
    dayFourHigh.innerHTML = `${d4High}°C`;
    dayFourLow.innerHTML = `${d4Low}°C`;
    dayFourIcon.setAttribute("style", `background-image: url(${d4Icon})`);
    dayFiveHigh.innerHTML = `${d5High}°C`;
    dayFiveLow.innerHTML = `${d5Low}°C`;
    dayFiveIcon.setAttribute("style", `background-image: url(${d5Icon})`);
    daySixHigh.innerHTML = `${d6High}°C`;
    daySixLow.innerHTML = `${d6Low}°C`;
    daySixIcon.setAttribute("style", `background-image: url(${d6Icon})`);

    function timestamp(response) {
      let time = new Date(response.data.time * 1000);
      let hours = time.getHours();
      let minutes = ("0" + time.getMinutes()).slice(-2);
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

    let timeUrl = `https://api.shecodes.io/weather/v1/current?query=${searchCity}&key=${forecastKey}`;
    axios.get(timeUrl).then(timestamp);
  }

  event.preventDefault();
  let searchInput = document.querySelector("#city-search");
  let searchForecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${searchInput.value}&key=${forecastKey}`;
  let h1 = document.querySelector("h1");
  axios.get(searchForecastUrl).then(searchForecast);
  //console.log(searchForecastUrl);

  if (searchInput.value) {
    h1.innerHTML = searchInput.value;
  } else {
    h1.innerHTML = null;
    alert("Please enter a city.");
  }
  //console.log(apiUrl);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchBar);

//Current City Button
function cityClick() {
  function showForecast(response) {
    let currentLocationTemp = Math.round(
      response.data.daily[0].temperature.day
    );
    let currentLocationHigh = Math.round(
      response.data.daily[0].temperature.maximum
    );
    let currentLocationLow = Math.round(
      response.data.daily[0].temperature.minimum
    );
    let currentLocationHumidity = Math.round(
      response.data.daily[0].temperature.humidity
    );
    let currentLocationWind = Math.round(response.data.daily[0].wind.speed);
    let currentCity = response.data.city;
    let currentCountry = response.data.country;
    let currentCondition = response.data.daily[0].condition.description;
    let d1High = Math.round(response.data.daily[1].temperature.maximum);
    let d1Low = Math.round(response.data.daily[1].temperature.minimum);
    let d1Icon = response.data.daily[1].condition.icon_url;
    let d2High = Math.round(response.data.daily[2].temperature.maximum);
    let d2Low = Math.round(response.data.daily[2].temperature.minimum);
    let d2Icon = response.data.daily[2].condition.icon_url;
    let d3High = Math.round(response.data.daily[3].temperature.maximum);
    let d3Low = Math.round(response.data.daily[3].temperature.minimum);
    let d3Icon = response.data.daily[3].condition.icon_url;
    let d4High = Math.round(response.data.daily[4].temperature.maximum);
    let d4Low = Math.round(response.data.daily[4].temperature.minimum);
    let d4Icon = response.data.daily[4].condition.icon_url;
    let d5High = Math.round(response.data.daily[5].temperature.maximum);
    let d5Low = Math.round(response.data.daily[5].temperature.minimum);
    let d5Icon = response.data.daily[5].condition.icon_url;
    let d6High = Math.round(response.data.daily[6].temperature.maximum);
    let d6Low = Math.round(response.data.daily[6].temperature.minimum);
    let d6Icon = response.data.daily[6].condition.icon_url;

    celciusTemp = currentLocationTemp;
    celciusHigh = currentLocationHigh;
    celciusLow = currentLocationLow;
    metricWind = currentLocationWind;
    celciusD1High = d1High;
    celciusD2High = d2High;
    celciusD3High = d3High;
    celciusD4High = d4High;
    celciusD5High = d5High;
    celciusD6High = d6High;
    celciusD1Low = d1Low;
    celciusD2Low = d2Low;
    celciusD3Low = d3Low;
    celciusD4Low = d4Low;
    celciusD5Low = d5Low;
    celciusD6Low = d6Low;

    let h1 = document.querySelector("h1");
    h1.innerHTML = `${currentCity}, ${currentCountry}`;
    nowTemp.innerHTML = `${currentLocationTemp}°C`;
    nowHigh.innerHTML = `H: ${currentLocationHigh}°C`;
    nowLow.innerHTML = `L: ${currentLocationLow}°C`;
    nowHumidity.innerHTML = `${currentLocationHumidity}%`;
    nowWind.innerHTML = `${currentLocationWind} km/h`;
    nowCondition.innerHTML = currentCondition;
    let currentIcon = response.data.daily[0].condition.icon_url;
    nowIcon.setAttribute("src", currentIcon);
    dayOneHigh.innerHTML = `${d1High}°C`;
    dayOneLow.innerHTML = `${d1Low}°C`;
    dayOneIcon.setAttribute("style", `background-image: url(${d1Icon})`);
    dayTwoHigh.innerHTML = `${d2High}°C`;
    dayTwoLow.innerHTML = `${d2Low}°C`;
    dayTwoIcon.setAttribute("style", `background-image: url(${d2Icon})`);
    dayThreeHigh.innerHTML = `${d3High}°C`;
    dayThreeLow.innerHTML = `${d3Low}°C`;
    dayThreeIcon.setAttribute("style", `background-image: url(${d3Icon})`);
    dayFourHigh.innerHTML = `${d4High}°C`;
    dayFourLow.innerHTML = `${d4Low}°C`;
    dayFourIcon.setAttribute("style", `background-image: url(${d4Icon})`);
    dayFiveHigh.innerHTML = `${d5High}°C`;
    dayFiveLow.innerHTML = `${d5Low}°C`;
    dayFiveIcon.setAttribute("style", `background-image: url(${d5Icon})`);
    daySixHigh.innerHTML = `${d6High}°C`;
    daySixLow.innerHTML = `${d6Low}°C`;
    daySixIcon.setAttribute("style", `background-image: url(${d6Icon})`);

    function timestamp(response) {
      let time = new Date(response.data.time * 1000);
      let hours = time.getHours();
      let minutes = ("0" + time.getMinutes()).slice(-2);
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

    let timeUrl = `https://api.shecodes.io/weather/v1/current?query=${currentCity}&key=${forecastKey}`;
    axios.get(timeUrl).then(timestamp);
  }

  function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let currentForecastUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${forecastKey}`;
    axios.get(currentForecastUrl).then(showForecast);
  }
  navigator.geolocation.getCurrentPosition(showPosition);
}
let currentCityButton = document.querySelector("#current-city");
currentCityButton.addEventListener("click", cityClick);

//fahrenheit and celcius button functionality

let celciusTemp = null;
let celciusHigh = null;
let celciusLow = null;
let metricWind = null;
let celciusD1High = null;
let celciusD2High = null;
let celciusD3High = null;
let celciusD4High = null;
let celciusD5High = null;
let celciusD6High = null;
let celciusD1Low = null;
let celciusD2Low = null;
let celciusD3Low = null;
let celciusD4Low = null;
let celciusD5Low = null;
let celciusD6Low = null;

function fahrenheitConversion() {
  let fahrenheitTemp = Math.round(celciusTemp * (9 / 5) + 32);
  let fahrenheitHigh = Math.round(celciusHigh * (9 / 5) + 32);
  let fahrenheithLow = Math.round(celciusLow * (9 / 5) + 32);
  let imperialWind = Math.round(metricWind / 1.609);
  let fahrD1High = Math.round(celciusD1High * (9 / 5) + 32);
  let fahrD2High = Math.round(celciusD2High * (9 / 5) + 32);
  let fahrD3High = Math.round(celciusD3High * (9 / 5) + 32);
  let fahrD4High = Math.round(celciusD4High * (9 / 5) + 32);
  let fahrD5High = Math.round(celciusD5High * (9 / 5) + 32);
  let fahrD6High = Math.round(celciusD6High * (9 / 5) + 32);
  let fahrD1Low = Math.round(celciusD1Low * (9 / 5) + 32);
  let fahrD2Low = Math.round(celciusD2Low * (9 / 5) + 32);
  let fahrD3Low = Math.round(celciusD3Low * (9 / 5) + 32);
  let fahrD4Low = Math.round(celciusD4Low * (9 / 5) + 32);
  let fahrD5Low = Math.round(celciusD5Low * (9 / 5) + 32);
  let fahrD6Low = Math.round(celciusD6Low * (9 / 5) + 32);
  //console.log(fahrenheitTemp);
  nowTemp.innerHTML = `${fahrenheitTemp}°F`;
  nowHigh.innerHTML = `H: ${fahrenheitHigh}°F`;
  nowLow.innerHTML = `L: ${fahrenheithLow}°F`;
  nowWind.innerHTML = `${imperialWind} mph`;
  dayOneHigh.innerHTML = `${fahrD1High}°F`;
  dayOneLow.innerHTML = `${fahrD1Low}°F`;
  dayTwoHigh.innerHTML = `${fahrD2High}°F`;
  dayTwoLow.innerHTML = `${fahrD2Low}°F`;
  dayThreeHigh.innerHTML = `${fahrD3High}°F`;
  dayThreeLow.innerHTML = `${fahrD3Low}°F`;
  dayFourHigh.innerHTML = `${fahrD4High}°F`;
  dayFourLow.innerHTML = `${fahrD4Low}°F`;
  dayFiveHigh.innerHTML = `${fahrD5High}°F`;
  dayFiveLow.innerHTML = `${fahrD5Low}°F`;
  daySixHigh.innerHTML = `${fahrD6High}°F`;
  daySixLow.innerHTML = `${fahrD6Low}°F`;
}

function celciusConversion() {
  nowTemp.innerHTML = `${celciusTemp}°C`;
  nowHigh.innerHTML = `H: ${celciusHigh}°C`;
  nowLow.innerHTML = `L: ${celciusLow}°C`;
  nowWind.innerHTML = `${metricWind} km/h`;
  dayOneHigh.innerHTML = `${celciusD1High}°C`;
  dayOneLow.innerHTML = `${celciusD1Low}°C`;
  dayTwoHigh.innerHTML = `${celciusD2High}°C`;
  dayTwoLow.innerHTML = `${celciusD2Low}°C`;
  dayThreeHigh.innerHTML = `${celciusD3High}°C`;
  dayThreeLow.innerHTML = `${celciusD3Low}°C`;
  dayFourHigh.innerHTML = `${celciusD4High}°C`;
  dayFourLow.innerHTML = `${celciusD4Low}°C`;
  dayFiveHigh.innerHTML = `${celciusD5High}°C`;
  dayFiveLow.innerHTML = `${celciusD5Low}°C`;
  daySixHigh.innerHTML = `${celciusD6High}°C`;
  daySixLow.innerHTML = `${celciusD6Low}°C`;
}

celciusButton.addEventListener("click", celciusConversion);
fahrenheitButton.addEventListener("click", fahrenheitConversion);
