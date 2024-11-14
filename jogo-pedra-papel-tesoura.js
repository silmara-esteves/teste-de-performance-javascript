/*
Etapas:
Entrada do usuário: escolher entre pedra, papel, tesoura
Distribuir os dados: pedra - 1, papel - 2, tesoura - 3;
Validar os dados: maior ou igual a 1 e menor ou igual a três;
Armazenar em variáveis;
Setar as regras (if/else);
Informar o usuário sua escolha, a escolha do programa, e se venceu ou perdeu.
*/

function escolhaComputador() {
  let escolha = Math.floor(Math.random() * 3) + 1;
  return escolha;
}
function validarEscolha(escolha) {
  if (escolha < 1 || escolha > 3 || isNaN(escolha)) {
    alert(`Escolha inválida!`);
    return false;
  }
  return true;
}
let escolhaUsuario = Number(
  prompt(
    `Digite o número correspondente para sua escolha: \n 1 - Pedra \n 2 - Papel \n 3 - Tesoura:`
  )
);
if (!validarEscolha(escolhaUsuario)) {
  throw new Error("Escolha inválida!");
}
let escolhaUsuarioTexto;
if (escolhaUsuario === 1) {
  escolhaUsuarioTexto = "Pedra";
} else if (escolhaUsuario === 2) {
  escolhaUsuarioTexto = "Papel";
} else if (escolhaUsuario === 3) {
  escolhaUsuarioTexto = "Tesoura";
}
let escolhaPc = escolhaComputador();
let escolhaPcTexto =
  escolhaPc === 1 ? "Pedra" : escolhaPc === 2 ? "Papel" : "Tesoura";
alert(`Você escolheu: ${escolhaUsuarioTexto}`);
alert(`O computador escolheu: ${escolhaPcTexto}`);
if (escolhaUsuario === escolhaPc) {
  alert("Empate!");
} else if (
  (escolhaUsuario === 1 && escolhaPc === 3) || // Pedra ganha de Tesoura
  (escolhaUsuario === 2 && escolhaPc === 1) || // Papel ganha de Pedra
  (escolhaUsuario === 3 && escolhaPc === 2) // Tesoura ganha de Papel
) {
  alert("Você venceu!");
} else {
  alert("Você perdeu!");
}
