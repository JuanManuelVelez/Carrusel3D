var imagenes = [
    "img/1.png",
    "img/2.jpg",
    "img/3.png",
    "img/4.webp",
    "img/5.jpg"
];

var i = 0;

document.getElementById("Siguiente").addEventListener("click", () => {

    if (i < 4) {
        i++;
    }

    document.getElementById("carrusel").setAttribute("src", imagenes[i]);

});

document.getElementById("Anterior").addEventListener("click", () => {

    if (i > 0) {
        i--;
    }

    document.getElementById("carrusel").setAttribute("src", imagenes[i]);

});