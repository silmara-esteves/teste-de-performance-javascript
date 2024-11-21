let valorProduto = Number(prompt("Digite o valor do produto em R$:"));
let valorPago = Number(prompt("Digite o valor pago em R$:"));

if (valorProduto < 0 || valorPago < 0) {
  alert("Você não informou um número válido.");
} else {
  let troco = Math.round(valorPago - valorProduto);
  alert(`O troco será de R$${troco}`);
}
