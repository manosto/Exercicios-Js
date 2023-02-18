const input = document.getElementById("input");

document.getElementById("value").addEventListener("click", function () {
  input.value = "Ola Mundo !!";

  console.log(input.value);
  //essa forma de ver e feita pelo html, como n mudamos o html no comeco ele n pega em tempo real a mudanca
  console.log(input.getAttribute("value"));
});

document.getElementById("type").addEventListener("click", function () {
  input.type = input.type !== "radio" ? "radio" : "text";

  //outra forma de fazer, mas a maior diferenca q e dinamico a tipagem
  //input.setAttribute('type','radio')
});

document.getElementById("placeholder").addEventListener("click", function () {
  input.placeholder = "Digita algo...";
});

document.getElementById("disable").addEventListener("click", function () {
  input.disabled = !input.disabled;
});

document.getElementById("data").addEventListener("click", function () {
  const data = input.dataset.somethingElse;
  console.log("O valor do atributo data-something-else é: " + data);
  input.dataset.somethingElse = "Algum outro valor";
  console.log(
    "O valor do atributo data-something-else agora é: " +
      input.dataset.somethingElse
  );
});
