const userChoise = prompt('What value du you choose? \n if sum type:  +  ; \n if diff type:  -  ; \n if mult type:  *  ;\n if div type:  /  ;\n if sinus div type:  sin  ;\n if cosinus type:  cos  ;\n if pow type:  pow  ;');

/*const firstNumber = +prompt('Enter the first number!');
const secondNumber = +prompt('Enter the second number!');

const sumNumbers = firstNumber + secondNumber;
const diffNumbers = firstNumber - secondNumber;
const multNumbers = firstNumber * secondNumber;
const divNumbers = firstNumber / secondNumber;
const sinValue = Math.sin(typeValue);
const cosValue = Math.cos(typeValue);
const powValue = Math.pow(typeValue, secondNumber );

const responceSum = `Responce: ${sumNumbers}`;
const responceDiff = `Responce: ${diffNumbers}`;
const responceMult = `Responce: ${multNumbers}`;
const responceDiv = `Responce: ${divNumbers}`;
const responceSin = `Responce: ${sinValue}`;
const responceCos = `Responce: ${cosValue}`;
const responcePow = `Responce: ${powValue}`;*/



switch (userChoise) {
    case '+':  
        alert(responceSum);
        break;
    case '-':
        alert(responceDiff);
        break;
    case '*':
        alert(responceMult);
        break;
    case '/':
        alert(responceDiv);
        break;
    case 'sin':
        alert(responceSin);
        break;
    case 'cos':
        alert(responceCos);
        break;
    case 'pow':
        alert(responcePow);
        break;
    default:
        alert('Try again');
        break;
}