const titulo=document.getElementById('titulo');
const botonAtras=document.getElementById('botonAtras');
const infoUsuario=document.getElementById('infoUsuario');
const nombreUsuario=document.getElementById('nombreUsuario');
const cerrarSesion=document.getElementById('cerrarSesion');
let arrayUsuariosRegistrados = JSON.parse(localStorage.getItem('users'));
const fotoUsuario=document.getElementById('fotoUsuario')


// Para volver al inicio desde el boton que dice "Atras"
const aInicioDesdeBotonAtras=botonAtras.addEventListener('click', () =>{
    event.preventDefault();
    let usuarioLogeadoEncontrado=false;
    if(arrayUsuariosRegistrados!=null){
        for(const usuarioRegistrado of arrayUsuariosRegistrados){
            if(usuarioLogeadoEncontrado==false){ 
                 if(usuarioRegistrado.logueado==true){ 
                 window.location.href='vista-principal.html'
                 usuarioLogeadoEncontrado=true;
             }
             else{
             window.location.href='index.html'
             }
             } 
         }
    }
    else{
        window.location.href='index.html'
    }
});


// Para volver al inicio desde el titulo del Header ("Spotilam planes premium")
const aInicioDesdeTitulo=titulo.addEventListener('click',() =>{
    let usuarioLogeadoEncontrado=false;
    if(arrayUsuariosRegistrados!=null){
        for(const usuarioRegistrado of arrayUsuariosRegistrados){
            if(usuarioLogeadoEncontrado==false){
                 if(usuarioRegistrado.logueado==true){ 
                    window.location.href='vista-principal.html';
                    usuarioLogeadoEncontrado=true;
                }
                else{
                window.location.href='index.html'
                }
            }
        }
    }
    else{
        window.location.href='index.html'
    }
});


// Para mostrar el nombre de usuario correspondiente en caso de estar logeado
function mostrarDatosUsuario(){
    let usuarioLogeadoEncontrado=false;
    if(arrayUsuariosRegistrados!=null){
        for(const usuarioRegistrado of arrayUsuariosRegistrados){
            if(usuarioLogeadoEncontrado==false){
                if(usuarioRegistrado.logueado == true){
                    infoUsuario.style.display='flex';
                    nombreUsuario.textContent=`${usuarioRegistrado.user}`;
                    usuarioLogeadoEncontrado=true;
                }
                else{
                    infoUsuario.style.display='none';
                }
            }    
        }
    }
    else{
        infoUsuario.style.display='none';
    }
}
window.addEventListener('load',mostrarDatosUsuario);


const aPerfil=fotoUsuario.addEventListener('click',() =>{
    window.location.href="Registrar.html"
});
