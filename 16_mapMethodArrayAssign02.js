const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
console.log(`Existing Array : [${arrayNumbers}]`);
console.log(`------------------------------------------------------------------------`);
console.log(`=== #1. Add 10 into each element and log new array  ===`);

const newArray = [];
arrayNumbers.map(arrayElement => newArray.push(arrayElement + 10));
console.log(`New Array by addition of 10 in each elelemnt : [${newArray}]`);

console.log(`------------------------------------------------------------------------`);
console.log(`=== #2. Square the each array element and log new array  ===`);

const squareArray = [];
arrayNumbers.map(arrayElement => squareArray.push(arrayElement * arrayElement));
console.log(`Square of each element in array [${squareArray}]`);

console.log(`------------------------------------------------------------------------`);
console.log(`=== #3. Add the index value into its corresponding each array element and log array result  ===`);

const addIndexArray = [];
arrayNumbers.map((currentValue, index) => {
        let newvalue = currentValue + index;
        addIndexArray.push(newvalue);
});
console.log(addIndexArray);
