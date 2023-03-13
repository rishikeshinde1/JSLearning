var arrayOfNumbers = [0, 2, 3, 4, 5, 6, 7, 8];

console.log(arrayOfNumbers);

//console.table(arrayOfNumbers);

const totalArrayElements =  arrayOfNumbers.length;
console.log(`Total elements available in array is: ${totalArrayElements}`);

const is8Available = arrayOfNumbers.includes(8);
console.log(`Is 8 available: ${is8Available} `);

const is9Available = arrayOfNumbers.includes(9);
console.log(`Is 9 available: ${is9Available} `);

const IndexOf8 = arrayOfNumbers.indexOf(8);
console.log(`index of 8 is : ${IndexOf8}`);

const IndexOf10 = arrayOfNumbers.indexOf(10);
console.log(`index of 10 is : ${IndexOf10}`);

var arrayOfNumbers = [ 10, 20, 25, 15, 30, 5];
const valueAtIndex2 = arrayOfNumbers[2];
console.log(`Value at index 2 is: ${valueAtIndex2}`);

/*
const updateValue=arrayOfNumber[3] = 35;   //update  the value 
console.log(`updated value is : ${updateValue}`);            //in index of menthod we are not able to update value


const updatedValue =arrayOfNumber[1]=50;
console.log(`updated value is : ${updatedValue}`);  */

var arrayOfNumber=[10,20,25,15,30,5];

console.log(`----adding number at last-------`);
arrayOfNumber.push(40);        //adding number at last
console.log(arrayOfNumber);

console.log(`----adding number at first-------`);
arrayOfNumber.unshift(200);  //adding number at first
console.log(arrayOfNumber);

console.log(`----removing last element by using pop menthod---------`);
arrayOfNumber.pop(40);
console.log(arrayOfNumber);

console.log(`----removing first element by using shift menthod-------`);
arrayOfNumber.shift(40);
console.log(arrayOfNumber);

var arrayOfNumber=[10,20,25,15,30,5,40,45]; //slice is used to remove portion 
console.log(`----element from index 3 using slice menthod(start index)-------`);
const arrayFromIndex3=arrayOfNumber.slice(3);
console.log(arrayFromIndex3);

console.log(`----element from index 3 using slice menthod(start index,end index)-------`);
const subArray=arrayOfNumber.slice(2,5);
console.log(subArray);

arrayOfNumbers[3] = 35;
console.log(arrayOfNumbers);

arrayOfNumbers[1] = 50;
console.log(arrayOfNumbers);


console.log("============================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
console.log("==== splice(startIndex) === ");
const splicedArray = arrayOfNumbers.splice(3);
console.log(`Removed elements from array is: ${splicedArray}` );
console.log(arrayOfNumbers);

var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
console.log("==== splice(startIndex, deleteCount) === ");
const splicedArrayWithDeleteCount = arrayOfNumbers.splice(2, 2);
console.log(`Removed elements using deleteCount is: ${splicedArrayWithDeleteCount}` );
console.log(arrayOfNumbers);


var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
console.log("==== splice(remove 20) === ");
const splicedArrayRemove20 = arrayOfNumbers.splice(1,1);
console.log(`Removed elements using deleteCount is: ${splicedArrayRemove20}` );
console.log(arrayOfNumbers);


var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
console.log("=====Splice remove(15)====");
const splicedArrayRemove15 = arrayOfNumbers.splice(3,1);
console.log(`Removed 15 elements using deleteCount is: ${splicedArrayRemove15}` );
console.log(`Removed elements using deleteCount is: ${splicedArrayRemove20}` );
console.log(arrayOfNumbers);

//Remove Element 20 & 25

var arrayOfNumbers = [10, 20, 25, 15, 40, 45];

console.log("======Splice remove 20 and 25======");
const splicedArrayRemove2025 = arrayOfNumbers.splice(1,2);
console.log(`Removed 20  and 25 elements using deleteCount is: ${splicedArrayRemove2025}` );
//console.log(`Removed elements using deleteCount is: ${splicedArrayRemove20}` );
console.log(arrayOfNumbers);


var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice(3,1);
console.log(`After removing 15: ${arrayOfNumbers}`);

console.log("=====splice() to insert one elements without replacing existing element ====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice( 2, 0, 22);
console.log(arrayOfNumbers);

console.log("=====splice() to insert one elements without replacing existing element ====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
// 5, 35, 55
arrayOfNumbers.splice( 4, 0, 5, 35, 55);
console.log(arrayOfNumbers);


console.log("=====splice() to insert one elements without replacing existing element ====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice( 4, 0, 5, 35, 55);
console.log(arrayOfNumbers);

console.log("=====splice() to replace two elements ====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice(2, 2 ,50,60);
console.log(arrayOfNumbers);

console.log("===== Traversing  ====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    console.log(element);
}

console.log("===== Sum of an array  ====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];
let sum = 0;
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];

    sum = sum + element;

    console.log(element);
}
console.log(`Sum of varibales are ${sum}`);

// WAP to print numbers from 0 to 10
let index=0; // initialization
while (index<=10) { // condition
    console.log(index);
    index++; // Update Expression
}

console.log("===== Traverese array with while of an array  ====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];
let index1 = 0;
while(index1 < arrayOfNumbers.length){
    console.log(arrayOfNumbers[index1]);
    index1++;
}

console.log("Even numbers");
const arrayOfNumbers1 = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];

var index3=0; // initialization
let sum1 = 0;
while (index3 < arrayOfNumbers1.length) { // condition
    const element1 = arrayOfNumbers1[index];
    if(element1%2==0) {
        console.log(element1);
        sum1 = sum1 + element1;
    }
    index3++; // Update Expression
}