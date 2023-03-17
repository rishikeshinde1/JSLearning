function doAssignment(callback){
    // Ajay 
    console.log("Solving assignments");
    console.log("Step 1 to 10 all are solved now");
    callback();
}
function copyAssignment(){
    // Ajinkya
    console.log("Thank you Ajju, let me copy assignments!");
    console.log("Ohh finally copied all assignment");
}
doAssignment(copyAssignment);

//example of callback
function greet(){
    console.log("Good Morning.....");
}
// 1 sec = 1000 milli seconds
// 3 sec = 3000 ms
setTimeout(greet, 4000);

function firstClass(){
    console.log(`We can return function from another function`);
    function innerFunction(){
        console.log(`Inner function`);
    }
    return innerFunction;
}
let res = firstClass();
res();


function doHomerWork(callback){
    console.log("Doing homework.. ");
    console.log("Finally Homework is completed...");
    callback();
    let submitHomeWork = function (){
        console.log("Hey we both completed homework");
        console.log("Let us submit please...");
    }
    return submitHomeWork;
}
function copyHomework() {
    console.log("Copying homework..."); 
    console.log("Thank you,, I copied homework..."); 
}

let submit = doHomerWork(copyHomework);
submit();