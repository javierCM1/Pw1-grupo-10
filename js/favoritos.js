function mostrarCancionesFavoritas() {
    const arrayUsuarios = JSON.parse(localStorage.getItem('users'));
    
    const usuarioLogueado = arrayUsuarios.find((usuario) => usuario.logueado === true);
    
    if (usuarioLogueado) {
        const listaCanciones = document.getElementById('fila-fav');

        usuarioLogueado.cancionesFav.forEach((cancion) => {
            const elementoItem = document.createElement('div');
            const elementoCancion = document.createElement('div');
            const elementoAlbum = document.createElement('div');
            const elementoVistas = document.createElement('div');
            const elementoDuracion = document.createElement('div');
            const elementoEliminar = document.createElement('div');
           
            const elementoI = document.createElement('i');
            elementoI.classList.add('bi', 'bi-play-fill', 'playing');

            cambiarAlPlay(elementoI, cancion);
            elementoItem.appendChild(elementoI);
            
            
            
            
            
            const elementoCerrar = crearElementoCierre(cancion, usuarioLogueado, arrayUsuarios, listaCanciones);
            
            elementoEliminar.appendChild(elementoCerrar);
          

            elementoCancion.textContent = ` ${cancion.nombre}`;
            elementoAlbum.textContent = `${cancion.album}`;
            elementoDuracion.textContent = `${cancion.duracion}`;
            elementoVistas.textContent = `${cancion.vistas}`; 

           elementoItem.classList.add('item');
            elementoCancion.classList.add('tema');
            elementoAlbum.classList.add('album');
            elementoVistas.classList.add('vistas');
            elementoDuracion.classList.add('duracion');
          


            listaCanciones.appendChild(elementoItem);
            listaCanciones.appendChild(elementoCancion);
            listaCanciones.appendChild(elementoAlbum);
            listaCanciones.appendChild(elementoDuracion);
            listaCanciones.appendChild(elementoVistas);
            listaCanciones.appendChild(elementoEliminar);
        });
        if(usuarioLogueado.cancionesFav.length==0){
    
            const fila = document.getElementById('fila-fav');
            fila.classList.remove('#fila-fav')
            fila.classList.add('fila-nada');
            

            const no = document.createElement('div');
            const tiene = document.createElement('div');
            const canciones = document.createElement('div');
            const favoritas = document.createElement('div');
            const carita = document.createElement('div'); 
            const espacio = document.createElement('div');   
            no.classList.add('nothing');
            tiene.classList.add('nothing');
            canciones.classList.add('nothing');
            favoritas.classList.add('nothing');
            carita.classList.add('bi','bi-emoji-sad');
            


            no.textContent = '';
            tiene.textContent = 'No tiene  ';
            canciones.textContent = 'canciones ';
            favoritas.textContent = 'favoritas';
            carita.textContent = '😢';

            
            listaCanciones.appendChild(no);
            listaCanciones.appendChild(tiene);
            listaCanciones.appendChild(canciones);
            listaCanciones.appendChild(favoritas);
            listaCanciones.appendChild(carita);
            listaCanciones.appendChild(espacio);
            
            
        }
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
    elementoCerrar.classList.add('bi-x-lg', 'cerrarItem');
    elementoCerrar.addEventListener('click', () => {
        // Encuentra el índice de la canción en cancionesFav
        const index = usuarioLogueado.cancionesFav.findIndex((favCancion) => favCancion.nombre === cancion.nombre);
        if (index !== -1) {
            
            usuarioLogueado.cancionesFav.splice(index, 1);

            
            localStorage.setItem('users', JSON.stringify(arrayUsuarios));

            
            const elementoCancion = elementoCerrar.parentNode;
             
            listaCanciones.removeChild(elementoCancion);
            location.reload();
            
            
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
window.addEventListener('load', mostrarCancionesFavoritas);
