class Weather {
    constructor(city) {
        this.apiKey = '03c4758d10fd43b88c1160027210905'; // APIWeather API KEY

        // this.apiKey = 'fefa3094b5179a5209c7fa545cbbccb1';
        this.city = city;
    }
    

    // Fetch weather from API
    async getWeather() {
        const weatherResponse = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}&aqi=no`);

        // const weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/find?q=${this.city}&appid=${this.apiKey}`);

        const response = await weatherResponse.json();

        return response;
        // return response.list;
    }

    // Change Weather Location
    changeLocation(city) {
        this.city = city;
    }
}