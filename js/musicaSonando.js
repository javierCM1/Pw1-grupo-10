const X = [
           { "nombre": "One", "album": "X(deluxe Edition)", "vistas": "265.547.389","duracion": "4:12" },
           { "nombre": "I am a mess", "album": "X(deluxe Edition)", "vistas": "324.399.760", "duracion": "3:05" },
           { "nombre": "Sing", "album": "X(deluxe Edition)", "vistas": "450.340.110", "duracion": "3:39" },
           { "nombre": "Dont", "album": "X(deluxe Edition)", "vistas": "450.000.125", "duracion": "3:39" },   
           { "nombre": "Nina", "album": "X(deluxe Edition)", "vistas": "555.040.455", "duracion": "3:39" } ,   
           { "nombre": "Photograph", "album": "X(deluxe Edition)", "vistas": "1.250.540.155", "duracion": "3:39" },   
           { "nombre": "bloodstream", "album": "X(deluxe Edition)", "vistas": "710.900.465", "duracion": "3:39" }, 
            
                    
        ]

const KATY = [
    { "nombre": "roar", "album": "Prism", "vistas": "512.312.300", "duracion": "4:23" },
    { "nombre": "Lengendary loves", "album": "Prism", "vistas": "612.312.320", "duracion": "3:12" },
    { "nombre": "Birhtday", "album": "Prism", "vistas": "122.123.563", "duracion": "3:25" },
    { "nombre": "Walking On Air", "album": "Prism", "vistas": "344.123.123", "duracion": "3:55" },
    { "nombre": "Unconditionally", "album": "Prism", "vistas": "123.432.999", "duracion": "3:10" },
    { "nombre": "DPrismHorse", "album": "Prism", "vistas": "666.223.654", "duracion": "4:20" },
    
          
]
const TAYLOR = [
    { "nombre": "Ready for it?", "album": "Reputation", "vistas": "912.312.300", "duracion": "4:23" },
    { "nombre": "End Game", "album": "Reputation", "vistas": "1.612.312.320", "duracion": "3:12" },
    { "nombre": "I did something bad", "album": "Reputation", "vistas": "722.123.563", "duracion": "3:25" },
    { "nombre": "Dont blame me", "album": "Reputation", "vistas": "370.123.123", "duracion": "3:55" },
    { "nombre": "Delicate", "album": "Reputation", "vistas": "323.432.999", "duracion": "3:10" },
    { "nombre": "So it goes", "album": "Reputation", "vistas": "1.666.223.654", "duracion": "4:20" },
    
]   

const PASS = [
    { "nombre": "Let her go", "album": "All the little lights", "vistas": "512.312.300", "duracion": "4:23" },
    { "nombre": "Staring at the stars", "album": "All the little lights", "vistas": "612.312.320", "duracion": "3:12" },
    { "nombre": "All the little things", "album": "All the little lights", "vistas": "122.123.563", "duracion": "3:25" },
    { "nombre": "Circles", "album": "All the little lights", "vistas": "344.123.123", "duracion": "3:55" },
    { "nombre": "Patient love", "album": "All the little lights" , "vistas": "123.432.999", "duracion": "3:10" },
    { "nombre": "Holes", "album": "All the little lights", "vistas": "666.223.654", "duracion": "4:20" },
    
       
]
const BAD = [
    { "nombre": "Moscow mule", "album": "Un verano sin ti", "vistas": "512.312.300", "duracion": "4:23" },
    { "nombre": "Despues de la playa", "album": "Un verano sin ti", "vistas": "622.312.320", "duracion": "3:12" },
    { "nombre": "Me porto bonito", "album": "Un verano sin ti", "vistas": "722.123.563", "duracion": "3:25" },
    { "nombre": "Titi me pregunto", "album": "Un verano sin ti", "vistas": "1.344.123.123", "duracion": "3:55" },
    { "nombre": "Un ratito", "album": "Un verano sin ti", "vistas": "2.123.432.999", "duracion": "3:10" },
    { "nombre": "Tarot", "album": "Un verano sin ti", "vistas": "667.223.654", "duracion": "4:20" }, 
   
]
const HARRY = [
    { "nombre": "roar", "album": "Prism", "vistas": "512.312.300", "duracion": "4:23" },
    { "nombre": "Lengendary loves", "album": "Prism", "vistas": "612.312.320", "duracion": "3:12" },
    { "nombre": "Birhtday", "album": "Prism", "vistas": "122.123.563", "duracion": "3:25" },
    { "nombre": "Walking On Air", "album": "Prism", "vistas": "344.123.123", "duracion": "3:55" },
    { "nombre": "Unconditionally", "album": "Prism", "vistas": "123.432.999", "duracion": "3:10" },
    { "nombre": "DPrismHorse", "album": "Prism", "vistas": "666.223.654", "duracion": "4:20" },
    
      
]



function redireccionarYMostrarDatos(arrayName) {
    let datosArray = [];
    if(arrayName === 'X'){
        datosArray = X;
    }else if (arrayName === 'KATY'){
        datosArray = KATY;
    }else if(arrayName === 'PASS'){
        datosArray = PASS;
    } else if(arrayName === 'TAYLOR'){
        datosArray = TAYLOR;
    }else if(arrayName === 'BAD'){
        datosArray = BAD;
    }else if(arrayName === 'HARRY'){
        datosArray = HARRY;
    }

    window.location.href= 'musica-sonando.html';

    localStorage.setItem('datosArray', JSON.stringify(datosArray));
}



