const tarjeta = document.getElementById('tarjeta');
const cvc = document.getElementById('cvc');
const nombre = document.getElementById('nombre');


function validarFormulario(event) {
    var error = false;
    var msjError = "";
    var numerosDeTarjetaMax = 16;
    
    

    if(tarjeta.value == ''){
       
     error = true;
    msjError += "<p>-El numero de la tarjeta no puede estar vacio</p>"
        
}
if(numerosDeTarjetaMax != tarjeta.value.length) {
    error = true;
    msjError += "<p>-El numero de la tarjeta son 16 numeros </p>"
}
if(cvc.value == ""){
    error = true;
    msjError += "<p>-El cvc no fue ingresado correctamente</p>"
}

    if(cvc.value.length != 3 ){
        error = true;
        msjError += "<p>-El cvc tiene que ser 3 numeros </p>"
        console.log(cvc.value.lenght)
    }
        if(cvc.value == "999" || cvc.value == "000"){
            error = true;
            msjError += "<p>-El cvc no fue ingresado correctamente</p>"
        }
        
    
    
    if(nombre.value == ""){
        error = true;
        msjError += "<p>-El nombre no puede estar vacio</p>"
    }

    if(error) {
        document.getElementById('errores').innerHTML = msjError;
        return false
    } else {
        
        var modal = document.getElementById("ventanaModal");
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
        span.onclick = function () {
            modal.style.display = "none";
        }
        window.onclick = function () {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        event.preventDefault();
        return true

    }


}

function leerLaPost(){
        const titulo = document.getElementById('titulo');
        const info = document.getElementById('info');
        const url = window.location.href;
        const array = url.split('?')
        var plan = array[array.length -1];
        console.log(plan);
        if(plan == "plan=2"){
            titulo.innerHTML = "Elegiste el plan duo";
            info.innerHTML = "Este es el plan duo, cuenta con la posibilidad de tener Spotilam premium en dos cuentas, los beneficios son: musica sin anuncios, descargar musica y muchas cosas mas!"
        }else if(plan == "plan=1"){
            titulo.innerHTML = "Elegiste el plan individual";
            info.innerHTML =  "Este es el plan individual, cuenta con la posibilidad de acceder a los beneficos Spotilam premium en una cuenta. Los beneficios son: musica sin anuncios, descargar musica y muchas cosas mas!"
        }else if(plan == "plan=3"){
            titulo.innerHTML = "Elegiste el plan familiar"
            info.innerHTML =  "Este es el plan familiar, cuenta con la posibilidad de acceder a los beneficos Spotilam premium en hasta cuatro cuentas. Los beneficios son: musica sin anuncios, descargar musica y muchas cosas mas!"
        }

        
        
}