let altura = prompt("Insira a altura (em cm):");
let peso = prompt("Insira o peso (em kg):");

altura = Number(altura);
peso = Number(peso);

if (isNaN(altura) || altura <= 0) {
  alert("Por favor, insira uma altura válida em centímetros");
} else if (isNaN(peso) || peso <= 0) {
  alert("Por favor, insira um peso válido em kg");
} else {
  let alturaEmMetros = altura / 100;
  let imc = peso / Math.pow(alturaEmMetros, 2);
  alert(`O seu IMC é ${imc.toFixed(3)}`);
}
