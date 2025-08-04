const user = {
    username : "juned",
    price : "999",
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}
// user.welcomeMessage();
// console.log(this);

// const chai = function (){
//     let username = "juned"
//     console.log(this.username);
// }
// chai()

const chai = () => {             // another way to right the function
    let username = "juned"
    console.log(this);
}
// chai()

// const multiply = (num1,num2) => {
//     return num1 * num2;
// }
const multiply = (num1,num2) =>  num1 * num2; // implicit return 
console.log(multiply(23,78));


