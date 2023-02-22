var greet = 'Good Morning';
console.log(typeof greet);

console.log('Total number of character in string greet');

var strLength = greet.length;
console.log(strLength);

console.log('find the character by index value');

var charAtIndex3 = greet.charAt(3);

console.log('character available at index 3 is:', charAtIndex3);

console.log('Find last characyter');

var charAtLastIndex = greet.charAt(strLength -1);

console.log('char at last :', charAtLastIndex);

console.log('Find the index by character');

var indexOfM = greet.indexOf('M');

console.log('index of char M is:', indexOfM);

console.log('index of character which is not available in the string', greet.indexOf('z'));

console.log('index of o character', greet.indexOf('o'));
console.log('index of o character using lastIndexOf:', greet.lastIndexOf('o'));

var replaceResult = greet.replace('Morning', 'Evening');

console.log(replaceResult);
console.log(greet);

console.log('Upper case:', replaceResult.toUpperCase());
console.log('Lower case:', replaceResult.toLowerCase());

var myName = '  Rishi shinde  ';

var myNameAfterTrim = myName.trim();
console.log('Removing extra strart and end space using trim():', myNameAfterTrim, myName.length, myNameAfterTrim.length);

//find the extra spaces removed from the string 

var myNameLength = myName.length;
var myNameLengthAfterTrim = myNameAfterTrim.length;

var totalCharRemoved= myNameLength- myNameLengthAfterTrim;
console.log('test', myNameLength, myNameLengthAfterTrim);
console.log('Total removed character:', totalCharRemoved);

//remove staring blank



console.log("includes()");
console.log("Is substring Mor includes in the greet or not: ", greet.includes("Mor"));
console.log("Is substring Afternoon includes in the greet or not: ", greet.includes("Afternoon"));
console.log("Is substring o includes in the greet or not: ", greet.includes("o"));

console.log("slice() method"); 
var sliceResult = greet.slice(5, 12);
console.log(sliceResult);
console.log(greet.slice(2, 8));


console.log("split() method");
var greet = "Good Morning";
var splitResult = greet.split(" ");
console.log('splitResult', splitResult);

console.log(typeof splitResult);

console.log("split() method");
var greet = "Good Morning my dear friend";
var splitResult = greet.split(" ");
console.log(splitResult);
console.log("Total words: ", splitResult.length);

var myFrindList = 'Bill Gates, Steve Jobs, Ratan Tata, Elon Musk, Satya Nadella';

var myFrindListSplit= myFrindList.split(",");
console.log(myFrindListSplit);
console.log(myFrindListSplit.length);

var fndLst= myFrindList.split(" ");
console.log(fndLst);
console.log(fndLst.length);