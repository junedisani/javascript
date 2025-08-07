// for of loop
// used for arrays

const states = ["maharashtra", "Gujarat", "Goa","kerala"];

for (const sts of states) {
        // console.log(sts);
        
}

const greetings = "hello world"
for (const greet of greetings) {
    // console.log(greet);
}

//  Maps

const map = new Map();

map.set(`IN`, `India`)
map.set(`GR`, `Gremany`)
map.set(`JP`, `Japan`)
map.set(`IN`, `India`)

// console.log(map);

for (const [key, value] of map) {
    console.log(key , `:-`, value);
    
}
 // for of loops doesnt works on plain objects.