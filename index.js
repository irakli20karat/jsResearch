// #0. Types & Conversions (check line 70)

/* JS has 8 basic data types.
   
   PRIMITIVES (Immutable - stored directly in the variable):
   1. Number(s) => Integer or floating-point (e.g., 42, 3.14)
   2. BigInt    => For integers larger than (2^53 - 1)
   3. String    => Sequence of characters (e.g., "Hello")
   4. Boolean   => true or false
   5. null      => Represents "nothing" or "empty value" intentionally
   6. undefined => A variable that has not been assigned a value yet
   7. Symbol    => Unique identifier
   
   8. Object    => Collection of key-value pairs (includes Arrays and Functions)
*/

// #1. Variables: let, const, var (umizezod varis gamoyeneba => sikvdilit dasja)
let userName = "Ika"; // variable
const BIRTH_YEAR = 2009; // constant (cant be reassigned)
// we usually use all-caps for values that are constant

// outdated (old school) (not recommended, since it's too buggy) (check #6)
var oldVar = "I am old style";

// you can change let / var variables, unlike const
userName = "Bob DeBuilda";
oldVar = "Still works";

// BIRTH_YEAR = 2006; // Error – const cannot be reassigned

// #2. Basic output: console.log
console.log("Hello, world!"); // prints string
console.log("The user is:", userName); // prints multiple values
console.log("oldVar =", oldVar);

// #3. Numbers
let x = 10;
let y = 3.5;
let sum = x + y;
let product = x * y;
console.log("sum:", sum, "product:", product);

// #4. Boolean(s) & logic (check line 278)
// Boolean can be either true or false.
// if(condition) <==== condition can be either true or false, 
// to create conditions we use operators such as:
/*
    '==' compares if values are equal (unlike '=' which sets values),
    '===' compares if values are equal (unlike '==', it also compares types),
    '>' check if first value is larger,
    '<' check if second value is larger,
    '>=' check if first value is larger or equal,
    '<=' check if second value is larger or equal,
    '!' is used for NOT condition,

    '||' is used for OR condition,
    '&&' is used for AND condition,
*/
console.log("5 == '5':", 5 == "5");                         // is 5 equal to "5"? // returns true
console.log("5 === '5':", 5 === "5");                       // is 5 equal to "5"? // returns false since 5 is an integer and "5" is a string
console.log("10 != 7:", 10 != 7);                           // is 10 NOT equal to 7? // returns true
console.log("10 > 2:", 10 > 2);                             // is 10 larger than 2? // returns true
console.log("10 <= 10:", 10 <= 10);                         // is 10 smaller or equals 10? // returns true
console.log("12 < 10:", 12 < 10);                           // is 12 smaller than 10? // returns false
console.log("12 < 10 OR 12 != 10:", (12 < 10 || 12 != 10)); // (is 12 smaller than 10) OR (is 12 NOT equal to 10)? // returns true

let isAdult = ((new Date().getFullYear()) - BIRTH_YEAR >= 18); // if Current year minus BIRTH_YEAR is larger or equals 18, then set isAdult's value to true, otherwise set isAdult's value to false.
console.log("is adult:", isAdult); // outputs: "is adult: false", since 2025-2009 is smaller than 18.

// --- Checking Types ---
let exampleNum = 100;
let exampleStr = "Hello";
console.log(typeof exampleNum); // "number"
console.log(typeof exampleStr); // "string"
console.log(typeof null);       // "object" (This is a famous JS bug, but it is what it is)

// --- Type Conversions ---

// A. String Conversion
let value = true;
let strValue = String(value);   // "true"
console.log(typeof strValue);   // "string"

// B. Number Conversion
// Automatically happens in math functions (except + which creates strings)
console.log("6" / "2");  // 3 (Strings converted to numbers)

let strNum = "123";
let numVal = Number(strNum); // 123
console.log(Number("An apple")); // NaN (Not a Number) - conversion failed

// + unary operator shortcut
let apples = "2";
let oranges = "3";
console.log(+apples + +oranges); // 5 (both converted to numbers before adding)

// C. Boolean Conversion
// Rules: 
// 0, null, undefined, NaN, "" (empty string) => false
// everything else => true
console.log(Boolean(1));       // true
console.log(Boolean(0));       // false
console.log(Boolean("hello")); // true
console.log(Boolean(""));      // false

// 5. Simple function
function greet(name) {
    // ${} inside `` lets us insert variables directly into string
    console.log(`o/ ${name}, you are ${(new Date().getFullYear()) - BIRTH_YEAR} years old (you were born in ${BIRTH_YEAR}).`);
}

// call the function passing userName
greet(userName);

// #6. Scoping
function scopeTest() {
    var a = 1;
    let b = 2;
    // inside block
    {
        var a = 100;
        let b = 200; // this value will only be accessible inside this block
        console.log("inside block — a:", a, "b:", b);
    }
    console.log("outside block — a:", a, "b:", b); // will output: "outside block — a: 100 b: 2"
    // this is one of the reasons why we shouldn't be using vars.
}
scopeTest();

// #7. LOOPS
/* WHAT ARE LOOPS?
   A loop is a way to repeat the same code multiple times.
   Instead of writing the same code over and over, loops execute a block of code
   as long as a specified condition is true.
   
   MAIN LOOP TYPES:
   1. for loop      => Best when you know exactly how many times to repeat
   2. while loop    => Best when you don't know how many times to repeat
   3. do...while    => Executes at least once, then checks condition
   4. for...of      => Iterates over values in arrays or strings
   5. for...in      => Iterates over keys/properties of objects
   6. forEach()     => Built-in array method to iterate
*/

// --- 1. FOR LOOP ---
// Structure: for (initialize; condition; increment/decrement)
// the first element has an index of 0, the second element has an index of 1, the third element has an index of 2 and so on.
let colors = ["red", "green", "blue"];
console.log("colors array:", colors);
console.log("using for loop:");
console.log("element with an index of 1 is:", colors[1]);

// create a new variable with value => check condition (in this case we check if our value is less than the length of colors array) => if true, increases variable's value by 1 ('i++' is short for 'i = i + 1'), if false, stop the loop.
for (let i = 0; i < colors.length; i++) {
    // this way we can iterate through all the elements of the array
    console.log(i, colors[i]); // outputs the exact value (color) that we want using index in brackets.
}

// Example: Print numbers 1 to 5
console.log("\nPrinting numbers 1 to 5:");
for (let num = 1; num <= 5; num++) {
    console.log(num);
}

// Example: Counting down from 5 to 1
console.log("\nCounting down from 5 to 1:");
for (let count = 5; count >= 1; count--) {
    console.log(count);
}

// --- 2. WHILE LOOP ---
// Structure: while (condition) { code to execute }
// Repeats as long as the condition is true. Check condition BEFORE executing.
console.log("\nWhile loop example (printing 1 to 5):");
let i = 1;
while (i <= 5) {
    console.log(i);
    i++; // IMPORTANT: Don't forget to increment, or you'll have an infinite loop!
}

// Example: User guessing game
let secretNumber = 7;
let guess = null;
let attempts = 0;
console.log("\nGuessing game (secret number is 7):");
while (guess !== secretNumber) {
    guess = Math.floor(Math.random() * 10) + 1; // random number 1-10
    attempts++;
    console.log(`Attempt ${attempts}: guessed ${guess}`);
}
console.log("Correct! Found it in", attempts, "attempts.");

// --- 3. DO...WHILE LOOP ---
// Structure: do { code to execute } while (condition)
// Executes the code FIRST, then checks the condition.
// Useful when you want something to happen at least once.
console.log("\nDo...while loop example:");
let n = 1;
do {
    console.log("This prints at least once, n =", n);
    n++;
} while (n <= 3);

// --- 4. FOR...OF LOOP ---
// Structure: for (const value of array) { code }
// Iterates over the VALUES in an array.
// Cleaner than traditional for loop when you don't need the index.
console.log("\nFor...of loop (iterating over values):");
let fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
    console.log(fruit);
}

// Example: Sum all numbers in an array
let numbers = [10, 20, 30, 40];
let total = 0;
for (const num of numbers) {
    total += num; // total = total + num
}
console.log("Sum of", numbers, "is", total);

// --- 5. FOR...IN LOOP ---
// Structure: for (const key in object) { code }
// Iterates over the KEYS (properties) of an object or array indices.
console.log("\nFor...in loop (iterating over keys/indices):");
const person = { name: "Alice", age: 25, city: "London" };
for (const key in person) {
    console.log(key, "=>", person[key]);
}

// --- 6. FOREACH() METHOD ---
// Structure: array.forEach((element, index, array) => { code })
// Built-in array method. Cleaner syntax using arrow function.
console.log("\nForEach method:");
let tasks = ["eat", "sleep", "code"];
tasks.forEach((task, index) => {
    console.log(`Task ${index + 1}: ${task}`);
});

// --- LOOP CONTROL STATEMENTS ---
// break   => Exits the loop immediately
// continue => Skips to the next iteration

console.log("\nUsing break (exit loop when value is 3):");
for (let x = 1; x <= 5; x++) {
    if (x === 3) break; // stops loop
    console.log(x);
}
// Outputs: 1, 2

console.log("\nUsing continue (skip when value is 3):");
for (let x = 1; x <= 5; x++) {
    if (x === 3) continue; // skips this iteration
    console.log(x);
}
// Outputs: 1, 2, 4, 5

// #8. Objects
const user = {
    name: userName, // key: value
    birthYear: BIRTH_YEAR, // key: value
    hobbies: ["degradation", "gaming", "coding"] // key: value
};
console.log("user object:", user);      // outputs full object
console.log("user.name:", user.name);   // outputs the exact parameter that we need using key (.name)

// #9. String concatenation vs template string
console.log("Hello " + userName + ", you are " + (new Date().getFullYear() - BIRTH_YEAR) + " years old.");
console.log(`Hello ${userName}, you are ${(new Date().getFullYear() - BIRTH_YEAR)} years old.`);

// #10. Default parameters
function greet2(name = "John Doe") {
    console.log(`Hello, ${name}!`);
}
greet2(); // uses default value
greet2("Ika"); // uses provided value


// #11. if / else examples
// 1. Basic if/else
let temperature = 30;

if (temperature > 25) {
    console.log("It's hot outside.");
} else {
    console.log("It's not very hot right now.");
}


// 2. if / else if / else chain
let score = 87;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 75) {
    console.log("Grade: B");
} else if (score >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}


// 3. Nested if (if inside if)
let loggedIn = true;
let isAdmin = false;

if (loggedIn) {
    console.log("You are logged in.");

    if (isAdmin) {
        console.log("Welcome, Admin.");
    } else {
        console.log("Regular user access.");
    }

} else {
    console.log("Please log in first!");
}


// 4. Ternary operator (short if/else)
let age = 15;
let canDrive = age >= 18 ? "Yes" : "No";
console.log("Can the user drive?", canDrive);
// same as:
// if (age >= 18) { canDrive = "Yes"; }
// else { canDrive = "No"; }


// #12. NULLISH COALESCING OPERATOR (??)
/* The nullish coalescing operator (??) returns the right-hand operand when 
   the left-hand operand is null or undefined. Otherwise, it returns the left-hand operand.
   
   IMPORTANT DIFFERENCE from || (OR operator):
   - ?? only considers null and undefined as "nothing"
   - || considers 0, "", false, NaN, null, and undefined as "falsy"
   
   Use ?? when you want to allow falsy values like 0 or empty strings.
*/

// Example 1: Basic nullish coalescing
let userInput = null;
let displayName = userInput ?? "Guest"; // null, so use "Guest"
console.log("Display name:", displayName); // "Guest"

let userInput2 = "Alice";
let displayName2 = userInput2 ?? "Guest"; // "Alice" exists, use it
console.log("Display name 2:", displayName2); // "Alice"

// Example 2: Why ?? is better than || for certain cases
let count = 0; // This is a valid value, not "nothing"
let result1 = count || 10; // With ||, returns 10 (treats 0 as falsy)
let result2 = count ?? 10; // With ??, returns 0 (0 is not null/undefined)
console.log("Using ||:", result1); // 10 (wrong! we lost the 0)
console.log("Using ??:", result2); // 0 (correct! 0 is a valid value)

// Example 3: Empty string
let userMessage = "";
let message1 = userMessage || "No message"; // With ||, returns "No message"
let message2 = userMessage ?? "No message"; // With ??, returns "" (empty string is valid)
console.log("Using ||:", message1); // "No message"
console.log("Using ??:", message2); // "" (empty string is a valid value)

// Example 4: Setting default values from API/database
let apiResponse = undefined;
let finalValue = apiResponse ?? "default";
console.log("Final value:", finalValue); // "default"

// Example 5: Chaining with nullish coalescing
let primaryValue = null;
let secondaryValue = undefined;
let tertiaryValue = "Fallback";
let finalResult = primaryValue ?? secondaryValue ?? tertiaryValue;
console.log("Final result with chains:", finalResult); // "Fallback"

// Example 6: Combining with other operators
let userPreference = null;
let fontSize = userPreference ?? 16;
console.log("Font size:", fontSize); // 16

