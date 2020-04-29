class Weather {
    constructor(city, state) {
        this.apiKey = '93e9303b4c5a4666a2c94622202604';
        this.city = city;
        this.state = state;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city},${this.state}`);
        
        const jsonResponse = await response.json();
        
        return responseData.current_observation;
    }

    // Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}
