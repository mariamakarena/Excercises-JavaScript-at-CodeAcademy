console.log("starting Javascript");
//excercise 1
const myName = "Maka";
console.log(myName);
//excercise 2
const myAge = 38;
console.log(myAge);
//excercise 3
const juliaAge = 32;
ageDiff = myAge - juliaAge;
console.log(ageDiff);
//excercise 4
if (myAge > 21) {
  console.log("You are older than 21");
} else {
  console.log("You are younger than 21");
}
//excercise 5
if (myAge > juliaAge) {
  console.log("Julia is younger than you");
} else if (myAge === juliaAge) {
  console.log("you have the same age as Julia");
} else {
  myAge < juliaAge;
  console.log("Julia is older than you");
}
//excercise 6 (for loop)
const classNames = ["Demir", "Maxim", "Maka", "Raul"];
console.log("first element :>>", classNames[0]);
console.log("last element :>>", classNames[3]);
for (let x = 0; x <= classNames.length; x++) {
  console.log("list of names :>>", classNames[x]);
}
//excercise 7 (while and for loop)
const classAges = [36, 33, 38, 39];
let i = 0;
while (i < classAges.length) {
  console.log("list of ages :>>", classAges[i]);
  i++;
}
//while (i < classAges.length) {
//  if (classAges[i] % 2 === 0) {
//    console.log("even ages :>>", classAges[i]);
//  }
//  i++;
//}
for (let i = 0; i < classAges.length; i++) {
  if (classAges[i] % 2 === 0) {
    console.log("even ages :>>", classAges[i]);
  }
}
//excercise 8 (sum of elements)
let sum = 0;
for (let i = 0; i < classAges.length; i++) {
  sum += classAges[i];
}
console.log("sum of ages :>>", sum);

//excercise 9 (sum of even elements)
let sumEven = 0;
for (let i = 0; i < classAges.length; i++) {
  if (classAges[i] % 2 === 0) {
    sumEven += classAges[i];
  }
}
console.log("Sum of even ages :>> ", sumEven);

//excercise 10 (sum of elements in even index)
let sumEvenIndex = 0;
for (let i = 0; i < classAges.length; i++) {
  if (i % 2 === 0) {
    sumEvenIndex += classAges[i];
  }
}
console.log("Sum of ages in even index :>> ", sumEvenIndex);
//excercise 11 (FUNCTIONS)
function excerciseEleven() {
  const result = 11 * 22;
  console.log("the result of 11*22 is :>> ", result);
}
excerciseEleven();
//excercise 12

function excerciseTwelve() {
  return 11 * 22;
}
const result = excerciseTwelve();
console.log("the result of 11*22 is :>> ", result);
//excercise 13
function excerciseThirteen(a, b) {
  return a * b;
}
const result13 = excerciseThirteen(333, 555);
console.log("the result of 333*555 is :>> ", result13);

//excercise 14
//triangulos:: equilatero(three equal sides), isosceles (two equal sides),
//  scalene (no equal sides)
function excerciseFourteen(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    console.log("equilateral triangle");
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    console.log("isosceles triangle");
  } else {
    console.log("scalene triangle");
  }
}

excerciseFourteen(5, 5, 5);
excerciseFourteen(5, 5, 3);
excerciseFourteen(5, 3, 4);

//excercise 15

// function excerciseFifteen(arr) {
//   let lowest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < lowest) {
//       lowest = arr[i];
//     }
//   }
//   return lowest;
//   // console.log("the lowest number ir :>> ", lowest);
//   excerciseFifteen(99, 102, -58, 0, 333, 7, -11);
// }

function excerciseFifteen(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}
const lowestNumber = excerciseFifteen([99, 102, -58, 0, 333, 7, -11]);
console.log("the lowest number is :>> ", lowestNumber);

//excercise 16
function excerciseSixteen(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}
const highestNumber = excerciseSixteen([99, 102, -58, 0, 333, 7, -11]);
console.log("the highest number is :>> ", highestNumber);

//excercise 17
function excerciseSeventeen(arr, index) {
  console.log(arr[index]);
}
const array = [32, 34, 98, 444, 666, 23, 89, 273];
const index = 4;
excerciseSeventeen(array, index);

//excercise 18 ((Array methods, join))
function excerciseEighteen(arr) {
  const result = arr.join(" ");
  console.log(result);
}
const myColor = ["Red", "Green", "White", "Black"];
excerciseEighteen(myColor);

//excercise 19
function excerciseNineteen(arr) {
  const result = arr.reverse();
  console.log(result);
}
const x = [3, 2, 4, 4, 3];
excerciseNineteen(x);
//excercise 20
function excerciseTwenty(arr) {
  const result = arr.sort();
  console.log(result);
}
const y = ["w", "e", "b", "m", "a", "s", "t", "e", "r"];
excerciseTwenty(y);

//excercise 21
//WITH A FOR LOOP//
function excerciseTwentyOne(phrase) {
  const words = phrase.split(" ");
  let longest = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  console.log("the longest word is :>> ", longest);
}

const w = "Web Development Tutorial";
excerciseTwentyOne(w);

//WITH .REDUCE() METHOD//
function excerciseTwentyOne(phrase) {
  const words = phrase.split(" ");
  const longest = words.reduce((longestWord, currentWord) => {
    return currentWord.length > longestWord.length ? currentWord : longestWord;
  });

  console.log("The longest word is :>>", longest);
}

const z = "Web Development Tutorial";
excerciseTwentyOne(z);

//excercise 22
function excerciseTwentyTwo() {
  let string = "Javascript";
  let res = string.replace(/a/g, "1"); //.replace() is a string method that replaces text.   /a/g is a regular expression:  a → matches the lowercase letter 'a'  g → means "global", so it replaces all occurrences, not just the first one
  console.log(res);
}
excerciseTwentyTwo();

//excercise 23
function excerciseTwentyThree() {
  const string = "prince of persia"; //This is the text we want to transform.
  const words = string.split(" "); //This turns the string into an array by splitting it at each space:
  const capitalizedWords = words.map((word) => {
    return (
      word
        .charAt(0) //gets the first letter of the word
        .toUpperCase() + //makes it uppercase
      word.slice(1)
    ); //gets the rest of the word from the 2nd character onward
  });
  const result = capitalizedWords.join(" "); //This turns the array back into a single string:
  console.log(result);
}
excerciseTwentyThree();

//excercise 24
function excerciseTwentyFour(n) {
  //n is the number that defines the upper limit (not included)
  for (let i = 0; i < n; i += 2) {
    //for loop:: so it starts at i is equal to 0, it runs while i is smaller than n(here, smaller that 9)and increases i by 2 every time, to find the even nrs
    console.log("even numbers before :>> ", i);
  }
}
excerciseTwentyFour(9); //You're asking the function to print even numbers before 9.

//excercise 25
function excerciseTwentyFive(start, end) {
  //This defines a function that takes two numbers as arguments:start:where the loop should begin and end where it should end
  for (let i = start; i <= end; i++) {
    //This is a for loop:It starts with i = start (which is 1)It goes until i is less than or equal to end (which is 13)i++ means it increases by 1 each time
    if (i % 2 !== 0) {
      //the condition::This checks whether i is an odd number.% is the modulo operator, which gives the remainder after division.i % 2 gives:0 if i is even, 1 if i is odd
      console.log(i);
    }
  }
}
excerciseTwentyFive(1, 13); //here we call the function giving specific numbers to the start and end arguments.

//excercise 26
function excerciseTwentySix(arr) {
  const duplicates = arr.filter(
    //This goes through every element of the array, one by one, and keeps only the elements that match the condition inside the filter.   It builds a new array called duplicates.
    (
      value,
      index,
      array //value is the current nmbr from the array, index is the position (index)of that number, self in the whole array being filtered
    ) => array.indexOf(value) !== index && array.lastIndexOf(value) === index
  ); // indexOF(value):gives you the first place this number appears in the array.If that is not equal to the current index, it means this is not the first time we’ve seen this number → it’s a duplicate.
  //lastIndexOf(value) gives the last place this number appears in the array.We only want to keep the last time it shows up, so that we don’t print it multiple times.
  console.log("duplicates :>> ", duplicates);
}
excerciseTwentySix([
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100, 33,
]);
//This code keeps only the last occurrence of each duplicate value — meaning:   It was already seen before (indexOf ≠ index)  And this is the last time we see it (lastIndexOf === index)
