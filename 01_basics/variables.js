const accountId = 123;
let accountEmail = "juned@gmail.com";
var accountPassword = "12345";
accountCity = "Mumbai";
let accountState;


// accountId = 2;

/* Prefer not to use var because of issue in block scope and functional scope */

accountEmail = "xyz@gmail.com";
accountPassword = "212121";
console.table([accountEmail, accountPassword, accountCity, accountState]);