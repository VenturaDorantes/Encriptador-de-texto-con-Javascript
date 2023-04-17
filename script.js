const textoUsuario = document.getElementById('texto');
const textoFinal = document.getElementById('textoFinal');
const mensaje = document.querySelector('.mensaje');

const resultado = document.querySelector('.respuesta');
resultado.style.display = "none";

const botonCopiar = document.querySelector('.btn-copiar');
const botonEncriptar = document.querySelector('.btn-encriptar');
const botonDesencriptar = document.querySelector('.btn-desencriptar');

botonCopiar.addEventListener('click', btnCopiar);
botonEncriptar.addEventListener('click', btnEncriptar);
botonDesencriptar.addEventListener('click', btnDesenciptar);

function validarTexto() {
    let textoEscrito = textoUsuario.value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos");
        location.reload();
        return true;
    }
}

function btnEncriptar() {
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textoUsuario.value);
        textoFinal.innerHTML = textoEncriptado;
        mensaje.style.display = "none";
        resultado.style.display = "block";
    }
}

function btnDesenciptar() {
    const textoEncriptado = desencriptar(textoUsuario.value);
    textoFinal.innerHTML = textoEncriptado;
    mensaje.style.display = "none";
    resultado.style.display = "block";
}

//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`


function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }

    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }

    }
    return stringDesencriptada
}

function btnCopiar(){
    navigator.clipboard.writeText(textoFinal.innerHTML);
    mensaje.value = "";
    alert("Texto Copiado");
}
