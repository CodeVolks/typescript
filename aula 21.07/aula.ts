
//Inferência
let x = "";

//Annotation
let y: string;

//JS – TS Inferência
let helloWorld = "";
console.log("Inferência:", helloWorld);

//TS Annotation
let helloworld: string = "";
console.log("Annotation:", helloworld);

//Tipo número
let num1: number = 0;
let num2 = 0;
console.log("num1:", num1);
console.log("num2:", num2);

//Tipo texto
let firstName1: string = "Maria";
let firstName2 = "Maria";

console.log("firstName1:", firstName1);
console.log("firstName2:", firstName2);

//Tipo booleano
let isAdmin1: boolean = true;
let isAdmin2 = true;

console.log("isAdmin1:", isAdmin1);
console.log("isAdmin2:", isAdmin2);

//Tipo array
let arrayNumber: number[] = [1, 2, 3];
console.log(arrayNumber);

let arrayString: string[] = ["Cleiton", "Wilson", "Cleber"];
console.log(arrayString);

let arrayAny: any[] = [1, "", true, 2.0, { nome: "", idade: 17 }];
console.log(arrayAny);

//Tipo object
const user: { nomeDeUsuario: string, senha: string } = {
    nomeDeUsuario: "Cleiton",
    senha: "cleiton123",
};
console.log(user);

//Tipo any
let a: any = "true";
console.log("Tipo any:", a);

a = true;
console.log("Tipo any:", a);

//Tipo union
let id: string | number = 10;
console.log("Tipo union:", id);

id = "28fb5f9e65c4e16e7807340fa";
console.log("Tipo union:", id);

function multiplicar(n1: number, n2: number): number {
    return n1 * n2;
}

let resultoMultiplicar = multiplicar(1, 1);
console.log("multiplicar:", resultoMultiplicar);








