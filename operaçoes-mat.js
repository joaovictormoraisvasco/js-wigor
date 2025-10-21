const prompt = require('prompt-sync')(); 
const { somar, subtrair, multiplicar, dividir } = require('./matematica'); 

let opcao = -1;
let a, b, resultado; 

while (opcao !== 0) {
    console.log("Escolha uma operação:");
    console.log("1 - Somar");
    console.log("2 - Subtrair");
    console.log("3 - Multiplicar");
    console.log("4 - Dividir");
    console.log("0 - Sair");

    opcao = parseInt(prompt("Digite a opção desejada: ")); 
    if (opcao === 0) {
        console.log("Saindo...");
        break;
    }

    a = parseFloat(prompt("Digite o primeiro número: ")); 
    b = parseFloat(prompt("Digite o segundo número: "));

    switch (opcao) {
        case 1:
            resultado = somar(a, b);
            console.log(`Resultado: ${resultado}`);
            break;
        case 2:
            resultado = subtrair(a, b);
            console.log(`Resultado: ${resultado}`);
            break;
        case 3:
            resultado = multiplicar(a, b);
            console.log(`Resultado: ${resultado}`);
            break;
        case 4:
            if (b !== 0) {
                resultado = dividir(a, b);
                console.log(`Resultado: ${resultado}`);
            } else {
                console.log("Erro: divisão por zero!");
            }
            break;
        default:
            console.log("Opção inválida!");
            break;
    }
}


