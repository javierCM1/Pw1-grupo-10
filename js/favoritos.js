function mostrarCancionesFavoritas() {
    const arrayUsuarios = JSON.parse(localStorage.getItem('users'));
    
    const usuarioLogueado = arrayUsuarios.find((usuario) => usuario.logueado === true);
    
    if (usuarioLogueado) {
        const listaCanciones = document.getElementById('fila');

        usuarioLogueado.cancionesFav.forEach((cancion) => {
            const elementoItem = document.createElement('div');
            const elementoCancion = document.createElement('div');
            const elementoAlbum = document.createElement('div');
            const elementoVistas = document.createElement('div');
            const elementoDuracion = document.createElement('div');

           
            const elementoI = document.createElement('i');
            elementoI.classList.add('bi', 'bi-play-fill', 'playing');

            cambiarAlPlay(elementoI, cancion);
            
         elementoItem.appendChild(elementoI);

         const elementoCerrar = crearElementoCierre(cancion, usuarioLogueado, arrayUsuarios, listaCanciones);
         
         elementoCancion.appendChild(elementoCerrar);   
            elementoCancion.textContent = ` ${cancion.nombre}`;
            elementoAlbum.textContent = `${cancion.album}`;
            elementoVistas.textContent = `${cancion.vistas}`; 
            elementoDuracion.textContent = `${cancion.duracion}`;

           elementoItem.classList.add('item');
            elementoCancion.classList.add('cancion');
            elementoAlbum.classList.add('album');
            elementoVistas.classList.add('vistas');
            elementoDuracion.classList.add('duracion');
          


            listaCanciones.appendChild(elementoItem);
            listaCanciones.appendChild(elementoCancion);
            listaCanciones.appendChild(elementoAlbum);
            listaCanciones.appendChild(elementoVistas);
            listaCanciones.appendChild(elementoDuracion);
        });
    }
}

function cambiarAlPlay (elementoI, cancion) {
    elementoI.addEventListener('click', () => {
        if(elementoI.classList.contains('bi-play-fill')) {   

        const playIcons = document.querySelectorAll('.playing');

            playIcons.forEach((icon) => {
                
                icon.classList.remove('bi-pause-fill');
                icon.classList.add('bi-play-fill')
                icon.classList.remove('playing');
                
            });

        elementoI.classList.remove('bi-play-fill');
        elementoI.classList.add('bi-pause-fill');
        elementoI.classList.add('playing');

    
        const descripcion = `Estas escuchando ${cancion.nombre} del album ${cancion.album} `

        
        const descripcionContenedor = document.getElementById('descripcion');

        
        descripcionContenedor.textContent = descripcion;
    }else {
        elementoI.classList.remove('bi-pause-fill');
        elementoI.classList.add('bi-play-fill');
        elementoI.classList.remove('playing')
    }
    
});
}

function crearElementoCierre(cancion, usuarioLogueado, arrayUsuarios, listaCanciones) {
    const elementoCerrar = document.createElement('i');
    elementoCerrar.classList.add('bi', 'bi-x-lg', 'cerrarItem');
    elementoCerrar.addEventListener('click', () => {
        // Encuentra el índice de la canción en cancionesFav
        const index = usuarioLogueado.cancionesFav.findIndex((favCancion) => favCancion.nombre === cancion.nombre);
        if (index !== -1) {
            // Elimina la canción de la lista de favoritos
            usuarioLogueado.cancionesFav.splice(index, 1);

            // Actualiza el localStorage con la lista de favoritos modificada
            localStorage.setItem('users', JSON.stringify(arrayUsuarios));

            // Elimina la representación visual de la canción
            const elementoCancion = elementoCerrar.parentNode; // Elemento del div que contiene la canción
            listaCanciones.removeChild(elementoCancion);
        }
    });

    return elementoCerrar;
}

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
