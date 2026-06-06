const API_KEY = "4387446e6f85531a8b72869d14fcfb58";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const weatherCard = document.getElementById("weatherCard");

const city = document.getElementById("city");
const description = document.getElementById("description");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const error = document.getElementById("error");

async function getWeather(cityName) {

    try {

        error.textContent = "";

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        displayWeather(data);

    } catch (err) {

        weatherCard.classList.add("hidden");
        error.textContent = err.message;

    }
}

function displayWeather(data) {

    city.textContent =
        `${data.name}, ${data.sys.country}`;

    description.textContent =
        data.weather[0].description;

    temperature.textContent =
        `${data.main.temp} °C`;

    humidity.textContent =
        `${data.main.humidity}%`;

    wind.textContent =
        `${data.wind.speed} m/s`;

    weatherCard.classList.remove("hidden");
}

searchBtn.addEventListener("click", () => {

    const cityName = cityInput.value.trim();

    if (cityName !== "") {
        getWeather(cityName);
    }
});

cityInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchBtn.click();
    }
});
