const ferramentas = ["Martelo", "Chave de Fenda", "Alicate", "Serrote"];
console.log("Inventário de ferramentas:");
for (let i = 0; i < ferramentas.length; i++) {
    console.log(`- ${ferramentas[i]}`);
}

console.log("\n--- Desafios de Loops ---");

// a) Crie um loop que imprima a tabuada do 7 (de 1 a 10)
console.log("\na) Tabuada do 7:");
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// b) Crie um array de números e calcule a soma deles usando um loop
const numeros = [5, 12, 8, 23, 10];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
console.log("\nb) A soma do array [5, 12, 8, 23, 10] é:", soma);

// c) Crie um loop que identifique o menor valor em um array de números
const valores = [15, 8, 90, 4, 27];
let menorValor = valores[0]; // Assume o primeiro como menor inicialmente
for (let i = 1; i < valores.length; i++) {
    if (valores[i] < menorValor) {
        menorValor = valores[i];
    }
}
console.log("\nc) O menor valor no array [15, 8, 90, 4, 27] é:", menorValor);