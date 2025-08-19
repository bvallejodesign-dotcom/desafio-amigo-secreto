// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let nombreAmigo = '';

//función para agregar amigos
function agregarAmigo() {
    nombreAmigo = (document.getElementById('amigo').value).trim();
    console.log(nombreAmigo);

 // Validar amigos
    if (nombreAmigo == '') {
        alert('Ingrese un nombre');  
    } else {
        amigos.push(nombreAmigo);
        console.log(amigos);
    }

    
    

}
