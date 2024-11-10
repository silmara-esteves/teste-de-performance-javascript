let totalConta = Number(prompt("Insira o valor total da conta:"));
let totalPessoas = Number(prompt("Insira a quantidade total de pessoas:"));

if (isNaN(totalConta)) {
  alert("Você não digitou um número");
} else if (isNaN(totalPessoas)) {
  alert("Você não digitou um número");
} else if (totalConta <= 0 && totalPessoas <= 0) {
  alert("Insira um número válido");
} else {
  let gorjeta = totalConta * 0.1;
  let porPessoa = totalConta + gorjeta / 2;
  alert(`O total por pessoa é de ${porPessoa.toFixed(1)}`);
}
