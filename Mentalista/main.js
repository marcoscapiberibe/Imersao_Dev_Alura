var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 1;
var cont = 2;
function Chutar() {
  var resultado = document.getElementById("resultado");
  var chances = document.getElementById("chances");
  var escolha = parseInt(document.getElementById("valor").value);
  if (escolha == numeroSecreto) {
    resultado.innerHTML =
      "!!!VITÓRIA!!! Você acertou com " + tentativas + " tentativa(s)!";
    document.getElementById("button").disabled = true;
  } else if (escolha > 10 || escolha < 0) {
    resultado.innerHTML = "Digite um número entre 0 e 10!";
  } else if (escolha > numeroSecreto) {
    resultado.innerHTML =
      "Você errou! O número secreto é menor que " +
      escolha +
      ", restam " +
      cont +
      " tentativas!";
  } else if (escolha < numeroSecreto) {
    resultado.innerHTML =
      "Você errou! O número secreto é maior  que " +
      escolha +
      ", restam " +
      cont +
      " tentativas!";
  }
  tentativas += 1;
  cont -= 1;
  if (tentativas >= 4) {
    resultado.innerHTML =
      "GAME OVER!!! Você errou e acabaram as suas tentativas. O número secreto é " +
      numeroSecreto +
      "!";
    document.getElementById("button").disabled = true;
  }
}
