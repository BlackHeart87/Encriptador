const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

//      La letra "e" es convertida para "enter"
//      La letra "i" es convertida para "imes"
//      La letra "a" es convertida para "ai"
//      La letra "o" es convertida para "ober"
//      La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const TextoEncriptado = encriptar(inputTexto.value);
    mensaje.value = TextoEncriptado;
    mensaje.style.backgroundImage ="none"
    inputTexto.value = ""
}

function btnDesencriptar(){
    const TextoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = TextoEncriptado;
    inputTexto.value = ""
}

function btnCopiar(){
    const mensaje = copiar("");
    alert("Tu mensaje ha sido copiado");
}

function encriptar(stringEncriptada){
    let vocales = [["e", "enter"],["i", "imes"],["a", 'ai'],["o", "ober"],["u", "ufat"]];
    //stringEncriptada = stringEncriptada.toLowercase();

        for(let i = 0; i < vocales.length; i++){
            if(stringEncriptada.includes(vocales[i][0])){
                stringEncriptada = stringEncriptada.replaceAll
                (vocales[i][0],vocales[i][1])
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada){

    let vocales = [["e", "enter"],["i", "imes"],["a", 'ai'],["o", "ober"],["u", "ufat"]];
    //stringDesencriptada = stringDesencriptada.toLowercase();

    for( let i = 0; i < vocales.length; i++){
        if(stringDesencriptada.includes(vocales[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll
            (vocales[i][1], vocales[i][0])
            }
    }
    return stringDesencriptada;
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value);
}