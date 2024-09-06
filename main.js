function comparacao(event) {
    event.preventDefault();
    
    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);
    
    var resultado = document.getElementById("resultado");

    if (campoB > campoA) {
        resultado.innerText = "YIPPIE! Número B é maior que Número A!!!";
    } else if (campoB < campoA) {
        resultado.innerText = "OH NO! Numero B não é maior que Número A :/";
    } else if (campoB === campoA) {
        resultado.innerText = "Número B e Número A são iguais";
    } else {
        resultado.innerText = "Por favor, insira valores válidos";
    }
}
