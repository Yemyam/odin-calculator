// TO DO !!!
// Limit length of operands to 16 or 17
// add a function that rounds numbers to length

var op1 = "0", op2 ="", operator = "";

function add(op1,op2){
    return Number(op1) + Number(op2);
}
function subtract(op1,op2){
    return Number(op1) - Number(op2);
}
function multiply(op1,op2){
    return Number(op1) * Number(op2);
}
function divide(op1,op2){
    return Number(op1) / Number(op2);
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
            if((!isNaN(op1)) && (!isNaN(op2)) && (isOper(operator))){
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
            // add negative symbol
            // if((btn.textContent == "-") && (op1 == 0)){
            //     op1 = btn.textContent;
            // }
            // Check if only digit is 0, if so replace it
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
            // when operator is chosen evaluate and add the next operator, or change the current operator
            // display.textContent = op1 + " " + operator + " " + op2;
        }
        // else if(operator == ""){
        //     operator = getOper(btn.textContent,operator,op1)
        //     console.log(operator)
        //     op1 = getNum(btn.textContent,op1)
        //     console.log(op1)
        //     display.textContent = op1 + " " + operator;
        // }
        // else if(operator == "-"){
        //     // add logic for negative operator !!!
        //     op2 = getNum(btn.textContent,op2);
        //     operator = getOper(btn.textContent,operator,op2);
        //     display.textContent = op1 + " " + operator + " " + op2;
        // }
        // else{
        //     operator = getOper(btn.textContent,operator,op1)
        //     op2 = getNum(btn.textContent,op2)
        //     console.log(op2)
        //     display.textContent = op1 + " " + operator + " " + op2;
        // }
    })
})

function isOper(input){
    if((input == "-") || (input == "+") || (input == "x") || (input == "÷")){
        return true;
    }
    return false;
}

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


