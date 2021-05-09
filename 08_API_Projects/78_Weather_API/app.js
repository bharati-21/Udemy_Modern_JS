const weather = new Weather('London');
const ui = new UI();

// weather.changeLocation('Varanasi');
document.addEventListener('DOMContentLoaded',getWeather )


function getWeather() {
    weather.getWeather(weather)
        .then((response) => {
            ui.paint(response);
        })
        .catch((err) => {
            console.log(err);
        });
}
