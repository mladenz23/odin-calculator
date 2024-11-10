const buttons = document.querySelectorAll('.onScreen');
// const operators = document.querySelectorAll('.operator');
const display = document.querySelector('#display');
const equals = document.querySelector('.equals');

let num1;
let num2;
let op;

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const displayNumber = function () {
  buttons.forEach(btn => {
    btn.addEventListener('click', function () {
      let tempNumber;
      let index;
      let ops = ['+', '-', '*', '/'];

      display.textContent += btn.textContent;
      tempNumber = display.textContent;

      for (let i = 0; i < tempNumber.length; i++) {
        if (ops.includes(tempNumber[i])) {
          index = i;
        }
      }

      num1 = +tempNumber.slice(0, index);
      num2 = +tempNumber.slice(index + 1);
      op = tempNumber[index];

      add(num1, num2);

      // console.log('Num1: ' + num1, 'Num2: ' + num2, 'Op: ' + op);
      // console.log(tempNumber);
    });
  });
};

// fix
const operate = function (n1, n2, op) {
  displayNumber();
  let result;

  if (op === '+') result = add(n1, n2);
  if (op === '-') result = subtract(n1, n2);
  if (op === '*') result = multiply(n1, n2);
  if (op === '/') result = divide(n1, n2);

  equals.addEventListener('click', () => {
    display.textContent = result;
  });
};

operate(num1, num2, op);
