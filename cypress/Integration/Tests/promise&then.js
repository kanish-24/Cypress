// i am creating promise object
// iam creating 2 parameters resolve & reject

let promise = new Promise((resolve, reject) => {
    let a = 4; // some operation
    if(a==5){  // defining a condition
        resolve("Promise is achieved")
    }

    else{
        reject("Promise is rejected")
    }
})

promise.then((message)=>{  // promise resolved
    console.log(message)

}).catch((message)=>{   // catch is used to print the rejected message(promise rejected)
    console.log(message)
})