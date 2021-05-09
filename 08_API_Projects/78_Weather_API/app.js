const weather = new Weather('Delhi');

// weather.changeLocation('Varanasi');
document.addEventListener('DOMContentLoaded',getWeather )


function getWeather() {
    weather.getWeather(weather)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
}
