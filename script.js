const apiKey = "93011f846fa43bad8f5482cece67b5f8";

const searchBtn = document.getElementById("searchBtn");
const weatherBox = document.getElementById("weatherBox");

searchBtn.addEventListener("click", function () {
   const city = document.getElementById("cityInput").value.trim();
    getWeather(city);
});

async function getWeather(city) {
    try {
        weatherBox.innerHTML = "Loading...";

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        displayWeather(data);

    } catch (error) {
        weatherBox.innerHTML = error.message;
    }
}

function displayWeather(data) {
    const icon = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

    weatherBox.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${iconUrl}" alt="weather icon">
        <p>🌡 Temperature: ${data.main.temp} °C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
        <p>☁ Condition: ${data.weather[0].description}</p>
    `;
}


const condition = data.weather[0].main.toLowerCase();

if (condition.includes("rain")) {
    document.body.style.background = "linear-gradient(135deg, #4b6cb7, #182848)";
}
else if (condition.includes("clear")) {
    document.body.style.background = "linear-gradient(135deg, #f7971e, #ffd200)";
}
else {
    document.body.style.background = "linear-gradient(135deg, #4facfe, #00f2fe)";
}


document.getElementById("cityInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        searchBtn.click();
    }
});

const icon = data.weather[0].icon;

weatherBox.innerHTML = "<p>Loading weather data...</p>";

