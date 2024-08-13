// zeroToggle is used for discerning between subtracting from 0 and added a - to an operand
var op1 = "0", op2 ="", operator = "";
var numbers = "0123456789"

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

const btns = document.querySelectorAll(".button")
const display = document.querySelector(".display")
btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        // clear
        if(btn.textContent == "c"){
            op1 = 0, op2 = "", operator = "";
            display.textContent = "0";
        }
        else if(operator == ""){
            operator = getOper(btn.textContent,operator,op1)
            console.log(operator)
            op1 = getNum(btn.textContent,op1)
            console.log(op1)
            display.textContent = op1 + " " + operator;
        }
        else if(operator == "-"){
            // add logic for negative operator !!!
            op2 = getNum(btn.textContent,op2);
            operator = getOper(btn.textContent,operator,op2);
            display.textContent = op1 + " " + operator + " " + op2;
        }
        else{
            operator = getOper(btn.textContent,operator,op1)
            op2 = getNum(btn.textContent,op2)
            console.log(op2)
            display.textContent = op1 + " " + operator + " " + op2;
        }
    })
})

// function getNum(value,op){
//     // add logic for calculating when op1,op2,and operator are valid

//     // remove 0 when first digit is entered
//     if((!isNaN(value)) && (op == "0")){
//         op = "";
//     }
//     switch(value){
//         case "0": if (op == "0"){
//             return op;
//         }
//         else{
//             return op += "0";
//         }
//         case "1": return op += "1";
//         case "2": return op += "2";
//         case "3": return op += "3";
//         case "4": return op += "4";
//         case "5": return op += "5";
//         case "6": return op += "6";
//         case "7": return op += "7";
//         case "8": return op += "8";
//         case "9": return op += "9";
//         case "-": 
//         if(op == ""){
//             return "-" + op;
//         }
//         else{
//             return op
//         }
//     }
//     return op;
// }

// function getOper(value,operator,op){
//     // if op1 and op2 filled do not update
//     if(op == "-"){
//         return '';
//     }
//     switch(value){
//         case "+": return "+";
//         case "-": 
//         if(op == "-"){
//             return ""
//         }
//         if(op == "0"){
//             return "-";
//         }
//         return "-";
//         case "x": return "x";
//         case "÷": return "÷";
//         }
//     return operator
// }


