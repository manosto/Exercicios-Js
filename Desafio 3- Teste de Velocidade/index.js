const nomeCarroUm = prompt("Qual o nome do primeiro carro?");
const velocidadeCarroUm = parseFloat(
  prompt("Qual a velocidade do primeiro carro?")
);
const nomeCarroDois = prompt("Qual o nome do segundo carro?");
const velocidadeCarroDois = parseFloat(
  prompt("Qual a velocidade do segundo carro?")
);

if (velocidadeCarroUm > velocidadeCarroDois) {
  alert("O carro mais rapido é " + nomeCarroUm);
} else if (velocidadeCarroUm < velocidadeCarroDois) {
  alert("O carro mais rapido é " + nomeCarroDois);
} else {
  alert("A velocidade dos dois carros sao iguais");
}

// velocidadeCarroUm > velocidadeCarroDois
//   ? alert("O carro mais rapido é " + velocidadeCarroUm)
//   : alert("O carro mais rapido é " + velocidadeCarroDois);
