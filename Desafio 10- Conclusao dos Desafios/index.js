let opcao = "";
let vagas = [];

do {
  opcao = parseInt(
    prompt(
      "Vagas de Emprego" +
        "\n\n1.Lista das vagas disponiveis\n2.Criar vaga\n3.Visualizar uma vaga\n4.Inscrever candidato em uma vaga\n5.Excluir uma vaga\n6.Sair"
    )
  );

  switch (opcao) {
    case 1:
      listarvagas();
      break;
    case 2:
      criarVagas();
      break;
    case 3:
      exibirVagas();
      break;
    case 4:
      cadastrarCandidato();
      break;
    case 5:
      excluirVaga();
      break;
    case 6:
      alert("Encerrando....");
      imoveis = [];
      break;
    default:
      alert("Opcao Invalida !!!!");
      break;
  }
} while (opcao !== 6);

function listarvagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += indice + ". ";
    textoFinal += vaga.nome;
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n";
    return textoFinal;
  }, "");
  alert(vagasEmTexto);
}


function criarVagas() {
  const nome = prompt("Qual e o nome da vaga?");
  const descricao = prompt("Qual a descricao da vaga?");
  const dataLimite = prompt("Qual a data limite da vaga? (dd/mm/aaaa)");

  const confirmacao = confirm(
    "Deseja confirmar as informações inseridas?\n" +
      "Nome:" +
      nome +
      "\nDescrição: " +
      descricao +
      "\nData Limite: " +
      dataLimite
  );
  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
    alert("Vaga criada com Sucesso!!!!!");
  } else {
    alert("Vaga cancelada, voce sera redirecionado para o menu principal");
  }
}

function exibirVagas() {
  const indice = prompt("Qual a vaga que deseja ser exibida?");
  if (indice >= vagas.length || indice < 0) {
    alert("Vaga Invalida");
    return;
  }
  console.log(vagas.length);
  const vagaExibida = vagas[indice];
  const candidatoEmTexto = vagaExibida.candidatos.reduce(function (
    textoFinal,
    candidato
  ) {
    return (textoFinal += "\n - " + candidato);
  },
  "");
  alert(
    "Vaga " +
      indice +
      "\nNome: " +
      vagaExibida.nome +
      "\nDescrição: " +
      vagaExibida.descricao +
      "\nData Limite: " +
      vagaExibida.dataLimite +
      "\nQuantidade de candidatos: " +
      vagaExibida.candidatos.length +
      "\nCandidatos: " +
      candidatoEmTexto
  );
}

function cadastrarCandidato() {
  const nomeCandidato = prompt("Informar o nome do candidado: ");
  const indiceVaga = prompt("Informe qual vaga deseja se cadastrar: ");
  const vagaExibida = vagas[indiceVaga];

  const confirmacao = confirm(
    "Deseja confirmar o cadastro do candidato?\n" +
      "Nome: " +
      nomeCandidato +
      "\nVaga a ser cadastrado: " +
      vagaExibida.nome +
      "\nDescrição: " +
      vagaExibida.descricao +
      "\nData Limite: " +
      vagaExibida.dataLimite
  );
  if (confirmacao) {
    vagaExibida.candidatos.push(nomeCandidato);
    alert("Candidato cadastrado com Sucesso!!!!!");
  }
}

function excluirVaga() {
  const indiceVaga = prompt("Informe qual vaga deseja excluir: ");
  if (indiceVaga >= vagas.length || indiceVaga < 0) {
    alert("Vaga Invalida");
    return;
  }
  const vagaParaExcluir = vagas[indiceVaga];
  const confirmacao = confirm(
    "Deseja excluir essa vaga?\n" +
      "Nome: " +
      indiceVaga +
      "\nVaga a ser excluida: " +
      vagaParaExcluir.nome +
      "\nDescrição: " +
      vagaParaExcluir.descricao +
      "\nData Limite: " +
      vagaParaExcluir.dataLimite
  );
  if (confirmacao) {
    vagas.splice(indiceVaga, 1);
    alert("Vaga excluida com Sucesso!!!!!");
  }
}
