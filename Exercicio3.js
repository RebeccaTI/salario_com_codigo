var salario_novo = 0;
var diferenca = 0;
alert(" Veja qual o código do seu cargo. 101: GERENTE, 102: ENGENHEIRO e 103:TÉCNICO");
var cargo = prompt("Por favor digite o código do cargo: ");
var salario_antigo = prompt("Por favor, informe o seu salário ");
var cargo_num = parseInt(cargo);
var salario_antigo_num =parseInt(salario_antigo);

if (101 == cargo_num) {
    salario_novo = salario_antigo_num + 0.10 * salario_antigo_num;
    diferenca = 0.10 * salario_antigo_num; 
} else if (102 == cargo_num) {
    salario_novo = salario_antigo_num + 0.20 * salario_antigo_num;
    diferenca = 0.20 * salario_antigo_num;
} else if (103 == cargo_num) {
    salario_novo = salario_antigo_num + (0.30 * salario_antigo_num);
    diferenca = 0.30 * salario_antigo_num;
} else {
    salario_novo = salario_antigo_num + (0.40 * salario_antigo_num);
    diferenca = 0.40 * salario_antigo_num;
}
console.log(salario_antigo_num);
console.log(salario_novo);
console.log(diferenca);