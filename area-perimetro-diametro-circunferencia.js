let raio = Number(prompt("Insira o valor do raio da circunferência:"));
if (isNaN(raio) || raio <= 0) {
  alert("Informe um valor válido para o raio da circunferência");
} else {
  let area = Math.PI * raio ** 2;
  let perimetro = 2 * Math.PI * raio;
  let diametro = 2 * raio;

  alert(
    `A área da circunferência de raio ${raio.toFixed(2)} é de ${area.toFixed(
      2
    )},
    com perímetro ${perimetro.toFixed(2)} e ${diametro} de diâmetro.`
  );
}
