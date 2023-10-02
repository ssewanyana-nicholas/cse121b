// Function Definitions

// Addition function
function add(number1, number2) {
    return number1 + number2;
}

// Addition click event handler
function addNumbers() {
    // Get the values from the input fields with IDs 'add1' and 'add2', and convert them to numbers
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    // Calculate the sum using the 'add' function and set it as the value of the input field with ID 'sum'
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

// Subtraction function
const subtract = function (number1, number2) {
    return number1 - number2;
};

// Subtraction click event handler
const subtractNumbers = function () {
    // Get the values from the input fields with IDs 'subtract1' and 'subtract2', and convert them to numbers
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    // Calculate the difference using the 'subtract' function and set it as the value of the input field with ID 'difference'
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};

// Multiplication arrow function
const multiply = (number1, number2) => number1 * number2;

// Multiplication click event handler
const multiplyNumbers = () => {
    // Get the values from the input fields with IDs 'factor1' and 'factor2', and convert them to numbers
    let factorNumber1 = Number(document.querySelector('#factor1').value);
    let factorNumber2 = Number(document.querySelector('#factor2').value);

    // Calculate the product using the 'multiply' function and set it as the value of the input field with ID 'product'
    document.querySelector('#product').value = multiply(factorNumber1, factorNumber2);
};

// Division function
function divide(number1, number2) {
    if (number2 === 0) {
        return 'Cannot divide by zero';
    }
    return number1 / number2;
}

// Division click event handler
const divideNumbers = function () {
    // Get the values from the input fields with IDs 'dividend' and 'divisor', and convert them to numbers
    let dividendNumber = Number(document.querySelector('#dividend').value);
    let divisorNumber = Number(document.querySelector('#divisor').value);

    // Calculate the quotient using the 'divide' function and set it as the value of the input field with ID 'quotient'
    document.querySelector('#quotient').value = divide(dividendNumber, divisorNumber);
};

// Event Listeners

// Add click event listeners to the buttons and associate them with the respective functions
document.querySelector('#addNumbers').addEventListener('click', addNumbers);
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

// Date Handling

// Get the current date
const currentDate = new Date();

// Get the current year from the date
const currentYear = currentDate.getFullYear();

// Set the current year in an HTML element with the ID 'year'
document.querySelector('#year').textContent = currentYear;

// Array Operations

// Define an array of numbers from 1 to 13
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Display the original array in an HTML element with the ID 'array'
document.querySelector('#array').textContent = numbersArray.join(', ');

// Filter odd numbers from the array and display them in an HTML element with the ID 'odds'
const oddNumbers = numbersArray.filter(number => number % 2 === 1);
document.querySelector('#odds').textContent = oddNumbers.join(', ');

// Filter even numbers from the array and display them in an HTML element with the ID 'evens'
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.querySelector('#evens').textContent = evenNumbers.join(', ');

// Calculate the sum of the original array and display it in an HTML element with the ID 'sumOfArray'
const sumOfArray = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.querySelector('#sumOfArray').textContent = sumOfArray;

// Multiply each element in the array by 2 and display the result in an HTML element with the ID 'multiplied'
const multipliedArray = numbersArray.map(number => number * 2);
document.querySelector('#multiplied').textContent = multipliedArray.join(', ');

// Calculate the sum of the multiplied array and display it in an HTML element with the ID 'sumOfMultiplied'
const sumOfMultiplied = multipliedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.querySelector('#sumOfMultiplied').textContent = sumOfMultiplied;
