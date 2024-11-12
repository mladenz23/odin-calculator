const buttons = document.querySelectorAll('.onScreen');
const display = document.querySelector('#display');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

let num1 = '';
let num2 = '';
let op = null;
let result;

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
  if (b === 0) return 'Error';
  return a / b;
};

const displayNumber = function () {
  buttons.forEach(btn => {
    btn.addEventListener('click', function () {
      if (display.textContent === 'Error') clearHelper();

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
    try {
      if (num1 && num2 && op) {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if (op === '+') result = add(n1, n2);
        if (op === '-') result = subtract(n1, n2);
        if (op === '*') result = multiply(n1, n2);
        if (op === '/') result = divide(n1, n2);
      }

      let rStr = result.toString();
      if (rStr.includes('.')) {
        const rArr = rStr.split('.');
        if (rArr[1].length > 5) rArr[1] = rArr[1].slice(0, 2);
        rStr = rArr.join('.');
        result = +rStr;
      }

      display.textContent = result;
      num1 = display.textContent.toString();
      num2 = '';
      op = null;
    } catch (err) {
      console.log(err);
      display.textContent = 'Error';
    }
  });
};

const clearDisplay = function () {
  clear.addEventListener('click', () => clearHelper());
};

const clearHelper = function () {
  num1 = '';
  num2 = '';
  op = null;
  display.textContent = '';
};

clearDisplay();
displayNumber();
operate();
