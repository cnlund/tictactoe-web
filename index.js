const buno = document.getElementById("uno");
const bdos = document.getElementById("dos");
const btres = document.getElementById("tres");
const bcuatro = document.getElementById("cuatro");
const bcinco = document.getElementById("cinco");
const bseis = document.getElementById("seis");
const bsiete = document.getElementById("siete");
const bocho = document.getElementById("ocho");
const bnueve = document.getElementById("nueve");
const texto = document.getElementById("texto");

let v1 = 0
let v2 = 0
let v3 = 0
let v4 = 0
let v5 = 0
let v6 = 0
let v7 = 0
let v8 = 0
let v9 = 0

let lv = {v1,v2,v3,v4,v5,v6,v7,v8,v9}

function comprobarganador(){
    if(v1==1 && v4==1 && v7==1){
        texto.innerHTML = "Has Ganado"
    }
}

function jugadarival(){
    if(v1==1 && v2==1 && v3==0){
        btres.innerHTML = "O";
        v3 = 2
    }
    if(v1==1 && v2==0 && v3==1){
        
    }
}

const jugarficha1 = function() {
    buno.innerHTML = "X";
    v1 = 1;
    jugadarival()
    comprobarganador();
}
const jugarficha2 = function() {
    bdos.innerHTML = "X";
    v2 = 1;
    jugadarival()
}
const jugarficha3 = function() {
    btres.innerHTML = "X";
    v3 = 1;
    jugadarival()
    comprobarganador();
}
const jugarficha4 = function() {
    bcuatro.innerHTML = "X";
    v4 = 1;
    jugadarival()
    comprobarganador();
}
const jugarficha5 = function() {
    bcinco.innerHTML = "X";
    v5 = 1;
    jugadarival()
    comprobarganador();
}
const jugarficha6 = function() {
    bseis.innerHTML = "X";
    v6 = 1;
    jugadarival()
    comprobarganador();
}
const jugarficha7 = function() {
    bsiete.innerHTML = "X";
    v7 = 1;
    jugadarival()
    comprobarganador();
}
const jugarficha8 = function() {
    bocho.innerHTML = "X";
    v8 = 1;
    jugadarival()
    comprobarganador();
}
const jugarficha9 = function() {
    bnueve.innerHTML = "X";
    v9 = 1;
    jugadarival()
    comprobarganador();
}

buno.addEventListener("click", jugarficha1);
bdos.addEventListener("click", jugarficha2);
btres.addEventListener("click", jugarficha3);
bcuatro.addEventListener("click", jugarficha4);
bcinco.addEventListener("click", jugarficha5);
bseis.addEventListener("click", jugarficha6);
bsiete.addEventListener("click", jugarficha7);
bocho.addEventListener("click", jugarficha8);
bnueve.addEventListener("click", jugarficha9)