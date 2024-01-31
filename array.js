const englishNames = ["prabesh", "ram", "shyam", "kiran"]
 let demoUsers= []
 for(let index = 0; index < englishNames.length; index++){
    let elements = englishNames[index]
    console.log(`${elements}-${index}`)
 }

  
/*call back function 
  - a function passed as an argument to another function
*/
const show = () =>{
    console.log("Show popup")
    return undefined
}
setTimeout(show,2000)
/* anyonomus function */
setTimeout(()=>{
    console.log("second popup");
},3000)

let numbers = ["prabesh","roshan","kishor"]
numbers.forEach((elements,index)=>{
console.log(elements,index)
})

// let number = [1,2,3,4,5]
// number.forEach((el,idx)=>{
// console.log("element",el,"index",idx)
//    finalSum += el
// })
// console.log({finalSum})

let to=[
    {
    title: "Html",
    status: "True"
   },
    {
    title: "react",
    status: "False"
   },
    {
    title: "js",
    status: "False"
   },
]
to.forEach((todo)=>{
    if(to.status){
        console.log(`${todo.title} is completed`)
    }else{
        console.log(`${todo.title} is pending`)

    }
})
