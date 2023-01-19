function enfocar_texto(){
    var texto = document.getElementById("texto");
    texto.focus();
}

function encriptar() {
    var texto = document.getElementById("texto");
    var resultado = document.getElementById("resultado")

    var texto_encriptado = "";
    if (texto.value){
        for (var i = 1; i <= texto.value.length; i++){
            switch(texto.value.substring(i-1,i).toLowerCase()) {
                case "e" :
                    texto_encriptado = texto_encriptado + "enter";
                    break;
                case "i" :
                    texto_encriptado = texto_encriptado + "imes";
                    break;
                case "a" :
                    texto_encriptado = texto_encriptado + "ai";
                    break;
                case "o" :
                    texto_encriptado = texto_encriptado + "ober";
                    break;
                case "u" :
                    texto_encriptado = texto_encriptado + "ufat";
                    break;
                default:
                    texto_encriptado = texto_encriptado + texto.value.substring(i-1,i);
            }
        }
        resultado.innerText = texto_encriptado;
    }
    else {
        alert("ingrese algún texto");
        texto.focus();
    }
}

function desencriptar() {
    var texto = document.getElementById("texto");
    var resultado = document.getElementById("resultado")

    var texto_desencriptado = "";
    if (texto.value){
        for (var i = 1; i <= texto.value.length; i++){
            switch(texto.value.substring(i-1,i).toLowerCase()) {
                case "e" :
                    if (texto.value.substring(i-1,i+4) == "enter"){
                        i = i + 4;
                    }
                    texto_desencriptado = texto_desencriptado + "e";
                    break;
                case "i" :
                    if (texto.value.substring(i-1,i+3) == "imes"){
                        i = i + 3;
                    }
                    texto_desencriptado = texto_desencriptado + "i";
                break;
                case "a" :
                    if (texto.value.substring(i-1,i+1) == "ai"){
                        i = i + 1;
                    }
                    texto_desencriptado = texto_desencriptado + "a";
                break;
                case "o" :
                    if (texto.value.substring(i-1,i+3) == "ober"){
                        i = i + 3;
                    }
                    texto_desencriptado = texto_desencriptado + "o";
                break;
                case "u" :
                    if (texto.value.substring(i-1,i+3) == "ufat"){
                        i = i + 3;
                    }
                    texto_desencriptado = texto_desencriptado + "u";
                break;
                default:
                    texto_desencriptado = texto_desencriptado + texto.value.substring(i-1,i);
            }
        }
        resultado.innerText = texto_desencriptado;
    }
    else {
        alert("ingrese algún texto");
        texto.focus();
    }
}

function portapapeles(){
    var resultado = document.getElementById("resultado");
    console.log(resultado.innerText)
    var seleccion = document.createRange();

    
    if (resultado.innerText){
        seleccion.selectNodeContents(resultado);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(seleccion);
        document.execCommand('copy');
        window.getSelection().removeRange(seleccion);
    }
    
}
