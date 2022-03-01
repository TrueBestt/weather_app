const searchCity = document.getElementById('SearchCity');
const city = document.getElementById('City');
const temp = document.getElementById('Temp');
const humidity = document.getElementById('Humidity');
const windSpeed = document.getElementById('WindSpeed');
const cloudsk = document.getElementById('Clouds');
const feelsLikeTemp = document.getElementById('FeelsLikeTemp');
const weatherWrapper = document.querySelector('.wrapper');
const placeholder = document.querySelector('.placeholderWrapper');
const errorText = document.querySelector('.errorMsg');

const API_KEY ='d3070636e1abad9578549f3aad766c90';

const getWeather = (e) => {
    const currentCity = e.target.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${API_KEY}`)
    .then(response => response.json())
    .then( weatherInfo )
    .catch(err => {
        errorText.textContent= "Nie znaleziono miasta";
        weatherWrapper.classList.remove('showItems');
        console.log(err);
    });

}

const weatherInfo = (weather) => {
    const {name, sys, main, wind, clouds} = weather

    console.log(weather)

    city.innerHTML = `${name} <span>${sys.country}</span>`;
    temp.textContent = Math.floor(main.temp - 272.15) + '°C';
    humidity.textContent = main.humidity + '%';
    windSpeed.textContent = wind.speed + 'm/s';
    cloudsk.textContent = clouds.all + "%";
    feelsLikeTemp.textContent = Math.floor(main.feels_like - 272.15) + '°C';

    errorText.textContent = "";
    placeholder.style.display="none";
    weatherWrapper.classList.add('showItems');

}


searchCity.addEventListener('change', (e) => getWeather(e) );