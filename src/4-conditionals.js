const idadeVisitante = 21;

if (idadeVisitante >= 18) {
    console.log("Acesso permitido ao evento.");
} else {
    console.log("Acesso negado, evento para maiores de 18 anos.");
}

console.log("\n--- Desafios de Condicionais ---");

// a) Crie um sistema de classificação de notas:
const avaliacao = 9;
let feedback;

if (avaliacao >= 9) {
    feedback = 'Excelente (Promotor)';
} else if (avaliacao >= 7) {
    feedback = 'Bom (Neutro)';
} else if (avaliacao >= 5) {
    feedback = 'Razoável (Detrator)';
} else {
    feedback = 'Ruim (Detrator)';
}
console.log(`a) A avaliação ${avaliacao} resultou no feedback: ${feedback}`);

// b) Verifique se um número de pedido é par ou ímpar:
const numeroPedido = 420;
if (numeroPedido % 2 === 0) {
    console.log(`b) O pedido nº ${numeroPedido} é PAR.`);
} else {
    console.log(`b) O pedido nº ${numeroPedido} é ÍMPAR.`);
}

// c) Verificação se a pessoa pode dirigir:
const idadePessoa = 19;
const temHabilitacao = true;

if (idadePessoa >= 18 && temHabilitacao) {
    console.log("c) Esta pessoa pode dirigir.");
} else {
    console.log("c) Esta pessoa NÃO pode dirigir.");
}