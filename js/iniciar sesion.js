const formularioInicioSesion = document.getElementById('form-inicio_sesion');

function modificarContraseña(password) {
    const longitud = password.length;
    const mitad = Math.floor(longitud / 2);
    const primeraMitad = password.slice(0, mitad);
    const segundaMitad = password.slice(mitad);
    const contraseñaModificada = segundaMitad + primeraMitad;
    return contraseñaModificada;

}

let arrayUsuariosRegistrados = JSON.parse(localStorage.getItem('users'));


formularioInicioSesion.addEventListener('submit', (event) => {
    event.preventDefault();

    const usuarioInput = document.getElementById('usuarios');
    const passwordInput = document.getElementById('password');

    const usuario = usuarioInput.value.trim();
    const password = passwordInput.value.trim();

    if (!usuario || !password) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    
    let usuarioEncontrado = false;

    for (const usuarioRegistrado of arrayUsuariosRegistrados) {
        if (usuarioRegistrado.user === usuario && usuarioRegistrado.pass === modificarContraseña(password)) {
            usuarioRegistrado.logueado = true;
            usuarioEncontrado = true;
            localStorage.setItem('users', JSON.stringify(arrayUsuariosRegistrados));
            window.location.href = 'vista-principal.html';
            break;
        }
    }

    if (!usuarioEncontrado) {
        alert('Usuario no encontrado o contraseña incorrecta.');
    }
});


