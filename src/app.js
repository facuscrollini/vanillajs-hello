import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying",
];
const randomItem = (array) => {
  let random = array[Math.floor(Math.random() * array.length)];
  return random;
};

let excuse =
  randomItem(who) +
  " " +
  randomItem(action) +
  " " +
  randomItem(what) +
  randomItem(when) +
  ".";

window.onload = function() {
  //write your code here
  let log = document.querySelector("#excuse");
  log.innerHTML = excuse;
};
