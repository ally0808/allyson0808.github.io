//Definimos la ruta de donde consultaremos los recursos 
const API_URL = "https://jsonplaceholder.typicode.com/";
//obtenemoa el elemento del DOM html donde arrojaremos la info
const   HTML_Response= document.querySelector("#app");

const ul= document.createElement("ul");


fetch(`${API_URL}/USERS`)
      .then(response => response.json())
      .then((users) => {
        users.forEach((user) => {
            // creamos el elemento li para almacenar cada usuario en ul
            let elem= document.createElement("li");
            elem.appendChild(
                document.createTextNode(`${user.name} - ${user.email} - ${user.phone} - ${user.company.name}`)
            );
            //agregamos el nombredentro de li y denrtro del ul
                ul.appendChild(elem);
        });
        //agregamos el uldentroddel div obtenido
        HTML_Response.appendChild(ul)
      });