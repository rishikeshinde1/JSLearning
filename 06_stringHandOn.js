var givenString = '     Hey are you doing good, keep it up       ';


function stringHandsOn(){
    console.log('---------------******************** #1 ****************----------------');
    console.log('Given string is:', givenString);

    console.log('---------------******************** #2 ****************----------------');
    console.log('Given string length is:', givenString.length);

    console.log('---------------******************** #3 ****************----------------');
    console.log('Given String after removal of extra spaces:', givenString.trim());
    console.log('Length of Given String after removal of extra spaces:', givenString.trim().length);

    console.log('---------------******************** #4 ****************----------------');
    var totalSpacesRemoved = givenString.length - givenString.trim().length;
    console.log('Total spaces removed from Given String :', totalSpacesRemoved);

    console.log('---------------******************** #5 ****************----------------');
    var newString = givenString.trim();
    console.log(newString);
    console.log('Character at first place :', newString.charAt(0));
    console.log('Character at last place :', newString.charAt(newString.length - 1));
    
    console.log('---------------******************** #6 ****************----------------');
    console.log('Length of Given String after removal of extra spaces:', newString.split(' '));

    console.log('---------------******************** #7 ****************----------------');
    console.log('Index of word "good":', newString.indexOf('good'));

    console.log('---------------******************** #8 ****************----------------');
    console.log('Substring starting from index 22 using substring() method:', newString.substring(22));
    console.log('Substring starting from index 22  using slice() method: ', newString.slice(22));
    
    console.log('---------------******************** #9 ****************----------------');
    console.log('Check if string ends with the word "up":', newString.endsWith('up'));
    
    console.log('---------------******************** #10 ****************----------------');
    console.log('Check if string ends with the word "Hey":', newString.startsWith('Hey'));
    


}

stringHandsOn();