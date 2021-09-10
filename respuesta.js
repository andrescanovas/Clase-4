let mostrar = document.querySelector("#boton");

let informacion = document.getElementById("informacionEnHtml");


mostrar.addEventListener('click',()=>{
    
    fetch('BBDD.json')
        .then (response => response.json())
        .then (baseDeDatos => {


            informacion.innerHTML = ""

            // POR CADA INDICE DE LA BASE DE DATOS (OSEA LO QUE SE CARGO DEL JS)
            for (let indice of baseDeDatos) {

                informacion.innerHTML += `
                <tr>
                    <th scope="row">${indice.id}</th>
                    <td>${indice.nombre}</td>
                    <td>${indice.apellido}</td>
                    <td>${indice.ocupacion}</td>
                <tr>`





            }


        })


}




)



