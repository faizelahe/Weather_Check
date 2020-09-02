class UI {

    showWeather(weather) {

        let city = weather.name;
        let description = weather.weather[0].description;
        let humidity = Math.round(weather.main.humidity);
        let dewpoint = Math.round(weather.main.temp);
        let feelsLike = Math.round(weather.main.feels_like);
        let windSpeed = Math.round(weather.wind.speed);

        document.querySelector('#w-location').innerHTML = `${city}`;
        document.querySelector('#w-desc').innerHTML = `${description}`;
        // document.querySelector('#w-icon').innerHTML = `<i class="fas fa-cloud-sun"></i>`
        document.querySelector('#w-icon').src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
        document.querySelector('#w-humidity').innerHTML = `Humidity: ${humidity}%`;
        document.querySelector('#w-dewpoint').innerHTML = `Dew Point: ${dewpoint}°C`;
        document.querySelector('#w-feels-like').innerHTML = `Feels Like: ${feelsLike}°C`;
        document.querySelector('#w-wind').innerHTML = `Wind Speed: ${windSpeed} kmph`;

    }
}

// <i class="fas fa-cloud-sun"></i>
