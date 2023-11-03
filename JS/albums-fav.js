/* 
function cargarAlbumesFavoritos() {
    const galeriaImagenes = document.getElementById("galeria-imagenes");
    
    const arrayUsuarios = JSON.parse(localStorage.getItem('users'));
    const usuarioLogueado = arrayUsuarios.find((usuario) => usuario.logueado);
    
    if (usuarioLogueado) {
        usuarioLogueado.listaAlbumsFav.forEach((album) => {
            const article = document.createElement("article");
            article.className = "item-imagen";
    
            const img = document.createElement("img");
            img.src = `imagenes/albumcover${album}.jpg`;
            img.alt = album;
    
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "estrella-checkbox";
            checkbox.id = `estrella${album}`;
            checkbox.checked = true; 

    
            const label = document.createElement("label");
            label.className = "estrella-label";
            label.htmlFor = `estrella${album}`;
    
            article.appendChild(img);
            article.appendChild(checkbox);
            article.appendChild(label);
    
            galeriaImagenes.appendChild(article);
    
            checkbox.addEventListener("change", (event) => {
                if (!checkbox.checked) {
                    const index = usuarioLogueado.listaAlbumsFav.indexOf(album);
                    if (index !== -1) {
                        usuarioLogueado.listaAlbumsFav.splice(index, 1);
                    }
                    localStorage.setItem('users', JSON.stringify(arrayUsuarios));
                    galeriaImagenes.removeChild(article);
                }
            });
        });
    }
}

cargarAlbumesFavoritos();
 */

function mostrarAlbumesFavoritos() {
    const galeriaImagenes = document.getElementById("galeria-imagenes");

    const arrayUsuarios = JSON.parse(localStorage.getItem('users'));
    const usuarioLogueado = arrayUsuarios.find((usuario) => usuario.logueado);

    if (usuarioLogueado) {
        galeriaImagenes.innerHTML = ''; // Limpiar galería antes de cargar

        usuarioLogueado.listaAlbumsFav.forEach((album) => {
            const article = document.createElement("article");
            article.className = "item-imagen";

            const img = document.createElement("img");
            img.src = `imagenes/albumcover${album}.jpg`;
            img.alt = album;

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "estrella-checkbox";
            checkbox.id = `estrella${album}`;
            checkbox.checked = true; // Asegurarte de que el checkbox esté marcado

            const label = document.createElement("label");
            label.className = "estrella-label";
            label.htmlFor = `estrella${album}`;

            article.appendChild(img);
            article.appendChild(checkbox);
            article.appendChild(label);

            galeriaImagenes.appendChild(article);

            checkbox.addEventListener("change", (event) => {
                if (!checkbox.checked) {
                    const index = usuarioLogueado.listaAlbumsFav.indexOf(album);
                    if (index !== -1) {
                        usuarioLogueado.listaAlbumsFav.splice(index, 1);
                    }
                    localStorage.setItem('users', JSON.stringify(arrayUsuarios));
                    galeriaImagenes.removeChild(article);
                }
            });
        });
    }
}

mostrarAlbumesFavoritos();

const estrellas = document.querySelectorAll(".estrella-checkbox");


estrellas.forEach(estrella => {
    estrella.addEventListener("change", agregarAMisAlbums);
});

function cargarAlbumesFavoritos() {
    const arrayUsuarios = JSON.parse(localStorage.getItem('users'));
    const usuarioLogueado = arrayUsuarios.find((usuario) => usuario.logueado);

    if (usuarioLogueado) {
        estrellas.forEach(estrella => {
            const idEstrella = estrella.getAttribute("data-id");
            estrella.checked = usuarioLogueado.listaAlbumsFav.includes(idEstrella);
        });
    }
}
