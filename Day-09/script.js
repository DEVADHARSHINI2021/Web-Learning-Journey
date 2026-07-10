const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const wind = document.getElementById("wind");
const weather = document.getElementById("weather");

async function getWeather() {

    const city = cityInput.value.trim();

    if(city === ""){
        alert("Enter a city name");
        return;
    }

    try{

        const geoResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
        );

        const geoData = await geoResponse.json();

        if(!geoData.results){
            alert("City not found");
            return;
        }

        const latitude = geoData.results[0].latitude;
        const longitude = geoData.results[0].longitude;
        const location = geoData.results[0].name;

        const weatherResponse = await fetch(
`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,weather_code`
        );

        const weatherData = await weatherResponse.json();

        cityName.textContent = location;

        temperature.textContent =
            "🌡 Temperature : " +
            weatherData.current.temperature_2m +
            " °C";

        wind.textContent =
            "🌬 Wind Speed : " +
            weatherData.current.wind_speed_10m +
            " km/h";

        weather.textContent =
            "☁ Weather Code : " +
            weatherData.current.weather_code;

    }

    catch(error){

        alert("Something went wrong");

        console.log(error);

    }

}

searchBtn.addEventListener("click", getWeather);