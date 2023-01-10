const valorMetro = prompt("Informe um valor em metro");
const valorConvertido = prompt(
  "Para qual valor sera convertido?" +
    "\n" +
    "\n a) milimetro(mm)" +
    "\n b) centimetro(cm)" +
    "\n c) decimetro(dm)" +
    "\n d) decametro(dam)" +
    "\n e) hectometro(hm)" +
    "\n f) quilometro(km)"
);

switch (valorConvertido) {
  case "a":
    alert("Resultado: " + valorMetro + "m = " + valorMetro * 1000 + "mm");
    break;
  case "b":
    alert("Resultado: " + valorMetro + "m = " + valorMetro * 100 + "cm");
    break;
  case "c":
    alert("Resultado: " + valorMetro + "m = " + valorMetro * 10 + "dm");
    break;
  case "d":
    alert("Resultado: " + valorMetro + "m = " + valorMetro / 10 + "dam");
    break;
  case "e":
    alert("Resultado: " + valorMetro + "m = " + valorMetro / 100 + "hm");
    break;
  case "f":
    alert("Resultado: " + valorMetro + "m = " + valorMetro / 1000 + "km");
    break;

  default:
    alert("Opcao Invalida");
    break;
}
