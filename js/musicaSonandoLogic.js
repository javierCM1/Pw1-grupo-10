

function mostrarDatosArray() {
    
    const datosArray = JSON.parse(localStorage.getItem('datosArray'));

    // Verifica si los datosArray existen y no son nulos
    if (datosArray) {
        const listaCanciones = document.getElementById('lista-canciones');
        const descripcionElement = document.getElementById('descripcion');
        const imagenLateralElement = document.getElementById('imagen-lateral')


        datosArray.forEach((cancion) => {   
            

          /*----------------------------------------------------------
          ----------Creacion de div para el grid --------------------------------
          -----------------------------------------------------------*/
            
            const elementoItem = document.createElement('div');
            const elementoCancion = document.createElement('div');
            const elementoAlbum = document.createElement('div');
            const elementoVistas = document.createElement('div');
            const elementoDuracion = document.createElement('div');

            //Agrego la clase de tema para el nombre del tema
            elementoCancion.classList.add('tema');
            //Clase del boton play
            const elementoI = document.createElement('i');
            elementoI.classList.add('bi', 'bi-play-fill', 'playing');
            /*
                        elemento que al clickar cambie

                                                    */
                                    
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

                }else {
                    elementoI.classList.remove('bi-pause-fill');
                    elementoI.classList.add('bi-play-fill');
                    elementoI.classList.remove('playing')
                }
                
            });

            //Se lo agrego al div 
            elementoItem.appendChild(elementoI);
            elementoCancion.textContent = ` ${cancion.nombre}`;
            elementoAlbum.textContent = `${cancion.album}`;
            
            //creo los elementos para que la extrella pueda ser un input
            const divEstrella = document.createElement('div');
            divEstrella.classList.add('estrella');
            const inputEstrella = document.createElement('input');
            inputEstrella.type = 'checkbox';
            //agrego la clase
            inputEstrella.classList.add('estrella-checkbox');
            //Le doy un id unico a la extrella con el nombre de la cancion
            inputEstrella.id = `estrella-${cancion.nombre.replace(' ', '-')}`;

            const labelEstrella = document.createElement('label');
            labelEstrella.classList.add('estrella-label');
            labelEstrella.htmlFor = inputEstrella.id;

            //Los agrego 
            divEstrella.appendChild(inputEstrella);
            divEstrella.appendChild(labelEstrella);
            elementoCancion.appendChild(divEstrella);

            //Mismo procedimiento para el album
            const divEstrellaAlbum = document.createElement('div');
            divEstrellaAlbum.classList.add('estrella');
            const inputEstrellaAlbum = document.createElement('input');
            inputEstrellaAlbum.type = 'checkbox';
            inputEstrellaAlbum.classList.add('estrella-checkbox');
            inputEstrellaAlbum.id = `estrella-album-${cancion.nombre.replace(' ', '-')}`;
            const labelEstrellaAlbum = document.createElement('label');
            labelEstrellaAlbum.classList.add('estrella-label');
            labelEstrellaAlbum.htmlFor = inputEstrellaAlbum.id;
        
            divEstrellaAlbum.appendChild(inputEstrellaAlbum);
            divEstrellaAlbum.appendChild(labelEstrellaAlbum);
            elementoAlbum.appendChild(divEstrellaAlbum);

            elementoVistas.textContent = `${cancion.vistas}`;
            elementoDuracion.textContent = `${cancion.duracion}`;

            

            //Agrego los elementos
            listaCanciones.appendChild(elementoItem);
            listaCanciones.appendChild(elementoCancion);
            listaCanciones.appendChild(elementoAlbum);
            listaCanciones.appendChild(elementoVistas);
            listaCanciones.appendChild(elementoDuracion);
        });
    }
}



window.addEventListener('load', mostrarDatosArray);


