const array = [2, 3, 4, 5, 9];
array.forEach( function( currentValue, index, array ) {
    console.log(currentValue, index, array);
});

array.forEach( ( currentValue ) => {
    console.log(currentValue);
});
console.log(`find even nymber of the array`);
array.forEach(element => {
    if(element%2 == 0){
        console.log(element);
    }
});

//
console.log(`sum of the array`);
let sum = 0;
array.forEach(element => {
    sum = sum + element;
   
});
console.log(sum);

console.log(`Even positioned elemnt in array`);

array.forEach((element, index) => {
    if(index%2 == 0){
        console.log(element);
    }
});