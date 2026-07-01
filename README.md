# 🌦 Real-Time Weather Dashboard

A responsive Weather Dashboard built using **HTML, CSS, and JavaScript** that fetches real-time weather data from a public REST API using asynchronous JavaScript.

## 📌 Project Overview
This project allows users to search weather information by entering a city name. It retrieves live weather data from the OpenWeatherMap API and dynamically displays weather metrics such as temperature, humidity, wind speed, and weather conditions.

This project demonstrates the use of:
- Asynchronous JavaScript
- Fetch API
- RESTful APIs
- JSON Parsing
- Error Handling
- Dynamic DOM Manipulation

---

## ✨ Features
- 🔍 Search weather by city name
- 🌡 Display temperature in Celsius
- 💧 Show humidity percentage
- 🌬 Show wind speed
- ☁ Display weather condition with icon
- ⚡ Real-time API data fetching
- ❌ Error handling for invalid city names or failed requests
- 📱 Responsive modern UI

---

## 🛠 Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API
- Async/Await
- OpenWeatherMap API

---

## 🧠 Concepts Implemented

### 1. Asynchronous JavaScript
Used `async/await` to handle API requests without blocking execution.

Example:
```javascript
const response = await fetch(url);
```

### 2. Fetch API
Used to send HTTP requests to retrieve weather data.

### 3. REST API Integration
Integrated OpenWeatherMap REST API for live weather updates.

### 4. JSON Parsing
Parsed nested JSON data returned by the API.

Example:
```javascript
data.main.temp
data.main.humidity
data.wind.speed
```

### 5. Error Handling
Implemented `try-catch` to handle:
- Invalid city names
- Network failures
- API errors

---

## 📂 Project Structure

```bash
weather-dashboard/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 How to Run the Project
1. Clone this repository
```bash
git clone YOUR_REPOSITORY_LINK
```

2. Open project folder in VS Code

3. Install Live Server extension

4. Run `index.html`

---

## API Used
OpenWeatherMap API

Example API Endpoint:
```bash
https://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=YOUR_API_KEY&units=metric
```

---

## Future Improvements
- 5-day weather forecast
- Background changes based on weather
- Dark mode
- Geolocation support
- Better animations

---

## 👩‍💻 Author
Pradeepa
