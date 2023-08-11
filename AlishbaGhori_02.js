////////// ANSWER # 1 //////////
function sumOrDouble(num1, num2) {
   if (num1 === num2) {
      return (num1 + num2) * 2;
   } else {
      return num1 + num2;
   }
}

console.log(sumOrDouble(2, 5)); Output: 7
console.log(sumOrDouble(5, 5)); Output: 20

console.log(sumOrDouble(3, 3));
console.log(sumOrDouble(2, 2));


/////////// ANSWER # 2 //////////////////////

function reverseString(stringToReverse) {
   let chars = stringToReverse.split();
   let reversedChars = chars.reverse(['orange', 'apple', 'mango']);
   let reversedString = reversedChars.join();
   let lowercaseString = reversedString.toLowerCase();
   return lowercaseString
}
console.log(reverseString("ORANGE"));
console.log(reverseString("peach"))


///////////// ANSWER 3 ///////////        

function sumEvenNumbers(numArr) {
   let sum = 0;

   for (let i = 0; i <= numArr.length; i++) {
      if (numArr[i] % 2 === 0) {
         sum += numArr[i];
      }
   }
   return sum;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));

////////////// ANSWER 4 /////////////          

function longString(fruitsArr) {
   var result = [];

   for (var i = 0; i < fruitsArr.length; i++) {
      if (fruitsArr[i].length > 5) {
         result.push(fruitsArr[i]);
      }
   }
   return result
}

var fruits = ["kiwi", "apple", "orange", "mango", "banana", "pear", "pineapple"];
var longFruits = longString(fruits);

console.log(longFruits);


/////////////////// ANSWER# 5 //////////////////////

function filterStudents(students, age) {
   return students.filter(student => student.age === age);
}

const students = [
   { name: "ali", age: 21 },
   { name: "sara", age: 19 },
   { name: "dua", age: 20 },
   { name: "taimoor", age: 25 }
];
const filteredStudents = filterStudents(students, 20);
console.log(filteredStudents);


/////////////////// ANSWER # 6 ////////////////             

function findMinMax(arr) {
   var min = Math.min(...arr);
   var max = Math.max(...arr);
   return { min: min, max: max };
}
var result = findMinMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100]);
console.log(result)


/////////// ANSWER # 7 ///////////////        
function uniqueStrings(duplicateStringArr) {
   var uniqueArr = [];

   for (let i = 0; i < duplicateStringArr.length; i++) {
      if (!uniqueArr.find(str => str === duplicateStringArr[i])) {
         uniqueArr.push(duplicateStringArr[i]);
      }
   }
   return uniqueArr;
}
var duplicateStrings = ["apple", "pear", "pear", 'banana', "mango", "apple"];
var uniqueStringsArr = uniqueStrings(duplicateStrings);
console.log(uniqueStringsArr);









