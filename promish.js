let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("name: prabesh, emali: prabeshmagar@gmail.com ")

    },2000)

    // resolve("its good ")
})
console.log(promise1);
promise1.then((response)=>{
 console.log("response", response)
}).catch(()=>{
    console.log("error in server", response)

})

