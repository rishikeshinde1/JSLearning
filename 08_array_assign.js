

const arraySeasonalFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

console.log(`===== #1 - Log the first and last Element on console=====`);

console.log(`First Element of array is: ${arraySeasonalFruits[0]}`);
console.log(`Last Element of array is: ${arraySeasonalFruits[arraySeasonalFruits.length - 1]}`);

console.log(`===== #2 - Add Element Papaya before Banana and Log the Array=====`);

arraySeasonalFruits.unshift("Papaya");

console.log(arraySeasonalFruits);

console.log(`===== #3 - Remove Mango for the Array =====`);
arraySeasonalFruits.splice(4, 1); // 4 is the index of the array element which need to remove and 1 is the number of elements want to remove
console.log(arraySeasonalFruits); // remove 4th element from the existing array

console.log(`===== #4 - Add new Element 'Pineapple' at the end of an Array =====`);
arraySeasonalFruits.push("PineApple");
console.log(arraySeasonalFruits);

console.log(`===== #5 - Insert an Element 'Dragon Fruit' before Watermelon =====`);

arraySeasonalFruits.splice(4, 0, "Dragon Fruit");
console.log((arraySeasonalFruits));

console.log(`===== #6 - Replace an Element 'Orange' with 'Kiwi' =====`);

arraySeasonalFruits.splice(2,1,"Kiwi");
console.log(arraySeasonalFruits);

console.log(`===== #7 - Log an element statiing from 1 to 4 =====`);

for (let index = 1; index <= 4; index++) {
    const element = arraySeasonalFruits[index];
    console.log(`Element at index ${index} is : ${element}`);
}

console.log(`===== #8 - Only select Last 3 element and log on console =====`);

console.log(`Last element of an array is: ${arraySeasonalFruits[arraySeasonalFruits.length - 1]}`);
console.log(`Second Last element of an array is: ${arraySeasonalFruits[arraySeasonalFruits.length - 2]}`);
console.log(`Third Last element of an array is: ${arraySeasonalFruits[arraySeasonalFruits.length - 3]}`);

