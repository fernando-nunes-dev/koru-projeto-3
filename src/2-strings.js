const primeiroNome = "Fernando";
const sobrenome = "Nunes";
const nomeCompleto = primeiroNome + " " + sobrenome;
console.log("Nome completo do aluno:", nomeCompleto);

const saudacao = `Seja bem-vindo, ${primeiroNome} ${sobrenome}!`;
console.log(saudacao);

console.log("Total de letras no nome:", nomeCompleto.length);
console.log("Nome em formato de citação:", nomeCompleto.toUpperCase());
console.log("Nome para e-mail:", nomeCompleto.toLowerCase());

console.log("\n--- Desafios de Strings ---");

const indiceEspaco = nomeCompleto.indexOf(' ');
const apenasNome = nomeCompleto.slice(0, indiceEspaco);
console.log("a) Primeiro nome extraído:", apenasNome);

const contemLetraR = nomeCompleto.toLowerCase().includes('r');
console.log("b) O nome contém a letra 'r'?", contemLetraR);

const nomeAtualizado = nomeCompleto.replace("Nunes", "Nunes");
console.log("c) Nome com sobrenome atualizado:", nomeAtualizado);