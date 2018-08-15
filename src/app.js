// import 'bootstrap';
//sass version use import './scss/app.scss';
import 'bootstrap/dist/css/bootstrap.css';
import "./css/style.css";

const keywords = ['let', 'const', 'var', 'for', 'if', 'typeof'];
let timeLeft = 5;
let currentScore = 0;
let gameOver = false;

const score = document.getElementById('score');
const time = document.getElementById('time');
const input = document.getElementById('input');
const word = document.getElementById('keyword');

window.addEventListener('load', initGame);

input.addEventListener('keyup', matchWord);

function initGame() {
  // load random keyword
  word.innerHTML = keywords[Math.floor(Math.random() * keywords.length)];
  //countdown
  setInterval(() => {
    if (timeLeft > 0) {
      timeLeft -= 1;
      time.innerHTML = timeLeft;
    } else {
      gameOver = true;
    }
  }, 1000);

  setInterval(() => {
    if (gameOver) {
      alert("Game over! Score is " + currentScore);
      currentScore = 0;
      score.innerHTML = currentScore;
      timeLeft = 5;
      gameOver = false;
    }
  }, 100);
}

function matchWord(e) {
  const val = input.value;
  console.log(e);
  if (val === word.innerHTML) {
    currentScore += 50;
    score.innerHTML = currentScore;
    gameOver = false;
    timeLeft = 5;
    input.value = "";
    // load random keyword
    word.innerHTML = keywords[Math.floor(Math.random() * keywords.length)];
  }
}

