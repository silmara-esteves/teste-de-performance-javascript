function validacaoNota(nota) {
  return !isNaN(nota) && nota >= 0 && nota <= 10;
}
let primeiraNota = Number(prompt("Digite a primeira nota:"));
let segundaNota = Number(prompt("Digite a segunda nota:"));
let terceiraNota = Number(prompt("Digite a terceira nota:"));

if (
  validacaoNota(primeiraNota) &&
  validacaoNota(segundaNota) &&
  validacaoNota(terceiraNota)
) {
  let media = (primeiraNota + segundaNota + terceiraNota) / 3;
  alert(`A média é ${media.toFixed(1)}`);
} else {
  alert("Informe uma nota entre 0 e 10.");
}
