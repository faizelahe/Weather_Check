class Weather {

    constructor(city, country) {
        this.city = city;
        this.country = country;
        this.key = 'dd805e0871dadc66d8a97c61e97aa57d';
    }

    async getWeather() {
        const weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&appid=${this.key}`);
        const results = await weather.json();

        return results;
    }
}
