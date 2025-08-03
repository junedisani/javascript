// singleton
Object.create

// object literals

const mySym = Symbol("key1")
const user = {
    name : "juned",
    age : 23,
    [mySym] : "mykey1", // [] is used to give symbol
    eMail : "juned@google.com",
    "full name": "juned isani",
    isLoggedIn : true,
    loggedInDays : ["monday", "tuesday", "thursday"]
}
console.log(user.eMail);
console.log(user["eMail"]);
console.log(user["full name"]);
console.log(user[mySym]);

console.table(user);

user.eMail = "juned@yahoo.com"
console.table(user);

// Object.freeze(user); // freeze is used to lock the object no changes can be made.
user.name = "juned004"
console.log(user);

user.greetings = function(){
    console.log(`hello i am ${this.name}`)
}
// user.greetings();
console.log(user);

//************************************************************************** */


const netflixUser = Object();
console.log(netflixUser);

netflixUser.id = "abc123";
netflixUser.name = "juned";
netflixUser.loggedIn = true;
console.log(netflixUser);

const regularUser = {
    eMail : "xyz@google.com",
    fullName: {
        userFullName:{
            firstNme: "juned",
            lastName: "isani",
        }
    }
}
console.log(regularUser.fullName.userFullName.lastName);

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "c", 4: "d"}

// const obj3 = Object.assign(obj1, obj2); // assign is used to merge the objects.
const obj3 = {...obj1, ...obj2}; // ... is used to merge the objects.
console.log(obj3);

const users = [
    {
        id: 1,
        eMail: "h@google.com"
    },
    {
        id: 1,
        eMail: "h@google.com"
    },
    {
        id: 1,
        eMail: "h@google.com"
    },
]

console.log(users[1].eMail);

console.log(netflixUser);

console.log(Object.keys(netflixUser)); // get key  of object
console.log(Object.values(netflixUser)); // get value of object
console.log(Object.entries(netflixUser)); // get entries (both key/value of object)

console.log(netflixUser.hasOwnProperty(`loggedIn`)); // to check the property is there or not.


const course = {
    courseName : "javascript",
    name : "juned"
}
console.log(course.courseName);

const {courseName: myJava } = course // another way to print particular value in object
console.log(myJava);
