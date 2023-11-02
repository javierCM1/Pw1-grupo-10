
const nodoBuscador = document.querySelector("#barra");

nodoBuscador.addEventListener("keyup", e => {
  const nodoAlbumes = document.querySelectorAll(".item-imagen");

  nodoAlbumes.forEach(album => {
    const contenidoAlbum = album.textContent.toLowerCase();
    const valorBusqueda = e.target.value.toLowerCase();

    if (contenidoAlbum.includes(valorBusqueda)) {
      album.classList.remove("filtrar");
    } else {
      album.classList.add("filtrar");
    }
  });
});
const nombreUsuario=document.getElementById('nombreUsuario');
let arrayUsuariosRegistrados = JSON.parse(localStorage.getItem('users'));

function mostrarDatosUsuario(){
    let usuarioLogeadoEncontrado=false;
    if(arrayUsuariosRegistrados!=null){
        for(const usuarioRegistrado of arrayUsuariosRegistrados){
            if(usuarioLogeadoEncontrado==false){
                if(usuarioRegistrado.logueado == true){
                    nombreUsuario.innerHTML=`${usuarioRegistrado.user}`;
                    usuarioLogeadoEncontrado=true;
                }
               
            }    
        }
    }
}
window.addEventListener('load',mostrarDatosUsuario);
