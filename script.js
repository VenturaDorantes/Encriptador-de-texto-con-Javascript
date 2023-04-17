(function() {
    // Apartado de textos
    const textoUsuario = document.getElementById('texto');
    const textoFinal = document.getElementById('textoFinal');
    const mensaje = document.querySelector('.mensaje');
    
    const respuesta = document.querySelector('.respuesta');
    respuesta.style.display = "none";
    
    // Apartado de botones
    const botonCopiar = document.querySelector('.btn-copiar');
    const botonEncriptar = document.querySelector('.btn-encriptar');
    const botonDesencriptar = document.querySelector('.btn-desencriptar');
    
    // Apartado de funcionamiento de botones
    botonCopiar.addEventListener('click', btnCopiar);
    botonEncriptar.addEventListener('click', btnEncriptar);
    botonDesencriptar.addEventListener('click', btnDesenciptar);
    
    // Funcion de validadion de Texto
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
            respuesta.style.display = "block";
        }
    }
    
    function btnDesenciptar() {
        const textoEncriptado = desencriptar(textoUsuario.value);
        textoFinal.innerHTML = textoEncriptado;
        mensaje.style.display = "none";
        respuesta.style.display = "block";
    }
    
    // Llaves de encriptacion
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
}());

