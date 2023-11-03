/* const album1 = [codigo= cd1, portada = imagenes/albumcover1.jpg]
const album2 = [codigo= cd2, portada = imagenes/albumcover2.jpg]
const album3 = [codigo= cd3, portada = imagenes/albumcover3.jpg]
const album4 = [codigo= cd4, portada = imagenes/albumcover4.jpg]
const album5 = [codigo= cd5, portada = imagenes/albumcover5.jpg]
const album6 = [codigo= cd6, portada = imagenes/albumcover6.jpg]
const album7 = [codigo= cd7, portada = imagenes/albumcover7.jpg]
const album8 = [codigo= cd8, portada = imagenes/albumcover8.jpg]
const album9 = [codigo= cd9, portada = imagenes/albumcover9.jpg]
const album10 = [codigo= cd10, portada = imagenes/albumcover10.jpg]
const album11 = [codigo= cd11, portada = imagenes/albumcover11.jpg]
const album12 = [codigo= cd12, portada = imagenes/albumcover12.jpg]
const album13 = [codigo= cd13, portada = imagenes/albumcover13.jpg]
const album14 = [codigo= cd14, portada = imagenes/albumcover14.jpg]
const album15 = [codigo= cd15, portada = imagenes/albumcover15.jpg] */

const estrellas = document.querySelectorAll(".estrella-checkbox")

const listaAlbumsFav = []


function agregarAMisAlbums(event){
const checkbox = event.target;
const idEstrella = checkbox.getAttribute("data-id");
const portadaAlbum = document.querySelector(`[data-id="${idEstrella}"]`);
const idAlbum = portadaAlbum.getAttribute("alt");

if (checkbox.checked) {
    listaAlbumsFav.push(idAlbum);
  } else {
    const index = listaAlbumsFav.indexOf(idAlbum);
    if (index !== -1) {
      listaAlbumsFav.splice(index, 1);
    }
}

}

estrellas.forEach(estrella => {
    estrella.addEventListener("change", agregarAMisAlbums)
    })



