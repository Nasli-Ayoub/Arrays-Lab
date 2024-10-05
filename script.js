// Declaring an array with 5 elements
let myArray = ["mango", "peach", "strawberry", "watermelon", "cherry"];

let firstElement = myArray[0];
let lastElement = myArray[myArray.length - 1];
let middleElement = myArray[Math.floor(myArray.length / 2)];

// Logging the results to the console
console.log("First Element:", firstElement);
console.log("Last Element:", lastElement);
console.log("Middle Element:", middleElement);

console.log("Array Length:", myArray.length);

// Adding a new element to the array
myArray.push("kiwi");
console.log("After push:", myArray);

// Removing the last element from the array
myArray.pop();
console.log("After pop:", myArray);

// Adding an element at a specific index
myArray.splice(2, 0, "mango");
console.log("After splice:", myArray);

myArray.forEach(function(item) {
    console.log("Array Element:", item);
});
