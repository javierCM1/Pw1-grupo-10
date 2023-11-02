const titulo=document.getElementById('titulo');
const botonAtras=document.getElementById('botonAtras');
const infoUsuario=document.getElementById('infoUsuario');
const nombreUsuario=document.getElementById('nombreUsuario');
const cerrarSesion=document.getElementById('cerrarSesion');

console.log(nombreUsuario.innerHTML);
// Para volver al inicio desde el boton que dice "Atras"
const aInicioDesdeBotonAtras=botonAtras.addEventListener('click', () =>{
    event.preventDefault();
    window.location.href = 'vista-principal.html';
});


// Para volver al inicio desde el titulo del Header ("Spotilam planes premium")
const aInicioDesdeTitulo=titulo.addEventListener('click',() =>{
 window.location.href='index.html'
});

// Para mostrar el nombre de usuario correspondiente en caso de estar logeado
function mostrarDatosUsuario(){
    for(const usuarioRegistrado of arrayUsuariosRegistrados){
        if(usuarioRegistrado.logeado==true){
            infoUsuario.style.display=flex;
            nombreUsuario.innerHTML=usuarioRegistrado.user.value;
        }
        else{
            infoUsuario.style.display=none;
        }
    }
}

//Para cerrar sesion
const cierre=cerrarSesion.addEventListener('click', () =>{
    for (const usuarioRegistrado of arrayUsuariosRegistrados) {
        if(usuarioRegistrado.logeado==true){
            usuarioRegistrado.logeado=false;
        }
    }
});