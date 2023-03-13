const arrayOfNumbers = [21, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

console.log(`====#1 - Find the total Elements available in array====`);

console.log(`Total number of elements available in array is: ${arrayOfNumbers.length}`); 

console.log(`====#2 - Log the First and Last Elements of an array====`);

console.log(`First element of an array : ${arrayOfNumbers[0]}`);
console.log(`Last element of an array : ${arrayOfNumbers[arrayOfNumbers.length - 1]}`);

console.log(`====#3 - Log the Third Last Elements using length property of an array====`);

console.log(`Third last element of an Array is: ${arrayOfNumbers.length - 3}`);


console.log(`====#4 - Find all even numbers from array ====`);

for (let index = 0; index < arrayOfNumbers.length; index++) {

    
    let number = arrayOfNumbers[index];
    let evenNumber = [];
    if(number%2 == 0){
    
        evenNumber += number;
        console.log(`Even numbres in an array is: ${evenNumber}`);    
    }
    
    
}

console.log(`====#5 - Find all Odd numbers from array ====`);

for (let index = 0; index < arrayOfNumbers.length; index++) {

    
    let number = arrayOfNumbers[index];
    let oddNumber = [];
    if(number%2 != 0){
    
        oddNumber += number;
        console.log(`Odd numbres in an array is: ${oddNumber}`);    
    }
    
    
}

console.log(`====#6 - Find all Even Positioned numbers from array and sum of it ====`);
let sumofEvenPositionElement = 0;
for (let index = 0; index < arrayOfNumbers.length; index++) {
   let newarray = [];
    
    if(index %2 == 0){
        newarray += arrayOfNumbers[index];
        console.log(`Element at even position ${index} is : ${newarray}`);
        sumofEvenPositionElement = sumofEvenPositionElement + arrayOfNumbers[index]
        
    }     
}
console.log(`Sum of elements available at Even position is: ${sumofEvenPositionElement}`);  


console.log(`====#7 - Find all Odd Positioned numbers from array and sum of it ====`);
let sumOfOddPosition = 0;
for (let index = 0; index < arrayOfNumbers.length; index++) {
    let newarray = [];
    
    if(index %2 != 0){
        newarray += arrayOfNumbers[index];
        console.log(`Element at Odd position ${index} is : ${newarray}`);
        sumOfOddPosition = sumOfOddPosition + arrayOfNumbers[index]
        
    }
    
     
}
console.log(`Sum of elements available at Odd position is: ${sumOfOddPosition}`);   

console.log(`====#8 - Sum of All elements from array ====`);
let sumOfArray = 0;
for (let index = 0; index < arrayOfNumbers.length; index++) {
    //newarray = [];
    sumOfArray = sumOfArray + arrayOfNumbers[index]
        
    
     
}
console.log(`Sum of all elements available at array: ${sumOfArray}`);  

console.log(`====#9 -Elements in array multiple of 5 ===`);
let multipleOfFive = 0;
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    if(element%5 == 0){
        console.log(`Element ${element} is multiple of Five`);
    }
    
}
console.log(`====#10 - Check if number 115 is available in Array ===`);

if(arrayOfNumbers.includes(115)){
    console.log(`Number 115 is Available in Array`);
}
else{
    console.log(`Number 115 is Not Available in Array`);
}


console.log(`====#11 - Check if number 23 is available in Array ===`);

if(arrayOfNumbers.includes(23)){
    console.log(`Number 23 is Available in Array`);
}
else{
    console.log(`Number 23 is Not Available in Array`);
}

console.log(`====#12 - Insert Number 55, 66 before index 3 ===`);

arrayOfNumbers.splice(3, 0, 55, 66);
console.log(arrayOfNumbers);

console.log(`====#12 - Delete 3 elements starting from index 4 ===`);

arrayOfNumbers.splice(4, 3);
console.log(arrayOfNumbers);



