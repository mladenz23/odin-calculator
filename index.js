const buttons = document.querySelectorAll('.onScreen');
const display = document.querySelector('#display');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

let num1 = '';
let num2 = '';
let op = null;

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
      const content = btn.textContent;

      if (!isNaN(content)) {
        if (op === null) {
          num1 += content;
        } else {
          num2 += content;
        }
        display.textContent += content;
      } else if (['+', '-', '*', '/'].includes(content) && num1) {
        if (!op) {
          op = content;
          display.textContent += content;
        }
      }
    });
  });
};

const operate = function () {
  equals.addEventListener('click', () => {
    if (num1 && num2 && op) {
      const n1 = parseFloat(num1);
      const n2 = parseFloat(num2);

      if (op === '+') display.textContent = add(n1, n2);
      if (op === '-') display.textContent = subtract(n1, n2);
      if (op === '*') display.textContent = multiply(n1, n2);
      if (op === '/') display.textContent = divide(n1, n2);
    }

    num1 = display.textContent.toString();
    num2 = '';
    op = null;
  });
};

const clearDisplay = function () {
  clear.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    op = null;
    display.textContent = '';
  });
};

clearDisplay();
displayNumber();
operate();
