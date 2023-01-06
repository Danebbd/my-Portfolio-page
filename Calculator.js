let equation = [];
const newEquation = [];
let isEqualsPressed = 0;

/*reads the id of button with click event*/
const numberButtons = document.getElementsByClassName("numberButton");
for (let button of numberButtons){
    button.addEventListener("click",() => {
        testifEqualsisPressedthenChangeEquation();
        document.getElementById("equation").innerText += button.id
        document.getElementById("Textarea").innerText += button.id
        })    
}

let pushNumberfromTextAreatoArray = () => {
    let result = document.getElementById("Textarea").innerText;
    equation.push(result);
    console.log[result];
    document.getElementById("Textarea").innerText = '';
}

let bracketCalculate = () =>{
    lenghtOfarray = equation.length;
    let positionOfLeftBracket = equation.indexOf('LeftBracket');
    for (var i = 0 ; i < equation.indexOf('RightBracket') ; i++){
        if (equation[i] == 'LeftBracket'){
            for (var i = i+1 ; i < equation.indexOf('RightBracket');i++){
                newEquation.push(equation[i]);
            }
        }
    }
    let bracketsCalculated = calculate(newEquation);
    equation.splice(positionOfLeftBracket+1,equation.indexOf('RightBracket'));
    equation[positionOfLeftBracket] = bracketsCalculated;
}
let calculate = (useEquation) => {
    lenghtOfarray = useEquation.length;
    for (let i = 0 ; i < lenghtOfarray ; i++){
        if (useEquation[i]  == 'powerOfTwo') {
            let result = Math.pow(parseFloat(useEquation[i-1]),2);
            useEquation[i] = result;
            useEquation.splice(i+1,1);
        }
    }
    for (let i = 0 ; i < lenghtOfarray ; i++){
        if (useEquation[i]  == 'powerOf') {
            let result = Math.pow(parseFloat(useEquation[i-1]),parseFloat(useEquation[i+1]));
            useEquation[i] = result;
            useEquation.splice(i+1,1);
        }
    }
    for (let i = 0 ; i < lenghtOfarray ; i++){
        if (useEquation[i]  == 'Pie') {
            useEquation[i] = Math.PI;
            let value = useEquation[i-1];
            if (value != 'minus' || value != 'plus' || value != 'divide' || value != 'times'){
                let result = useEquation[i-1] * Math.PI;
                console.log(useEquation[0]);
                useEquation[i-1] = result;
                useEquation.splice(i,1);
            }  
        }
    }
    for (let i = 0 ; i < lenghtOfarray ; i++){
        if (useEquation[i]  == 'Sqrt') {
            let result = Math.sqrt(parseFloat(useEquation[i+1]));
            useEquation[i] = result;
            useEquation.splice(i+1,1);
        }
    }
    for (let i = 0 ; i < lenghtOfarray ; i++){
        if (useEquation[i]  == 'times') {
            let result = parseFloat(useEquation[i-1]) * parseFloat(useEquation[i+1]);
            useEquation[i] = result;
            useEquation.splice(i-1,1);
            useEquation.splice(i,1);
        }
    }
    for (let i = 0 ; i < lenghtOfarray ; i++){
        if (useEquation[i]  == 'divide') {
            let result = parseFloat(useEquation[i-1]) / parseFloat(useEquation[i+1]);
            useEquation[i] = result;
            useEquation.splice(i-1,1);
            useEquation.splice(i, 1);
        }
    }
    for (let i = 0 ; i < lenghtOfarray ; i++){
        if (useEquation[i]  == 'plus') {
            let result = parseFloat(useEquation[i-1]) + parseFloat(useEquation[i+1]);
            useEquation[i] = result;
            useEquation.splice(i-1,1);
            useEquation.splice(i, 1);
        }
    }
    for (var i = 0 ; i < lenghtOfarray ; i++){
        if (useEquation[i]  == 'minus') {
            let result = parseFloat(useEquation[i-1]) - parseFloat(useEquation[i+1]);
            useEquation[i] = result;
            useEquation.splice(i-1,1);
            useEquation.splice(i, 1);
        }
    }
    
    return(useEquation[0]);
}

let testifEqualsisPressedthenChangeEquation = () => {
    if (isEqualsPressed == 1) {
        document.getElementById("equation").innerText = document.getElementById("Textarea").innerText;
        equation = [];
        isEqualsPressed = 0; 
    }
}

let testIfPreviousArrayisaOperator = (operator) => {
    lenghtOfarray = equation.length;
    let value = equation[lenghtOfarray-1];
    if (value == 'minus' || value == 'plus' || value == 'divide' || value == 'times' || value == 'powerOf') {
        console.log(equation[lenghtOfarray - 1]);
        equation[lenghtOfarray - 1] = operator;
        let getelement = document.getElementById("equation").innerText;
        getelement = getelement.substring(0, getelement.length - 1);
        document.getElementById("equation").innerText = getelement;
    }        
}
let removeLastCharacter = () =>{
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
let factorialize = (num) => {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }

/*Buttons*/
let buttonPowerOfTwo = () => {
    testifEqualsisPressedthenChangeEquation();
    pushNumberfromTextAreatoArray();
    equation.push('powerOfTwo');
    let oldEquation = document.getElementById("equation").innerText;
    document.getElementById("equation").innerText += '^2';
    document.getElementById("Textarea").innerText = '' ;    
}

let buttonExponetial = () => {
    testifEqualsisPressedthenChangeEquation();
    pushNumberfromTextAreatoArray();
    equation.push('powerOf');
    document.getElementById("equation").innerText += '^';
    document.getElementById("Textarea").innerText = '' ;
}

let buttonLeftBracket = () => {
    testifEqualsisPressedthenChangeEquation();
    equation.push('LeftBracket');
    document.getElementById("equation").innerText += '(';
    document.getElementById("Textarea").innerText = '' ;  
}

let buttonRightBracket= () => {
    testifEqualsisPressedthenChangeEquation();
    pushNumberfromTextAreatoArray();
    equation.push('RightBracket');
    document.getElementById("equation").innerText += ')';
    document.getElementById("Textarea").innerText = '' ;  
}

let buttonBack = () =>{
    testifEqualsisPressedthenChangeEquation();
    removeLastCharacter();
}

let buttonPie = () =>{
    testifEqualsisPressedthenChangeEquation();
    pushNumberfromTextAreatoArray();
    equation.push('Pie');
    document.getElementById("equation").innerText += 'PI' ;
    document.getElementById("Textarea").innerText = '' ;  
}

let buttonSin = () =>{
    testifEqualsisPressedthenChangeEquation();
    bracketCalculate();
    calculate(equation);
    let number = document.getElementById("equation").innerText;
    document.getElementById("Textarea").innerText= Math.sin(parseFloat(number));
}

let buttonCos = () =>{
    testifEqualsisPressedthenChangeEquation();
    bracketCalculate();
    calculate(equation);
    let number = document.getElementById("equation").innerText;
    let Sum = Math.cos(parseFloat(number));
    document.getElementById("Textarea").innerText= Sum;

}
let buttonTan = () =>{
    testifEqualsisPressedthenChangeEquation();
    bracketCalculate();
    calculate(equation);
    let number = document.getElementById("equation").innerText;
    document.getElementById("Textarea").innerText= Math.tan(parseFloat(number));
}

let buttonRound = () =>{
    testifEqualsisPressedthenChangeEquation();
    bracketCalculate();
    calculate(equation);
    let number = document.getElementById("equation").innerText;
    document.getElementById("Textarea").innerText= Math.round(parseFloat(number));
}

let buttonLog = () =>{
    testifEqualsisPressedthenChangeEquation();
    bracketCalculate();
    calculate(equation);
    let number = document.getElementById("equation").innerText;
    document.getElementById("Textarea").innerText= Math.log(parseFloat(number));
}

let buttonSqrt = () =>{
    testifEqualsisPressedthenChangeEquation();
    equation.push('Sqrt')
    let getEquation = document.getElementById("equation").innerText ;
    document.getElementById("equation").innerText += 'sqrt(' + getEquation + ')';
    document.getElementById("equation").innerText = '.';
}

let buttonFactorial = () =>{
    testifEqualsisPressedthenChangeEquation();
    pushNumberfromTextAreatoArray();
    bracketCalculate();
    calculate(equation);
    let number = document.getElementById("equation").innerText;
    document.getElementById("Textarea").innerText= factorialize(parseFloat(number));
}

let buttonComma = () => { 
    testifEqualsisPressedthenChangeEquation();
    document.getElementById("Textarea").innerText += '.';
    document.getElementById("equation").innerText += '.';
}

let buttonClear = () => {
    equation.splice(0,equation.length);
    newEquation.splice(0,newEquation.length);
    document.getElementById("equation") .innerText = '';
    document.getElementById("Textarea").innerText= '';
}

let buttonPlus = () => {
    testifEqualsisPressedthenChangeEquation();
    pushNumberfromTextAreatoArray();
    testIfPreviousArrayisaOperator('plus');
    equation.push('plus');
    document.getElementById("equation").innerText += '+';
    document.getElementById("Textarea").innerText = '' ;  
}

let buttonMinus = () => {
    testifEqualsisPressedthenChangeEquation();
    pushNumberfromTextAreatoArray();
    testIfPreviousArrayisaOperator('minus');
    equation.push('minus');
    document.getElementById("equation").innerText += '-';
    document.getElementById("Textarea").innerText = '';
}

let buttonTimes = () =>{
    testifEqualsisPressedthenChangeEquation();
    pushNumberfromTextAreatoArray()
    testIfPreviousArrayisaOperator('times');
    equation.push('times');
    document.getElementById("equation").innerText += '*';
    document.getElementById("Textarea").innerText = '';
}

let buttonDivide = () => {
    testifEqualsisPressedthenChangeEquation();
    pushNumberfromTextAreatoArray()
    testIfPreviousArrayisaOperator('divide');
    equation.push('divide');
    document.getElementById("equation").innerText += '/';
    document.getElementById("Textarea").innerText = '';
}

let buttonEquals = () => {
    testifEqualsisPressedthenChangeEquation();
    pushNumberfromTextAreatoArray();
    bracketCalculate();
    document.getElementById("Textarea").innerText = calculate(equation); 
    isEqualsPressed = 1 ;  
}