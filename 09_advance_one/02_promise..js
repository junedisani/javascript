const promiseOne = new Promise((resolve, reject) => {
    // do async task
    // Db calls, Cryptography, network
    setTimeout(function(){
        console.log("Async task is completed");
        resolve()      
    }, 1000)
})

promiseOne.then(()=> {
    console.log("promise consumed");
    
})

// ************************************************************


new Promise( (resolve, reject) => {
    setTimeout(()=>{
        console.log("Aysnc task 2");
        resolve()
    },1000)
}).then( ()=> {
    console.log("promise 2 consumed");
    
})

//********************************************************************* */

const promiseThree = new Promise( (resolve, reject) => {
    setTimeout( ()=>{
        resolve({username: "juned", age: 23});
    },1000)
}).then(function(user){
    console.log(user);
    
})

// **************************************************************************

const promiseFour = new Promise( (resolve, reject) => {
    let task = true
    if (task === true){
        resolve({username: "juned", Age: 23})
    }else {
        reject("ERROR: something went wrong")
    }
})

promiseFour.then( (user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch( (error) => {
    console.log(error);
}).finally(() => {
    console.log("finally the promise is either resolved or reject");    
})

//**************************************************************************** */

const promiseFive = new Promise(function (resolve, reject){
    setTimeout( () => {
        let task = true;
        if(task === true){
            resolve({username: "Javascript", password: "123"});
        }else{
            reject("ERROR: Something went wrong!!!")
        }
    },1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive();

// ******************************************

async function getAlluser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data =  await response.json()
        console.log(data);
        
    } catch (error) {
        console.log(`E: ${error}`)
    }
}
getAlluser();

//************************************************* */

fetch("https://api.github.com/users/hiteshchoudhary").
then( (response) => {
    return response.json()
}).
then( (data) => {
    console.log(data);
}).
catch( (error) => {
    console.log(error);
    
})