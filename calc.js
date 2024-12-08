// declare UI variables

const acButton = document.querySelector("#AC");
const percentButton = document.querySelector("#percent");
const backspaceButton = document.querySelector("#backspace");
const multiplyButton = document.querySelector("#multiply");
const sevenButton = document.querySelector("#seven");
const eightButton = document.querySelector("#eight");
const nineButton = document.querySelector("#nine");
const divideButton = document.querySelector("#divide");
const fourButton = document.querySelector("#four");
const fiveButton = document.querySelector("#five");
const sixButton = document.querySelector("#six");
const plusButton = document.querySelector("#plus");
const oneButton = document.querySelector("#one");
const twoButton = document.querySelector("#two");
const threeButton = document.querySelector("#three");
const minusButton = document.querySelector("#minus");
const decimalButton = document.querySelector("#decimal");
const zeroButton = document.querySelector("#zero");
const posNegButton = document.querySelector("#posneg");
const equalsButton = document.querySelector("#equals");
const screen = document.querySelector("#screen");

// declare JS variables

let numValue = 0;
let inputNum2 = 0;
let operator = "";
let displayNum = "";

// Math functions

function addNums(num1, num2) {
  return num1 + num2;
}

function subtractNums(num1, num2) {
  return num1 - num2;
}

function multiplyNums(num1, num2) {
  return num1 * num2;
}

function divideNums(num1, num2) {
  return num1 / num2;
}

// Screen value functions

function changeScreenValue(currentValue, valueToAdd) {
  if (currentValue.length == 14) {
    displayNum = "Out of Space!!";
    screen.innerHTML = displayNum;
    console.log(displayNum);
  } else {
    displayNum += valueToAdd;
    // screen.innerHTML = Math.round(displayNum * 100) / 100;
    screen.innerHTML = displayNum;
    console.log(displayNum);
  }
}

function addNegative(currentValue) {
  displayNum = "-" + currentValue;
  screen.innerHTML = displayNum;
}

function removeNegative(currentValue) {
  displayNum = currentValue.substring(1);
  screen.innerHTML = displayNum;
}

function backSpace(currentValue) {
  displayNum = currentValue.substring(0, currentValue.length - 1);
  screen.innerHTML = displayNum;
}

function percent(currentValue) {
  displayNum = currentValue / 100;
  screen.innerHTML = Math.round(displayNum * 100) / 100;
}

// Operator Function

function getOperator(opValue) {
  numValue = displayNum;
  console.log(numValue);
  screen.innerHTML = Math.round(numValue * 100) / 100;
  displayNum = "";
  operator = "";
  operator += opValue;
  console.log(operator);
}

// Compute Function

function computeCalc(value1, value2, operator) {
  if (operator == "plus") {
    displayNum = parseFloat(value1) + parseFloat(value2);
    console.log(displayNum);
    screen.innerHTML = Math.round(displayNum * 100) / 100;
  } else if (operator == "minus") {
    displayNum = parseFloat(value1) - parseFloat(value2);
    console.log(displayNum);
    screen.innerHTML = Math.round(displayNum * 100) / 100;
  } else if (operator == "multiply") {
    displayNum = parseFloat(value1) * parseFloat(value2);
    console.log(displayNum);
    screen.innerHTML = Math.round(displayNum * 100) / 100;
  } else if (operator == "divide") {
    displayNum = parseFloat(value1) / parseFloat(value2);
    console.log(displayNum);
    screen.innerHTML = Math.round(displayNum * 100) / 100;
  } else if (operator == "") {
    console.log("no operation");
  } else {
    numValue = displayNum;
    console.log(numValue);
    screen.innerHTML = Math.round(numValue * 100) / 100;
    displayNum = "";
  }
}
// Number Buttons

oneButton.addEventListener("click", () => {
  changeScreenValue(displayNum, 1);
});

twoButton.addEventListener("click", () => {
  changeScreenValue(displayNum, 2);
});

threeButton.addEventListener("click", () => {
  changeScreenValue(displayNum, 3);
});

fourButton.addEventListener("click", () => {
  changeScreenValue(displayNum, 4);
});

fiveButton.addEventListener("click", () => {
  changeScreenValue(displayNum, 5);
});

sixButton.addEventListener("click", () => {
  changeScreenValue(displayNum, 6);
});

sevenButton.addEventListener("click", () => {
  changeScreenValue(displayNum, 7);
});

eightButton.addEventListener("click", () => {
  changeScreenValue(displayNum, 8);
});

nineButton.addEventListener("click", () => {
  changeScreenValue(displayNum, 9);
});

zeroButton.addEventListener("click", () => {
  changeScreenValue(displayNum, 0);
});

// Operator Buttons

plusButton.addEventListener("click", () => {
  if (displayNum != "") {
    computeCalc(displayNum, numValue, operator);
    getOperator("plus");
  }
});

minusButton.addEventListener("click", () => {
  if (displayNum != "") {
    computeCalc(numValue, displayNum, operator);
    getOperator("minus");
  }
});

multiplyButton.addEventListener("click", () => {
  if (displayNum != "") {
    computeCalc(numValue, displayNum, operator);
    getOperator("multiply");
  }
});

divideButton.addEventListener("click", () => {
  if (displayNum != "") {
    computeCalc(numValue, displayNum, operator);
    getOperator("divide");
  }
});

equalsButton.addEventListener("click", () => {
  computeCalc(numValue, displayNum, operator);
  operator = "";
});

// Other Buttons

acButton.addEventListener("click", () => {
  displayNum = "";
  numValue = "";
  operator = "";
  screen.innerHTML = 0;
});

percentButton.addEventListener("click", () => {
  percent(displayNum);
});

backspaceButton.addEventListener("click", () => {
  if (displayNum.length > 1) {
    backSpace(displayNum);
  } else {
    console.log("nope");
  }
});

posNegButton.addEventListener("click", () => {
  if (displayNum.charAt(0) == "-") {
    removeNegative(displayNum);
  } else {
    addNegative(displayNum);
  }
});

decimalButton.addEventListener("click", () => {
  if (displayNum.includes(".")) {
    console.log("nope");
  } else {
    changeScreenValue(displayNum, ".");
  }
});
