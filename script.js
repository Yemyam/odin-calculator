function add(op1,op2){
    return op1 + op2;
}
function subtract(op1,op2){
    return op1 - op2;
}
function multiply(op1,op2){
    return op1 * op2;
}
function divide(op1,op2){
    return op1 / op2;
}
function operate(op1,op2,operator){
    switch(operator){
        case "+": return add(op1,op2);
        case "-": return subtract(op1,op2);
        case "*": return multiply(op1,op2);
        case "/": return divide(op1,op2);
    }
}

let op1, op2, operator;

