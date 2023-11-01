const formularioInicioSesion = document.getElementById('form-inicio_sesion');

function modificarContraseña(password){

    const longitud = password.length;
    const mitad = Math.floor(longitud / 2);
    const primeraMitad = password.slice(0, mitad);
    const segundaMitad = password.slice(mitad);
    const contraseñaModificada = segundaMitad + primeraMitad;
    return contraseñaModificada;

} 

let logueado = false;

formularioInicioSesion.addEventListener('submit', (event) => {
    event.preventDefault();

    const usuarioInput = document.getElementById('usuario')
    const passwordInput = document.getElementById('password')

    const usuario = usuarioInput.value.trim();
    const password =  passwordInput.value.trim()

    const passwordModificada = modificarContraseña(password);

    let arrayUsuariosRegistrados = JSON.parse(localStorage.getItem('users'));

    for (const usuarioRegistrado of arrayUsuariosRegistrados) {
        if (usuarioRegistrado.user === usuario && usuarioRegistrado.pass === passwordModificada) {
            logueado= true;
            window.location.href = 'vista-principal.html';
            break; 
        }else{
            alert("usuario no encontrado")
        }
    }

});

