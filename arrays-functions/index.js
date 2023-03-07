/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
//Question 1
// Mutating methods modify the original array.
// Non-mutating methods return a new array without modifying the original. 

// Mutating array methods:

// push: adds one or more elements to the end of an array.
// pop: removes the last element from an array.
// splice: removes or replaces elements from an array at a specified index.
// sort: sorts the elements of an array in place.
// reverse: reverses the order of the elements in an array in place.

// Non-mutating array methods:
// map: returns a new array with the results of calling a provided function on every element in the array.
// filter: returns a new array with all elements that pass a test implemented by a provided function.
// concat: returns a new array that combines the elements of two or more arrays.
// slice: returns a new array with a portion of the original array, specified by a start and end index.
// join: returns a string of all the array elements joined together with a specified separator.







// Question 2
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
console.log(languages)

//adding Koltin
languages.push('Koltin')
console.log(languages)


//adding Java
languages.splice(3, 0, 'Java')
console.log(languages)

//removing the first item
languages.shift()
console.log(languages)

//adding to the beginning of the array
languages.splice(0, 0, 'Scala', 'Swift')
console.log(languages)

// replacing ‘PHP’ with ‘Go’ and ‘Rust’
languages.splice(5, 1, 'Go', 'Rust')
console.log(languages)


// Question 3
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
        fruit = changeFruit(fruit);
console.log(fruit)
//the value of fruit after calling the function changeFruit is [ 'apple', 'mango', 'orange' ]

//Question 4

function maxFromArray(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
        }return max;
}

const arrNumbers = [20, 50, 10, 90, 40]; 
console.log(maxFromArray(arrNumbers));

//Question 5

function valTimesIndex(array) {
    return array.map((value, index) => value * index);
  }
  const array = [2, 4, 6, 8, 10];
const result = valTimesIndex(array);
console.log(result)