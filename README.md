# weatherapp

Esta aplicacion se realizo utilizando una estructura HTML, estilado con CSS y se agrego funcionalidad con Javascript.

Se consumen datos de una API, openweathermap.org, y se presentan algunos datos en pantalla a traves de la manipulacion del DOM, reemplazando contenidos de elementos HTML

Para obtener los datos de la API se utilizo una peticion HTTP asincrona a traves de fetch y se obtuvo acceso al archivo JSON.

La aplicacion presenta un input text en el cual se debe ingresar la ciudad buscada, seguidamente se debe presionar la tecla Enter.

Una vez encontrada la ciudad, se presentan algunos datos:

- Fecha Actual
- Temperatura Actual
- Icono de Temperatura (3 niveles: cold, warm y hot)
- Icono de clima (codigo de icono tomado desde la API y relacionado con el icono correspondiente (carpeta icons)
- Descrpicion del Clima: nubes, muy nuboso, cielo claro, etc
- Temperatura Maxima
- Temperatura Minima
- Ciudad, Pais.

Cabe aclarar que algunas ciudades no se encuentran, posiblemente la API solo muestre informacion de las ciudades mas importantes.

La aplicacion permite la busqueda de ciudades tanto en minusculas, mayusculas, incluso combinandolas.

Si la ciudad no es encontrada o se ingresa en forma erronea, se presenta un mensaje de error y se invita al usuario a realizar una nueva busqueda.
