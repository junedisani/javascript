let a = 10
const b = 20
var c = 30

if (true) {
    let a = 60
    const b = 40
    var c = 100
    console.log("inner ",a, b, c);
    
}

console.log(a);
console.log(b);
console.log(c);


function one(){
    const username = "juned"

    function two(){
        const website = "youtube"
        console.log(username);
        console.log(website);
    }
    two()
}
one()


if(true){
    const username = "juned"
    if(true){
        const website = " facebook"
        console.log(username + website);
    }
    console.log(website);
}
console.log(username);

// *************************  interesting **********************************

addOne(4);
function addOne(num){
    value = num + 1;
    console.log(value);
    return;
}

addTwo(10); // here it will show error coz function is declare in variable and arugement is before var..
const addTwo = function(num){
    const value = num + 2;
    console.log(value);
    return;
}