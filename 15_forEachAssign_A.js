const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];

console.log(`----------------------------------------------------------------------------------`);
console.log(`=== #1 - Log the array element with it's index using foreach() ===`);
arrayNumbers.forEach((element, index) => console.log(`Index : ${index} --- Element : ${element} `));

console.log(`----------------------------------------------------------------------------------`);
console.log(`=== #2 - Find positive number in array using foreach() ===`);
arrayNumbers.forEach((element) => {
    if(element > 0){
        console.log(`${element} is positive Number`);
    }
});

console.log(`----------------------------------------------------------------------------------`);
console.log(`=== #3 - Find negative number in array add into new array and log new array using foreach() ===`);
const newArray = [];
arrayNumbers.forEach((element, index) => {
    if(element < 0){
        newArray[index] = element;
      }
});

newArray.forEach(element => console.log(`Negative elements are : ${element}`));

console.log(`----------------------------------------------------------------------------------`);
console.log(`=== #4 - Find the even numbers and log on using foreach() ===`);


arrayNumbers.forEach(element => { 
    if(element%2 == 0){
        console.log(`${element} is even number`);
    }
});

console.log(`----------------------------------------------------------------------------------`);
console.log(`=== #5 - Find the sum of all elements from arrayNumbers and log on sum using foreach() ===`);

let sum = 0;
arrayNumbers.forEach(element => { 
    sum = sum + element;
});
console.log(`Sum of all elements in array is : ${sum}`);

console.log(`----------------------------------------------------------------------------------`);
console.log(`=== #5 - Log on only even indexed array value on console using foreach() ===`);

arrayNumbers.forEach((element, index) => {
    if(index%2 == 0){
        console.log(`Element ${element} present at index ${index}`);
    }
});
