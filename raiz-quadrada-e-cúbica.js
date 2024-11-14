let valorInicial = Number(prompt("Digite um valor:"));

if (valorInicial > 0) {
  let quadrado = Math.pow(valorInicial, 2);
  let cubo = Math.pow(valorInicial, 3);
  let raizQuadrada = Math.sqrt(valorInicial);

  alert(
    `O quadrado é ${quadrado}, o cubo é ${cubo} e a raiz quadrada ${raizQuadrada}`
  );
} else {
  alert("Digite um número válido");
}