//  For In
// used for objects

const myObject = {
    name : "juned",
    age : 23,
    hobby : "cricket",
}

for (const key in myObject) {
    // console.log(`${key} :- ${myObject[key]}`);
}

const progamming = ["Python", "java", "ruby", "js"];

for (const key in progamming) {
    console.log(progamming[key]);
    
}