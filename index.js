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

// #4. Boolean(s) & logic (check line 163)
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

// #7. Arrays & loops
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