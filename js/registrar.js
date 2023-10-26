class usuarios {
    constructor(user, pass, passRep, fecha, email) {
        this.user = user;
        this.pass = pass;
        this.passRep = passRep;
        this.fecha = fecha;
        this.email = email;
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

        const UsuarioRegistrado = new usuarios(usuario, password, passwordRepetida, fecha, email);

        arrayUsuarios.push(UsuarioRegistrado);

        const userJSON = JSON.stringify(arrayUsuarios);
        localStorage.setItem('users', userJSON);

        document.getElementById('modal').style.display = 'flex';
        
    } catch (error) {
        alert(error.message);
    }

});

    function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
    } 
    
    function naverga() {
    window.location.href = 'vista-principal.html';
    }




