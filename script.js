const userChoise = prompt('What value du you choose? \n if sum type:  +  ; \n if diff type:  -  ; \n if mult type:  *  ;\n if div type:  /  ;\n if sinus div type:  sin  ;\n if cosinus type:  cos  ;\n if pow type:  pow  ;');

switch (userChoise) {
    case '+':
        const firstNumber = +prompt('Enter the first number!');
        const secondNumber = +prompt('Enter the second number!');
        const sumNumbers = firstNumber + secondNumber;
        alert(`Responce: ${sumNumbers}`);
        break;
    case '-':
        const firstNumber = +prompt('Enter the first number!');
        const secondNumber = +prompt('Enter the second number!');
        const diffNumbers = firstNumber - secondNumber;
        alert(`Responce: ${diffNumbers}`);
        break;
    case '*':
        const firstNumber = +prompt('Enter the first number!');
        const secondNumber = +prompt('Enter the second number!');
        const multNumbers = firstNumber * secondNumber;
        alert(`Responce: ${multNumbers}`);
        break;
    case '/':
        const firstNumber = +prompt('Enter the first number!');
        const secondNumber = +prompt('Enter the second number!');
        const divNumbers = firstNumber / secondNumber;
        alert(`Responce: ${divNumbers}`);
        break;
    case 'sin':
        const firstNumber = +prompt('Enter a number!');
        const sinValue = Math.sin(firstNumber);
        alert(`Responce: ${sinValue}`);
        break;
    case 'cos':
        const firstNumber = +prompt('Enter a number!');
        const cosValue = Math.cos(firstNumber);
        alert(`Responce: ${cosValue}`);
        break;
    case 'pow':
        const firstNumber = +prompt('Enter the first number!');
        const firstNumber = +prompt('Enter the first number!');
        const powValue = Math.pow(firstNumber, secondNumber );
        alert(`Responce: ${powValue}`);
        break;
    default:
        alert('Try again');
        break;
}