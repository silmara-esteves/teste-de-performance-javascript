let precoGasolina = Number(prompt("Digite o preço da gasolina: "));
let precoEtanol = Number(prompt("Digite o preço do álcool: "));

if (isNaN(precoGasolina) || precoGasolina <= 0) {
  alert("Informe um valor válido para o preço da gasolina");
} else if (isNaN(precoEtanol) || precoEtanol <= 0) {
  alert("Informe um valor válido para o preço do etanol");
} else {
  let coeficiente = precoEtanol / precoGasolina;
  if (coeficiente < 0.7) {
    alert("Use álcool");
  } else {
    alert("Use gasolina");
  }
}
