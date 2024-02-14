function escolhaCodificar() {
    var texto_digitado = document.getElementById("texto").value;
    var textarea2 = document.getElementById("resultado");
    texto_digitado = texto_digitado.toLowerCase();
    var tamanho_texto = texto_digitado.length;

    let troca1 = ["e", "i", "a", "o", "u", " "];
    let troca2 = ["enter", "imes", "ai", "ober", "ufat", " "];

    var texto_convertido = "";
    let letra = "";

    let indice = -1;
    let contador = 0;

    while (contador <= tamanho_texto) {
        letra = texto_digitado.substr(contador, 1);
        console.log(letra);
        indice = troca1.indexOf(letra);
        console.log(indice);
        if (indice >= 0) {
            texto_convertido = texto_convertido + troca2[indice];
        } else {
            texto_convertido = texto_convertido + letra;
        }

        contador++;
    }
    textarea2.value = texto_convertido;

}

function copiarTexto() {
    var conteudo = document.getElementById('resultado');

    conteudo.select();
    document.execCommand('copy');
    conteudo.value = "";

}

function escolhaDecodificar() {
    var texto_digitado = document.getElementById("texto").value;
    var textarea2 = document.getElementById("resultado");
    var tamanho_texto = texto_digitado.length;

    let troca1 = ["e", "i", "a", "o", "u"];
    let retiraLetras = [4, 3, 1, 3, 3];

    var texto_convertido = "";
    let letra = "";

    let indice = -1;
    let contador = 0;

    while (contador <= tamanho_texto) {
        letra = texto_digitado.substr(contador, 1);
        console.log(letra);
        indice = troca1.indexOf(letra);
        console.log(indice);
        if (indice >= 0) {
            texto_convertido = texto_convertido + troca1[indice];
            contador = contador + 1 + retiraLetras[indice];
        } else {
            texto_convertido = texto_convertido + letra;
            contador++;
        }


    }
    textarea2.value = texto_convertido;

}


