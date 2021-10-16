function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (a === 0 || b === 0) {
        return 'Unable to divide by zero';
    }
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return sum(a, b);
            break;

        case '-':
            return subtract(a, b);
            break;

        case '*':
            return multiply(a, b);
            break;

        case '/':
            return divide(a, b);
            break;

        default:
            return 'Unknown operator';
            break;
    }
}