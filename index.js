const buttons = document.querySelectorAll('.digit');
const display = document.querySelector('#display');

let num1;
let num2;
let op;

const add = function () {};

const subtract = function () {};

const multiply = function () {};

const divide = function () {};

const operate = function (n1, n2, op) {};

const displayNumber = function () {
  buttons.forEach(btn => {
    btn.addEventListener('click', function () {
      let number = 0;
      display.textContent += btn.textContent;
      number = +display.textContent;
      console.log(number);
    });
  });
};

displayNumber();
