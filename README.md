# Challenge 1 - Encriptador de texto con JavaScript

Se derrollo una aplicación que encripta textos, por medio de:  
![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=flat-square&logo=javascript&logoColor=F7DF1E)

## 📄 Requisitos 
---
- Las "llaves" de encriptación que utilizaremos son las siguientes:
    
        La letra "e" es convertida para "enter"
        La letra "i" es convertida para "imes"
        La letra "a" es convertida para "ai"
        La letra "o" es convertida para "ober"
        La letra "u" es convertida para "ufat"

- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

Por Ejemplo:

        "gato" => "gaitober"
        gaitober" => "gato"

- La página debe tener campos para inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones
- El resultado debe ser mostrado en la pantalla
- Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones

## 📝 Maquetado
---
### 💻 Maquetado en Escritorio

<img src="img-readme/img-escritorio.png" width="300"/>
<img src="img-readme/img-escritorio-encriptado.png" width="300"/>

### 📱 Maquetado en Tablet

<img src="img-readme/img-tablet.png" width="50%" height="50%"/>
<img src="img-readme/img-tablet-encriptado.png" width="50%" height="50%"/>

### 📱 Maquetado en Celular

<img src="img-readme/img-celular.png" width="300" height="440"/>
<img src="img-readme/img-celular-encriptado.png" width="50%" height="50%"/>

## 👾 Resultado
---
### Resultado de diseño con respecto al maquetado
<img src="img-readme/resultado-principal.png" width="100%"/>

### Al presionar los botones, y en caso de que el usuario no haya ingresado un texto, aparecerá la siguiente alerta
<img src="img-readme/error-no-texto.png" width="500"/>

### Y en caso de que el usuario ingrese un texto en no minúsculas o letras con acentos, aparecerá la siguiente alerta
<img src="img-readme/error-no-minusculas.png" width="500"/>

### Funcionamiento de desencriptar texto
<img src="img-readme/desencriptar.png" width="100%"/>

###  Funcionamiento de encriptar texto
<img src="img-readme/encriptar.png" width="100%"/>

###  Funcionamiento de encriptar texto
<img src="img-readme/encriptar.png" width="500"/>

### Al momento de presionar el botón de copiar, aparecerá la siguiente alerta y se guarda el texto en el portapapeles
<img src="img-readme/alert-copiar.png" width="500"/>