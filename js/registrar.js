class usuarios {
    constructor(user, pass, passRep, fecha, email) {
        this.user = user;
        this.pass = pass;
        this.passRep = passRep;
        this.fecha = fecha;
        this.email = email;
        this.premium = false;
        this.logueado = false;
        this.cancionesFav = [];
        this.albunFav = null;
    }
}

let arrayUsuarios = JSON.parse(localStorage.getItem('users')) || [];
const formulario = document.querySelector('.formulario');



formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const usuarioInput = document.querySelector('.user');
    const passwordInput = document.querySelector('.password');
    const passwordRepetidaInput = document.querySelector('.password-repetido');
    const fechaInput = document.querySelector('.date');
    const emailInput = document.querySelector('.email');

    const usuario = usuarioInput.value.trim();
    const password = passwordInput.value.trim();
    const passwordRepetida = passwordRepetidaInput.value.trim();
    const fecha = fechaInput.value;
    const email = emailInput.value.trim();

    try {

        if (password !== passwordRepetida) {
            throw new Error("Las contraseñas no coinciden");
        }

        if (arrayUsuarios.some((user) => user.user === usuario)) {
            throw new Error("Usuario en uso");
        }

        const passwordModificada = modificarContraseña(password);
        const passwordRepetidaModificada = modificarContraseña(passwordRepetida);
        
        const UsuarioRegistrado = new usuarios(usuario, passwordModificada, passwordRepetidaModificada, fecha, email);

        arrayUsuarios.push(UsuarioRegistrado);

        const userJSON = JSON.stringify(arrayUsuarios);
        localStorage.setItem('users', userJSON);

        window.location.href = 'index.html'
    } catch (error) {
        alert(error.message);
    }

});

function modificarContraseña(password){

        const longitud = password.length;
        const mitad = Math.floor(longitud / 2);
        const primeraMitad = password.slice(0, mitad);
        const segundaMitad = password.slice(mitad);
        const contraseñaModificada = segundaMitad + primeraMitad;
        return contraseñaModificada;

} 

function eliminarUsuario() {
    const usuarioInput = document.querySelector('.user');
    const passwordInput = document.querySelector('.password');
   
    const usuario = usuarioInput.value.trim();
    const password = passwordInput.value.trim();

    let passwordModificada = modificarContraseña(password);
    const arrayUsuarios = JSON.parse(localStorage.getItem('users'));

    
    for (let i = 0; i < arrayUsuarios.length; i++) {
        if (arrayUsuarios[i].user === usuario && arrayUsuarios[i].pass === passwordModificada) {
            arrayUsuarios.splice(i, 1);
            usuarioEncontrado = true;
            break;
        }
    }

    if (usuarioEncontrado) {
        localStorage.setItem('users', JSON.stringify(arrayUsuarios));
        usuarioInput.value = '';
        passwordInput.value = '';
        mostrarMensajeEliminado();
    } else {
        alert("Usuario o contraseña incorrectos. No se pudo eliminar el usuario.");
    }

}

function mostrarMensajeEliminado() {
    document.getElementById("mensaje-eliminado").style.display = 'block';
}

function cerrarMensajeEliminado() {
    document.getElementById('mensaje-eliminado').style.display = 'none';
}


