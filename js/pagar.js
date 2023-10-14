const tarjeta = document.getElementById('tarjeta');
const cvc = document.getElementById('cvc');
const nombre = document.getElementById('nombre');


function validarFormulario(event) {
    var error = false;
    var msjError = "";
    var numerosDeTarjetaMax = 16;
    
    

    if(tarjeta.value == ''){
       
     error = true;
    msjError += "<p>El numero de la tarjeta no puede estar vacio</p>"
        
}
if(numerosDeTarjetaMax != tarjeta.value.length) {
    error = true;
    msjError += "<p>El numero de la tarjeta no puede ser mas de 16</p>"
}
if(cvc.value == ""){
    error = true;
    msjError += "<p>El cvc no fue ingresado correctamente</p>"
}

    if(cvc.value.length != 3 ){
        error = true;
        msjError += "<p>El cvc tiene que ser 3 numeros </p>"
        console.log(cvc.value.lenght)
    }
        if(cvc.value == "999" || cvc.value == "000"){
            error = true;
            msjError += "<p>El cvc no fue ingresado correctamente</p>"
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