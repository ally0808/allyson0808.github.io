// Definimos la ruta de donde consultaremos los recursos
const API_URL = 'https://jsonplaceholder.typicode.com/';

// Obtenemos el elemento del DOM HTML donde arrojaremos la info
const HTMLResponse = document.querySelector('#appposts');

// Creamos la tabla y sus encabezados
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

// Agregamos los encabezados a la tabla
const headers = ['userID', 'id', 'title', 'body'];
const tr = document.createElement('tr');
headers.forEach(header => {
  const th = document.createElement('th');
  th.appendChild(document.createTextNode(header));
  tr.appendChild(th);
});
thead.appendChild(tr);
table.appendChild(thead);

// Petición a la API y agregamos los datos a la tabla
fetch(`${API_URL}/posts`)
  .then(response => response.json())
  .then((posts) => {
    posts.forEach((post) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${post.userId}</td>
        <td>${post.id}</td>
        <td>${post.title}</td>
        <td>${post.body}</td>
      `;
      tbody.appendChild(row);
    });
    table.appendChild(tbody);
    // Al final agregamos la tabla dentro del div obtenido
    HTMLResponse.appendChild(table);
  }).catch((error) => {
    console.error('Error en la solicitud:', error);
  });