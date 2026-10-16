//
// LESSON 7: JAVASCRIPT BASICS & FUNDAMENTALS
//

// --- Task 7.1: Variables & typeof ---
let name = "Noah Nyakito";
let age = 25;
const birthYear = 2001;

// Check types
console.log(typeof name);    // string
console.log(typeof age);     // number
console.log(typeof true);    // boolean

// let vs const difference
let score = 100;
score = 150;  // Works fine!

const PI = 3.14159;
// PI = 3;  // Error! Can't reassign const

// Exercise: Variable Practice
let myName = "Noah";
let myAge = 25;
let isStudent = true;
let favoriteColors = ["blue", "green", "black"];
let todaysDate = new Date();

console.log("My Name:", myName);
console.log("My Age:", myAge);
console.log("Student status:", isStudent);
console.log("Favorite colors:", favoriteColors);
console.log("Today's date:", todaysDate);


// --- Task 7.2: Data Types & Operators ---

// Exercise 1: Number Operations
let a = 10;
let b = 3;

console.log(a + b);   // Addition
console.log(a - b);   // Subtraction
console.log(a * b);   // Multiplication
console.log(a / b);   // Division
console.log(a % b);   // Modulus (remainder)
console.log(a ** b);  // Exponentiation

let count = 0;
count++;  // Increment to 1
count--;  // Decrement back to 0

// Exercise 2: String Operations
let firstName = "Noah";
let lastName = "Nyakito";
let fullName = firstName + " " + lastName;

let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters.`;

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("John"));

// Exercise 3: Comparison & Logical Operators
console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 === 5);  // true (strict equality)
console.log(5 == "5"); // true (loose equality - avoid!)
console.log(5 !== 3);  // true

console.log(true && true);   // AND
console.log(true || false);  // OR
console.log(!true);          // NOT

// Challenge: Age Calculations
let userAge = 25;
console.log("Age in days:", userAge * 365);
console.log("Age in hours:", userAge * 365 * 24);
console.log("Year you'll turn 100:", 2026 - userAge + 100);


// --- Task 7.3: Functions ---

// Exercise 1: Function Declarations
function greetUser(name) {
    return `Hello, ${name}!`;
}

const addNums = function(a, b) {
    return a + b;
};

const multiplyNums = (a, b) => a * b;

const divideNums = (a, b) => {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
};

// Exercise 2: Build These Functions
const calculateArea = (width, height) => width * height;
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
const isEven = (num) => num % 2 === 0;
const getInitials = (fullName) => fullName.split(" ").map(n => n[0]).join("");
const reverseString = (str) => str.split("").reverse().join("");

// Exercise 3: Default Parameters & Tip Calculator
function greetWithDefaults(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

const calculateTip = (bill, tipPercent = 15) => bill * (tipPercent / 100);
console.log(calculateTip(100)); // 15


// --- Task 7.4: Control Flow ---

// Exercise 1: If/Else Statements
function getGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}

// Exercise 2: Switch Statements
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid day";
    }
}

// Exercise 3: Loops & Built Programs
for (let i = 0; i < 5; i++) { console.log(i); }

let loopCount = 0;
while (loopCount < 5) {
    console.log(loopCount);
    loopCount++;
}

const colorsList = ["red", "green", "blue"];
for (const color of colorsList) { console.log(color); }

// Build Programs:
// 1. Print numbers 1-100
for (let i = 1; i <= 100; i++) { console.log(i); }

// 2. Print even numbers 1-50
for (let i = 2; i <= 50; i += 2) { console.log(i); }

// 3. FizzBuzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}

// 4. Triangle of stars
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}


// --- Mini-Project: Calculator ---
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
    if (b === 0) return "Error: Cannot divide by zero";
    return a / b;
}
function modulus(a, b) { return a % b; }
function power(a, b) { return a ** b; }

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+": return add(num1, num2);
        case "-": return subtract(num1, num2);
        case "*": return multiply(num1, num2);
        case "/": return divide(num1, num2);
        case "%": return modulus(num1, num2);
        case "**": return power(num1, num2);
        default: return "Invalid operator";
    }
}

// Calculator Tests
console.log(calculate(10, "+", 5));  // 15
console.log(calculate(10, "-", 5));  // 5
console.log(calculate(10, "*", 5));  // 50
console.log(calculate(10, "/", 5));  // 2
console.log(calculate(10, "/", 0));  // Error message


//
// LESSON 8: ARRAYS & OBJECTS
//

// --- Task 8.1: Arrays ---
const fruits = ["apple", "banana", "orange"];
const basicNumbers = [1, 2, 3, 4, 5];

console.log(fruits[0]);      // apple
console.log(fruits.length);  // 3

fruits.push("grape");        // Add to end
fruits.unshift("mango");     // Add to start
fruits.pop();                // Remove from end
fruits.shift();              // Remove from start

// Array Methods
basicNumbers.forEach(num => console.log(num * 2));
const doubled = basicNumbers.map(num => num * 2);
const evenNumbers = basicNumbers.filter(num => num % 2 === 0);
const firstEven = basicNumbers.find(num => num % 2 === 0);
const sum = basicNumbers.reduce((total, num) => total + num, 0);
console.log(basicNumbers.includes(3)); // true

// Build Array Tasks:
const sampleNums = [2, -4, 12, 6, -1, 15];
const doubleAll = sampleNums.map(n => n * 2);
const positiveOnly = sampleNums.filter(n => n >= 0);
const firstOverTen = sampleNums.find(n => n > 10);
const productAll = sampleNums.reduce((prod, n) => prod * n, 1);


// --- Task 8.2: Objects ---
const person = {
    firstName: "Bart",
    lastName: "Simpson",
    age: 24,
    isStudent: false,
    hobbies: ["reading", "coding"],
    address: { city: "Pluto", country: "Milky Way" }
};

console.log(person.firstName);       // Dot notation
console.log(person["lastName"]);     // Bracket notation
console.log(person.address.city);    // Nested property

person.age = 25;
person.email = "bartsimpson@yellow.com";   // Add property
delete person.isStudent;             // Remove property

// Object Methods & Iteration
const scores = { math: 95, english: 88, science: 92 };
console.log(Object.keys(scores));    // Keys array
console.log(Object.values(scores));  // Values array
console.log(Object.entries(scores)); // Entries array

for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}


// --- Task 8.3: Array of Objects ---
const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

// 1. Get all student names
const names = students.map(student => student.name);

// 2. Get students with grade > 80
const highAchievers = students.filter(s => s.grade > 80);

// 3. Find the student named "Charlie"
const charlie = students.find(student => student.name === "Charlie");

// 4. Calculate average grade
const avgGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length;

// 5. Get CS majors only
const csMajors = students.filter(student => student.major === "CS");

// 6. Sort by grade (highest first)
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);

// 7. Check if any student has grade > 90
const hasTopStudent = students.some(student => student.grade > 90);

// 8. Check if all students are passing (grade >= 60)
const allPassing = students.every(student => student.grade >= 60);

const gradeTracker = {
    students: [],
    
    // Add a new student to the array
    addStudent(name, grades) {
        this.students.push({ name, grades });
    },
    
    // Find and return a student object, or null if missing
    getStudent(name) {
        return this.students.find(s => s.name === name) || null;
    },
    
    // Calculate the average of all grades for a specific student
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return 0;
        
        const scores = Object.values(student.grades);
        const sum = scores.reduce((total, score) => total + score, 0);
        
        // Return rounded to 2 decimal places
        return Number((sum / scores.length).toFixed(2));
    },
    
    // Get class average for a specific subject
    getSubjectAverage(subject) {
        const scores = this.students
            .map(s => s.grades[subject])
            .filter(score => score !== undefined); // only include students who have this subject
            
        if (scores.length === 0) return 0;
        
        const sum = scores.reduce((total, score) => total + score, 0);
        return Number((sum / scores.length).toFixed(2));
    },
    
    // Find the student with the highest overall average
    getTopStudent() {
        if (this.students.length === 0) return null;
        
        let topStudent = this.students[0];
        let highestAvg = this.getStudentAverage(topStudent.name);
        
        for (let i = 1; i < this.students.length; i++) {
            const currentAvg = this.getStudentAverage(this.students[i].name);
            if (currentAvg > highestAvg) {
                highestAvg = currentAvg;
                topStudent = this.students[i];
            }
        }
        
        return topStudent.name;
    },
    
    // Get an array of student names with an average below 70
    getStrugglingStudents() {
        return this.students
            .filter(s => this.getStudentAverage(s.name) < 70)
            .map(s => s.name);
    },
    
    // Convert a numeric score into a letter grade
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },
    
    // Generate a clean text report card for a student
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return "Student not found.";
        
        const avg = this.getStudentAverage(name);
        const letter = this.getLetterGrade(avg);
        
        let report = `--- Report Card: ${student.name} ---\n`;
        for (const [subject, score] of Object.entries(student.grades)) {
            report += `${subject}: ${score} (${this.getLetterGrade(score)})\n`;
        }
        report += `-------------------------\n`;
        report += `Overall Average: ${avg} (${letter})`;
        
        return report;
    }
};

// --- Test your implementation ---
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log(gradeTracker.getStudentAverage("Alice"));       // 91.67
console.log(gradeTracker.getSubjectAverage("math"));       // 75.67
console.log(gradeTracker.getTopStudent());                 // Alice
console.log(gradeTracker.getStrugglingStudents());         // [ 'Charlie' ]
console.log(gradeTracker.generateReportCard("Alice"));

// --- Day 1: FizzBuzz ---
// Print numbers 1 to 100 with specific rules for multiples of 3 and 5
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// --- Day 2: Reverse a String ---
function reverseStringLoop(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseStringLoop("hello"));    // olleh


// --- Day 3: Find Largest Number ---
const sampleNumbers = [5, 12, 3, 55, 22, 8];

function findLargestLoop(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

console.log(findLargestLoop(sampleNumbers));   // 55


// --- Day 4: Remove Duplicates ---
const duplicateArray = [1, 2, 2, 3, 4, 4, 5];

// Approach 1: Using a Set (quickest modern way)
function removeDupesSet(arr) {
    return [...new Set(arr)];
}

console.log(removeDupesSet(duplicateArray));    // [1, 2, 3, 4, 5]


// --- Day 5: Palindrome Checker ---
function isPalindrome(str) {
    // Convert to lowercase and strip all spaces/punctuation
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    // Reverse the cleaned string and compare
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}

console.log(isPalindrome("racecar"));                  // true
console.log(isPalindrome("hello"));                     // false
console.log(isPalindrome("A man a plan a canal Panama")); // true