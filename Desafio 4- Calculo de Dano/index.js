const nomePersonagemPrinc = prompt("Qual o nome do seu personagem? ");
const nomeDoPoder = prompt("Qual o nome do Poder?");
const danoDoPoder = parseInt(prompt("Qual o dano do " + nomeDoPoder + " ?"));
const nomePersonagemSec = prompt("Qual o nome do seu inimigo? ");
let pontosDeVidaPersoSec = parseInt(
  prompt("Quanto de vida o " + nomePersonagemSec + " tem ?")
);
const pontosDeDefesaPersoSec = parseInt(
  prompt("Quanto de defesa o " + nomePersonagemSec + " tem ?")
);
const usaEscudoPersosec = prompt("O " + nomePersonagemSec + " usa escudo ?");
let danoCausado = 0;

if (
  danoDoPoder > pontosDeDefesaPersoSec &&
  (usaEscudoPersosec == "Nao" ||
    usaEscudoPersosec == "nao" ||
    usaEscudoPersosec == "Não" ||
    usaEscudoPersosec == "não")
) {
  danoCausado = danoDoPoder - pontosDeDefesaPersoSec;
  pontosDeVidaPersoSec = pontosDeVidaPersoSec - danoCausado;
} else if (
  danoDoPoder > pontosDeDefesaPersoSec &&
  (usaEscudoPersosec == "Sim" || usaEscudoPersosec == "sim")
) {
  danoCausado = (danoDoPoder - pontosDeDefesaPersoSec) / 2;
  pontosDeVidaPersoSec = pontosDeVidaPersoSec - danoCausado;
}

pontosDeVidaPersoSec -= danoCausado;

alert(
  "Nome do seu Personagem: " +
    nomePersonagemPrinc +
    "\n Nome do ataque: " +
    nomeDoPoder +
    "\n Dano do Poder " +
    nomeDoPoder +
    " :" +
    danoDoPoder +
    "\n Nome do seu Inimigo: " +
    nomePersonagemSec +
    "\n Pontos de Vida do " +
    nomePersonagemSec +
    " :" +
    pontosDeVidaPersoSec +
    "\n Pontos de Defesa do " +
    nomePersonagemSec +
    " :" +
    pontosDeDefesaPersoSec +
    "\n" +
    nomePersonagemSec +
    " usa escudo?: " +
    usaEscudoPersosec
);
