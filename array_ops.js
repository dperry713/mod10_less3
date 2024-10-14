console.log("Array Manipulation Operations");

// Task 1: Adding and Removing Elements
console.log("\nTask 1: Adding and Removing Elements");

let fruits = ['apple', 'banana', 'orange'];
console.log("Initial array:", fruits);

// Adding an element using push
fruits.push('grape');
console.log("After push:", fruits);

// Removing the last element using pop
let removedFruit = fruits.pop();
console.log("After pop:", fruits);
console.log("Removed fruit:", removedFruit);

// Task 2: Sorting Arrays
console.log("\nTask 2: Sorting Arrays");

let numbers = [3, 1, 5, 2, 4];
console.log("Initial array:", numbers);

// Sorting in ascending order
numbers.sort((a, b) => a - b);
console.log("Sorted array:", numbers);

// Task 3: Applying Array Methods
console.log("\nTask 3: Applying Array Methods");

numbers = [3, 1, 5, 2, 4];
console.log("Initial array:", numbers);

// Using map to double each number
let doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubledNumbers);

// Using filter to get odd numbers
let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd numbers:", oddNumbers);

// Using reduce to calculate sum
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of numbers:", sum);

// Bonus: Demonstrating spread and rest operators
console.log("\nBonus: Spread and Rest Operators");

// Spread operator
let moreFruits = ['kiwi', 'mango'];
let allFruits = [...fruits, ...moreFruits];
console.log("Combined fruits using spread:", allFruits);

// Rest operator in a function
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum using rest operator:", sum(1, 2, 3, 4, 5));
