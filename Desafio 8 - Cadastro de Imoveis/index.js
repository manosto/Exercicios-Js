const imoveis = [];
let opcao = "";
do {
  opcao = parseInt(
    prompt(
      "Quantidade de Imoveis cadastrados:\n " +
        imoveis.length +
        "\nEscolha uma acao:\n1.Salvar um imovel\n2.Mostrar todos os Imoveis\n3.Sair"
    )
  );

  switch (opcao) {
    case 1:
      const imovel = {};
      imovel.proprietario = prompt("informe quem e o proprietario do imovel");
      imovel.quartos = prompt("Quantos quartos possue o imovel?");
      imovel.banheiros = prompt("Quantos banheiros tem o imovel?");
      imovel.garangem = prompt("O imovel possue garagem? (Sim/Nao)");

      const confimecao = confirm(
        "Voce realmente quer salvar esse imovel?" +
          "\nProprietario: " +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.quartos +
          "\nBanheiros: " +
          imovel.banheiros +
          "\nPossui garagem: " +
          imovel.garangem
      );
      if (confimecao == true) {
        imoveis.push(imovel);
      }
      break;
    case 2:
      for (let index = 0; index < imoveis.length; index++) {
        alert(
          "Imovel " +
            (index + 1) +
            "\nProprietario: " +
            imoveis[index].proprietario +
            "\nQuartos: " +
            imoveis[index].quartos +
            "\nBanheiros: " +
            imoveis[index].banheiros +
            "\nPossui garagem: " +
            imoveis[index].garangem
        );
      }
      break;
    case 3:
      alert("Encerrando....");
      imoveis = [];
      break;
    default:
      alert("Opcao Invalida !!!!");
      break;
  }
} while (opcao !== 3);
