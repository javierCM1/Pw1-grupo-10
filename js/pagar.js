const tarjeta = document.getElementById('tarjeta');
const cvc = document.getElementById('cvc');
const nombre = document.getElementById('nombre');
let arrayUsuariosRegistrados = JSON.parse(localStorage.getItem('users'));


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
        for(const usuarioRegistrado of arrayUsuariosRegistrados){
            if(usuarioRegistrado.logueado==true) {
                usuarioRegistrado.premium=true;
                localStorage.setItem('users',JSON.stringify(arrayUsuariosRegistrados));
        
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
        
        return true;
         
    
    } 
}
if(usuarioRegistrado.logueado==false){
    alert('No estas logueado, inicie sesion con un usuario para poder comprar el plan premium');
    
}
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
function serPremium(){
    for(const usuarioRegistrado of arrayUsuariosRegistrados){
        if(usuarioRegistrado.logueado==true){
            usuarioRegistrado.premium=true;
            localStorage.setItem('users',JSON.stringify(arrayUsuariosRegistrados));
        }else{
            alert('No estas logueado');
        }
    }


}
    function volver(){
    const volverElement = document.getElementById('volver')
    const usuarioLogueado = arrayUsuariosRegistrados.find(usuario => usuario.logueado);
        {
            if(usuarioLogueado){
                volverElement.href = 'vista-principal.html';
             } else{
                    volverElement.href='index.html'
             }
        }
                
    }

