let userCondition = true;
let userChoise;
let firstNumber;
let operandFirst;
let operandSecond;
let validMainNumber;
let arrayHistory = [];

function validateInputChoise() {
    do {
        userChoise = prompt('What value du you choose? \n if sum type:  +  ; \n if diff type:  -  ; \n if mult type:  *  ;\n if div type:  /  ;\n if sinus div type:  sin  ;\n if cosinus type:  cos  ;\n if pow type:  pow  ;\n if you want to see history of your operation, type: history');
    } while ( userChoise !== null && userChoise !== '+' && userChoise !== '-' && userChoise !== '*' && userChoise !== '/' && userChoise !== 'sin' && userChoise !== 'cos' && userChoise !== 'pow' && userChoise !== 'history' );
}

function validateInputNumber(){
    if(userChoise !== 'history') {
        do {
            firstNumber = +prompt('Enter the first number!');
            validMainNumber = +firstNumber;
        } while (+firstNumber !== validMainNumber);
    }
}

function validateInputNumberSecond(){
    if(userChoise !== 'history') {
        do {
            firstNumber = +prompt('Enter the first number!');
            validMainNumber = +firstNumber;
        } while (+firstNumber !== validMainNumber);
    }
}

function sum(a, b) {
    return a + b;
}
let sumNumbers = sum(operandFirst, operandSecond); 

function diff(a, b) {
    return a - b;
}
let diffNumbers = diff(operandFirst, operandSecond);

function mult(a, b) {
    return a * b;
}
let multNumbers = mult(operandFirst, operandSecond);

function div(a, b) {
    return a / b;
}
let divNumbers = div(operandFirst, operandSecond);

function sin(a) {
    return Math.sin(a);
}
let sinValue = sin(operandFirst);

function cos(a) {
    return Math.cos(a);
}
let cosValue = cos(operandFirst);

function pow(a, b) {
    return Math.pow(a, b);
}
let powValue = pow(operandFirst, operandSecond);


while(userCondition) {
    validateInputChoise();

    switch (userChoise) {
        case '+':
            operandFirst = validateInputNumber();
            operandSecond = validateInputNumberSecond();
            sum(operandFirst, operandSecond);
            arrayHistory[arrayHistory.length] = `${operandFirst} + ${operandSecond} = ${sumNumbers}`;
            console.log(`Operation Mult finished with result ${sumNumbers}`);
            alert(`Operation Mult finished with result ${sumNumbers}`);
            break;
        case '-':
            operandFirst = validateInputNumber();
            operandSecond = validateInputNumberSecond();
            diff(operandFirst, operandSecond);
            arrayHistory[arrayHistory.length] = `${operandFirst}  - ${operandSecond} = ${diffNumbers}`;
            console.log(`Operation Diff finished with result ${diffNumbers}`);
            break;
        case '*':
            operandFirst = validateInputNumber();
            operandSecond = validateInputNumberSecond();
            mult(operandFirst, operandSecond);
            arrayHistory[arrayHistory.length] = `${operandFirst}  * ${operandSecond} = ${multNumbers}`;
            console.log(`Operation Mult finished with result ${multNumbers}`);
            break;
        case '/':
            operandFirst = validateInputNumber();
            operandSecond = validateInputNumberSecond();
            div(operandFirst, operandSecond);
            arrayHistory[arrayHistory.length] = `${operandFirst}  / ${operandSecond} = ${divNumbers}`;
            console.log(`Operation Div finished with result ${divNumbers}`);
            break;
        case 'sin':
            operandFirst = validateInputNumber();
            sin(operandFirst);
            arrayHistory[arrayHistory.length] = `sin: ${operandFirst}   = ${sinValue}`;
            console.log(`Operation Sin finished with result ${sinValue}`);
            break;
        case 'cos':
            operandFirst = validateInputNumber();
            cos(operandFirst);
            arrayHistory[arrayHistory.length] = `cos: ${operandFirst}   = ${cosValue}`;
            console.log(`Operation Cos finished with result ${cosValue}`);
            break;
        case 'pow':
            operandFirst = validateInputNumber();
            operandSecond = validateInputNumberSecond();
            pow(operandFirst, operandSecond);
            arrayHistory[arrayHistory.length] = `pow: ${operandFirst} ** ${operandSecond} = ${powValue}`;
            console.log(`Operation Pow finished with result: ${powValue}`);
            break;
        case 'history':
            console.log(arrayHistory);
            break;
    }

    userCondition = confirm('Do you want to continue');

    if(userCondition == false) {
        alert('Thanks for your time!Have a nice day!');
        break;
    }
}
console.log('hello');