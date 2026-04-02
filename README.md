# Weather Check

Weather Check is a web-based application that retrieves and displays current weather information for any city and country using the OpenWeatherMap API. Users can see temperature, humidity, dew point, wind speed, “feels like” temperature, weather description, and an icon representing the weather. The app allows seamless location changes without reloading the page.

---

## Features

- Fetches real-time weather data via the OpenWeatherMap API
- Displays temperature in Celsius (can be extended to Fahrenheit)
- Shows additional weather details: humidity, dew point, wind speed, “feels like” temperature
- Dynamic user interface updates without page reload
- Location change via modal input

---

## Technologies Used

- HTML5 & CSS3 (Bootstrap 4)  
- JavaScript (ES6+)  
- Fetch API for HTTP requests  
- OpenWeatherMap API  
- jQuery & Popper.js for modal functionality

---

## Setup Instructions

1. Clone the repository:  
   ```bash
   git clone https://github.com/YOUR_USERNAME/WeatherJS.git
   ```
2. Open index.html in a web browser.
3. Optionally, replace the API key in weather.js with your own OpenWeatherMap API key:
   ```bash
   this.key = 'YOUR_API_KEY';
   ```
4. Enter a city and country to view the weather.
   
---

# File Structure
WeatherJS/
├── index.html        # Main HTML file

├── app.js            # Entry point, initializes UI and API calls

├── ui.js             # Handles dynamic DOM updates

├── weather.js        # Fetches weather data from the API

└── README.md         # Project documentation

---

# Usage

Launch the app in a browser.
View weather data for the default location.
Click "Change Location" to enter a new city and country.
Weather data updates dynamically on the page.
Screenshots

---

# License

This project is licensed under the MIT License. See the LICENSE
 file for details.
