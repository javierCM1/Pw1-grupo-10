const tarjeta = document.getElementById('cvc');
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
if(numerosDeTarjetaMax != tarjeta.value.lenght) {
    error = true;
    msjError += "<p>El numero de la tarjeta no puede ser mas de 16</p>"
}
if(cvc.value == ""){
    if(cvc.value < 3  ){
        if(cvc.value == 999){
            error= true;
            msjError += "<p>El cvc no fue ingresado correctamente</p>"
        }
        }
    }
    
    if(nombre.value == ""){
        error = true;
        msjError += "<p>-El nombre no puede estar vacio</p>"
    }

    if(error){
        document.getElementById('errores').innerHTML = msjError;
        return false;
    }else{

    }


}