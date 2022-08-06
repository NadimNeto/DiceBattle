"use strict";

//Selecionando elementos
// const score0 = document.querySelector("#score--0");
// const score1 = document.querySelector("#score--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

//Condições iniciais
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

let currentScore = 0;

//Funcionalidade de rolar o dado
btnRoll.addEventListener("click", function () {
  //Gerar número aleatório do dado
  const dice = Math.trunc(Math.random() * 6) + 1;
  //Mostrar o dado
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  //Checar se o número foi 1
  if (dice !== 1) {
    //Adiciona o valor do dado aos pontos
    currentScore += dice;
    current0El.textContent = currentScore; //ARRUMAR FUNCIONALIDADE 2 JOGADORES
  } else {
    //trocar de jogador
  }
});
