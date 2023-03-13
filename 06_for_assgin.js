console.log(`------For loop assignment-------`);

console.log(`-------------#1 Print Number from 5 to 15 increment by 1 -----------------`);


for (let index = 5; index <= 15; index++) {
    console.log(index);
}

console.log('---------------#2 Number from 50 to 40 decrement by 1----------------------------');
for (let index = 50; index >= 40; index--) {
    console.log(index);

}

console.log(`--------- #3 First 15 Odd numbers --------------------------`);

for (let index = 1; index <= 15; index = index + 2) {
    console.log(index);

}

console.log(`--------- #4 First 10 Even numbers --------------------------`);

for (let index = 0; index <= 10; index = index + 2) {
    console.log(index);

}


console.log(`--------- #5 table of 5 --------------------------`);

for (let index = 5; index <= 50; index = index + 5) {
    console.log(index);

}

console.log(`--------- #6 table of 10 --------------------------`);

for (let index = 10; index <= 100; index = index + 10) {
    console.log(index);

}
console.log(`--------- #7 Reverse table of 10 --------------------------`);

for (let index = 100; index >= 10; index = index - 10) {
    console.log(index);

}