// TO DO !!!
// Limit length of operands to 16 or 17

var op1 = "0", op2 ="", operator = "";

function add(op1,op2){
    return round(Number(op1) + Number(op2));
}
function subtract(op1,op2){
    return round(Number(op1) - Number(op2));
}
function multiply(op1,op2){
    return round(Number(op1) * Number(op2));
}
function divide(op1,op2){
    return round(Number(op1) / Number(op2));
}
function operate(op1,op2,operator){
    switch(operator){
        case "+": return add(op1,op2);
        case "-": return subtract(op1,op2);
        case "x": return multiply(op1,op2);
        case "÷": return divide(op1,op2);
    }
}

function round(num){
    if(String(num).length > 17){
        return num.toExponential(11);
    }
    return num
}

const btns = document.querySelectorAll(".button")
const display = document.querySelector(".display")
const lowerDisplay = document.querySelector(".lower");
const upperDisplay = document.querySelector(".upper");
btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        // clear
        if(btn.textContent == "c"){
            op1 = "0", op2 = "", operator = "";
            upperDisplay.textContent = "";
            lowerDisplay.textContent = "0";
        }
        else if(btn.textContent == "="){
            // Division by zero error
            if((operator == "÷") && (Number(op2) == 0)){
                upperDisplay.textContent = op1 + " " + operator + " " + op2;
                op1 = "0", op2 = "", operator = "";
                lowerDisplay.textContent = "You can't divide by 0"
            }
            else if((!isNaN(op1)) && (!isNaN(op2)) && (isOper(operator))){
                upperDisplay.textContent = op1 + " " + operator + " " + op2 + " " + "=";
                console.log(op1,op2,operator)
                op1 = operate(op1,op2,operator)
                op2 = "";
                operator = "";
                console.log(op1);
                lowerDisplay.textContent = op1;
            }
        }
        else if(isOper(btn.textContent) && (op1 != "") && (op2 != "")){
            console.log("hi")
            op1 = operate(op1,op2,operator);
            operator = btn.textContent;
            op2 = ""
            lowerDisplay.textContent = op1;
            upperDisplay.textContent = op1 + " " + operator;
        }
        else if(operator == ""){
            console.log(btn.textContent)
            if((btn.textContent == ".") && !op1.includes(".")){
                if(op1.length < 16){
                    op1 += btn.textContent;
                }
            }
            else if((op1 == "0") && (!isNaN(btn.textContent))){
                op1 = btn.textContent;
            }
            else if(!isNaN(btn.textContent)){
                    op1 += btn.textContent;
            }
            else if((!isNaN(op1)) && isOper(btn.textContent)){
                operator = btn.textContent
                upperDisplay.textContent = op1 + " " + operator
            }
            lowerDisplay.textContent = op1 + " " + operator
            if((!isNaN(op1)) && isOper(btn.textContent)){
                lowerDisplay.textContent = "";
            }
        }
        // get input for op2
        else {
            if(isOper(btn.textContent)){
                operator = btn.textContent;
                upperDisplay.textContent = op1 + " " + operator;
            }
            else if(!isNaN(btn.textContent)){
                op2 += btn.textContent;
                lowerDisplay.textContent = op2;
            }
        }
    })
})

function isOper(input){
    if((input == "-") || (input == "+") || (input == "x") || (input == "÷")){
        return true;
    }
    return false;
}