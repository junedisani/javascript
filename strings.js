const name = "juned";
const repoCount = 30;
// console.log(name + repoCount); 
// console.log(`My name is ${name} and my repocount is ${repoCount}`);
// console.log(name[1]);

const gameName = new String("GTA - Vice city");
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));   
console.log(gameName.indexOf(`T`)); // to know the index value

const newString = gameName.substring(0,4); // last value doesnt includes
console.log(newString);

const newStringOne = "              juned        ";
console.log(newStringOne.trim()); // removes starting and ending spaces

const eMail = "juned123@gmail.com";
console.log(eMail.replace("gmail","yahoo")); // replaces the given value to other.

console.log(eMail.includes("juned")); // inlcudes checks the words used or not (true/false)
console.log(gameName.split(`-`)); // split is use to split the words.
