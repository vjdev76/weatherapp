const api = {
    key: '32717da62d6e5977d39dce3d4725a423',
    url: 'https://api.openweathermap.org/data/2.5/weather'
}

async function search(query) { // obtener informacion de la API
    try {
      const response = await fetch(`${api.url}?q=${query}&appid${api.key}&lang=es`); 
      const data = await response.json();
      console.log(data);
    } catch (err) {
        console.log(err);
        alert('Hubo un error');
    }
}

function onSubmit (event){
    event.preventDefault();
    search(searchbox.value);
}

const form = document.getElementById('search-form'); //capturo la accion de busqueda de la ciudad
const searchbox = document.getElementById('search-box'); //capturo la ciudad buscada
form.addEventListener('submit', onSubmit, true);