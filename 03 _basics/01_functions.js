function myName(){
    console.log("j");
    console.log("u");
    console.log("n");
    console.log("e");
    console.log("d");
}

myName();

// function addingNum(number1,number2){
//    console.log(number1 + number2);
// }

function addingNum(num1, num2){
    return num1+num2;
}
addingNum(5,12);

function loginUser(username = "bkl"){
    if(username===undefined){
        console.log("please enter a username"); 
        return  
    }
        return `${username} just logged in`
}
console.log(loginUser("juned"));