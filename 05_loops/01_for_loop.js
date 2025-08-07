// for 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5 ){
        // console.log("5 is the midde number");
    }
    // console.log(element);
    
}
// *************************************************************************
for (let i = 1; i <= 5; i++) {

    // console.log(`outter loop value${i}`);
    
    for (let j = 1; j <= 10; j++){
        
        // console.log(`inner loop value ${j} and outter loop value ${i}`);
        // console.log(i + `*`+ j + `=`+ i*j ); // to print the table
        
        
    }

}
// *************************************************************************


let myArr = ["superman", "batman", "spiderman"];

// console.log(myArr.length);
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
    
    
}

// ************************************************************************

// break and continue 

// for (let index = 1; index <= 20; index++){
//     if (index == 10){
//         console.log("10 is detected");
//         break;                                            // it stops the code
//     }
//     console.log(`value of index is ${index}`);
    
// }

for (let index = 1; index <= 20; index++){
    if (index == 10){
        console.log("10 is detected");
        continue;                                           // it continues the code
    }
    console.log(`value of index is ${index}`);
    
}