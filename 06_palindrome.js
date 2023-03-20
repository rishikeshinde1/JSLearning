let stringPalindrome = function(str){
    //let spreadStr = [...str];
    let newstr = "";
    //console.log(spreadStr);
    for (let index = str.length; index >= 0; index--) {
        
        const element = str.charAt(index);
       // console.log(element);
        newstr += element;
    }
    if(str == newstr){
        return true;
    }
  return false;
    console.log(newstr);
}

let isPalindrome = stringPalindrome("racecar");

if(isPalindrome){
    console.log(`Given string is Palindrome`);
}else{
    console.log(`Given string is not Palindrome`);
}
