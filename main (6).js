function exercicio1() {
  let nomeFuncionario = "Nome do funcionário";
  let idade = 30;
  let salario = 3000.00;
  let cargo = "Cargo do funcionário";
  let turno = "matutino"; // ou "noturno"
  let setor = "Setor do funcionário";
}
exercicio1();
function exercicio2() {
  let nomeEscola = "Nome da escola";
  let estado = "Estado";
  let numeroProfessores = 20;
  let cidade = "Cidade";
  let numeroMilitares = 5;
  let logradouro = "Endereço da escola";
  let numeroEndereco = 123;
  let numeroAlunos = 500;
  let disciplinas = ["Matemática", "Português", "Ciências", "História"];
}
exercicio2();
function exercicio3() {
  let valor1 = 10, valor2 = 5, valor3 = "2", valor4 = 8, valor5 = -5;

  console.log(valor1 + valor2);
  console.log(valor1 + valor2 + valor4);
  console.log(valor1 + valor2 - valor5);
  console.log(valor1 + Number(valor3));
  console.log(valor1 * valor2);
  console.log((valor4 * valor2) / 2);
  
}
exercicio3();
function exercicio4() {
    let v1 = 2, v2 = 3, v3 = 5, v4=6;
    let somaValores = v1 + v2 + v3 + v4;
    let mediaValores = somaValores /4;

    console.log("Soma dos valores:", somaValores);
    console.log("Média dos valores:", mediaValores);
}
exercicio4();function exercicio5(nota1, nota2, nota3) {
    if (nota1 >=60 && nota2 >=60 && nota3 >=60) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

function exercicio6(nota1, nota2, nota3) {
    if (nota1 >=60 && nota2 >=60 && nota3 >=60) {
        return "Aluno foi aprovado com certificado";
    } else if (nota1 >=40 && nota2 >=40 && nota3 >=40) {
        return "Aluno apenas aprovado";
    } else {
        return "Aluno reprovado";
    }
}

console.log(exercicio5(64,45,60));
console.log(exercicio6(64,45,60));
