document.addEventListener("DOMContentLoaded", function() {
    iniciarApp();
});

function iniciarApp() {
    generadorPassword();
}


function generadorPassword() {

    const password = document.querySelector(".password");
    const boton = document.querySelector(".boton");
    const input = document.querySelector(".numero");
    let num;

    // Carácteres
    const minusculas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const mayusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    input.addEventListener("input", function(e) {
        num = e.target.value;
    });

    boton.addEventListener("click", function() {
        let numArray = "";
        let passwordG = "";
        
        for(let i = 1; i <= num; i++) {
            
            numArray = random(1, 3);
            switch(numArray) {
                case 1:
                    passwordG += add(minusculas);
                break;
                case 2:
                    passwordG += add(mayusculas);
                break;
                case 3:
                    passwordG += add(numeros);
                break;
            }
        }

        password.textContent = passwordG;
    });
}

function add(tipoCaracter) {
    let numRandom = random(0, tipoCaracter.length);
    while(tipoCaracter[numRandom] === undefined) {
        numRandom = random(0, tipoCaracter.length);
    }
    return tipoCaracter[numRandom];
}

function random(min, max) {
    return Math.floor( Math.random() * (max - min + 1) ) + min;
}