//chama o pacote prompt
import PromptSync from "prompt-sync";

//chama a função do prompt
const prompt = PromptSync();


function helloWorld2(frase: string): string {
    return frase;
}

//Annotation
let retornoHelloWorld: string = helloWorld2("Hello World with TypeScript :)");

console.log(retornoHelloWorld);


// 3. Faça um programa que receba um número inteiro do usuário 
// e informe se este número é positivo ou negativo.
function imprimirNumeroPositivoOuNegativo() {

    let numero: number = parseInt(prompt("Digite um número, para verificar se é positivo ou negativo: "))

    if (numero > 0) {
        console.log("positivo");
    } else if (numero < 0) {
        console.log("negativo");
    } else {
        console.log("neutro");
    }
}

imprimirNumeroPositivoOuNegativo();