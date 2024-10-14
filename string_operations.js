console.log("String Manipulation Operations");

// Task 1: Obtaining String Length
console.log("\nTask 1: Obtaining String Length");

let message = "Hello, World!";
console.log("Original string:", message);
console.log("Length of the string:", message.length);

// Task 2: Converting Cases
console.log("\nTask 2: Converting Cases");

let text = "Hello, World!";
console.log("Original string:", text);
console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());

// Task 3: Extracting Substrings
console.log("\nTask 3: Extracting Substrings");

let sentence = "The quick brown fox jumps over the lazy dog";
console.log("Original string:", sentence);

// Extract "quick brown fox"
let substring1 = sentence.substring(4, 19);
console.log("Substring (4, 19):", substring1);

// Extract "jumps over"
let substring2 = sentence.substring(20, 30);
console.log("Substring (20, 30):", substring2);

// Task 4: Splitting Strings
console.log("\nTask 4: Splitting Strings");

let phrase = "The quick brown fox";
console.log("Original string:", phrase);

let words = phrase.split(" ");
console.log("Split into words:", words);

// Bonus: Joining strings
console.log("\nBonus: Joining Strings");
let joinedString = words.join("-");
console.log("Joined with hyphens:", joinedString);
