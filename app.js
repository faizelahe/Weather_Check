let get = new Weather('Mississauga', 'Canada');
let ui = new UI;
document.addEventListener('DOMContentLoaded', () => {
    get.getWeather().then(weather => {
        ui.showWeather(weather);
    })
})


document.querySelector('#w-change-btn').addEventListener('click', (e) => {

    let city = document.querySelector('#city').value;
    let country = document.querySelector('#country').value;

    let get = new Weather(city, country);
    let ui = new UI;

    if (city != '' && country != '') {
        get.getWeather().then((weather) => {
            ui.showWeather(weather);
        });
    } else {

    }
    $('#locModal').modal('hide');
    e.preventDefault()
});