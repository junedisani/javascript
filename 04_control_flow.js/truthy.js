const userEmail = []

if (userEmail){
    console.log("got the user Email");
    
}else{
    console.log("havent got th user Email");
    
}

//************** */ falsy values ****************************

// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// ****************** truthy values ****************************

//true, "0" (zero in string is true), "false", ` `, [], {}, function(){}

if (userEmail.length === 0){   // to check array is empty or not
    console.log("Array is Empty")
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0){   // to check object is empty or not
    console.log("object is empty");
    
}

// Nullish coalescing Operator (??): null underfined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10 
val1 = undefined ?? null   // prints null

console.log(val1);


// terniary operator

// conditon ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");

