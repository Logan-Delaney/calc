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
const screen = document.querySelector("#screen")

// declare JS variables

let inputNum1 = 0;
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

// Screen value

function changeScreenValue(currentValue, valueToAdd) {
    if (currentValue.length == 15){
        displayNum = "Out of Space"
    }
}

oneButton.addEventListener("click", () => {
    displayNum += 1;
    console.log(displayNum);
    screen.innerHTML = displayNum;
})
