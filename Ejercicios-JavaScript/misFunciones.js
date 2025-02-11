/**
 * Descripción
 * permite convertir metros, pies, pulgadas, yarda
 * @method convertirUnidades
 * @param {String} nombre
 * @param {number} valor
 */

function convertirUnidades(nombre, valor){
    if (isNaN(valor)){
        document.getElementById("metro").value= "";
        document.getElementById("pulgada").value= "";
        document.getElementById("pie").value= "";
        document.getElementById("yarda").value= "";
        alert("El valor ingresado no es correcto");
    }
    if (nombre === "metro"){
        document.getElementById("pulgada").value = valor * 39.37;
        document.getElementById("pie").value = valor * 3.28;
        document.getElementById("yarda").value = valor * 1.09361;
    }
    else if (nombre === "pulgada"){
        document.getElementById("metro").value = valor * 0.0254;
        document.getElementById("pie").value = valor * 0.8333;
        document.getElementById("yarda").value = valor * 0.0277;
    }
    else if (nombre === "pie"){
        document.getElementById("metro").value = valor * 0.3048;
        document.getElementById("pulgada").value = valor * 12;
        document.getElementById("yarda").value = valor * 0.333333;
    }

    else if (nombre === "yarda"){
        document.getElementById("pulgada").value = valor * 36;
        document.getElementById("pie").value = valor * 3;
        document.getElementById("metro").value = valor *0.9144;
    }
}

/**
 * Permite convertir grados a radiantes
 * @method convertirGR
 * @param {String} id
 */

function convertirGR(id){
    let grad, rad;
    if(id === "grados"){
        grad = document.getElementById("grados").value;
        rad= grad * Math.PI / 180;
        document.getElementById("radianes").value=rad;
    }
    else if (id==="radianes"){
        rad = document.getElementById("radianes").value;
        grad = rad * 180 / Math.PI;
        document.getElementById("grados").value=grad;
    }
}

function dibujarimagen (posX, posY) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    console.log(posX, posY);
    var img = new Image();
    img.src = "images/auto.png";
    canvas.width = canvas.width;
    img.onload = function () {
        ctx.drawImage(img, posX, posY);
    }
}

function dibujarCirculoCuadrado() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const tamnio = 200;
    const alturamax = canvas.height;
    const anchomax = canvas.width;
    const margen = 10;
    ctx.fillStyle = "yellow";
    ctx.fillRect(margen, alturamax - tamnio - margen, tamnio, tamnio);
    ctx.fillStyle = "blue";
    ctx.arc(anchomax / 2, alturamax / 2, tamnio / 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

function dibujarCuadriculado() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const paso = 20;
    const anchoMax = canvas.width;
    const alturaMax = canvas.height;

    ctx.strokeStyle = "#9f9fd0";

    //LINEAS HORIZONTALES
    for (let i = paso; i < alturaMax;) {
        ctx.beginPath();
        //Acá dibujo lineas
        ctx.moveTo(0, i);
        ctx.lineTo(anchoMax, i);
        ctx.stroke();

        ctx.closePath();
        //i=i+paso;
        i += paso;
    }

    //LINEAS VERTICALES
    for (let i = paso; i < anchoMax;) {
        ctx.beginPath();
        //Acá dibujo lineas
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturaMax);
        ctx.stroke();

        ctx.closePath();
        //i=i+paso;
        i += paso;
    }

    //EJE X
    ctx.strokeStyle = "#be3944";
    ctx.beginPath();
    //Acá dibujo lineas
    ctx.moveTo(0, alturaMax / 2);
    ctx.lineTo(anchoMax, alturaMax / 2);
    ctx.stroke();

    ctx.closePath();

    //EJE Y
    ctx.strokeStyle = "#c23641";
    ctx.beginPath();
    //Acá dibujo lineas
    ctx.moveTo(anchoMax / 2, 0);
    ctx.lineTo(anchoMax / 2, alturaMax);
    ctx.stroke();

    ctx.closePath();
}

function animarAuto(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width=canvas.width;
    var img=new Image();
    img.src= "images/auto.png"


    img.onload = function () {
        ctx.drawImage(img, x, 100);
    }

    if(x>canvas.width){
        x=0;
    }
    x+=dx;
}
/**
 * Permite mostrar y ocultar un div en base a la selección de un radio button
 * @param mostrar_ocultar
 * @param {string} valor - contiene: val_mostrar, val_ocultar
 */
function mostrar_ocultar (valorMo){
    if (valorMo == "val_mostrar"){
        document.getElementById("divMo").style.display = 'block';
    }
    else if (valorMo == "val_ocultar"){
        document.getElementById("divMo").style.display = 'none';
    }
}

/**
 * Permite sumar 2 numeros ingresados por el usuario
 * @param suma
 */
let suma = () => {
    const s1 = Number(document.getElementById("nums1").value);
    const s2 = Number(document.getElementById("nums2").value);
    document.getElementById("totalS").innerHTML = s1 + s2;
}

/**
 * Permite restar 2 numeros ingresados por el usuario
 * @param resta
 */
let resta = () => {
    const r1 = Number(document.getElementById("numr1").value);
    const r2 = Number(document.getElementById("numr2").value);
    document.getElementById("totalR").innerHTML = r1 - r2;
}

/**
 * Permite dividir 2 numeros ingresados por el usuario
 * @param divide
 */
let divide = () => {
    const d1 = Number(document.getElementById("numd1").value);
    const d2 = Number(document.getElementById("numd2").value);
    document.getElementById("totalD").innerHTML = d1 / d2;
}

/**
 * Permite multiplicar 2 numeros ingresados por el usuario
 * @param resta
 */
let multiplica = () => {
    const m1 = Number(document.getElementById("numm1").value);
    const m2 = Number(document.getElementById("numm2").value);
    document.getElementById("totalM").innerHTML = m1 * m2;
}


/**
 * Permite pasar valores ingresados por el usuario
 * @param pasarValores
 */
function pasarValores() {
    const distancia = document.getElementById("distancia").value;
    const unidad = document.getElementById("unidades").value;

    window.open(`segundaWeb.html#${distancia}#${unidad}`);
}
/**
 * Permite tomar los valores ingresados por el usuario
 * @param tomarValores
 */
function tomarValores() {
    let urlCompleta = window.location.href;
    urlCompleta = urlCompleta.split("#");
    const distancia = urlCompleta[1];
    const unidad = urlCompleta[2];
    document.getElementById("dist").value = `${distancia} ${unidad}`;
}

function guardarLS() {
    let distancia, unidad;
    distancia = document.getElementById("distacia").value;
    unidad = document.getElementsByName("unidad")[0].value;
    localStorage.setItem("distancials", distancia);
    localStorage.setItem("unidadesls", unidad);
    window.open('2_web.html');
}

function cargarLS() {
    let cant, un;
    cant = localStorage.getItem("distacials");
    un = localStorage.getItem("unidadesls");

    document.getElementsByName("dist").value = cant + " " + un;

}