let opcao = "";

do {
  opcao = parseInt(
    prompt(
      "Calculadora Geometrica"+
      "\nEscolha uma acao:\n1.Area do triangulo\n2.Area do retangulo\n3.Area do quadrado\n4.Area do trapezio\n5.Area do circulo\n6.Sair"
    )
  );

  switch (opcao) {
    case 1:
      alert("A Area do Triangulo é " + calcularAreaTriangulo());
      break;
    case 2:
      alert("A Area do Retangulo é " + calcularAreaRetangulo());
      break;
    case 3:
      alert("A Area do Quadrado é " + calcularAreaQuadrado());
      break;
    case 4:
      alert("A Area do Trapezio é " + calcularAreaTrapezio());
      break;
    case 5:
      alert("A Area do Circulo é " + calcularAreaCirculo());
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

function calcularAreaTriangulo() {
  let base = parseFloat(prompt("Informe a base do Triangulo:"));
  let altura = parseFloat(prompt("Informe a altura do Triangulo:"));
  return (base * altura) / 2;
}

function calcularAreaRetangulo() {
  let base = parseFloat(prompt("Informe a base do Retangulo:"));
  let altura = parseFloat(prompt("Informe a altura do Retangulo:"));
  return base * altura;
}

function calcularAreaQuadrado() {
  let lado = parseFloat(prompt("Informe o lado do Quadrado:"));
  return Math.pow(lado, 2);
}

function calcularAreaTrapezio() {
  let baseMaior = parseFloat(prompt("Informe a base maior do Trapezio:"));
  let baseMenor = parseFloat(prompt("Informe o base menor do Trapezio:"));
  let altura = parseFloat(prompt("Informe a altura do Trapezio:"));
  return ((baseMaior + baseMenor) * altura) / 2;
}

function calcularAreaCirculo() {
  let raio = parseFloat(prompt("Informe o raio do Circulo:"));
  return 3.14 * Math.pow(raio, 2);
}
