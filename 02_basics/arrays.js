// *********** ARRAYS *****************

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["krish", "Spiderman", "Superman", "Batman"];
const myArr2 = new Array(0, 1, 2, 3, 4);

console.log(myHeros[3]);

// *************** ARRAY METHODS **********************

myArr.push(6);  // push method adds value in end
myArr.push(7);
myArr.pop(); // pop method removes value in end

myArr.shift(); // shift method removes value from start
myArr.unshift("juned"); // unshift method adds value from start
console.log(myArr);

 //********************************************************* */

const array1 = [1, 2, 3, 4, 5, 6 , "apple"];

console.log(array1.includes(9)); // includes is used to check whether given value is there or not
console.log(array1.indexOf("apple")); // indexof is used to check the index of value

const strArry = array1.join() // convert the array into string
console.log(strArry);
console.log(typeof strArry);

//**************************************************************88 */

const fullArray = [0, 1, 2, 3, 4, 5, 6, 7,]
console.log("full Array", fullArray);

const sliceArr = fullArray.slice(1,3); // in slice it prints the the given value (end not included)
const spliceArr = fullArray.splice(1,3); // in splice it removes the content and keeps only  content which is given in brackets

console.log("full Array after splice", fullArray);
console.log("sliceArr" ,sliceArr);
console.log("spliceArr", spliceArr);

// *********************************************************************

const cricStar = ["kohli", "sachin", "Abd", "gayle"];
const fotStar = ["ronaldo", "messi", "pogba", "neymar"]
const allStars =cricStar.concat(fotStar); // to concat is used to merge two arrays
console.log(allStars);

const allNewStars = [...cricStar, ...fotStar]; // this is the other method to merge two arrays
console.log(allNewStars);

// ***********************************************************************

const anotherArray = [1, 2, 3, [4,5,6] ,7, [8,[9,10]]]

const allNewArray = anotherArray.flat(Infinity); // flat method removes the depth in array
console.log(allNewArray);

console.log(Array.isArray("juned")); // isArray check wheter its a array or not
console.log(Array.from("juned")); //  from convert the object/sting in the array

// intresting 

//******************************************************************************/

let score1 = 100
let score2 = 100
let score3 = 300

const totalScore = Array.of(score1, score2, score3); // covert all the element in one Array.
console.log(totalScore);



