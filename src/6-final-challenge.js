const students = [
    { nome: "Laura", age: 22, grades: [9, 8.5, 9.5] },
    { nome: "Ricardo", age: 20, grades: [7, 6.5, 8] },
    { nome: "Camila", age: 21, grades: [5, 6, 5.5] },
    { nome: "Lucas", age: 19, grades: [10, 9.5, 9.8] },
    { nome: "Sofia", age: 23, grades: [8, 7.5, 8.5] }
];

console.log("--- Análise da Turma ---");

let totalAprovados = 0;
let totalReprovados = 0;
let somaMediasTurma = 0;
let alunoComMaiorMedia = students[0];
let maiorMedia = 0;

// a) e b) Calcular média e determinar aprovação para cada aluno
for (const student of students) {
    // a) Calcular a média
    const somaNotas = student.grades.reduce((acc, grade) => acc + grade, 0);
    const media = somaNotas / student.grades.length;
    
    // Adiciona a média ao objeto do aluno para referência futura
    student.average = media;
    
    // b) Determinar se foi aprovado ou reprovado
    let status;
    if (media >= 70) {
        status = "Aprovado(a)";
        totalAprovados++; // c) Contar aprovados
    } else {
        status = "Reprovado(a)";
        totalReprovados++; // c) Contar reprovados
    }

    console.log(`\nAluno(a): ${student.name}`);
    console.log(`Média: ${media.toFixed(2)}`);
    console.log(`Status: ${status}`);
    
    // d) Encontrar aluno com a maior média
    if (media > maiorMedia) {
        maiorMedia = media;
        alunoComMaiorMedia = student;
    }
    
    // e) Somar as médias para calcular a média geral da turma
    somaMediasTurma += media;
}

// e) Calcular a média geral da turma
const mediaGeralTurma = somaMediasTurma / students.length;

console.log("\n--- Relatório Final da Turma ---");
console.log(`c) Total de Aprovados: ${totalAprovados}`);
console.log(`c) Total de Reprovados: ${totalReprovados}`);
console.log(`d) Aluno com maior média: ${alunoComMaiorMedia.name} (Média: ${maiorMedia.toFixed(2)})`);
console.log(`e) Média geral da turma: ${mediaGeralTurma.toFixed(2)}`);