const valorA = 20;
const valorB = 4;

console.log(`Operações com ${valorA} e ${valorB}:`);
console.log("Soma:", valorA + valorB);
console.log("Subtração:", valorA - valorB);
console.log("Multiplicação:", valorA * valorB);
console.log("Divisão:", valorA / valorB);
console.log("Resto da divisão:", valorA % valorB);
console.log("Potência:", valorA ** valorB);

console.log("\n--- Desafios de Matemática ---");

const mediaNotas = (8 + 9.5 + 7) / 3;
console.log(`a) A média das notas é: ${mediaNotas.toFixed(2)}`);

const precoString = "99.5";
const precoNumero = parseFloat(precoString);
console.log(`b) O preço "${precoString}" como número é:`, precoNumero);

const resultadoCalculo = 15.3 / 4;
const resultadoFinalArredondado = Math.round(resultadoCalculo);
console.log(`c) O arredondamento de ${resultadoCalculo} é:`, resultadoFinalArredondado);