// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let nombreAmigo = '';

//función para agregar amigos
function agregarAmigo() {
    nombreAmigo = (document.getElementById('amigo').value).trim();
    

 // Validar amigos
    if (nombreAmigo == '') {
        alert('Ingrese un nombre');  
    } else {
        amigos.push(nombreAmigo);

     }

        console.log(nombreAmigo);
        console.log(amigos);

        //Limpiamos el input con la función de limpieza
        limpiarInput();
        mostrarListaDeAmigos();

    return
}

//función para limpiar el input
function limpiarInput() {

    document.querySelector('#amigo').value = ''
  
}

// funcion para mostrar en pantalla a los amigos que agregas a tu lista 
function mostrarListaDeAmigos() {

    // aqui conecto la lista de HTML con java por medio del ID de HTML
    let listaDeAmigosHtml = document.getElementById("listaAmigos");
    //Limpiamos lista
    listaDeAmigosHtml.innerHTML = '';

    //Recorremos la lista de amigos y creamos los elemetos <li> en html
    for (let i = 0; i<amigos.length ; i++) {

        //creamos los elementos de la lista
        let amigoIngresado = document.createElement('li');
        let texto = document.createTextNode(amigos[i]);
        amigoIngresado.appendChild(texto);

        //los agregamos a la lista hmtl
        listaDeAmigosHtml.appendChild(amigoIngresado);
    }
}
