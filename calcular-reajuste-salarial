let salarioAtual = Number(prompt("Informe o salário atual (R$):"));
let taxaReajuste = Number(prompt("Informe o valor percentual do reajuste (%)"));
if (isNaN(salarioAtual) || salarioAtual <= 0) {
  alert("Informe um valor válido para o salário");
} else if (isNaN(taxaReajuste) || taxaReajuste < 0) {
  alert("Informe um valor válido para taxa de reajuste salarial");
} else {
  let novoSalario = (taxaReajuste * salarioAtual) / 100;
  alert(
    `O salário com o reajuste percentual será de R$${(
      salarioAtual + novoSalario
    ).toFixed(2)}`
  );
}
