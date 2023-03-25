const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];

console.log(`Existing Array : [${arrayRollNumbers}]`);

console.log(`---------------------------------------------------------------`);
console.log(`=== #1 - Reverse the array ===`);



console.log(`Reverse  Array : [${arrayRollNumbers.reverse()}]`);

console.log(`---------------------------------------------------------------`);
console.log(`=== #2 - Sorting an array of number without custom logic ===`);

const sortedArrayNo = arrayRollNumbers.sort();
console.log(`Array of numbers sorted with just first digit in consideration :`);
console.log(sortedArrayNo);

console.log(`---------------------------------------------------------------`);
console.log(`=== #3 - Sorting an array in ascending order wit custom logic ===`);
const sortArrayNew  = arrayRollNumbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(`Sorted array :`);
console.log(sortArrayNew);
console.log(`---------------------------------------------------------------`);
console.log(`=== #4 - Find the greatest number from an Array ===`);

let greatNumber = sortArrayNew[sortArrayNew.length -1];
console.log(`Greatest number in array : ${greatNumber}`);

console.log(`---------------------------------------------------------------`);
console.log(`=== #5 - Find the smallest number from an Array ===`);

let smallNumber = sortArrayNew[0];
console.log(`Greatest number in array : ${smallNumber}`);

console.log(`---------------------------------------------------------------`);
console.log(`=== #6 - Remove duplicate number from an Array ===`);
//let lastItem = 0;



const cleanArray = [... new Set(arrayRollNumbers)];


console.log(`Sorted array after removal of duplicate values : ${cleanArray}`);

