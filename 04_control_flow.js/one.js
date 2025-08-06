// if  else

const temperature = 56

if (temperature <= 50){
    console.log("temperature is below 50");
    
}
else{
    console.log("temperature is above 50");
}
// < , > , <= , >= , == , != , === , !== 
//**************************************************************************** */

const balance = 1000

if (balance < 500){
    console.log("balance is less than 500");
}else if (balance < 700){
    console.log("balance is less than 700");
}else if (balance < 900){
    console.log("balance is less than 900");
}else{
    console.log("balance is less than 1200");
}

//*************************************************************************8 */

const isLoggedIn = true;
const debitCard = true;
const loggedFromGoogle = false
const loggedFromEmail = true

if (isLoggedIn && debitCard){
    console.log("user can buy the courses");
}

if(loggedFromEmail || loggedFromGoogle){
    console.log("Allow to buy the Course");
    
}
