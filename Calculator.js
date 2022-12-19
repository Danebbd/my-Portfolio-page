/* Variables*/
const equation = [];


    /*reads the id of button with click event*/
let numberButtons = document.getElementsByClassName("numberButton");
for (let button of numberButtons){
    button.addEventListener("click",() => {document.getElementById("equation").innerText += button.id
        document.getElementById("Textarea").innerText += button.id
        }
    )    
}

function pushNumberfromTextAreatoArray(){
    let result = document.getElementById("Textarea").innerText;
    document.getElementById("Textarea").innerText = '';
    equation.push(result);
    console.log[equation]
}

function calculate(){
    lenghtOfarray = equation.length;
    for (var i = 0 ; i < lenghtOfarray ; i++){
        console.log(equation[i])
        if (equation[i]  == 'times') {
            let result = parseFloat(equation[i-1]) * parseFloat(equation[i+1]);
            equation[i] = result;
            equation.splice(i-1,1);
            equation.splice(i,1);
        }
    }
    for (var i = 0 ; i < lenghtOfarray ; i++){
        if (equation[i]  == 'divide') {
            let result = parseFloat(equation[i-1]) / parseFloat(equation[i+1]);
            equation[i] = result;
            equation.splice(i-1,1);
            equation.splice(i, 1);
        }
    }
    for (var i = 0 ; i < lenghtOfarray ; i++){
        if (equation[i]  == 'plus') {
            let result = parseFloat(equation[i-1]) + parseFloat(equation[i+1]);
            equation[i] = result;
            equation.splice(i-1,1);
            equation.splice(i, 1);
        }
    }
    for (var i = 0 ; i < lenghtOfarray ; i++){
        if (equation[i]  == 'minus') {
            let result = parseFloat(equation[i-1]) - parseFloat(equation[i+1]);
            equation[i] = result;
            equation.splice(i-1,1);
            equation.splice(i, 1);
        }
    }
    document.getElementById("Textarea").innerText = equation;
}

function testIfPreviousArrayisaOperator(operator){
    lenghtOfarray = equation.length;
    let value = equation[lenghtOfarray-2];
    if (value == 'minus' || value == 'plus' || value == 'divide' || value == 'times') {
        equation[lenghtOfarray - 1] = operator;
        let getelement = document.getElementById("equation").innerText;
        getelement = getelement.substring(0, getelement.length - 1);
        document.getElementById("equation").innerText = getelement;
    }  
        
}
function removeLastCharacter(){
    let getelement = document.getElementById("equation").innerText;
    getelement = getelement.substring(0, getelement.length - 1);
    document.getElementById("equation").innerText = getelement;
    lenghtOfarray = equation.length;
    let value = equation[lenghtOfarray-2];
    if (value != 'minus' || value != 'plus' || value != 'divide' || value != 'times') {
        let getelement = document.getElementById("Textarea").innerText;
        getelement = getelement.substring(0, getelement.length - 1);
        document.getElementById("Textarea").innerText = getelement;
    } 
    
}

/*Buttons*/
function buttonComma() {
    printNum(".");
    equation = equation + value;
    document.getElementById("equation") .innerText = equation;
    document.getElementById("Textarea").innerText += '.';
    document.getElementById("equation").innerText += '.';
}

function buttonClear() {
    equation.splice(0,equation.length)
    document.getElementById("equation") .innerText = '';
    document.getElementById("Textarea").innerText= '';
}

function buttonPlus() {
    pushNumberfromTextAreatoArray();
    testIfPreviousArrayisaOperator('plus');
    equation.push('plus');
    document.getElementById("equation").innerText += '+';
    document.getElementById("Textarea").innerText = '' ;  
}

function buttonMinus() {
    pushNumberfromTextAreatoArray();
    testIfPreviousArrayisaOperator('minus');
    equation.push('minus');
    document.getElementById("equation").innerText += '-';
    document.getElementById("Textarea").innerText = '';
}

function buttonTimes(){
    pushNumberfromTextAreatoArray()
    testIfPreviousArrayisaOperator('times');
    equation.push('times');
    document.getElementById("equation").innerText += '*';
    document.getElementById("Textarea").innerText = '';
}

function buttonDivide() {
    pushNumberfromTextAreatoArray()
    testIfPreviousArrayisaOperator('divide');
    equation.push('divide');
    document.getElementById("equation").innerText += '/';
    document.getElementById("Textarea").innerText = '';
}

function buttonEquals() {
    pushNumberfromTextAreatoArray();
    calculate();   
}

