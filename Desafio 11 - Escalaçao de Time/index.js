function addPlayer() {
  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;

  const confirmation = confirm("Escalar " + name + " como " + position + "?");
  if (confirmation) {
    const teamList = document.getElementById("teamList");
    const playerItem = document.createElement("li");
    playerItem.id = "player-" + number;
    playerItem.innerText = name + " - " + position + "(" + number + ")";
    teamList.appendChild(playerItem);

    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
  }
}

function removePlayer() {
  const numberToRemove = document.getElementById("numberToRemove").value;
  const playerToRemove = document.getElementById("player-" + numberToRemove);

  if (playerToRemove == null) {
    alert("Este jogador nao existe");
  } else {
    const confirmation = confirm(
      "Deseja remover o jogador " + playerToRemove.innerText + "?"
    );

    if (confirmation) {
      document.getElementById("teamList").removeChild(playerToRemove);
      document.getElementById("numberToRemove").value = "";
    }
  }
}
