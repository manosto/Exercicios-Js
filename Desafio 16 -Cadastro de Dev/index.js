const form = document.getElementById("devForm");
const developers = [];
let inputRows = 0;

function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.htmlFor = htmlFor;
  label.innerHTML = text;
  return label;
}

function createInput(id, name, value, type = "text", placeholder = "") {
  const input = document.createElement("input");
  input.id = id;
  input.name = name;
  input.value = value;
  input.type = type;
  input.placeholder = placeholder;
  return input;
}

function addTecnologia() {
  const stackInputs = document.getElementById("stackInputs");
  const newRow = document.createElement("li");
  const rowIndex = inputRows++;

  newRow.id = "inputRow-" + rowIndex;
  newRow.className = "inputRow";

  const techNameLabel = createLabel("Name: ", "techName-" + rowIndex);
  const techNameInput = createInput("techName-" + rowIndex, "techName", null);
  const expLabelHead = createLabel("Experiencia: ", "techExp-" + rowIndex);

  const expLabelJr = createLabel("0-2 anos", "techExp-" + rowIndex);
  const expRadioJr = createInput(
    "expRadio-" + rowIndex + ".1",
    "expRadio" + rowIndex,
    "0-2 anos",
    "radio"
  );
  const expLabelPl = createLabel("3-4 anos", "techExp-" + rowIndex);
  const expRadioPl = createInput(
    "expRadio-" + rowIndex + ".2",
    "expRadio" + rowIndex,
    "3-4 anos",
    "radio"
  );
  const expLabelSn = createLabel("5+ anos", "techExp-" + rowIndex);
  const expRadioSn = createInput(
    "expRadio-" + rowIndex + ".3",
    "expRadio" + rowIndex,
    "5+ anos",
    "radio"
  );

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.innerText = "Remover";
  removeButton.addEventListener("click", function () {
    stackInputs.removeChild(newRow);
  });

  newRow.append(
    techNameLabel,
    techNameInput,
    expLabelHead,
    expRadioJr,
    expLabelJr,
    expRadioPl,
    expLabelPl,
    expRadioSn,
    expLabelSn,
    removeButton
  );
  stackInputs.appendChild(newRow);
}

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const fullNameInput = document.getElementById("fullName");
  const inputRows = document.querySelectorAll(".inputRow");

  let technologies = [];
  inputRows.forEach(function (row) {
    console.log(row);
    const techName = document.querySelector(
      "#" + row.id + ' input[name="techName"]'
    ).value;
    const techExp = document.querySelector(
      "#" + row.id + ' input[type="radio"]:checked'
    ).value;
    technologies.push({
      name: techName,
      exp: techExp,
    });
  });
  const newDev = {
    fullName: fullNameInput.value,
    technologies: technologies,
  };
  developers.push(newDev);
  alert("Dev Cadastrado co sucesso!!");

  fullNameInput.value = "";
  inputRows.forEach(function (row) {
    row.remove();
  });
  console.log(developers);
});
