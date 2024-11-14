let precoGasolina = parseFloat(
  prompt("Insira o preço do litro da gasolina (em R$):")
);
let valorDesejado = parseFloat(
  prompt("Informe o valor que deseja abastecer (em R$):")
);
if (isNaN(precoGasolina) || precoGasolina <= 0) {
  alert("Informe um valor válido para o preço da gasolina");
} else if (isNaN(valorDesejado) || valorDesejado <= 0) {
  alert("Informe um valor válido que deseja abastecer");
} else {
  let totalLitros = valorDesejado / precoGasolina;
  alert(`O total de litros abastecidos foi de ${totalLitros.toFixed(2)}`);
}
