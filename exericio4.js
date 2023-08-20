function verificaJavaScript(texto) {

    // Verifica se a palavra "javascript" está contida na string
    if (textoLowerCase.includes("javascript")) {
        return true;
    } else {
        return false;
    }
}

// Solicita ao usuário que digite uma string
var entradaUsuario = prompt("Digite uma frase:");

// Chama a função e verifica se a string contém "JavaScript"
var contemJavaScript = verificaJavaScript(entradaUsuario);

// Exibe o resultado
if (contemJavaScript) {
    console.log("A string contém a palavra 'JavaScript'.");
} else {
    console.log("A string não contém a palavra 'JavaScript'.");
}
