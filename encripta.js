//Definicion de constante/variable  para ingresar Texto
const inputTexto = document.querySelector("#IntroTexto");
//Definicion de constante/variable del boton para encriptar texto
const btnEncriptar = document.querySelector("#encriptaTexto");
//Definicion de constante/variable para el texto encriptado
const inputEncriptado = document.querySelector("#encriptado");
//Definicion de constante/variable para copiar el texto encriptado
const btnCopiarTexto = document.querySelector("#copiarTexto");
//Definicion de constante/variable para desencriptar el texto encriptado
const btnDesencriptar = document.querySelector("#desencriptaTexto");

//definir dar u click al boton de encriptar texto
btnEncriptar.onclick = encriptaTexto;

//la funcion para encriptar texto
function encriptaTexto (){
    var mensaje = inputTexto.value;
    //reemplazo de caracteres vocales (orden e, i, o,a y u) por cadena proporcionada
    var mensajeEncriptado = mensaje.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("o", "ober").replaceAll("a", "ai").replaceAll("u", "ufat");
    inputEncriptado.value = mensajeEncriptado;

    document.querySelector("#muneco").style.display="none";
    document.querySelector("#ninguno").style.display="none";
    document.querySelector("#copiarTexto").style.display="show";
    document.querySelector("#copiarTexto").style.display="inherit";
    }

//definir dar u click al boton de desencriptar texto
btnDesencriptar.onclick = desencriptaTexto;

//la funcion para desencriptar texto
function desencriptaTexto (){
    var mensajeEncriptado = inputTexto.value;
    //reemplazo de cadena proporcionada por los caracteres vocales (orden u, a, o,i y e)
    var mensaje = mensajeEncriptado.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ai", "a").replaceAll("ufat", "u");
    inputEncriptado.value = mensaje;
}

//definir dar u click al boton de copiar texto encriptado
btnCopiarTexto.onclick = copiaTxtEncrip;

//la funcion para copiar texto encritado
function  copiaTxtEncrip () {
    var mensajeEncriptado = inputEncriptado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    inputTexto.value = "";
    inputTexto.focus();
}


