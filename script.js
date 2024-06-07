const fondo = document.getElementById('fondo');

const fotos = [
    './img/fondos/fondo1.png',
    './img/fondos/fondo2.jpg',
    './img/fondos/fondo3.png',
    './img/fondos/fondo4.jpg',
    './img/fondos/fondo5.jpg',
    './img/fondos/fondo6.png',
    './img/fondos/fondo7.png',
    './img/fondos/fondo8.jpg',
    './img/fondos/fondo9.png',
    './img/fondos/fondo10.jpg',
    './img/fondos/fondo11.png',
    './img/fondos/fondo12.png',
    './img/fondos/fondo13.jpg',
    './img/fondos/fondo14.jpg',
    './img/fondos/fondo15.png',
];

let fotoAnterior = '';

function imprimirFondo() {

    //Nombramos una variable que guarde el índce de les semeyes
    let fotoAleatoria;
    
    //El do while sirve para que la foto no se repita, porque si se diese el caso,
    //el bucle volvería a general un índice hasta que este fuera diferente.
    do {

        //Generamos la aleatoriedad en base a los índices del array
        fotoAleatoria = Math.floor(Math.random() * fotos.length);
    } while (fotoAnterior === fotos[fotoAleatoria]);
    
    //Guardamos el índice en la valiable
    fotoAnterior = fotos[fotoAleatoria];
    fondo.style.backgroundImage = 'url(' + fotoAnterior + ')';

}

setInterval(imprimirFondo, 5000);

imprimirFondo();

//---//

window.addEventListener('resize', function() {
    var h2 = document.querySelector('h2');
    if (window.innerWidth <= 900) {
        h2.innerHTML = 'APÓYANOS: <br><span>¡Vuestro feedback es importante!</span>';
    } else {
        h2.innerHTML = 'APÓYANOS: <span>¡Vuestro feedback es importante!</span>';
    }
});

//---//

window.onload = function() {
    var year = new Date().getFullYear();
    document.querySelector('.copy').textContent = '©' + year + ' Incla Launcher. Todos los derechos reservados.';
}
