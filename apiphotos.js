// Definimos la ruta de donde consultaremos los recursos
const API_URL = 'https://jsonplaceholder.typicode.com/';

// Obtenemos el elemento del DOM HTML donde arrojaremos la info
const HTMLResponse = document.querySelector('#appphotos');

// Petición a la API y agregamos las fotos en divs
fetch(`${API_URL}/photos`)
  .then(response => response.json())
  .then((photos) => {
    photos.forEach((photo) => {
      // Creamos el div para almacenar cada foto
      let photoDiv = document.createElement('div');
      photoDiv.innerHTML = `<img src="${photo.thumbnailUrl}" alt="${photo.title}">`;
      // Agregamos el div dentro del contenedor HTMLResponse
      HTMLResponse.appendChild(photoDiv);
    });
  })
  .catch((error) => {
    console.error('Error en la solicitud:', error);
  });