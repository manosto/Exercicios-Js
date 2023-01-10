const baralho = []
let opcao = "";
do {
  opcao = parseInt(
    prompt(
      "Cartas no baralho:\n " +
      baralho.length +
        "\nEscolha uma acao:\n1.Adicionar uma carta\n2.Puxar uma carta\n3.Sair"
    )
  );

  switch (opcao) {
    case 1:
      const novaCarta = prompt("Qual carta deseja adicionar?");
      baralho.push(novaCarta);
      break;
    case 2:
      const cartaPuxada = baralho.pop();
      cartaPuxada !== undefined
        ? alert("Carta que foi puxada é: " + cartaPuxada)
        : alert("Nao tem cartas para puxar");
      break;
    case 3:
      alert("Encerrando....");
      baralho = [];
      break;
    default:
      alert("Opcao Invalida !!!!");
      break;
  }
} while (opcao !== 3);