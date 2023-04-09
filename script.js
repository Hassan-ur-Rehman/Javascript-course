//Question 01//

let firstNumber = prompt("Enter the first number:");
let secondNumber = prompt("Enter the second number:");

// Convert the input strings to numbers
firstNumber = parseFloat(firstNumber);
secondNumber = parseFloat(secondNumber);

// Check which number is larger
if (firstNumber > secondNumber) {
  console.log("The larger number is: " + firstNumber);
} else if (secondNumber > firstNumber) {
  console.log("The larger number is: " + secondNumber);
} else {
  console.log("The numbers are equal.");
}

//Question 2//

let number = prompt("Enter a number:");
number = parseFloat(number);
if (number <= 3) {
  alert("The sign is +");
} else if (number >= 3) {
  alert("The sign is -");
} else {
  alert("The number is zero");
}

// Question 03
let Large_num1 = Number(prompt("Enter your first number:"));
let Large_num2 = Number(prompt("Enter your second number:"));
let Large_num3 = Number(prompt("Enter your third number:"));
let Large_num4 = Number(prompt("Enter your fourth number:"));
let Large_num5 = Number(prompt("Enter your fifth number:"));

// Find the largest number
let largestNum = Math.max(Large_num1, Large_num2, Large_num3, Large_num4, Large_num5);
console.log("The largest number is: " + largestNum);


//Question 04
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }


  // Question No 05
let marks = [90, 60, 85, 90, 55];

// average marks
let sum = 0;
for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}
let average = sum / marks.length;

// Grade
let grade;
if (average < 60) {
  grade = "F";
} else if (average < 70) {
  grade = "D";
} else if (average < 80) {
  grade = "C";
} else if (average < 90) {
  grade = "B";
} else {
  grade = "A";
}

// Display the average mark and grade
console.log("The average mark is: " + average);
console.log("The corresponding grade is: " + grade);


// Question 06
for (let i = 1; i <= 100; i++) {

    // Check if the number is a multiple of both
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }

    // Check if the number is a multiple of 3
    else if (i % 3 === 0) {
      console.log("Fizz");
    }
  
    // Check if the number is a multiple of 5
    else if (i % 5 === 0) {
      console.log("Buzz");
    }
  
    // If the number is not a multiple of 3 or 5, just print the number
    else {
      console.log(i);
    }
  }

  // Question No 07
const rows = 10;
for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= i; j++) {
    // Print a *            
    document.write("*");
  }
  // Start a new line after each row
  document.write("<br>");
}