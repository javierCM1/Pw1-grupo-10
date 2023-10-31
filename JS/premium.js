const titulo=document.getElementById('titulo');
const botonAtras=document.getElementById('botonAtras');
const infoUsuario=document.getElementById('infoUsuario');

console.log(infoUsuario.innerHTML);
// Para volver al inicio desde el boton que dice "Atras"
const aInicioDesdeBotonAtras=botonAtras.addEventListener('click', () =>{
    event.preventDefault();
    window.location.href = 'vista-principal.html';
});


// Para volver al inicio desde el titulo del Header ("Spotilam planes premium")
const aInicioDesdeTitulo=titulo.addEventListener('click',() =>{
 window.location.href='index.html'
});