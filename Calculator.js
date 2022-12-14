/* Variables*/
let num1 = '';
let num2 = '';
let oper = '';
let equation = '';


    /*reads the id of button with click event*/
    let numberButtons = document.getElementsByClassName("numberButton");
    for (let button of numberButtons){
        button.addEventListener("click",() => document.getElementById("Textarea").innerText += button.id)
    }


/* Functions
function printNum(value){/*Used to test if which variable to add the next number and print the values 
    if (oper == ''){
    num1 = num1 + value;
    equation = equation + value;
    document.getElementById("Textarea").innerText = num1;
    } 
    if (oper != ''){
        num2 = num2 + value
        equation = equation + value;
        document.getElementById("Textarea").innerText = num2;
        }
    document.getElementById("equation") .innerText = equation;
} */

function ifNum2exists(){/*Checks for second value and calculates. Resets num2*/
    if (num2 != ''){
        num1 = calculate(num1,oper,num2);
        num2 = '';
    }
}

function calculate(n1,operator,n2){/*gets the two numbers and operator then does the calculation*/
    if (operator === 'plus') {
        result = parseFloat(n1) + parseFloat(n2);
      } else if (operator === 'minus') {
        result = parseFloat(n1) - parseFloat(n2);
      } else if (operator === 'times') {
        result = parseFloat(n1) * parseFloat(n2);
      } else if (operator === 'divide') {
        if (n2 === 0 ){
            document.getElementById("Textarea").innerText= 'ERROR';
        }
        else{
            result = parseFloat(n1) / parseFloat(n2);
        }
      }
      num1 = result;
      return result;
}

/*Buttons*/
function buttonComma() {
    printNum(".");
    equation = equation + value;
    document.getElementById("equation") .innerText = equation;
}

function buttonClear() {
    num1 = '';
    num2 = '';
    oper = '';
    equation = '';
    document.getElementById("equation") .innerText = equation;
    document.getElementById("Textarea").innerText= '';
}

function buttonPlus() {
    ifNum2exists();
    oper = 'plus';
    equation = equation + '+';
    document.getElementById("Textarea").innerText = num1;
    equation = equation + value;
    document.getElementById("equation") .innerText = equation;
}

function buttonMinus() {
    ifNum2exists();
    oper = 'minus';
    equation = equation + '-';
    document.getElementById("Textarea").innerText = num1;
    equation = equation + value;
    document.getElementById("equation") .innerText = equation;
}

function buttonTimes(){
    ifNum2exists();
    oper='times';
    equation = equation + '*';
    document.getElementById("Textarea").innerText = num1;
    equation = equation + value;
    document.getElementById("equation") .innerText = equation;
}

function buttonDivide() {
    ifNum2exists();
    oper = 'divide'
    equation = equation + '/';
    document.getElementById("Textarea").innerText = num1;
    equation = equation + value;
    document.getElementById("equation") .innerText = equation;
}

function buttonEquals() {
    if (num1 == ''){
        num1 = '0';
    }
    if(num2 == ''){
        num2 = '0';
    }
    if (oper == ''){
        document.getElementById("Textarea").innerText = 0;
    }
    else{
        document.getElementById("Textarea").innerText = calculate(num1,oper,num2);
    }
    num2 = '';
    oper = '';
    equation = equation + '=';
    document.getElementById("equation") .innerText = equation;
    equation = num1;   
}

