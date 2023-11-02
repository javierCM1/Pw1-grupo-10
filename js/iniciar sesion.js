const formularioInicioSesion = document.getElementById('form-inicio_sesion');

function modificarContraseña(password){

    const longitud = password.length;
    const mitad = Math.floor(longitud / 2);
    const primeraMitad = password.slice(0, mitad);
    const segundaMitad = password.slice(mitad);
    const contraseñaModificada = segundaMitad + primeraMitad;
    return contraseñaModificada;

} 


let contador = 0

formularioInicioSesion.addEventListener('submit', (event) => {
    event.preventDefault();

    const usuarioInput = document.getElementById('usuarios')
    const passwordInput = document.getElementById('password')

    const usuario = usuarioInput.value.trim();
    const password =  passwordInput.value.trim()

    const passwordModificada = modificarContraseña(password);

    let arrayUsuariosRegistrados = JSON.parse(localStorage.getItem('users'));

    for (const usuarioRegistrado of arrayUsuariosRegistrados) {
        if (usuarioRegistrado.user === usuario && usuarioRegistrado.pass === passwordModificada) {
            usuarioRegistrado.logueado = true;
            
            window.location.href = 'vista-principal.html';
            break; 
        }else if( contador < arrayUsuariosRegistrados.length) {
            contador++
            if(contador === arrayUsuariosRegistrados.length){
            alert("usuario no encontrado")
            }
        }
    }

});

