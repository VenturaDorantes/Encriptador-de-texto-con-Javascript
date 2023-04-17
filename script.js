const textUsuario = document.getElementById('texto');
const textFinal = document.getElementById('textoFinal');
const copia = document.querySelector('.btn-copia');

const resultado = document.querySelector('.respuesta');
resultado.style.display = "none";

function validarTexto() {
    let textEscrito = document.getElementById('texto').value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos");
        location.reload();
        return true;
    }
}