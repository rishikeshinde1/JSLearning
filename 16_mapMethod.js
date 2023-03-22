const array = [3, 4, 5, 6, 1];
//add2      // [5, 6, 7, 8, 3];

const arrayTransformed = [];
array.forEach( (currentValue) => {
    arrayTransformed.push(currentValue+2)
} );
console.log(arrayTransformed);

console.log("Using map()");
const arrayNew = array.map( (element) => {
   return element + 2;
} )
console.log(arrayNew);


const arrayOfNames = ["Rupesh Dhumal", "Rutuja Pawar", "Nayan", "Pralhad"];

const arrayNameTransformed = arrayOfNames.map( (element) => {
    return element.length;
})
console.log(arrayNameTransformed);

const square = arrayNameTransformed.map(element => element * element);
console.log(square);