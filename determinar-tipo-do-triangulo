let ladoA = Number(prompt("Insira o tamanho do lado A do triângulo:"));
let ladoB = Number(prompt("Insira o tamanho do lado B do triângulo:"));
let ladoC = Number(prompt("Insira o tamanho do lado C do trigângulo:"));

if (
  isNaN(ladoA) ||
  ladoA <= 0 ||
  isNaN(ladoB) ||
  ladoB <= 0 ||
  isNaN(ladoC) ||
  ladoC <= 0
) {
  alert("Informe valores válidos para os lados do triângulo");
} else {
  if (ladoA === ladoB && ladoB === ladoC) {
    alert("O triângulo é equilátero");
  } else if (ladoA !== ladoB && ladoB == ladoC) {
    alert("O triângulo é isósceles");
  } else {
    alert("O triângulo é escaleno");
  }
}
