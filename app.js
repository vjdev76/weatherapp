const api = {
    key: '32717da62d6e5977d39dce3d4725a423',
    url: 'https://api.openweathermap.org/data/2.5/weather'
}
const card = document.getElementById('card');

const city = document.getElementById('city');
const date = document.getElementById('date');
const tempImg = document.getElementById('temp-img');
const temp= document.getElementById('temp');
const weather = document.getElementById('weather');
const range = document.getElementById('range');

function updateImages (data){
    const temp = tempConvertion(data.main.temp);
    let src = 'images/weather_icon_warm.svg'
    if (temp > 30){
        src = 'images/weather_icon_hot.svg';
    } else if (temp < 30 && temp > 20){
        src = 'images/weather_icon_warm.svg';
    } else if (temp < 20){
        src = 'images/weather_icon_cold.svg';
    }
    tempImg.src = src;
}


async function search(query) { // obtener informacion de la API
    try {
      const response = await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`); 
      const data = await response.json();
      console.log(data);
      card.style.display = 'block';
      document.getElementsByTagName("input")[0].value = "";
      city.innerHTML = `${data.name}, ${data.sys.country}`;
      date.innerHTML = (new Date()).toLocaleDateString();
      temp.innerHTML = `${tempConvertion(data.main.temp)} °C`;
      weather.innerHTML = data.weather[0].description;
      
      elementWeather = document.getElementById("img_weather");
      elementWeather.style.display = 'none';
      elementFooter = document.getElementById("footer");
      elementFooter.style.display = 'block';
      
      let locationIcon = document.querySelector('.weather-icon');
      const {icon} = data.weather[0];
      locationIcon.innerHTML = `<img src="icons/${icon}.png">`;
      
      
      range.innerHTML = `Min ${tempConvertion(data.main.temp_min)} °C / Max ${tempConvertion(data.main.temp_max)} °C`
      updateImages(data);
    } catch (err) {
        console.log(err);
        alert('Intenta otra busqueda, no encontramos tu ciudad');
    }
}

function onSubmit (event){
    event.preventDefault();
    search(searchbox.value);
}
function tempConvertion (kelvin){
    return Math.round (kelvin - 273.15);

}

const searchform = document.getElementById('search-form'); //capturo la accion de busqueda de la ciudad
const searchbox = document.getElementById('search-box'); //capturo la ciudad buscada
searchform.addEventListener('submit', onSubmit, true);
