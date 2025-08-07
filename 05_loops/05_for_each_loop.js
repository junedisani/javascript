// for each

const coding = [ "js", "py", "java", "ruby"]

coding.forEach(function (val){
    console.log(val);
    
})

// ***********************************************************************

coding.forEach((val)=> {  // by ussing arrow function
    console.log(val);
    
})

// *********************************************************************

function printMe(item){
    console.log(item);
    
}

coding.forEach(printMe)

//************************************************************************** */


coding.forEach( (val,index, arr,) => {  // 1 gives value ,, 2 gives index, 3 gives arr
    console.log( val,index, arr);
    
})

// **************************************************************

const myCoding = [
    {
        languageName: "javascript",
        lanaguageFileName: "js",
    },
    {
        languageName: "java",
        lanaguageFileName: "java",
    },
    {
        languageName: "python",
        lanaguageFileName: "py",
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    console.log(item.lanaguageFileName);

})