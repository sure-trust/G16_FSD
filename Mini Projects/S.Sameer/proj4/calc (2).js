let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstInput = '';
let secondInput = '';

function appendToDisplay(value) {
    if (value === '/' || value === '*' || value === '+' || value === '-') {
        operator = value;
        firstInput = currentInput;
        currentInput = '';
    } else {
        currentInput += value;
    }
    display.textContent = currentInput;
}

function calculate() {
    secondInput = currentInput;
    let result;
    switch (operator) {
        case '/':
            result = parseFloat(firstInput) / parseFloat(secondInput);
            break;
        case '*':
            result = parseFloat(firstInput) * parseFloat(secondInput);
            break;
        case '+':
            result = parseFloat(firstInput) + parseFloat(secondInput);
            break;
        case '-':
            result = parseFloat(firstInput) - parseFloat(secondInput);
            break;
        default:
            break;
    }
    display.textContent = result;
    currentInput = result;
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstInput = '';
    secondInput = '';
    display.textContent = '0';
}
