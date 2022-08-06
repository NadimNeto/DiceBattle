"use strict";

//Selecionando elementos
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
// const score0 = document.querySelector("#score--0");
// const score1 = document.querySelector("#score--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//Condições iniciais
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

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
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //Trocar de jogador
    switchPlayer();
  }
});

//Funcionalidade do botão "Segurar"
btnHold.addEventListener("click", function () {
  {
    //Adicionar pontos aos pontos totais
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //Checar se jogador chegou a 100 pontos: Terminar o jogo, Trocar jogador

    switchPlayer();
  }
});
