// Immediately Invoked Function Expression (IIFE)

(function addingNum(a,b){  // giving paranthesis in start for iife (named iife)
    a + b;
    console.log(a+b);
    return;
})(1234,7889); // this semi colan is imp to run there after func if semi colan is not there it show error.

((name) => {       // unname iife
    console.log(`hello, ${name}`)
})(`juned`);