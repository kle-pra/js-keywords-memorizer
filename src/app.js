// import 'bootstrap';
//sass version use import './scss/app.scss';
import 'bootstrap/dist/css/bootstrap.css';
import "./css/style.css";

const keywords = ['abstract', 'arguments', 'await', 'boolean',
  'break', 'byte', 'case', , 'catch',
  'char', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do',
  'double', 'else', 'enum', 'eval',
  'export', 'extends', 'false', 'final',
  'finally', 'float', 'for', 'function',
  'goto', 'if', 'implements', 'import',
  'instanceof', 'int', 'interface',
  'let', 'long', 'native', 'new',
  'null', 'package', 'private', 'protected',
  'public', 'return', 'short', 'static',
  'super', 'switch', 'synchronized', 'this',
  'throw', 'throws', 'transient', 'true',
  'try', 'typeof', 'var', 'void',
  'volatile', 'while', 'with', 'yield'];

let timeLeft = 5;
let currentScore = 0;
let gameOver = false;
let gameIsOn = false;
const score = document.getElementById('score');
const time = document.getElementById('time');
const input = document.getElementById('input');
const word = document.getElementById('keyword');

window.addEventListener('load', initGame);

input.addEventListener('keyup', matchWord);

function initGame() {
  setupRandomWord()

  setInterval(() => {
    if (gameIsOn) {
      if (!gameOver && timeLeft > 0) {
        timeLeft -= 1;
        time.innerHTML = timeLeft;
      } else {
        gameOver = true;
      }
    }
  }, 1000);

  setInterval(() => {
    if (gameIsOn) {
      if (gameOver) {

        const keyword = 'Game over! Your score is ' + currentScore;
        var msg = new SpeechSynthesisUtterance(keyword);
        window.speechSynthesis.speak(msg);

        alert("Game over! Score is " + currentScore);
        currentScore = 0;
        score.innerHTML = currentScore;
        gameOver = false;
        gameIsOn = false;
        timeLeft = 5;
      }
    }
  }, 100);
}

function matchWord(e) {
  gameIsOn = true;
  const val = input.value;

  if (val === word.innerHTML) {
    if (!gameOver) {
      currentScore += 50;
      const keyword = 'Correct!';
      var msg = new SpeechSynthesisUtterance(keyword);
      window.speechSynthesis.speak(msg);
    }
    score.innerHTML = currentScore;
    gameOver = false;
    timeLeft = 5;
    input.value = "";
    setupRandomWord();
  }
}


function setupRandomWord() {
  const keyword = keywords[Math.floor(Math.random() * keywords.length)];
  var msg = new SpeechSynthesisUtterance(keyword);
  window.speechSynthesis.speak(msg);
  word.innerHTML = keyword;

}

