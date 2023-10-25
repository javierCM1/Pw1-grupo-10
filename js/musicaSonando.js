const X = [
           { "nombre": "cancion1", "album": "x", "vistas": "123123","duracion": "4:0" },
           { "nombre": "cancion2", "album": "x", "vistas": "123123", "duracion": "3:0" },
           { "nombre": "cancion3", "album": "x", "vistas": "123123", "duracion": "4:0" },      
        ]

const KATY = [
    { "nombre": "cancion1", "album": "katy", "vistas": "123123", "duracion": "4:0" },
    { "nombre": "cancion2", "album": "katy", "vistas": "123123", "duracion": "3:0" },
    { "nombre": "cancion3", "album": "katy", "vistas": "123123", "duracion": "4:0" },      
]

function redireccionarYMostrarDatos(arrayName) {
    let datosArray = [];
    if(arrayName === 'X'){
        datosArray = X;
    }else if (arrayName === 'KATY'){
        datosArray = KATY
    }


    window.location.href= 'musica-sonando.html';

    localStorage.setItem('datosArray', JSON.stringify(datosArray));
}


