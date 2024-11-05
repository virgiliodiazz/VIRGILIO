// sample_code.js

// Function to greet a user
function greet(name) {
    console.log(`Hello, ${name}! Welcome to GitHub and VS Code.`);
}

// Function to calculate the square of a number
function square(number) {
    return number * number;
}

// Function to calculate the factorial of a number
function factorial(number) {
    if (number < 0) return "Factorial not defined for negative numbers.";
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

// Function to find the maximum number in an array
function findMax(numbers) {
    if (numbers.length === 0) return "Array is empty.";
    return Math.max(...numbers);
}

// Function to check if a number is prime
function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

// Main function to demonstrate all functionalities
function main() {
    greet("User");

    console.log("Square of 5:", square(5));
    console.log("Factorial of 5:", factorial(5));
    console.log("Max of [1, 3, 7, 2, 5]:", findMax([1, 3, 7, 2, 5]));
    console.log("Is 7 a prime number?", isPrime(7));
}

// Run the main function
main();


