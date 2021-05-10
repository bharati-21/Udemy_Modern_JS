const storage = new Storage();
const weatherLoc = storage.getLocationData();

const weather = new Weather(weatherLoc);

const ui = new UI();


// weather.changeLocation('Varanasi');
document.addEventListener('DOMContentLoaded',getWeather )

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    weather.changeLocation(city);

    storage.setLocationData(city);

    getWeather();

    $('#locModal').modal('hide');
    document.getElementById('city').value = '';
});

function getWeather() {
    weather.getWeather(weather)
        .then((response) => {
            ui.paint(response);
        })
        .catch((err) => {
            console.log(err);
        });
}
