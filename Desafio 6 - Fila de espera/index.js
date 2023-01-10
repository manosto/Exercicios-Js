let fila = [];
let opcao = "";
do {
  let pacientes = "";
  for (let index = 0; index < fila.length; index++) {
    pacientes += fila[index] + "\n";
  }
  opcao = parseInt(
    prompt(
      "Pacientes:\n " +
        pacientes +
        "\nEscolha uma acao:\n1.Novo paciente\n2.Consultar paciente\n3.Sair"
    )
  );

  switch (opcao) {
    case 1:
      const novoPaciente = prompt("Qual o Nome do paciente?");
      fila.push(novoPaciente);
      break;
    case 2:
      const pacienteConsultado = fila.shift();
      pacienteConsultado !== undefined
        ? alert("Paciente que esta sendo consultado é: " + pacienteConsultado)
        : alert("Nao tem pacientes para consultar");
      break;
    case 3:
      alert("Encerrando....");
      fila = [];
      break;
    default:
      alert("Opcao Invalida !!!!");
      break;
  }
} while (opcao !== 3);
